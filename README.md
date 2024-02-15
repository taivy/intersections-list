# Intersections List

## How to run

1. Run docker-compose in root directory:

    ```sh
    docker-compose up
    ```

2. Open http://localhost:8080/

## NB

This implementation assumes that Intersection's "location" and "streets" are simple text fields, as there are no details about them in requirements. However, in real-life feature they are probably more complex, with specific format (e.g. location is in coordinates, streets are comma-separated), and would require validation logic. Also maybe more complex models structure (e.g. separate table with streets, and separate table for many-to-many relation between streets and intersections) and input elements (e.g. map picker for location, and multiple-choice dropdown for streets).
