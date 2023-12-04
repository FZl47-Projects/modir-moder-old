from django.shortcuts import render


from rest_framework.views import APIView
from rest_framework.response import Response

from django.views.decorators.csrf import csrf_protect 
from django.views.decorators.csrf import csrf_exempt


from rest_framework import status
from rest_framework.views import APIView

from .models import employee

from .seriallizers import employeeSerializer

from django import http

# Create your views here.
# employeeSerializer
class employeeList(APIView):
    def get(self,request):
        queryset = employee.objects.all()
        serializer = employeeSerializer(queryset, many=True)
        return Response(serializer.data)
   
    def post(self,request):
        serializer = employeeSerializer(data=request.data)
        if serializer.is_valid():
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class employeeDetail(APIView):
    def get_object(self,pk):
        try:   
            return employee.objects.get(pk=pk)
        except employee.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = employeeSerializer(queryset)
        return Response(serializer.data)

    def put(self,request,pk, format=None):
        queryset = self.get_object(pk)
        serializer = employeeSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class employeeUser(APIView):

    def get_object(self,user):
        try:   
            return employee.objects.filter(chief=user)
        except employee.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = employeeSerializer(queryset,many=True)
        return Response(serializer.data)