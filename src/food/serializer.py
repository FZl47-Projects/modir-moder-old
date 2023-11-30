from .models import food, material, category, percentages, PreparationsCategory, PreparationsFood, PreparationsMaterial
from rawmaterial.serializer import raw_materialSerializer
from rest_framework import serializers


class FoodSerializer(serializers.ModelSerializer):

    class Meta:
        model = food
        fields = '__all__'


class MaterialSerializer(serializers.ModelSerializer):
    materialRaw = raw_materialSerializer()

    class Meta:
        model = material
        fields = ['id', 'value', 'materialRaw', 'food']


class MaterialPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = material
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = category
        fields = '__all__'


class PercentagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = percentages
        fields = '__all__'


class PreparationsFoodSerializer(serializers.ModelSerializer):

    class Meta:
        model = PreparationsFood
        fields = '__all__'


class PreparationsMaterialSerializer(serializers.ModelSerializer):
    materialRaw = raw_materialSerializer()

    class Meta:
        model = PreparationsMaterial
        fields = ['id', 'value', 'materialRaw', 'food']


class PreparationsMaterialPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = PreparationsMaterial
        fields = '__all__'


class PreparationsCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = PreparationsCategory
        fields = '__all__'
