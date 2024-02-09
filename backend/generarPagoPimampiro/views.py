from rest_framework import viewsets
from .serializer import generarPagoPimampiroSerializer
from .models import generarPagoPimampiro

class generarPagoPimampiroView(viewsets.ModelViewSet):
    serializer_class = generarPagoPimampiroSerializer
    queryset = generarPagoPimampiro.objects.all()