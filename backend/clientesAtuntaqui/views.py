from rest_framework import viewsets
from .serializer import clientesAtuntaquiSerializer
from .models import ClientesAtuntaqui

class clientesAtuntaquiView(viewsets.ModelViewSet):
    serializer_class = clientesAtuntaquiSerializer
    queryset = ClientesAtuntaqui.objects.all()