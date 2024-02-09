from django.db import models
from clientes.models import Clientes


class generarPago(models.Model):
    fecha_pago = models.DateField()
    cantidad_pagada = models.DecimalField(max_digits=50, decimal_places=2, null=True, blank=True)
    idCliente = models.ForeignKey(Clientes, null=True, blank=True, on_delete=models.SET_NULL)

    class Meta:
        db_table = 'GenerarPago'

