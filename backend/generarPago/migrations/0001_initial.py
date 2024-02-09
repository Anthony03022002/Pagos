# Generated by Django 5.0 on 2024-02-09 19:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clientes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='generarPago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_pago', models.DateField()),
                ('cantidad_pagada', models.DecimalField(blank=True, decimal_places=2, max_digits=50, null=True)),
                ('cedula', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='clientes.clientes')),
            ],
            options={
                'db_table': 'GenerarPago',
            },
        ),
    ]