# step-1

1) 'game-service' is a simple node application for testing multiple connections.

2) 'database-client' is the mongo shared library. It can be potentially reused by other node services. It exports different connections to 2 MongoDB instances running on different ports.

To run the application:

1) run ```docker-compose up``` for starting the mongo instances.

3) run ```npm start``` inside the 'game-service' folder. You can GET all the documents on the endpoint 'localhost:3000/games' and 'localhost:3000/consoles'.

You can save documents with a POST to the same endpoint with the json body {"name": "Arkanoid"}.