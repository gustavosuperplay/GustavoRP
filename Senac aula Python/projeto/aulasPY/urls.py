from django.urls import path
from aulasPY import views as views_aulasPY

urlpatterns = [
    path('', views_aulasPY.nomedafuncaoview, name='view1'),
   
]