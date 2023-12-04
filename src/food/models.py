from django.db import models
from user.models import user
from rawmaterial.models import raw_material


class category(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(user, on_delete=models.CASCADE)


class food(models.Model):
    name = models.CharField(max_length=20)
    image = models.ImageField('home/food/', null=True, default='test.png')
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    NumberSold = models.IntegerField()
    resepi = models.TextField(null=True)
    category = models.ForeignKey(category, on_delete=models.CASCADE)
    price_offered = models.IntegerField(null=True)
    updated = models.DateField(null=True)


class percentages(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    FactorcCoefficient = models.FloatField()
    productionOrService = models.FloatField()


class material(models.Model):
    materialRaw = models.ForeignKey(raw_material, on_delete=models.CASCADE)
    food = models.ForeignKey(food, on_delete=models.CASCADE)
    value = models.FloatField()


class PreparationsCategory(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(user, on_delete=models.CASCADE)


class PreparationsFood(models.Model):
    name = models.CharField(max_length=20)
    image = models.ImageField('home/food/', null=True, default='test.png')
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    NumberSold = models.IntegerField()
    resepi = models.TextField(null=True)
    #category = models.ForeignKey(category, on_delete=models.CASCADE)
    category = models.ForeignKey(PreparationsCategory, on_delete=models.CASCADE,null=True,blank=True)
    price_offered = models.IntegerField(null=True)
    updated = models.DateField(auto_now=True,null=True)


class PreparationsMaterial(models.Model):
    materialRaw = models.ForeignKey(raw_material, on_delete=models.CASCADE)
    food = models.ForeignKey(PreparationsFood, on_delete=models.CASCADE)
    value = models.FloatField()
