from django.urls import path
from .views import CounselingList,CounselingDetail,CounselingUser
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('all/',CounselingList.as_view()),   
path('GetId/<int:pk>/', CounselingDetail.as_view()),
path('GetId/', CounselingUser.as_view()),

]
