# Generated by Django 3.2.4 on 2021-09-05 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donatela', '0003_donadormodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='campanamodel',
            name='donadores',
            field=models.ManyToManyField(to='donatela.DonadorModel'),
        ),
    ]
