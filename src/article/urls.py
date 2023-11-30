from django.urls import path
from .views import ArticleDetail,ArticleList
 
from rest_framework.generics import ListCreateAPIView
from .models import article

from .seriallizers import articleSerializer
urlpatterns = [
path('all/',ArticleList.as_view() ,name='article-list'),   
path('all/<int:pk2>/', ArticleDetail.as_view(),name='article-detail'),
# path('all/<int:pk>/', ListCreateAPIView.as_view(queryset=article.objects.get(pk=1), serializer_class=articleSerializer)),
]
