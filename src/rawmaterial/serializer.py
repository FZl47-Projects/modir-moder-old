from .models import raw_material,category 


from rest_framework import serializers



class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model=category
        fields='__all__'
        
class raw_materialSerializer(serializers.ModelSerializer):
    class Meta:
        model=raw_material
        fields='__all__'

      
      