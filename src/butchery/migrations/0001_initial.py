# Generated by Django 4.1.3 on 2023-09-24 13:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('rawmaterial', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='butchery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('useless', models.FloatField()),
                ('used', models.CharField(max_length=50)),
                ('weight', models.FloatField()),
                ('usable', models.FloatField()),
                ('cooking_loss', models.FloatField()),
                ('totalprice', models.BigIntegerField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('raw_press', models.FloatField()),
                ('cooked_press', models.FloatField()),
                ('material', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rawmaterial.raw_material')),
            ],
        ),
    ]