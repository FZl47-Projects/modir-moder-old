from django.urls import path
from .views import employeeList,employeeDetail,employeeUser
 



from .seriallizers import employeeSerializer
urlpatterns = [
path('all/',employeeList.as_view()),   
path('GetId/<int:pk>/', employeeDetail.as_view()),
path('Get/',employeeUser.as_view()),
# path('all/<int:pk>/', ListCreateAPIView.as_view(queryset=article.objects.get(pk=1), serializer_class=articleSerializer)),
]
