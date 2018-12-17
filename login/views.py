from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from django import forms
import urllib, urllib2, json
# Create your views here.
# VIEWS IMPORTS
import functools, warnings
from django.conf import settings
# Avoid shadowing the login() and logout() views below.
from django.contrib.auth import (
    REDIRECT_FIELD_NAME, get_user_model, login as auth_login,
    logout as auth_logout, update_session_auth_hash,
)
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import (
    AuthenticationForm, PasswordChangeForm, PasswordResetForm, SetPasswordForm,
)
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect, QueryDict
from django.shortcuts import resolve_url
from django.template.response import TemplateResponse
from django.utils.deprecation import (
    RemovedInDjango20Warning, RemovedInDjango110Warning,
)
from django.utils.encoding import force_text
from django.utils.http import is_safe_url, urlsafe_base64_decode
from django.utils.six.moves.urllib.parse import urlparse, urlunparse
from django.utils.translation import ugettext as _
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters

def deprecate_current_app(func):
    """
    Handle deprecation of the current_app parameter of the views.
    """
    @functools.wraps(func)
    def inner(*args, **kwargs):
        if 'current_app' in kwargs:
            warnings.warn(
                "Passing `current_app` as a keyword argument is deprecated. "
                "Instead the caller of `{0}` should set "
                "`request.current_app`.".format(func.__name__),
                RemovedInDjango20Warning
            )
            current_app = kwargs.pop('current_app')
            request = kwargs.get('request', None)
            if request and current_app is not None:
                request.current_app = current_app
        return func(*args, **kwargs)
    return inner


def login(request, template_name='registration/login.html',
          redirect_field_name=REDIRECT_FIELD_NAME,
          authentication_form=AuthenticationForm,
          extra_context=None):
    """
    Displays the login form and handles the login action.
    """
    redirect_to = "/"

    if request.method == "POST":
        form = authentication_form(request, data=request.POST)
        if form.is_valid():
            recaptcha_response = request.POST.get('g-recaptcha-response')
            if recaptcha_response:
                url = 'https://www.google.com/recaptcha/api/siteverify'
                values = {
                    'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
                    'response': recaptcha_response
                }
                data = urllib.urlencode(values)
                req = urllib2.Request(url, data)
                response = urllib2.urlopen(req)
                result = json.load(response)
                if result['success']:
                    auth_login(request, form.get_user())
                    return HttpResponseRedirect(redirect_to)

        else:
            current_site = get_current_site(request)

            context = {
                'form': form,
                'site': current_site,
                'site_name': current_site.name,
            }
            context.update({"errorstring":"X"})
            if extra_context is not None:
                context.update(extra_context)

            return TemplateResponse(request, template_name, context)
    else:
        form = authentication_form(request)

    current_site = get_current_site(request)

    context = {
        'form': form,
        'site': current_site,
        'site_name': current_site.name,
    }

    if extra_context is not None:
        context.update(extra_context)

    return TemplateResponse(request, template_name, context)



@deprecate_current_app
def logout(request, next_page=None,
           template_name='registration/logged_out.html',
           redirect_field_name=REDIRECT_FIELD_NAME,
           extra_context=None):
    """
    Logs out the user and displays 'You are logged out' message.
    """
    auth_logout(request)
    next_page = "/xd_logout"
    if next_page is not None:
        next_page = resolve_url(next_page)

    if (redirect_field_name in request.POST or
            redirect_field_name in request.GET):
        next_page = request.POST.get(redirect_field_name,
                                     request.GET.get(redirect_field_name))
        # Security check -- don't allow redirection to a different host.
        if not is_safe_url(url=next_page, host=request.get_host()):
            next_page = request.path

    if next_page:
        # Redirect to this page until the session has been cleared.
        return HttpResponseRedirect("/login")

    current_site = get_current_site(request)
    context = {
        'site': current_site,
        'site_name': current_site.name,
        'title': _('Logged out')
    }
    if extra_context is not None:
        context.update(extra_context)

    return TemplateResponse(request, template_name, context)
