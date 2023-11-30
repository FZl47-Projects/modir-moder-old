from django.contrib import admin
from .models import story

# Register your models here.
@admin.register(story)    
class story(admin.ModelAdmin):
    list_display=['name']
    search_fields=['image']