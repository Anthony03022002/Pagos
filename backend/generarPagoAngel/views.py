from rest_framework import viewsets
from .serializer import generarPagoAngelSerializer
from .models import generarPagoAngel

class generarPagoAngelView(viewsets.ModelViewSet):
    serializer_class = generarPagoAngelSerializer
    queryset = generarPagoAngel.objects.all()