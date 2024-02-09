from rest_framework import viewsets
from .serializer import clientesCayambeSerializer
from .models import ClientesCayambe

class clientesCayambeView(viewsets.ModelViewSet):
    serializer_class = clientesCayambeSerializer
    queryset = ClientesCayambe.objects.all()