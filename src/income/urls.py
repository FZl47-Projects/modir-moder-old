from django.urls import path
from .views import IncomeList,IncomeDetail,IncomeUser
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('all/',IncomeList.as_view()),   
path('GetId/<int:pk>/', IncomeDetail.as_view()),
path('GetId/', IncomeUser.as_view()),

]
