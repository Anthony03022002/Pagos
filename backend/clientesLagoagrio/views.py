from rest_framework import viewsets
from .serializer import clientesLagoagrioSerializer
from .models import ClientesLagoagrio

class clientesLagoagrioView(viewsets.ModelViewSet):
    serializer_class = clientesLagoagrioSerializer
    queryset = ClientesLagoagrio.objects.all()