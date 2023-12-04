from django.contrib import admin

from .models import food,material,category,percentages,PreparationsCategory,PreparationsFood,PreparationsMaterial
# Register your models here.
admin.site.register(category)
admin.site.register(food)
admin.site.register(material)
admin.site.register(percentages)
admin.site.register(PreparationsCategory)
admin.site.register(PreparationsFood)
admin.site.register(PreparationsMaterial)