from rest_framework import serializers
from users.models import User



class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = '__all__'

    def save(self):
        conta = User(
            username=self.validated_data['username'],
            first_name=self.validated_data['first_name'],
            setor=self.validated_data['setor'],
            filial=self.validated_data['filial'],
        )
        senha = self.validated_data['password']
        conta.set_password(senha)
        conta.save()


class ChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = ['password']

    def update(self, instance, validated_data):
        print(validated_data)
        instance.set_password(validated_data['password'])
        instance.save()
        return instance