"""
URL configuration for projeto project.

The `urlpatterns` list routes URLs to views. For more information g/', include('blog.urls'please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blo))
"""
from django.contrib import admin
from django.urls import path
from django.http import HttpResponse

def home_view(request):
    return HttpResponse('qualquer coissa ')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home_view)
]
