# Generated by Django 3.2.4 on 2021-06-28 15:23

from django.db import migrations

# Ensure the data is not empty when the app starts
def create_data(apps, schema_editor):
    Portfolio = apps.get_model('portfolio', 'Portfolio')
    Portfolio(title="Data Scientist Intern", place="Glints", description="Working as a Junior Data Scientist.", isWork= True).save()

class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]