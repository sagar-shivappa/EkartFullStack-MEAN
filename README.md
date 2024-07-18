# MEAN : School Management App
## Project Overview

This project outlines the development of a school management system using the MEAN Stack (MongoDB, Express.js, Angular, and Node.js). The application allows administrators to manage student data in a digital and efficient manner.

## Project Goal

The goal is to create a web application with the following functionalities:

- Add new students with details like first name, last name, and email.
- View a list of all registered students.
- Retrieve details of a specific student by searching with their ID.
- Delete student records from the system.

Please refer to the [backend/BACKEND_README.md](backend/BACKEND_README.md) & [frontend/FRONTEND_README.md](frontend/FRONTEND_README.md) to find the respective project instructions.

## Commands

 ### Install Packages: 
 ```bash
 npm install
 ```
This command will run automatically when the IDE is launched. However, if stopped, you may need to run it manually.


 ### Start MongoDB: 
 ```bash
 mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log
 ```
This command will run automatically when the IDE is launched. However, if stopped, you may need to run it manually.

### Start Frontend Dev Server: 
 ```bash
 npm run client
 ```

This command will start the dev server. You can view the **Live Preview** once the server is started in multiple ways:
 - Click the `Preview in Editor` option that pops up at the bottom-right corner
 - Click the Open `Preview` option in the `Run` menu

 ### Start Backend API Server: 
 ```bash
 npm run server
 ```

This command will start the server. 
- Once the server is started, navigate to the Thunder Client's tab  ![Thunder client's tab](https://media-doselect.s3.amazonaws.com/generic/ryM78VN71g10k2dKr9K2wGYwo/ThunderClientLogo.png) and click on `New Request`.
- Test the API endpoints by sending specific requests to http://localhost:8002/{endpoints}. You can view the JSON response in the "Response" tab.

### Concurrently Start Both Servers: 
 ```bash
 npm start
 ```
 This command will concurrently start both servers.

 ### Run Frontend Test Cases: 
 ```bash
 npm run testclient
 ```
 This will run the frontend test cases in the terminal.

  ### Run Backend Test Cases: 
 ```bash
 npm run testserver
 ```
 This will run the test cases in the terminal.

 ### Run Test Cases: 
 ```bash
 npm test
 ```
 This will run the all test cases in the terminal.

>These commands can be executed in the terminal or by selecting options from the `Run` menu.

## Environment 

- Angular Version: 15.0.4
- Node Version: 14.21.3
- MongoDB Version: 7.0.3
- Frontend Default Port: 8000
- Backend Default Port: 8002# EkartFullStack
