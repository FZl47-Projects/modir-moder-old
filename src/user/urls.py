from django.urls import path
from .views import UserList,UserDetail,UserUser,UserLogin
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('Login/',UserLogin.as_view()),
path('all/',UserList.as_view()),   
path('GetId/<int:pk>/', UserDetail.as_view()),
path('GetId/', UserUser.as_view()),


]
