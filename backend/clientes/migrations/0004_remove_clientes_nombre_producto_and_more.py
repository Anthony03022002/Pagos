# Generated by Django 5.0 on 2024-02-15 00:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0003_alter_clientes_nombre_producto'),
        ('productos', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientes',
            name='nombre_producto',
        ),
        migrations.AddField(
            model_name='clientes',
            name='nombre_producto',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='productos.productos'),
        ),
    ]