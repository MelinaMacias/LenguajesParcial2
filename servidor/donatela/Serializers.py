
from django.contrib.auth.models import User
from django.db.models import fields
from rest_framework import serializers
from rest_framework.relations import HyperlinkedRelatedField, PrimaryKeyRelatedField, StringRelatedField

from donatela import models

class AccountSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = User

        fields = [
            'username',
            'email'
        ]

class OrganizacionSerializer(serializers.ModelSerializer):

    account = AccountSerializer()

    class Meta:

        model = models.Organizacion
        fields = (
            'nombre',
            'descripcion',
            'account',
        )
    