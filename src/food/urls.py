from django.urls import path
from .views import FoodList, MaterialsList, FoodDetail, FoodUser, MaterialsDetail, CategoryUser, CategoryList, CategoryDetail, PercentagesDetail, PercentagesList, PercentagesUser, PreparationsCategoryList, PreparationsCategoryDetail, PreparationsCategoryUser, PreparationsFoodList, PreparationsFoodDetail, PreparationsFoodUser, PreparationsMaterialsList, PreparationsMaterialsDetail

from rest_framework.generics import ListCreateAPIView

urlpatterns = [
    path('all/', FoodList.as_view()),
    path('all/material/', MaterialsList.as_view()),
    path('GetId/<int:pk>/', FoodDetail.as_view()),
    path('GetFood/<int:pk>/', MaterialsDetail.as_view()),
    path('GetId/', FoodUser.as_view()),
    path('category/', CategoryUser.as_view()),
    path('category/Post/', CategoryList.as_view()),
    path('category/delete/<int:pk>/', CategoryDetail.as_view()),

    path('percentages/', PercentagesUser.as_view()),
    path('percentages/all/', PercentagesList.as_view()),
    path('percentages/<int:pk>/', PercentagesDetail.as_view()),

    path('Preparations/category/all/', PreparationsCategoryList.as_view()),
    path('Preparations/category/<int:pk>/',
         PreparationsCategoryDetail.as_view()),
    path('Preparations/category/', PreparationsCategoryUser.as_view()),

    path('Preparations/food/all/', PreparationsFoodList.as_view()),
    path('Preparations/food/<int:pk>/', PreparationsFoodDetail.as_view()),
    path('Preparations/food/', PreparationsFoodUser.as_view()),

    path('Preparations/material/all/', PreparationsMaterialsList.as_view()),
    path('Preparations/material/<int:pk>/',
         PreparationsMaterialsDetail.as_view()),



]
