# Generated by Django 5.0 on 2024-02-09 22:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('generarPagoBolivar', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='generarpagobolivar',
            old_name='cedula',
            new_name='idCliente',
        ),
    ]
