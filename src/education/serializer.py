from .models import education 
from rest_framework import serializers
class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model=education
        fields='__all__'