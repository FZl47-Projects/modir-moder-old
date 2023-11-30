from django.db import models
from user.models import user
# Create your models here.
class cost(models.Model):
    Choice =(
        ('in' , 'income'),
        ('re' ,'rent'),
        ('bi','bill'),
        ('food','food'),
        ('dri','drink'),
        ('ca','cake'),
    )
  
       
    condition = models.CharField(max_length=5,choices=Choice)
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    price = models.IntegerField()
    date = models.DateTimeField()
    description = models.CharField(max_length=250)