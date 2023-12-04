from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from django import forms
# Create your models here.
class user(models.Model):
    name = models.CharField(max_length=25)
    city = models.CharField(max_length=40)
    restaurantName=models.CharField(max_length=40)
    phone_number = PhoneNumberField(blank=True,region="IR",unique=True)
    password = models.CharField(max_length=50)
    def __str__(self):
        return self.name
    
    
