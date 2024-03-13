from rest_framework.routers import DefaultRouter
from modelapi.views import GPT3PromptViewSet
from django.urls import include,path

router = DefaultRouter()
router.register(r'prompt', GPT3PromptViewSet, basename='prompt')

urlpatterns = [
    path('',include(router.urls))
]
