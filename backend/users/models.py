from django.contrib.auth.models import AbstractUser
from django.db import models


SETOR_EMPRESA = (
    ('1', 'DIRETORIA'),
    ('2', 'RECURSOS HUMANOS'),
    ('3', 'TELEVENDAS'),
    ('4', 'FINANCEIRO'),
    ('5', 'TECNOLOGIA DA INFORMAÇÃO'),
    ('6', 'ESTOQUE'),
    ('7', 'LABORATÓRIO'),
    ('8', 'LOJAS'),
    ('9', 'MARKETING')
)

FILIAL_EMPRESA = (
    ('0001', 'ADM'),
    ('LJ01', 'LOJA 01'),
    ('LJ02', 'LOJA 02'),
    ('LJ03', 'LOJA 03'),
    ('LJ04', 'LOJA 04'),
    ('LJ05', 'LOJA 05'),
    ('LJ06', 'LOJA 06'),
    ('LJ07', 'LOJA 07'),
    ('LJ08', 'LOJA 08'),
    ('LJ09', 'LOJA 09'),
    ('LJ10', 'LOJA 10'),
    ('LJ11', 'LOJA 11'),
    ('LJ12', 'LOJA 12'),
    ('LJ13', 'LOJA 13'),
    ('LJ14', 'LOJA 14'),
    ('LJ15', 'LOJA 15'),
    ('LJ16', 'LOJA 16'),
    ('LJ30', 'LOJA 30'),
    ('LJ31', 'LOJA 31'),
    ('VIX', 'VITORIA'),
    ('VIL', 'VILA VELHA'),
    ('SER', 'SERRA'),
    ('CAR', 'CARIACICA'),

)

class User(AbstractUser, models.Model):
    cargo = models.CharField(blank=True, max_length=50, null=True)
    setor = models.CharField(blank=True, max_length=1, null=True, choices=SETOR_EMPRESA)
    filial = models.CharField(blank=True, max_length=4, null=True, choices=FILIAL_EMPRESA)
    

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
