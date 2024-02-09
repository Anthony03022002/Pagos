
# Create your views here.
from rest_framework import viewsets
from .serializer import generarPagoAtuntaquiSerializer
from .models import generarPagoAtuntaqui

class generarPagoAtuntaquiView(viewsets.ModelViewSet):
    serializer_class = generarPagoAtuntaquiSerializer
    queryset = generarPagoAtuntaqui.objects.all()