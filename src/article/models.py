from django.db import models

class article(models.Model):
    title = models.CharField(max_length=30)
    text = models.TextField()
    image = models.ImageField(upload_to='media/home/')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
