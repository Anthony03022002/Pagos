# Generated by Django 5.0 on 2024-02-09 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('generarPagoPimampiro', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='generarpagopimampiro',
            old_name='cedula',
            new_name='idCliente',
        ),
    ]