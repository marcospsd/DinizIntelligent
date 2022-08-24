from django.contrib import admin
from .models import *



@admin.register(Departamentos)
class Departamentos(admin.ModelAdmin):
    model = Departamentos
    list_display = ['departamento']



@admin.register(Dashboards)
class Dashboards(admin.ModelAdmin):
    model = Dashboards
    list_display = ['nome', 'departamento']