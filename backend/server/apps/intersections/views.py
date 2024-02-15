from rest_framework import viewsets 
from apps.intersections.models import Intersection 
from apps.intersections.serializers import IntersectionSerializer


class IntersectionViewSet(viewsets.ModelViewSet):

    serializer_class = IntersectionSerializer
    queryset = Intersection.objects.all()

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        return self.queryset
