# Generated by Django 3.2.4 on 2021-08-25 01:09

from django.db import migrations, models
import django.db.models.deletion
import donatela.enums


class Migration(migrations.Migration):

    dependencies = [
        ('donatela', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CampanaModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=50)),
                ('descripcion_corta', models.CharField(max_length=400)),
                ('url_imagen', models.CharField(max_length=400)),
                ('descripcion_completa', models.TextField()),
                ('recaudacion_esperada', models.DecimalField(decimal_places=2, default=0.0, max_digits=6)),
                ('cantidad_recaudada', models.DecimalField(decimal_places=2, default=0.0, max_digits=6)),
                ('estado_campana', models.CharField(choices=[(donatela.enums.EstadoCampana['ACTIVA'], 'Activa'), (donatela.enums.EstadoCampana['FINALIZADA'], 'Finalizada')], max_length=10)),
                ('organizacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='donatela.organizacion')),
            ],
        ),
    ]