from .models import ticket 
from user.serializer import UserSerializer

from rest_framework import serializers

class TicketSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    class Meta:
        model=ticket
        
        fields=['id','message','status','created','answerdTime','user']
      
class PostTicketSerializer(serializers.ModelSerializer):

    class Meta:
        model=ticket
        fields='__all__'
      
      
      