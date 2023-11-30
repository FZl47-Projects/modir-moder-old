from django.db import models
from rawmaterial.models import raw_material
# Create your models here.
class butchery(models.Model):
    useless=models.FloatField()
    used = models.CharField(max_length=50)
    weight = models.FloatField()
    usable = models.FloatField()
    cooking_loss = models.FloatField()
    material = models.ForeignKey(raw_material, on_delete=models.CASCADE)
    totalprice = models.BigIntegerField()
    created = models.DateTimeField(auto_now_add=True)
    raw_press=models.FloatField()
    cooked_press=models.FloatField()