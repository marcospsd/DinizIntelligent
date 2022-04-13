from re import template
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from users.views import CustomAuthToken, CreateUserView, ChangePasswordView
from rest_framework.routers import SimpleRouter


routeruser = SimpleRouter()
routeruser.register('', CreateUserView)


urlpatterns = [
    path('', CustomAuthToken.as_view()),
    path('alterar/<int:pk>/', ChangePasswordView.as_view()),
    
]