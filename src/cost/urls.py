from django.urls import path
from .views import CostDetail,CostList,CostUser
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('all/',CostList.as_view()),   
path('GetId/<int:pk>/', CostDetail.as_view()),
path('GetId/', CostUser.as_view()),

]
