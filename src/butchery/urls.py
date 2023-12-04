from django.urls import path
from .views import ButcheryDetail,ButcheryList
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('all/',ButcheryList.as_view()),   
path('GetId/<int:pk>/', ButcheryDetail.as_view()),
]
