# myapp/serializers.py
from rest_framework import serializers
from event.models import Events

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'
