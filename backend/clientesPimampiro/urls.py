from django.urls import path, include
from rest_framework import routers
from clientesPimampiro import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'clientesPimampiro', views.clientesPimampiroView, 'clientesPimampiro')

urlpatterns = [
    path('clientesPimampiro/', include(router.urls)),
]