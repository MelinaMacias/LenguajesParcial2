
from donatela.enums import EstadoCampana
from django.db.models import fields
from rest_framework.schemas.coreapi import is_enabled
from donatela import models
from django.contrib.auth.models import User
from rest_framework import serializers

from donatela import models

class AccountSerializer(serializers.ModelSerializer):
    
    class Meta:

        model = User

        fields = [
            'username',
            'email',
            'password',
            'is_active'
        ]
        
        extra_kwargs = {
            'password': {'write_only': True},
        }

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
        extra_kwargs = {
            'password': {'write_only': True},
        }

    
    def create(self, data):
        
        newAccount = User.objects.create_user(
            username=data.get("account").get("username"),
            password = data.get("account").get("password"),
            email = data.get("account").get("email"),
            is_active = False
        )

        nuevaOrganizacion = models.Organizacion.objects.create(
            nombre = data.get("nombre"),
            descripcion = data.get("descripcion"),
            account = newAccount
        )

        return nuevaOrganizacion

    def update(self, organizacion, data):
        
        organizacion.account.is_active = data.get("account").get(
            "is_active", organizacion.account.is_active)
        
        organizacion.account.save()

        return organizacion


class CreateCampanaSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.CampanaModel
        fields = [
            'titulo',
            'descripcion_corta',
            'url_imagen',
            'descripcion_completa',
            'recaudacion_esperada',
            'estado_campana'
        ]


    def get_serializer_context(self):
        
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }


    def create(self, data):
        
        nuevaCampana = models.CampanaModel.objects.create(
            titulo = data.get("titulo"),
            descripcion_corta = data.get("descripcion_corta"),
            url_imagen = data.get("url_imagen"),
            descripcion_completa = data.get("descripcion_completa"),
            recaudacion_esperada = data.get("recaudacion_esperada"),
            cantidad_recaudada = 0,
            estado_campana = EstadoCampana.ACTIVA.value,
            organizacion = self.context['request'].user.organizacion
        )

        return nuevaCampana


class DonadorSerializer(serializers.ModelSerializer):
    
    def get_serializer_context(self):
        
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }


    class Meta:
        
        model = models.DonadorModel
        fields = "__all__"
    
    def create(self, data):

        nuevoDonador = models.DonadorModel.objects.create(
            nombres = data.get("nombres"),
            apellidos = data.get("apellidos"),
            correo = data.get("correo"),
            cantidad_donada = data.get("cantidad_donada")
        )

        reqData = self.context['request'].data
        campana = models.CampanaModel.objects.get(id = reqData.get("idCampana"))
        campana.cantidad_recaudada += nuevoDonador.cantidad_donada
        campana.donadores.add(nuevoDonador)
        campana.save()

        return nuevoDonador


class CampanaSerializer(serializers.ModelSerializer):
    
    organizacion = OrganizacionSerializer()
    donadores = DonadorSerializer(many = True)

    class Meta:
        
        model = models.CampanaModel
        fields = "__all__"

    def update(self, campana, data):

        campana.estado_campana = data.get("estado_campana", campana.estado_campana).value
        campana.save()

        return campana

