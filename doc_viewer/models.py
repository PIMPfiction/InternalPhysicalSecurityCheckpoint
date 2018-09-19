from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.utils.html import format_html
from django.core.exceptions import ObjectDoesNotExist


class Operations(models.Model):
    Operation_Name = models.CharField(max_length=25, null=True)
    def __str__(self):
        return self.Operation_Name

class Documents(models.Model):
    category = (
        ('class', 'Classified'),
        ('public','Public'),
        ('dec', 'Declassified'),
        ('secret', 'Calendestine'),
    )
    Category = models.CharField(max_length=10, choices=category)
    Code = models.CharField(max_length=20, null=True)
    Operation = models.ForeignKey(Operations, blank=True, null=True)
    Index = models.TextField(max_length=700, null=True)
    def __str__(self):
        return self.Code
