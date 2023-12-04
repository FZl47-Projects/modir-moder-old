from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import ShopingListSerializer
from .models import shopingList
# Create your views here.

class ShopingListList(APIView):
    def get(self,request):
        querysert = shopingList.objects.all()
        serial = ShopingListSerializer(querysert,many=True ,context={'request': request})
        return Response(serial.data)
    def post(self,request):
        serializer = ShopingListSerializer(data=request.data)
        if serializer.is_valid():
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ShopingListDetail(APIView):
    def get_object(self,pk):
        try:   
            return shopingList.objects.get(pk=pk)
        except shopingList.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = ShopingListSerializer(queryset ,context={'request': request})
        return Response(serializer.data)
    # def get(self,request,user):
    #     queryset = shopingList.objects.get(user=user)
    #     seriallizer = ShopingListSerializer(queryset,many=True)
    #     return Response(seriallizer)
    def put(self,request,pk, format=None):
        queryset = self.get_object(pk2)
        serializer = ShopingListSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ShopingListUser(APIView):

    def get_object(self,user):
        try:   
            return shopingList.objects.filter(user=user)
        except shopingList.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = ShopingListSerializer(queryset,many=True,context={'request': request}) 
        return Response(serializer.data)