# Generated by Django 4.1.3 on 2023-09-24 13:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('employee', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='income',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fixedSalary', models.IntegerField()),
                ('overTime', models.BigIntegerField()),
                ('reward', models.IntegerField()),
                ('totalAmount', models.IntegerField()),
                ('extra_expenses', models.IntegerField()),
                ('Insurance', models.IntegerField()),
                ('gift', models.IntegerField()),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employee.employee')),
            ],
        ),
    ]
