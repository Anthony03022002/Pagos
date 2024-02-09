from rest_framework import viewsets
from .serializer import generarPagoLagoagrioSerializer
from .models import generarPagoLagoagrio

class generarPagoLagoagrioView(viewsets.ModelViewSet):
    serializer_class = generarPagoLagoagrioSerializer
    queryset = generarPagoLagoagrio.objects.all()