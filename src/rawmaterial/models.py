from django.db import models
from user.models import user
class category(models.Model):
    name=models.CharField(max_length=50)
    user = models.ForeignKey(user,related_name='usreid', on_delete=models.CASCADE)
    
class raw_material(models.Model):
    name= models.CharField(max_length=50)
    category = models.ForeignKey(category,on_delete=models.CASCADE)
    value=models.BigIntegerField()
    price=models.BigIntegerField()
    user = models.ForeignKey(user,related_name='usre', on_delete=models.CASCADE)
    
    