from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import pakageSerializer
from .models import pakage
# Create your views here.

class PakageList(APIView):
    def get(self,request):
        querysert = pakage.objects.all()
        serial = pakageSerializer(querysert,many=True)
        return Response(serial.data)
    def post(self,request):
        serializer = pakageSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class PakageDetail(APIView):
    def get_object(self,pk):
        try:   
            return pakage.objects.get(pk=pk)
        except pakage.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = pakageSerializer(queryset)
        return Response(serializer.data)
    def put(self,request,pk, format=None):
        queryset = self.get_object(pk2)
        serializer = pakageSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# class PakageUser(APIView):

#     def get_object(self,user):
#         try:   
#             return pakage.objects.filter(user=user)
#         except pakage.DoesNotExist:
#             raise http.Http404
#     def get(self,request):
#         params = request.GET
        
#         queryset=self.get_object(params['id'])   
#         serializer = pakageSerializer(queryset,many=True)
#         return Response(serializer.data)