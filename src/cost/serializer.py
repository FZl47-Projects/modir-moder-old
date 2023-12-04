from .models import cost 
from rest_framework import serializers
class CostSerializer(serializers.ModelSerializer):
    class Meta:
        model=cost
        fields='__all__'