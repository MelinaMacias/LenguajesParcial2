
from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.db.models.fields import CharField, TextField
from django.db.models.fields.related import OneToOneField

class Organizacion(models.Model):
    """Perfil para las organizaciones 
        * Extiende del modelo Usuario
    """
    account = OneToOneField(User, on_delete=CASCADE)

    nombre = CharField(max_length=50, unique=True)
    descripcion = TextField(blank=True, default='')

