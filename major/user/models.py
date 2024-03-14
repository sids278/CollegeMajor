from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    username = models.CharField(max_length=255)
    sid = models.CharField(max_length=20, unique=True)
    phone_number = models.CharField(max_length=15)
    branch = models.CharField(max_length=100)
    year = models.IntegerField(null=True,blank=True)
    hostel = models.CharField(max_length=100, blank=True, null=True)
    hostel_room_no = models.CharField(max_length=20, blank=True, null=True)

    USERNAME_FIELD = 'sid'
    REQUIRED_FIELDS = ['username','phone_number','branch','year']
    def __str__(self):
        return self.sid
