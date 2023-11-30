
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from django.urls import re_path

urlpatterns = [
    path('admin-dj/', admin.site.urls),
    path('article/',include('article.urls')),
    path('employee/',include('employee.urls')),
    path('cost/',include('cost.urls')),
    path('counseling/',include('counseling.urls')),
    path('education/',include('education.urls')),
    path('food/',include('food.urls')),
    path('income/',include('income.urls')),
    path('shopinglist/',include('shopinglist.urls')),
    path('story/',include('story.urls')),
    path('ticket/',include('ticket.urls')),
    path('user/',include('user.urls')),
    path('rawmaterial/',include('rawmaterial.urls')),
    path('subscription/',include('subscription.urls')),
    path('butchery/',include('butchery.urls')),
    
]

#urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#urlpatterns +=static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


urlpatterns += [
    re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT})
]
