from django.urls import path
from .views import ShopingListDetail,ShopingListList,ShopingListUser
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('all/',ShopingListList.as_view()),   
path('GetId/<int:pk>/', ShopingListDetail.as_view()),
path('GetId/', ShopingListUser.as_view()),

]
