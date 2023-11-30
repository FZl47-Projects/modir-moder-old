from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import EducationSerializer
from .models import education
# Create your views here.

class EducationList(APIView):
    def get(self,request):
        querysert = education.objects.all()
        serial = EducationSerializer(querysert,many=True ,context={'request': request})
        return Response(serial.data)
    def post(self,request):
        serializer = EducationSerializer(data=request.data)
        if serializer.is_valid():
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EducationDetail(APIView):
    def get_object(self,pk):
        try:   
            return education.objects.get(pk=pk)
        except education.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = EducationSerializer(queryset,context={'request': request})
        return Response(serializer.data)
    # def get(self,request,user):
    #     queryset = education.objects.get(user=user)
    #     seriallizer = EducationSerializer(queryset,many=True)
    #     return Response(seriallizer)
    def put(self,request,pk, format=None):
        queryset = self.get_object(pk2)
        serializer = articleSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class EducationUser(APIView):

    def get_object(self,user):
        try:   
            return education.objects.filter(user=user)
        except education.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = EducationSerializer(queryset,many=True,context={'request': request})
        return Response(serializer.data)