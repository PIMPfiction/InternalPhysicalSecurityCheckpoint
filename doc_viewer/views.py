from django.http import HttpResponse, Http404, HttpResponseRedirect, FileResponse
from django.template import Context, loader
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.models import User
from django.contrib.auth import logout, views, login
from django.contrib.auth.decorators import *
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from doc_viewer.models import *
import requests, os
# Create your views here.



@login_required
def main_page(request):
    get_param = request.GET.get('id','') #if get request includes id parameter return Single Document object
    if get_param:
       # doc = Documents.objects.raw('SELECT * FROM doc_viewer_documents WHERE id = %s' % get_param)
        doc = Documents.objects.filter(id=get_param)
        context = {"logs":doc}
        return render(request, 'doc_viewer/log.html', context)
    # if get request does not includes id parameter return list of Document objects.
    context = {"operations":Documents.objects.raw('SELECT * FROM doc_viewer_documents')}
    return render(request, 'doc_viewer/css_table.html', context)


def finger_login(request):
    get_param = request.GET.get('user','')
    if get_param:
        user = User.objects.get(username=get_param)
        auth_request = requests.get("http://"+settings.RASP_URL+"/auth")
        if auth_request.status_code == 200:
            if auth_request.content == user.username:
                    user.backend = 'django.contrib.auth.backends.ModelBackend'
                    login(request, user)
                    return redirect("/")
        elif auth_request.status_code == 404:
            return render(request, 'doc_viewer/500_notmatch.html')
        elif auth_request.status_code == 400:
            return render(request, 'doc_viewer/404_time.html')
    return render(request, 'doc_viewer/finger_login.html')
