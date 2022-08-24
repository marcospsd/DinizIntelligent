from rest_framework import viewsets
from .models import *
from .serializers import *

class DepartamentoView(viewsets.ModelViewSet):
    queryset = Departamentos.objects.all()
    serializer_class = DepartamentosSerializer

    def get_queryset(self):
        if self.request.user.setor != '1':
            return self.queryset.filter(codigo=self.request.user.setor)
        elif self.request.user.setor == '1':
            return self.queryset

            
class DashboardView(viewsets.ModelViewSet):
    queryset = Dashboards.objects.all()
    serializer_class = DashboardSerializer
