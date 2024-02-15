from rest_framework import serializers
from apps.intersections.models import Intersection

class IntersectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Intersection
        read_only_fields = (
            "id",
            "created",
            "updated",
        )
        fields = (
            "id",
            "name",
            "location",
            "streets",
            "created",
            "updated",
        )
