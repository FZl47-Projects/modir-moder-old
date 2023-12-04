from django.urls import path
from .views import PakageList,PakageDetail
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('all/',PakageList.as_view()),   
path('GetId/<int:pk>/', PakageDetail.as_view()),


]
