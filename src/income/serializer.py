from .models import income 
from employee.seriallizers import employeeSerializer
from rest_framework import serializers
class IncomeSerializer(serializers.ModelSerializer):
    employee=employeeSerializer()
    class Meta:
        model=income
        fields=['id','employee','fixedSalary','overTime','reward','totalAmount','extra_expenses','Insurance','gift']

            
            
class IncomePUTSerializer(serializers.ModelSerializer):

    class Meta:
        model=income
        fields='__all__'
  