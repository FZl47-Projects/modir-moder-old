from .models import employee
from income.models import income
from rest_framework import serializers

class employeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=employee
        fields='__all__'
      
        
        
        


