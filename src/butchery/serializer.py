from .models import butchery 
from rest_framework import serializers
class ButcherySerializer(serializers.ModelSerializer):
    class Meta:
        model=butchery
        fields='__all__'