from django.db import models

# Create your models here.

class Events(models.Model):
    title       = models.TextField(max_length=255)
    description = models.TextField()
    datetime    = models.DateTimeField()

    def __str__(self) -> str:
        return self.title