from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from event.serializers import EventsSerializer
from event.models import Events
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class EventViewSet(ModelViewSet):
    serializer_class = EventsSerializer
    queryset         = Events.objects.all()
    permission_classes = [IsAuthenticated]
    