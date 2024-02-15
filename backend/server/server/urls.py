from django.urls import path, include

from apps.intersections.urls import router

urlpatterns = [
    path('api/v1/', include((router.urls, 'intersections'), namespace='intersections'))
]
