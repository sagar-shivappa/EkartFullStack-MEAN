# Angular : School Management App

This project is a basic student management application built with Angular.

## Features

- Add new students with first name, last name, and email.
- Display a table with existing student data.
- Delete students.

## Project Structure

The project consists of the following components:

- **[students-data.component.ts](src/app/components/students-data/students-data.component.ts)**: Contains the logic for fetching and displaying student data, adding new students, and deleting students.
- **[students-data.component.html](src/app/components/students-data/students-data.component.html)**: Defines the template for displaying the student data table and the `AddStudentForm` component.
- **[add-student-form.component.ts](src/app/components/add-student-form/add-student-form.component.ts)**: Handles user input for adding new students and emits an event with the new student data.
- **[add-student-form.component.html](src/app/components/add-student-form/add-student-form.component.html)**: Defines the template for the form to add new students.
- **[http-service.service.ts](src/app/services/http-service.service.ts)**: Provides methods for making HTTP requests to the backend server for fetching, adding, and deleting students.

## Implementation Details

### [students-data.component.ts](src/app/components/students-data/students-data.component.ts)

- **Fetches student data** on initialization using `getStudents` from `HttpService`.
- Defines methods for **adding** (`addStudent`) and **deleting** (`onDeleteClick`) students, updating the UI based on the response from the server.
- **Renders student data** in a table using Angular directives.
- **Listens for events** from `AddStudentForm` to add new students.

### [students-data.component.html](src/app/components/students-data/students-data.component.html) 

- Defines the table structure for displaying student data with the following specific IDs:
  -  All showing first name: `id="studentFirstName"`
  -  All showing last name: `id="studentLastName"`
  -  All showing email: `id="studentEmail"`
  -  Delete button: `id="deleteBtn-{student._id}"` having respective student id in place of {student._id}
- Includes the `AddStudentForm` component.

### [add-student-form.component.ts](src/app/components/add-student-form/add-student-form.component.ts)

- **Creates a new student object** with user input on form submission.
- Emits an event (`onAddStudent`) with the new student data when the **Add button** is clicked.
- **Clears input fields** after successful form submission.

### [add-student-form.component.html](src/app/components/add-student-form/add-student-form.component.html)

- Defines the **form elements** for adding student information (first name, last name, email) with these specific IDs:
  - **First name input:** `id="firstNameInput"`
  - **Last name input:** `id="lastNameInput"`
  - **Email input:** `id="emailInput"`
  - **Submit button:** `id="submitBtn"`
- Calls the `onSubmit` method on form submission and stores values using **two-way binding**.

### [http-service.service.ts](src/app/services/http-service.service.ts)

- Imports the **apiUrl** for making HTTP requests.
- Implements methods for:
  - `getStudents`: Fetches existing student data by making a request to `{apiUrl}students` endpoint
  - `addStudent`: Creates a new student record on the server by making a request to `{apiUrl}student` endpoint
  - `deleteStudent`: Deletes a student record based on ID by making a request to `{apiUrl}student/{student-id}` endpoint

## Expected Live Preview

![Live Preview](https://media-doselect.s3.amazonaws.com/generic/89APJr95xadKOzVwGe05YvOXn/SchoolManagementSystem.gif)

#### Go to [README.md](../README.md) or [BACKEND_README.md](../backend/BACKEND_README.md)