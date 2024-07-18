# School Management System Backend (MERN Stack)

This document outlines the backend API specifications for a school management system application built with Express.js and MongoDB.

## Project Goal

The goal is to develop a RESTful API that facilitates the management of student data within a school system. The API provides functionalities for:

- Adding new students.
- Retrieving a list of all registered students.
- Retrieving details of a specific student using their ID.
- Updating existing student information.
- Deleting student records.

## API Endpoints

The API exposes the following endpoints for CRUD operations on student data:

1. **Save Student**
    - **Method:** POST
    - **URL:** `/student`
    - **Request Body:** 
        ```json
        {
            "firstName": "String (Required)",
            "lastName": "String (Required)",
            "email": "String (Required)"
        }
        ```
    - **Response Codes:**
        - `201 Created`: 
            - Response body: 
                ```json
                "Student added with id: {_id}"
                ```
        - `400 Bad Request`: 
            - Response body: 
                ```json
                "Error message describing the validation issue"
                ```
        - `500 Internal Server Error`: 
            - Response body: 
                ```json
                "Unexpected error during student creation"
                ```

2. **Get All Students**
    - **Method:** GET
    - **URL:** `/students`
    - **Request Body:** None
    - **Response Codes:**
        - `200 OK`: 
            - Response body: 
                ```json
                [Array of student objects]
                ```
        - `404 Not Found`: 
            - Response body: 
                ```json
                "No Student found"
                ```

3. **Get Student by ID**
    - **Method:** GET
    - **URL:** `/student/{studentId}`
    - **Path Parameter:**
        - `{studentId}`: (String) ID of the student to retrieve.
    - **Request Body:** None
    - **Response Codes:**
        - `200 OK`: 
            - Response body: 
                ```json
                "Student object with details"
                ```
        - `404 Not Found`: 
            - Response body: 
                ```json
                "No student with given id"
                ```

4. **Update Student**
    - **Method:** PUT
    - **URL:** `/student/{studentId}`
    - **Path Parameter:**
        - `{studentId}`: (String) ID of the student to update.
    - **Request Body:** 
        ```json
        {
            "firstName": "String (Optional)",
            "lastName": "String (Optional)",
            "email": "String (Optional)"
        }
        ```
    - **Response Codes:**
        - `204 No Content`: 
            - No content in the response body.
        - `400 Bad Request`: 
            - Response body: 
                ```json
                "Error message describing the validation issue"
                ```
        - `404 Not Found`: 
            - Response body: 
                ```json
                "No student with given id"
                ```

5. **Delete Student**
    - **Method:** DELETE
    - **URL:** `/student/{studentId}`
    - **Path Parameter:**
        - `{studentId}`: (String) ID of the student to delete.
    - **Request Body:** None
    - **Response Codes:**
        - `200 OK`: 
            - No content in the response body.
        - `404 Not Found`: 
            - Response body: 
                ```json
                "No student with given id"
                ```

## Error Handling

In case of unexpected errors during API requests, a response code of `500 (Internal Server Error)` will be returned along with an error object containing details about the encountered issue.

## Implementation Files

The backend logic for this API is implemented in the following files:

- [controllers/student.controller.js](controllers/student.controller.js): This file contains functions for handling student data operations (CRUD).
- [routes/student.route.js](routes/student.route.js): This file defines the API endpoints and maps them to the corresponding controller functions.

These files require completion to achieve the desired functionalities.

#### Go to [README.md](../README.md) or [FRONTEND_README.md](../frontend/FRONTEND_README.md)