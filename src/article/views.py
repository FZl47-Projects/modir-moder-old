

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import article

from .seriallizers import articleSerializer

from django import http

class ArticleList(APIView):
    def get(self,request):
        queryset = article.objects.all()
        serializer = articleSerializer(queryset, many=True ,context={'request': request})
        return Response(serializer.data)
    
    def post(self,request):
        serializer = articleSerializer(data=request.data)
        if serializer.is_valid():
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ArticleDetail(APIView):
  
    def get_object(self, pk):
        try:
            return article.objects.get(pk=pk)
        except article.DoesNotExist:
            raise http.Http404
    def get(self,request,pk2):
        queryset=self.get_object(pk2)   
        serializer = articleSerializer(queryset,context={"request":request})
        return Response(serializer.data)
    def put(self, request, pk2, format=None):
        queryset = self.get_object(pk2)
        serializer = articleSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk2, format=None):
        snippet = self.get_object(pk2)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
    
