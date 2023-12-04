from article.models import article
from rest_framework import serializers

class articleSerializer(serializers.ModelSerializer):
    class Meta:
        model=article
        fields=['id','title','text','image','created','updated']

        
        


