from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from user.serializers import UserSerializer
from rest_framework.response import Response
from user.models import CustomUser
# Create your views here.
class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        # token = Token.objects.get(key=response.data["token"])
        return response


class RegisterUser(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {
                    "status": 403,
                    "error": serializer.errors,
                }
            )
        serializer.save()
        print('///')
        user = CustomUser.objects.get(sid=serializer.data["sid"])
        print(user)
        token_obj, _ = Token.objects.get_or_create(user=user)
        return Response({"status": 200, "token": str(token_obj)})