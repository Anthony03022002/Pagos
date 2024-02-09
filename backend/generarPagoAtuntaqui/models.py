

# Create your models here.
from django.db import models

from clientesAtuntaqui.models import ClientesAtuntaqui


class generarPagoAtuntaqui(models.Model):
    fecha_pago = models.DateField()
    cantidad_pagada = models.DecimalField(max_digits=50, decimal_places=2, null=True, blank=True)
    idCliente = models.ForeignKey(ClientesAtuntaqui, null=True, blank=True, on_delete=models.SET_NULL)

    class Meta:
        db_table = 'GenerarPagoAtuntaqui'