from rest_framework.routers import DefaultRouter
from apps.intersections.views import IntersectionViewSet

router = DefaultRouter()
router.register("intersections", IntersectionViewSet, basename="intersections")
