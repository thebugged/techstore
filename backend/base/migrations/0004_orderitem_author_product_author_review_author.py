# Generated by Django 4.2.1 on 2023-06-12 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='author',
            field=models.CharField(default='book author', max_length=200),
        ),
        migrations.AddField(
            model_name='product',
            name='author',
            field=models.CharField(default='book author', max_length=200),
        ),
        migrations.AddField(
            model_name='review',
            name='author',
            field=models.CharField(default='book author', max_length=200),
        ),
    ]
