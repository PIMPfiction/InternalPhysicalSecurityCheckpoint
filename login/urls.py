from django.conf.urls import url, include
from django.contrib import admin
from .views import *
urlpatterns = [

    url(r'^register/', register),
    url(r'^login/$', views.login_page, name='login'),
    url(r'^logout/$', views.logout, name='logout'),

]
