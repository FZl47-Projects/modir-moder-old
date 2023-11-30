from django.db import models
from user.models import user
# Create your models here.
class story(models.Model):
    file = models.FileField(upload_to='home/story/', max_length=200)
    poseter = models.ImageField(upload_to='home/story/poster/', max_length=200)
    name = models.CharField(max_length=20)
    created = models.DateTimeField( auto_now_add=True)
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    