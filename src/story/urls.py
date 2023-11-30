# CategoryList
from django.urls import path
from .views import StoryList
 
from rest_framework.generics import ListCreateAPIView

urlpatterns = [
path('all/',StoryList.as_view()),   
# path('GetId/<int:pk>/', TicketDetail.as_view()),
# path('GetId/', TicketUser.as_view()),

]
