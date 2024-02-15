from django.db import models


class Intersection(models.Model):
    name = models.CharField(max_length=255)
    location = models.TextField()
    streets = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
