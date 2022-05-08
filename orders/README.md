# Getting Started

  # What is Orders app?

  Orders app is a mobile application for assignees to view and update their orders.

  # How to run the application

  Remember to edit the .env file with your API address\
  You also need your environment for android or ios development setup.\
  Check react native documentation for more information.\
  Link to the documentation:\
  https://reactnative.dev/docs/environment-setup

  Example of .env file:

  ```
  # DEFAULT RAILS API URL
  API_URL="http://localhost:3000"
  ```

  Also remember, everytime you edit the .env file, you need to restart the application with --reset-cache option.\
  Example: yarn start --reset-cache

  On the command line, run:
  
      yarn install # or npm install
      cd ios && pod install && cd .. # if you are using ios
      yarn start # or npm start
      yarn android # or npm android