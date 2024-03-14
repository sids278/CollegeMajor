from django.contrib import admin
from django.urls import include, path
from user.views import CustomObtainAuthToken,RegisterUser
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('modelapi.urls')),
    path('api/',include('event.urls')),
    path('register/',RegisterUser.as_view(),name='register'),   
    path('login/',CustomObtainAuthToken.as_view(),name='api_token_auth'),
]
