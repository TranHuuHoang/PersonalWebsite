from django.db import models

# Create your models here.
class Portfolio(models.Model):
    title = models.CharField(max_length=120)
    place = models.CharField(max_length=120)
    description = models.TextField()
    isWork = models.BooleanField(default=False)

    def __str__(self):
        return self.name

