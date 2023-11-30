from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import ButcherySerializer
from .models import butchery
# Create your views here.

class ButcheryList(APIView):
    def post(self,request):
        serializer = ButcherySerializer(data=request.data)
        if serializer.is_valid():
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ButcheryDetail(APIView):
    def get_object(self,pk):
        try:   
            return butchery.objects.get(material=pk)
        except butchery.DoesNotExist:
            raise http.Http404
    def get_objectPatch(self,pk):
        try:   
            return butchery.objects.get(pk=pk)
        except butchery.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = ButcherySerializer(queryset)
        return Response(serializer.data)
    def put(self,request,pk, format=None):
        queryset = self.get_objectPatch(pk)
        serializer = ButcherySerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
