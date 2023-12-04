from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response


from django import http
from django.shortcuts import render

from .serializer import FoodSerializer, MaterialSerializer, CategorySerializer, MaterialPostSerializer, PercentagesSerializer, PreparationsCategorySerializer, PreparationsMaterialPostSerializer, PreparationsMaterialSerializer, PreparationsFoodSerializer, PreparationsFoodSerializer, PreparationsMaterialSerializer, PreparationsMaterialPostSerializer
from .models import food, material, category, percentages, PreparationsCategory, PreparationsFood, PreparationsMaterial
# Create your views here.


class FoodList(APIView):
    def get(self, request):
        querysert = food.objects.all()
        serial = FoodSerializer(querysert, many=True,
                                context={'request': request})
        return Response(serial.data)

    def post(self, request):
        serializer = FoodSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MaterialsList(APIView):
    def get(self, request):
        querysert = material.objects.all()
        serial = MaterialSerializer(
            querysert, many=True, context={'request': request})
        return Response(serial.data)

    def post(self, request):
        serializer = MaterialPostSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PercentagesList(APIView):
    def get(self, request):
        querysert = percentages.objects.all()
        serial = PercentagesSerializer(
            querysert, many=True, context={'request': request})
        return Response(serial.data)

    def post(self, request):
        serializer = PercentagesSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryList(APIView):
    def get(self, request):
        querysert = category.objects.all()
        serial = CategorySerializer(querysert, many=True)
        return Response(serial.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PreparationsCategoryList(APIView):
    def get(self, request):
        querysert = PreparationsCategory.objects.all()
        serial = PreparationsCategorySerializer(querysert, many=True)
        return Response(serial.data)

    def post(self, request):
        serializer = PreparationsCategorySerializer(data=request.data)
        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PreparationsFoodList(APIView):
    def get(self, request):
        querysert = PreparationsFood.objects.all()
        serial = PreparationsFoodSerializer(
            querysert, many=True, context={'request': request})
        return Response(serial.data)

    def post(self, request):
        
        serializer = PreparationsFoodSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PreparationsMaterialsList(APIView):
    def get(self, request):
        querysert = PreparationsMaterial.objects.all()
        serial = PreparationsMaterialSerializer(
            querysert, many=True, context={'request': request})
        return Response(serial.data)

    def post(self, request):
        serializer = PreparationsMaterialPostSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FoodDetail(APIView):
    def get_object(self, pk):
        try:
            return food.objects.get(pk=pk)
        except food.DoesNotExist:
            raise http.Http404

    def get_object_delete(self, pk):
        try:
            return food.objects.filter(pk=pk)
        except food.DoesNotExist:
            raise http.Http404

    def get(self, request, pk):
        queryset = self.get_object(pk)
        serializer = FoodSerializer(queryset, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        queryset = self.get_object(pk)
        serializer = FoodSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object_delete(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class MaterialsDetail(APIView):
    def get_object(self, pk):
        try:
            return material.objects.filter(food=pk)
        except material.DoesNotExist:
            raise http.Http404

    def get_object_delete(self, pk):
        try:
            return material.objects.filter(pk=pk)
        except material.DoesNotExist:
            raise http.Http404

    def get(self, request, pk):
        queryset = self.get_object(pk)
        serializer = MaterialSerializer(
            queryset, many=True, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        queryset = self.get_object(pk)
        serializer = MaterialSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object_delete(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PercentagesDetail(APIView):
    def get_object(self, pk):
        try:
            return percentages.objects.get(pk=pk)
        except percentages.DoesNotExist:
            raise http.Http404

    def get(self, request, pk):
        queryset = self.get_object(pk)
        serializer = PercentagesSerializer(
            queryset, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        queryset = self.get_object(pk)
        serializer = PercentagesSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryDetail(APIView):
    def get_object(self, pk):
        try:
            return category.objects.filter(food=pk)
        except category.DoesNotExist:
            raise http.Http404

    def get_object_delete(self, pk):
        try:
            return category.objects.filter(pk=pk)
        except category.DoesNotExist:
            raise http.Http404

    def get(self, request, pk):
        queryset = self.get_object(pk)
        serializer = CategorySerializer(
            queryset, many=True, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        queryset = self.get_object(pk2)
        serializer = CategorySerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object_delete(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PreparationsCategoryDetail(APIView):
    def get_object(self, pk):
        try:
            return PreparationsCategory.objects.filter(pk=pk)
        except PreparationsCategory.DoesNotExist:
            raise http.Http404

    def get(self, request, pk):
        queryset = self.get_object(pk)
        serializer = PreparationsCategorySerializer(queryset, many=True)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PreparationsFoodDetail(APIView):
    def get_object(self, pk):
        try:
            return PreparationsFood.objects.get(pk=pk)
        except PreparationsFood.DoesNotExist:
            raise http.Http404

    def get_object_delete(self, pk):
        try:
            return PreparationsFood.objects.filter(pk=pk)
        except PreparationsFood.DoesNotExist:
            raise http.Http404

    def get(self, request, pk):
        queryset = self.get_object(pk)
        serializer = PreparationsFoodSerializer(
            queryset, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        queryset = self.get_object(pk)
        serializer = PreparationsFoodSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object_delete(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PreparationsMaterialsDetail(APIView):
    def get_object(self, pk):
        try:
            return PreparationsMaterial.objects.filter(food=pk)
        except PreparationsMaterial.DoesNotExist:
            raise http.Http404

    def get_object_delete(self, pk):
        try:
            return PreparationsMaterial.objects.filter(pk=pk)
        except PreparationsMaterial.DoesNotExist:
            raise http.Http404

    def get(self, request, pk):
        queryset = self.get_object(pk)
        serializer = PreparationsMaterialSerializer(
            queryset, many=True, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        queryset = self.get_object(pk)
        serializer = PreparationsMaterialSerializer(
            queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object_delete(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class FoodUser(APIView):

    def get_object(self, user):
        try:
            return food.objects.filter(user=user)
        except food.DoesNotExist:
            raise http.Http404

    def get(self, request):
        params = request.GET

        queryset = self.get_object(params['id'])
        serializer = FoodSerializer(
            queryset, many=True, context={'request': request})
        return Response(serializer.data)


class CategoryUser(APIView):

    def get_object(self, user):
        try:
            return category.objects.filter(user=user)
        except category.DoesNotExist:
            raise http.Http404

    def get(self, request):
        params = request.GET

        queryset = self.get_object(params['id'])
        serializer = CategorySerializer(
            queryset, many=True, context={'request': request})
        return Response(serializer.data)


class PercentagesUser(APIView):

    def get_object(self, user):
        try:
            return percentages.objects.filter(user=user)
        except percentages.DoesNotExist:
            raise http.Http404

    def get(self, request):
        params = request.GET

        queryset = self.get_object(params['id'])
        serializer = PercentagesSerializer(
            queryset, many=True, context={'request': request})
        return Response(serializer.data)


class PreparationsCategoryUser(APIView):

    def get_object(self, user):
        try:
            return PreparationsCategory.objects.filter(user=user)
        except PreparationsCategory.DoesNotExist:
            raise http.Http404

    def get(self, request):
        params = request.GET

        queryset = self.get_object(params['id'])
        serializer = PreparationsCategorySerializer(
            queryset, many=True, context={'request': request})
        return Response(serializer.data)


class PreparationsFoodUser(APIView):

    def get_object(self, user):
        try:
            return PreparationsFood.objects.filter(user=user)
        except PreparationsFood.DoesNotExist:
            raise http.Http404

    def get(self, request):
        params = request.GET

        queryset = self.get_object(params['id'])
        serializer = PreparationsFoodSerializer(
            queryset, many=True, context={'request': request})
        return Response(serializer.data)
