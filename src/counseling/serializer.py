from .models import counseling 
from user.serializer import UserSerializer
from rest_framework import serializers
class CounselingSerializer(serializers.ModelSerializer):
    class Meta:
        model=counseling
        fields='__all__'
        
class CounselingUserSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    class Meta:
        model=counseling
        fields=['city','condition','date','id','job','topic','user']
        