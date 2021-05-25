## Node compression

This is a framework for building a simple client and server in Node.js.

## Assumptions:

      1. Multiple sensors are simulating system data and creating logs in a remote server.
      2. From the remote server, these logs needs to be read and compared to see if the data is the same.
      3. Due to the limited bandwidth of the connection between client and server, the messages that is being transmitted must be compressed.
      4. The latency for any given message should be less than 2 seconds.
    
## Trade-offs:

      1. To reduce the number of bits being transmitted, I have decided to do data compression on the client side before the messages are being transmitted.
      2. The messages are being sent in json format so I’ll use brotli compression algorithm which reduces the size of the data and time of the transmission.
      3. Brotli compression is really good while compressing Json data compared to other compression algorithms.
      4. I’m using typescript over javascript which is a great tool for developers with its wide selection of useful types and new features.
      5. I’m using NestJS as the backend (Receiver) framework which gives a quick and efficient development process
      6. I’m using Jest library for unit testing, don’t need a separate mock or a separate assertion library, jest includes both
      7. With Jest, we don’t have to explicitly declare test double like stub, mock or spy like Sinon, jest wraps everything into a single entry point called the mock object (jest.fn).

## Tech Stack

      1. Node.JS
      2. Typescript
      3. Nest.JS
      4. Jest
      5. Swagger
      
## How to Run and Build

##### Receiver

1. ```npm install``` to install node packages
2. ```npm build``` to compile Typescript to Javascript
3. ```npm start``` to start the application

##### Sender

1. ```npm install``` to install node packages
2. ```npm build``` to compile Typescript to Javascript
3. ```npm start``` to start the application 

**Note:** Use Node version 12 or greater  

##### To run acceptance testing, run the ```./test.sh``` file in your terminal

## How to Run test


To run unit test, just run inside Receiver and Sender folder:

```npm test```

**Note:** Covered unit tests for controller, service and middleware in Receiver app, covered brotli compress unit test in Sender app as expected. 

## API Documentation

After deploying Receiver app, please click on [Swagger editor](http://localhost:3000/api-docs "API Doc") to view the API documentation
