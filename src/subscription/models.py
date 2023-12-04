from django.db import models
from user.models import user
class pakage(models.Model):
    name=models.CharField(max_length=20)
    description = models.TextField()
    price = models.BigIntegerField()
    discount = models.IntegerField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
class buy(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    pakage = models.ForeignKey(pakage, on_delete=models.CASCADE)
    time=models.IntegerField()
    created = models.DateField(auto_now_add=True)