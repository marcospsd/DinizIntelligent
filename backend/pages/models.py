from tkinter import CASCADE
from django.db import models

# Create your models here.


class Departamentos(models.Model):
    departamento = models.CharField(max_length=40)
    codigo = models.CharField(max_length=1)
    
    def __str__(self):
        return self.departamento

class Dashboards(models.Model):
    nome = models.CharField(max_length=30)
    departamento = models.ForeignKey(Departamentos, related_name='dash_departamento', on_delete=models.CASCADE)
    filial = models.CharField(max_length=4, null=True, blank=True)
    link = models.CharField(max_length=500)

    def __str__(self):
        return self.nome