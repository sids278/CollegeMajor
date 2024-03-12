from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from modelapi.serializers import PromptSerializer
from modelapi.models import Prompt
import requests
import os
from dotenv import load_dotenv

load_dotenv()  


class GPT3PromptViewSet(ModelViewSet):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer

    def create(self, request, *args, **kwargs):
        # Get the prompt data from the request
        prompt_data = request.data.get("prompt")
        # Replace 'YOUR_OPENAI_API_KEY' with your actual GPT-3.5 Turbo API key
        api_key = os.getenv("OPENAI_API_KEY")
        print(api_key)
        # GPT-3.5 Turbo API endpoint
        api_endpoint = 'https://api.openai.com/v1/chat/completions'

        # Prepare headers with the API key
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}',
        }

        # Prepare the data for the GPT-3.5 Turbo API request
        data = {
            'model': 'gpt-3.5-turbo',
            "messages": [{"role": "system", "content": prompt_data}],
            "temperature": 0.7
            # 'max_tokens': 150,  # Adjust as needed
        }

        # Make the request to GPT-3.5 Turbo API
        try:
            response = requests.post(api_endpoint, json=data, headers=headers)
            response.raise_for_status()
            gpt3_response = response.json()

            # Parse the response and extract the generated text
            generated_text = gpt3_response['choices'][0]['message']

            # Create a new instance of the Prompt model with the prompt and generated text
            prompt_instance = Prompt(prompt_text=prompt_data, generated_text=generated_text)
            prompt_instance.save()

            # Serialize the prompt instance for the response
            serializer = self.get_serializer(prompt_instance)
            headers = self.get_success_headers(serializer.data)

            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

        except requests.exceptions.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
