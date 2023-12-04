from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import UserSerializer,LoginSerializer
from .models import user
# Create your views here.


class UserList(APIView):
    def get(self,request):
        querysert = user.objects.all()
        serial = UserSerializer(querysert,many=True)
        return Response(serial.data)
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserDetail(APIView):
    def get_object(self,pk):
        try:   
            return user.objects.get(pk=pk)
        except user.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = UserSerializer(queryset)
        return Response(serializer.data)
    # def get(self,request,user):
    #     queryset = user.objects.get(user=user)
    #     seriallizer = UserSerializer(queryset,many=True)
    #     return Response(seriallizer)
    def put(self,request,pk, format=None):
        queryset = self.get_object(pk2)
        serializer = articleSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UserUser(APIView):

    def get_object(self,user):
        try:   
            return user.objects.filter(user=user)
        except user.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = UserSerializer(queryset,many=True)
        return Response(serializer.data)
class UserLogin(APIView):

    def get_object(self,phone_number,password):
        try:   
            print('+98'+phone_number)
            return user.objects.filter(phone_number='+98'+phone_number,password=password)
        except user.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['phone'],params['password'])   
        serializer = LoginSerializer(queryset,many=True,context={'request': request})
        return Response(serializer.data)