from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import CostSerializer
from .models import cost
# Create your views here.

class CostList(APIView):
    def get(self,request):
        querysert = cost.objects.all()
        serial = CostSerializer(querysert,many=True)
        return Response(serial.data)
    def post(self,request):
        serializer = CostSerializer(data=request.data)
        if serializer.is_valid():
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CostDetail(APIView):
    def get_object(self,pk):
        try:   
            return cost.objects.get(pk=pk)
        except cost.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = CostSerializer(queryset)
        return Response(serializer.data)
    # def get(self,request,user):
    #     queryset = cost.objects.get(user=user)
    #     seriallizer = CostSerializer(queryset,many=True)
    #     return Response(seriallizer)
    def put(self,request,pk, format=None):
        queryset = self.get_object(pk2)
        serializer = articleSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class CostUser(APIView):

    def get_object(self,user):
        try:   
            return cost.objects.filter(user=user)
        except cost.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = CostSerializer(queryset,many=True)
        return Response(serializer.data)