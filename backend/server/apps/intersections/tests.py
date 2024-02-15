from datetime import datetime

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APITestCase

from apps.intersections.models import Intersection


class TestIntersection(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.intersection = Intersection.objects.create(
            name="name1",
            location="location1",
            streets="streets1"
        )

    def test_has_name(self):
        self.assertEqual(self.intersection.name, "name1")

    def test_has_location(self):
        self.assertEqual(self.intersection.location, "location1")

    def test_has_streets(self):
        self.assertEqual(self.intersection.streets, "streets1")

    def test_str(self):
        """ Test the __str__ method"""
        self.assertEqual(str(self.intersection), "name1")

    def test_added_date_automatically(self):
        """ Test that the date is automatically saved on creation"""
        self.assertTrue(type(self.intersection.created), datetime)


class TestIntersectionsAPI(APITestCase):
    def setUp(self):
        self.endpoint_url = "/api/v1/intersections/"
        self.data = {
            "name": "test_name",
            "location": "test_location",
            "streets": "test_streets",
        }

    def test_api_create_intersection(self):
        response = self.client.post(self.endpoint_url, self.data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Intersection.objects.count(), 1)
        self.assertEqual(Intersection.objects.get().name, 'test_name')

    def test_api_create_intersection_fails_without_required_fields(self):
        data = {
            "name": "test_name",
        }
        response = self.client.post(self.endpoint_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Intersection.objects.count(), 0)  # no model created

    def test_api_list_intersections(self):
        self.client.post(self.endpoint_url, self.data, format="json")
        response = self.client.get(self.endpoint_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Intersection.objects.count(), 1)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]["name"], self.data["name"])
        self.assertEqual(response.json()[0]["location"], self.data["location"])
        self.assertEqual(response.json()[0]["streets"], self.data["streets"])

    def test_api_can_update_intersection(self):
        self.client.post(self.endpoint_url, self.data, format="json")
        intersection = Intersection.objects.get()
        new_data = {
            "name": "new name",
            "location": "new location",
            "streets": self.data["streets"],
        }
        response = self.client.patch(
            f"{self.endpoint_url}{intersection.id}/", data=new_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Intersection.objects.get().name, "new name")
        self.assertEqual(Intersection.objects.get().location, "new location")
        self.assertEqual(Intersection.objects.get().streets, self.data["streets"])

    def test_api_can_delete_intersection(self):
        self.client.post(self.endpoint_url, self.data, format="json")
        intersection = Intersection.objects.get()
        response = self.client.delete(f"{self.endpoint_url}{intersection.id}/")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Intersection.objects.count(), 0)
