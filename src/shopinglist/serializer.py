from .models import shopingList 
from rest_framework import serializers
class ShopingListSerializer(serializers.ModelSerializer):
    class Meta:
        model=shopingList
        fields='__all__'