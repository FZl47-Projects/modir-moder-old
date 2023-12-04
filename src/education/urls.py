from django.urls import path
from .views import EducationList,EducationDetail,EducationUser
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('all/',EducationList.as_view()),   
path('GetId/<int:pk>/', EducationDetail.as_view()),
path('GetId/', EducationUser.as_view()),

]
