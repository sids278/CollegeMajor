from django.db import models
from user.models import CustomUser

class Prompt(models.Model):
    prompt_text = models.TextField()
    generated_text = models.TextField()
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="GeminiUser", null=True
    )

    def __str__(self):
        return self.prompt_text
