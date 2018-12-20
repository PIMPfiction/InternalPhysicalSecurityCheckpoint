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
