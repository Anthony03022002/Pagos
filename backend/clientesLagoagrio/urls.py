from django.urls import path, include
from rest_framework import routers
from clientesLagoagrio import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'clientesLagoagrio', views.clientesLagoagrioView, 'clientesLagoagrio')

urlpatterns = [
    path('clientesLagoagrio/', include(router.urls)),
]