from django.db import models
from user.models import user 
# Create your models here.
class employee(models.Model):
    name = models.CharField(max_length=25)
    chief = models.ForeignKey(user, on_delete=models.CASCADE)
    job = models.CharField(max_length=20)
    