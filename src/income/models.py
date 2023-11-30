from django.db import models
from employee.models import employee

# Create your models here.
class income(models.Model):
    employee = models.ForeignKey(employee, on_delete=models.CASCADE)
    fixedSalary = models.IntegerField()
    overTime = models.BigIntegerField()
    reward = models.IntegerField()
    totalAmount = models.IntegerField()
    extra_expenses=models.IntegerField()
    Insurance=models.IntegerField()
    gift=models.IntegerField()