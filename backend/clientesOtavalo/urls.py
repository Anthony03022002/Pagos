from django.urls import path, include
from rest_framework import routers
from clientesOtavalo import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'clientesOtavalo', views.clientesOtavaloView, 'clientesOtavalo')

urlpatterns = [
    path('clientesOtavalo/', include(router.urls)),
]