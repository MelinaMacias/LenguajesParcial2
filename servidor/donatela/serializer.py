
from django.contrib.auth.models import User
from django.utils.functional import partition
from rest_framework import serializers

from donatela import models

class AccountSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = User

        fields = [
            'username',
            'email',
            'is_active'
        ]

class OrganizacionSerializer(serializers.ModelSerializer):

    account = AccountSerializer()

    class Meta:

        model = models.Organizacion
        fields = [
            'id',
            'nombre',
            'descripcion',
            'account',
        ]

class CampanaSerializer(serializers.ModelSerializer):
    
    organizacion = OrganizacionSerializer()

    class Meta:
        
        model = models.CampanaModel
        fields = "__all__"

class DonadorSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = models.DonadorModel
        fields = "__all__"
