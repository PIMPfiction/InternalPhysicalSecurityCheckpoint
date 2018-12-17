from django.conf.urls import url, include
from django.contrib import admin
from doc_viewer import views

urlpatterns = [
    url(r'^$', views.main_page, name='router'),
    #url(r'^logs/', views.main_page, name='Main'),
    #url(r'^path_view/', views.path_view, name='pathviewer'),
]
