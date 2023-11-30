from django.contrib import admin

from .models import ticket,ticketReply
# Register your models here.

@admin.register(ticket)    
class Ticket(admin.ModelAdmin):
    list_display=['message','created','user','status']
    search_fields=['user']
@admin.register(ticketReply)
class TicketReply(admin.ModelAdmin):
    list_display=['message','created','message']
    search_fields=['message']   
    
    
    
   