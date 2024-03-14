from rest_framework import serializers
from user.models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username','sid','phone_number','branch','year']

    def create(self, validated_data):
        user = CustomUser.objects.create(sid=validated_data['sid'])
        user.set_password(validated_data['sid'])
        user.save()
        return user