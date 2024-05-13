from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from modelapi.serializers import PromptSerializer
from modelapi.models import Prompt
import os
from dotenv import load_dotenv
import google.generativeai as genai
from django.core.mail import send_mail
from django.conf import settings

load_dotenv()
gemini_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=gemini_key)

class AskQuestionViewSet(ModelViewSet):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer
    permission_classes = [IsAuthenticated]  # Only authenticated users can access

    def create(self, request, *args, **kwargs):
        # Get the question text from the request
        question = request.data.get("text")
        issue_type = request.data.get("issue_type")

        if not question:
            return JsonResponse({'error': 'Missing question text'}, status=status.HTTP_400_BAD_REQUEST)
        # Retrieve authenticated user from request object
        user = self.get_user(request)
        if not user:
            return JsonResponse({'error': 'Unauthorized access'}, status=status.HTTP_401_UNAUTHORIZED)

        # Initialize generative model and start chat
        model = genai.GenerativeModel("gemini-pro")
        chat = model.start_chat()

        # Send question and get response
        response = chat.send_message(question+"Analyze the state of the person, keep it upto 100 words only")

        # Create a new ChatBot instance
        generated_text = response.text
        chat_instance = Prompt(prompt_text=question, generated_text=response.text, user=user)
        chat_instance.save()

        # Serialize the ChatBot instance for the response
        serializer = self.get_serializer(chat_instance)
        subject = f"Issue Type - {issue_type}"
        message = f"Description - {question}\n\nAnalysis - {generated_text}\n\nSincerely,\nStudent's help app"
        from_email = settings.EMAIL_HOST_USER
        recipient_list = ["tanishjain135790@gmail.com"]
        send_mail(subject, message, from_email,recipient_list)
        return JsonResponse({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def get_user(self, request):
        # Assuming you're using TokenAuthentication
        from rest_framework.authentication import TokenAuthentication
        auth = TokenAuthentication()
        user, _ = auth.authenticate(request)
        return user
    
    def list(self, request, *args, **kwargs):
        # Filter prompts based on authenticated user (optional)
        user = self.get_user(request)
        if user:
            prompts = self.get_queryset().filter(user=user)
        else:
            return JsonResponse({'error': 'Unauthorized access'}, status=status.HTTP_401_UNAUTHORIZED)

        # Serialize the prompts for the response
        serializer = self.get_serializer(prompts, many=True)
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)