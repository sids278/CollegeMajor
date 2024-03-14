from rest_framework.routers import DefaultRouter
from event.views import EventViewSet
from django.urls import include,path

router = DefaultRouter()
router.register(r'event', EventViewSet, basename='event')

urlpatterns = [
    path('',include(router.urls))
]
