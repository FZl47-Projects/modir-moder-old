from django.db import models
from user.models import user
# Create your models here.
class education(models.Model):
    file = models.FileField(upload_to='educations/')
    poster = models.ImageField(upload_to='educations/poster/')
    
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    