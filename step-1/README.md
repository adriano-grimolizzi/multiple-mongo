# step-1

1) 'game-service' is a simple node application for testing multiple connections. It handles 2 kind of documents: 'games' and 'consoles'. They will be saved in two different MongoDB instances. You can check the docker-compose.yml file for details on how the instances are brought up.  

2) 'database-client' is the mongo shared library. It can be potentially reused by other node services. It exports different connections to 2 MongoDB instances running on different ports.

To run the application:

1) run ```docker-compose up``` for starting the mongo instances. This used the docker-compose.yml file mentioned earlier.

3) run ```npm start``` inside the 'game-service' folder. You can GET all the documents on the endpoint 'localhost:3000/games' and 'localhost:3000/consoles'.

You can save documents with a POST to the same endpoint with a json body like: {"name": "Arkanoid"}.