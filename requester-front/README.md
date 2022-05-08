# Getting Started

  ## What is Requester-Front
  
  Requester-Front is a web application that allows you to create and view requests.
  It is a simple, easy to use, and easy to maintain web application that consumes data from orders-api.

## How to run the application

Remember to edit the .env file with your API address, port and with your webserver port.
Example of .env file:

```
# DEFAULT RAILS API URL
REACT_APP_API_URL=http://localhost:3000
# A PORT TO AVOID CONFLICT WITH YOUR API
PORT=8080
```

On the command line, run:

    yarn install # or npm install
    yarn start # or npm start


To access the application, go to:

    http://localhost:8080