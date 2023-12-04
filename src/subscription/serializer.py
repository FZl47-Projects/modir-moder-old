from .models import  pakage,buy


from rest_framework import serializers



class pakageSerializer(serializers.ModelSerializer):
    class Meta:
        model=pakage
        fields='__all__'
        
class buySerializer(serializers.ModelSerializer):
    class Meta:
        model=buy
        fields='__all__'
      
      
      