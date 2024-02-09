from rest_framework import viewsets
from .serializer import clientesBolivarSerializer
from .models import ClientesBolivar

class clientesBolivarView(viewsets.ModelViewSet):
    serializer_class = clientesBolivarSerializer
    queryset = ClientesBolivar.objects.all()