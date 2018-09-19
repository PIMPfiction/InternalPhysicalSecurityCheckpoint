from django.http import HttpResponse, Http404, HttpResponseRedirect, FileResponse
from django.template import Context, loader
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.models import User
from django.contrib.auth import logout, views
from django.contrib.auth.decorators import *
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from doc_viewer.models import *
# Create your views here.
import os

def router(request):
    return render(request, 'doc_viewer/router.html', {})

def main_page(request):
    get_param = request.GET.get('id','') #if get request includes id parameter return Single Document object
    if get_param:
        doc = Documents.objects.raw('SELECT * FROM doc_viewer_documents WHERE id = %s' % get_param)
        context = {"logs":doc}
        return render(request, 'doc_viewer/log.html', context)
    # if get request does not includes id parameter return list of Document objects.
    context = {"logs":Documents.objects.all()}
    return render(request, 'doc_viewer/table.html', context)

def path_view(request):
    get_param = request.GET.get('file','')
    if get_param:
        if not os.path.isdir(get_param):
            if get_param.split('.')[-1] == 'pdf':
                return FileResponse(open(get_param, 'rb'), content_type='application/pdf')
            else:
                rfile = open(get_param, "rb").read()
                return HttpResponse(rfile)
        else:
            path = os.listdir(get_param)
            context = {"files":path}
            return render(request, 'doc_viewer/path.html', context)
