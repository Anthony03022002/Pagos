from rest_framework import viewsets
from .serializer import generarPagoCayambeSerializer
from .models import generarPagoCayambe

class generarPagoCayambeView(viewsets.ModelViewSet):
    serializer_class = generarPagoCayambeSerializer
    queryset = generarPagoCayambe.objects.all()