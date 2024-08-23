from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User, SETOR_EMPRESA, FILIAL_EMPRESA
from django import forms


class UserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = User


class UserCreateForm(UserCreationForm):
    first_name = forms.CharField(label='Nome Completo')
    username = forms.CharField(label='Username', min_length=4, max_length=150)
    setor = forms.ChoiceField(label='Setor', choices=SETOR_EMPRESA)
    password1 = forms.CharField(label='Senha', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirme sua Senha', widget=forms.PasswordInput)

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ["first_name", "username", "email", "password1", "password2",]

class UserUpdateForm(forms.ModelForm):
    first_name = forms.CharField(label='Nome Completo', required=False)
    last_name = forms.CharField(label='Apelido', required=False)
    cargo =  forms.CharField(label='Cargo', required=False)
    setor = forms.ChoiceField(label='Setor', choices=SETOR_EMPRESA, required=False)
    filial = forms.ChoiceField(label='Filial', choices=FILIAL_EMPRESA, required=False)

    class Meta(UserChangeForm.Meta):
        model = User
        fields = ["first_name", "last_name", 'cargo', 'setor', 'filial']