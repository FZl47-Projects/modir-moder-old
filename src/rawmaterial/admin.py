from django.contrib import admin
from .models import raw_material,category
# Register your models here.

@admin.register(raw_material)    
class raw_material(admin.ModelAdmin):
    list_display=['name','category','value']
    search_fields=['id']
@admin.register(category)    
class category(admin.ModelAdmin):
    list_display=['name']
    search_fields=['name']