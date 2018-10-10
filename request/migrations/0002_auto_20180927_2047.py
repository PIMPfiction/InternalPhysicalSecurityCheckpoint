# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2018-09-27 20:47
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('request', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='ip',
            field=models.GenericIPAddressField(verbose_name='ip address'),
        ),
        migrations.AlterField(
            model_name='request',
            name='time',
            field=models.DateTimeField(db_index=True, default=django.utils.timezone.now, verbose_name='time'),
        ),
        migrations.AlterField(
            model_name='request',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='user'),
        ),
    ]
