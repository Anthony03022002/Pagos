from django.urls import path, include
from rest_framework import routers
from generarPagoLagoagrio import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'generarPagoLagoagrio', views.generarPagoLagoagrioView, 'generarPagoLagoagrio')

urlpatterns = [
    path('generarPagoLagoagrio/', include(router.urls)),
]