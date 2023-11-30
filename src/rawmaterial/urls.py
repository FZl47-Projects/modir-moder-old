# CategoryList
from django.urls import path
from .views import CategoryList,CategoryUser,MaterialList,MaterialUser,MaterialDetail,CategoryDetail
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('allCategory/',CategoryList.as_view()),   
path('allMaterial/',MaterialList.as_view()),   
path('GetId/<int:pk>/', MaterialDetail.as_view()),
path('CategoryGetId/<int:pk>/', CategoryDetail.as_view()),
path('GetmaterialId/', MaterialUser.as_view()),
path('GetId/', CategoryUser.as_view()),

]
