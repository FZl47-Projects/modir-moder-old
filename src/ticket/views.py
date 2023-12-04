from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import TicketSerializer,PostTicketSerializer
from .models import ticket
# Create your views here.

class TicketList(APIView):
    def get(self,request):
        querysert = ticket.objects.all()
        serial = TicketSerializer(querysert,many=True)
        return Response(serial.data)
    def post(self,request):
        serializer = PostTicketSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class TicketDetail(APIView):
    def get_object(self,pk):
        try:   
            return ticket.objects.get(pk=pk)
        except ticket.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = TicketSerializer(queryset)
        return Response(serializer.data)
    # def get(self,request,user):
    #     queryset = ticket.objects.get(user=user)
    #     seriallizer = TicketSerializer(queryset,many=True)
    #     return Response(seriallizer)
    def put(self,request,pk, format=None):
        queryset = self.get_object(pk2)
        serializer = PostTicketSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class TicketUser(APIView):

    def get_object(self,user):
        try:   
            return ticket.objects.filter(user=user)
        except ticket.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = TicketSerializer(queryset,many=True)
        return Response(serializer.data)