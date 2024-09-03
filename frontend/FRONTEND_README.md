# Angular : Ekart App

This project is a Ekart application built with Angular.

## Features

- Login with user name, password.
- Display all the products available.
- Add the products to the cart
- Remove the products from the cart.

## Project Structure

The project consists of the following components:

- **[login.component.ts](src/app/components/login/login.component.ts)**: Contains the logic for logging in using user_name and password.
- **[login.component.html](src/app/components/login/login.component.html)**: Defines the template for displaying the login form and the `LoginComponent` component
- **[header.component.ts](src/app/components/header/header.component.ts)**: Contains the logic for header component to display, App Title, cart button and logout button.
- **[header.component.html](src/app/components/header/header.component.ts)**: Defines the template for displaying App Title, cart button and logout button and the `HeaderComponent` component.
- **[home.component.ts](src/app/components/home/home.component.ts)**: Handles the fetching of all the available products and add to cart logic.
- **[home.component.html](src/app/components/home/home.component.html)**: Defines the template to display all the products with the product information, and button to add to the cart.
- **[user-cart.component.ts](src/app/components/user-cart/user-cart.component.ts)**: Handles the fetching of all the products in the cart and delete from the cart logic.
- **[user-cart.component.html](src/app/components/user-cart/user-cart.component.html)**: Defines the template to display all the products in the cart with the product information, and button to delete from the cart.
- **[http-service.service.ts](src/app/services/http-service.service.ts)**: Provides methods for making HTTP requests to the backend server for fetching, adding, and deleting students.
- **[auth.guard.ts](src/app/guard/auth.guard.ts)**: Provides canActivate method for token validation.
- **[auth.interceptor.ts](src/app/Interceptor/auth.interceptor.ts)**: Provides methods to attach the authorization token for all the http request.

## Implementation Details

### [login.component.ts](src/app/components/login/login.component.ts)

- **Does login process** using `login` from `HttpService`.
- Use **onSubmit()** function to call the `login` method from `HttpService` service.
- Pass username and password parameters
- On success, route the page to products, with window alter message "Login successful"
- Use **setToken** from AuthService to save the response, username, user_id and token in local storage
- If any error occurs, show the error message in window alert

### [login.component.html](src/app/components/login/login.component.html)

- Create a login page, with username and password field.
- Have a submit button for **Login** which should call, **onSubmit()** function from the class
- Consider having basic validations.
- Use the given CSS style or any thing of your own for better look

### [header.component.ts](src/app/components/header/header.component.ts)

- Header component has @input() navigationButtoName parameter to dynamically provide the button name.
- **goToButton()** decides the navigate to cart view or the products home page based on the @input() parameter navigationButtoName
- **logout()** uses `logout` from AuthService, to remove the session information

### [header.component.html](src/app/components/header/header.component.html)

- It shall container App Name, Go to Cart button and Logout option
- Add a button with the value `navigationButtoName`, value should be dynamically changed based on the route status, on click use **goToButton()** method for the navigation purpose.
- **logout()** method should be called for logout functionality.

### [home.component.ts](src/app/components/home/home.component.ts)

- home component handles 2 functionalities `get all products` and `Add the item to the cart`.
- As the component loads iniate the Get request using the method `getItems`.
- Use `getProducts` from `HttpService` service.
- If something goes wrong, redirect the user to login page.
- `addProductToCart` method takes `product id` as a parameter. This method should call `addToCart` from `HttpService` service.
- `addToCart` takes 2 parameters, user_id and product_id.
- call `getUserId` from `AuthService` to fetch user_id.
- if any error display the error in the window alert

### [home.component.html](src/app/components/home/home.component.html)

- Display all the `items` acquired from http request. Prefer showing , product_name, product_description,
  price, discount_percentage etc.,
- have a button, that calls `addProductToCart` method takes `product id` as a parameter.
- Prefer using available styles or feel free to use your own for better styling.

### [user-cart.component.ts](src/app/components/user-cart/user-cart.component.ts)

- user-cart component handles 2 functionalities `get all cart items` and `Delete the item to the cart`.
- As the component loads iniate the Get request using the method `getCartItems`.
- get `user id` using `getUserId()` from AuthService.
- pass `user id` as a parameter to `cartByUserId` from `HttpService` service
- set `cartItems` value using the response.
- If something goes wrong, redirect the user to login page.
- if any error display the error in the window alert.

### [user-cart.component.html](src/app/components/user-cart/user-cart.component.html)

- Display all the `cartItems` acquired from http request. Prefer showing , product_name, product_description,
  price, discount_percentage etc.,
- have a button, that calls `removeItem` method takes `product id` as a parameter.
- Prefer using available styles or feel free to use your own for better styling.

### [http-service.service.ts](src/app/services/http-service.service.ts)

- Imports the **apiUrl** for making HTTP requests.
- Implements methods for:
  - `login`: Login using user_name and password by making a POST request to `{apiUrl}login` endpoint
  - `getProducts`: Gets all the products list by making a GET request to `{apiUrl}products` endpoint
  - `addToCart`: Adds a product to the cart for a particular user_id and product_id by making a request to `{apiUrl}cart` endpoint
  - `deleteFromCart`: Delete a product to the cart for a particular user_id and product_id by making a DELETE request to `{apiUrl}cart/{user_id}/{product_id}` endpoint
  - `cartByUserId`: Gets all the items for a particular user_id by making a GET request to `{apiUrl}cart/{user-id}` endpoint

### [auth.service.ts](src/app/services/auth.service.ts)

- Imports the **apiUrl** for making HTTP requests.
- Implements methods for:
  - `setToken`: Sets all the key values for local storage, like user_id, user_name & token
  - `getToken`: Gets token from local storage
  - `getUserId`: Gets user_id from local storage
  - `getUserName`: Gets user_name from local storage
  - `logout` : Removes all the key values from local storage

### [auth.guard.ts](src/app/guard/auth.guard.ts)

Checks if the token is available in the local storage, if not available, redirect the user to login page.

### [auth-interceptor.ts](src/app/Interceptor/auth.interceptor.ts)

Checks if the token is available in the local storage, and adds the token as a authorisation headers. `Note`: Token type is **Bearer** Token

## Expected Live Preview

![Live Preview]

#### Go to [README.md](../README.md) or [BACKEND_README.md](../backend/BACKEND_README.md)
