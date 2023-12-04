from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



from django import http
from django.shortcuts import render

from .serializer import CounselingSerializer,CounselingUserSerializer
from .models import counseling
# Create your views here.

class CounselingList(APIView):
    def get(self,request):
        querysert = counseling.objects.all()
        serial = CounselingUserSerializer(querysert,many=True)
        return Response(serial.data)
    def post(self,request):
        serializer = CounselingSerializer(data=request.data)
        if serializer.is_valid():
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CounselingDetail(APIView):
    def get_object(self,pk):
        try:   
            return counseling.objects.get(pk=pk)
        except counseling.DoesNotExist:
            raise http.Http404
    def get(self,request,pk):
        queryset=self.get_object(pk)   
        serializer = CounselingSerializer(queryset)
        return Response(serializer.data)
    # def get(self,request,user):
    #     queryset = counseling.objects.get(user=user)
    #     seriallizer = CounselingSerializer(queryset,many=True)
    #     return Response(seriallizer)
    def put(self,request,pk, format=None):
        queryset = self.get_object(pk2)
        serializer = articleSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class CounselingUser(APIView):

    def get_object(self,user):
        try:   
            return counseling.objects.filter(user=user)
        except counseling.DoesNotExist:
            raise http.Http404
    def get(self,request):
        params = request.GET
        
        queryset=self.get_object(params['id'])   
        serializer = CounselingSerializer(queryset,many=True)
        return Response(serializer.data)