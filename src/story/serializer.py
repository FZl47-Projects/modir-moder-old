from .models import story

from rest_framework import serializers

class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model=story
        fields='__all__'