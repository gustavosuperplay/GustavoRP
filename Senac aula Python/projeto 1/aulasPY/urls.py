from django.urls import path
from aulasPY import views as views_aulasPY

urlapatterns = [
    path('', views_aulasPY.nomedafuncaoview, name='view1'),
   
]