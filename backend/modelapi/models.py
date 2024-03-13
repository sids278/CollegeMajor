from django.db import models

class Prompt(models.Model):
    prompt_text = models.TextField()
    generated_text = models.TextField()

    def __str__(self):
        return self.prompt_text
