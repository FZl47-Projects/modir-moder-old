from django.urls import path
from .views import TicketList,TicketDetail,TicketUser
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('all/',TicketList.as_view()),   
path('GetId/<int:pk>/', TicketDetail.as_view()),
path('GetId/', TicketUser.as_view()),

]
