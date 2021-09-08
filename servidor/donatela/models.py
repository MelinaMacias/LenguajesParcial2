
from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.db.models.fields import CharField, DecimalField, EmailField, TextField
from django.db.models.fields.related import ForeignKey, ManyToManyField, OneToOneField

from  donatela.enums import EstadoCampana

class Organizacion(models.Model):
    """Perfil para las organizaciones 
        * Extiende del modelo Usuario
    """
    account = OneToOneField(User, on_delete=CASCADE)

    nombre = CharField(max_length=50, unique=True)
    descripcion = TextField(blank=True, default='')


class DonadorModel(models.Model):
    """Modelo para almacenar la información de los donadores"""

    nombres = CharField(max_length=50, blank=False)
    apellidos = CharField(max_length=50)
    correo = EmailField(blank=True)
    cantidad_donada = DecimalField(blank=False, decimal_places=2, max_digits=6)
    

class CampanaModel(models.Model):
    """Capañas llevadas a cabo por las organizaciones"""

    titulo = CharField(max_length=100, blank=False)
    descripcion_corta = CharField(max_length=400)
    url_imagen = CharField(blank=False, max_length=1000)
    descripcion_completa = TextField(blank=False)
    recaudacion_esperada = DecimalField(default=0.0, decimal_places=2, max_digits=6)
    cantidad_recaudada = DecimalField(default=0.0, decimal_places=2, max_digits=6)
    organizacion = ForeignKey(Organizacion, on_delete=CASCADE)
    donadores = ManyToManyField(DonadorModel)
    estado_campana = CharField(max_length=10,
        choices=[(estado, estado.value) for estado in EstadoCampana]
    )

    def __str__(self):
        return f'[ {self.titulo} - {self.estado_campana} ]'
