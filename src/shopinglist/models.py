from django.db import models
from user.models import user
# Create your models here.
class shopingList(models.Model):
    foodStuffs = models.CharField(max_length=40)
    quantity = models.FloatField()
    price = models.IntegerField(blank=True,null=True)
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    chioceStatus = (
        ('ch','checked'),
        ('no' ,'notChecked'),
    )
    status = models.CharField(max_length=3,choices=chioceStatus)
    date = models.DateTimeField(auto_now_add=True)
    factorImage = models.ImageField('home/factor/',blank=True,null=True)
    