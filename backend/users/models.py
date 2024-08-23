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
    ('0101', 'LOJA 01'),
    ('0201', 'LOJA 02'),
    ('0102', 'LOJA 03'),
    ('0301', 'LOJA 04'),
    ('0401', 'LOJA 05'),
    ('0501', 'LOJA 06'),
    ('0103', 'LOJA 07'),
    ('0302', 'LOJA 08'),
    ('0601', 'LOJA 09'),
    ('0701', 'LOJA 10'),
    ('0801', 'LOJA 11'),
    ('0901', 'LOJA 12'),
    ('0802', 'LOJA 13'),
    ('1001', 'LOJA 14'),
    ('1101', 'LOJA 15'),
    ('2001', 'LOJA 30'),
    ('2002', 'LOJA 31'),
)

class User(AbstractUser, models.Model):
    cargo = models.CharField(blank=True, max_length=50, null=True)
    setor = models.CharField(blank=True, max_length=1, null=True, choices=SETOR_EMPRESA)
    filial = models.CharField(blank=True, max_length=4, null=True, choices=FILIAL_EMPRESA)
    

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
