from .views import *
from rest_framework.routers import SimpleRouter


pages = SimpleRouter()
pages.register('dashboards', DashboardView)
pages.register('departamentos', DepartamentoView)