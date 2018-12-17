from django.conf.urls import url, include
from django.contrib import admin
from doc_viewer import views

urlpatterns = [
    url(r'^$', views.main_page, name='Main Page'),
]
