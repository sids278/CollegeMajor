from rest_framework.routers import DefaultRouter
from modelapi.views import AskQuestionViewSet
from django.urls import include,path

router = DefaultRouter()
router.register(r'prompt', AskQuestionViewSet, basename='prompt')

urlpatterns = [
    path('',include(router.urls))
]
