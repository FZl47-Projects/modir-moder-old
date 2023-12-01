# Generated by Django 4.1.3 on 2023-09-24 13:45

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('city', models.CharField(max_length=40)),
                ('restaurantName', models.CharField(max_length=40)),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, region='IR', unique=True)),
                ('password', models.CharField(max_length=50)),
            ],
        ),
    ]