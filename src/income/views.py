from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import IncomeSerializer,IncomePUTSerializer
from .models import income
# Create your views here.

class IncomeList(APIView):
    def get(self,request):
        querysert = income.objects.all()
        serial = IncomeSerializer(querysert,many=True)
        return Response(serial.data)
    def post(self,request):
        serializer = IncomePUTSerializer(data=request.data)
        if serializer.is_valid():
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class IncomeDetail(APIView):
    def get_object(self,pk):
        try:   
            return income.objects.get(pk=pk)
        except income.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = IncomePUTSerializer(queryset)
        return Response(serializer.data)
    # def get(self,request,user):
    #     queryset = income.objects.get(user=user)
    #     seriallizer = IncomeSerializer(queryset,many=True)
    #     return Response(seriallizer)
    def post(self,request,pk, format=None):
        queryset = self.get_object(pk)
        serializer = IncomePUTSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class IncomeUser(APIView):

    def get_object(self,user):
        try:   
            return income.objects.filter(employee=user)
        except income.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = IncomeSerializer(queryset,many=True)
        return Response(serializer.data)