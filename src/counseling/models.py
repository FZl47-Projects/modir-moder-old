from django.db import models
from user.models import user
# Create your models here.
class counseling(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    date = models.DateField(auto_created=True)
    Choice = (
        ('ph', 'byphone'),
        ('ip', 'inperson'),
    
    )

    condition = models.CharField(max_length=3 ,choices=Choice)
    topic = models.CharField(max_length=20)
    job = models.CharField(max_length=10)
    city = models.CharField(max_length=10,null=True)
    