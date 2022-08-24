from rest_framework import serializers
from .models import *



class DashboardSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Dashboards
        fields = '__all__'


class DepartamentosSerializer(serializers.ModelSerializer):
    #relatorios = DashboardSerializer(source='dash_departamento', many=True)
    relatorios = serializers.SerializerMethodField('get_users_permissions')

    class Meta:
        model = Departamentos
        fields = '__all__'

    def get_users_permissions(self, obj):
        user = self.context['request'].user
        zone = Dashboards.objects.all().filter(filial=user.filial, departamento=obj) | Dashboards.objects.all().filter(filial__isnull=True, departamento=obj)
        serializer = DashboardSerializer(zone, many=True)
        return serializer.data