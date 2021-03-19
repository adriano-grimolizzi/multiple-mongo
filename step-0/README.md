# multiple-mongo

This is a simple node application for testing multiple connections. In the app there are 2 different connections to 2 different databases on the same mongo instance.

To run the application, 

1) run ```docker-compose up``` for starting the mongo instance.

2) create 2 databases: 

database1 with "games" collection and database2 with "consoles" collection. You can enter as many documents as you want, they should only have the "name" property.

3) run ```npm start```. You should have all the elements from the different databases printed to the console.
