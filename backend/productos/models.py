from django.db import models


# Create your models here.
class Productos(models.Model):
    nombre_producto = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=50, decimal_places=2)

    #ForeignKey

    class Meta:
        db_table = 'Productos' 

    def __str__(self):
        return self.nombre_producto