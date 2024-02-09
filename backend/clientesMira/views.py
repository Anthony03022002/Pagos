from rest_framework import viewsets
from .serializer import clientesMiraSerializer
from .models import ClientesMira

class clientesMiraView(viewsets.ModelViewSet):
    serializer_class = clientesMiraSerializer
    queryset = ClientesMira.objects.all()