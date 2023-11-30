from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import categorySerializer,raw_materialSerializer
from .models import category,raw_material
# Create your views here.

class CategoryList(APIView):
    def get(self,request):
        querysert = category.objects.all()
        serial = categorySerializer(querysert,many=True)
        return Response(serial.data)
    def post(self,request):
        serializer = categorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
class MaterialList(APIView):
    def get(self,request):
        querysert = raw_material.objects.all()
        serial = raw_materialSerializer(querysert,many=True)
        return Response(serial.data)
    def post(self,request):
        serializer = raw_materialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MaterialDetail(APIView):
    def get_object(self,pk):
        try:   
            return raw_material.objects.get(pk=pk)
        except raw_material.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = raw_materialSerializer(queryset ,context={'request': request})
        return Response(serializer.data)

    def put(self,request,pk, format=None):
        queryset = self.get_object(pk)
        serializer = raw_materialSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CategoryDetail(APIView):
    def get_object(self,pk):
        try:   
            return category.objects.get(pk=pk)
        except category.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = categorySerializer(queryset ,context={'request': request})
        return Response(serializer.data)

    def put(self,request,pk, format=None):
        queryset = self.get_object(pk)
        serializer = categorySerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CategoryUser(APIView):

    def get_object(self,user):
        try:   
            return category.objects.filter(user=user)
        except category.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = categorySerializer(queryset,many=True)
        return Response(serializer.data)
    
class MaterialUser(APIView):

    def get_object(self,user):
        try:   
            return raw_material.objects.filter(user=user)
        except raw_material.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = raw_materialSerializer(queryset,many=True)
        return Response(serializer.data)