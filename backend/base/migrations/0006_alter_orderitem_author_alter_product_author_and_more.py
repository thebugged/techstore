# Generated by Django 4.2.1 on 2023-06-12 22:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_product_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitem',
            name='author',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='author',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='review',
            name='author',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
