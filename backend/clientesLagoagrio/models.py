from django.db import models
from planes.models import Planes
from productos.models import Productos

class ClientesLagoagrio(models.Model):
    cedula = models.BigIntegerField()
    nombre_completo = models.CharField(max_length=150)
    email = models.EmailField(max_length=100)
    direccion = models.CharField(max_length=100)
    fecha_inicio = models.DateField(null=True, blank=True)
    cantidad_producto = models.IntegerField()
    total_pagar = models.DecimalField(max_digits=50,decimal_places=2)
    pagos_mensuales = models.DecimalField(max_digits=50,decimal_places=2)
    vencimiento = models.DateField(null=True, blank=True)
    estado = models.CharField(max_length=100)
    
    

    # ForeignKey
    nombre_producto = models.ForeignKey(Productos, null=True, blank=True, on_delete=models.SET_NULL)
    meses_diferidos = models.ForeignKey(Planes, null=True, blank=True, on_delete=models.SET_NULL)


    class Meta:
        db_table = 'clientes_lagoagrio'

    def __str__(self):
        return self.nombre_completo