# Angular : Gadget Store

This project is a basic e-commerce application built with Angular.

## Features

- Login into website with username and password
- Display a table with existing products
- Display user cart after products have been added
- Delete product from cart

## Project Structure

The project consists of the following components:

- **[login.component.ts](src/app/components/login/login.component.ts)**: Contains logic for successfully logging.
- **[home.component.ts](src/app/components/home/home.component.ts)**: Loads list of products to add to cart.
- **[user.component.ts](src/app/components/home/user-cart/user-cart.component.ts)**: Loads products present in cart, where we can delete the product/products from cart.
- **[header.component.ts](src/app/components/header/header/header.component.ts)**: defines header for application where cart and home page button are present
- **[http-service.service.ts](src/app/services/http-service.service.ts)**: Provides methods for making HTTP requests to the backend server for fetching, adding, and deleting students.
- **[auth.service.ts](src/app/services/auth.service.ts)**: Provides login methods and generates token, simultaneously stores it and retreives it.
- **[auth.guard.ts](src/app/gaurd/auth.guard.ts)**: Checks if logged in, else redirect to login page
- **[auth.interceptor.ts](src/app/Interceptor/auth.interceptor.ts)**: Checks if logged in on every servcie call
- **[app-routing.module.ts](src/app/app-routing.module.ts)**: Prepare routes to different screens

## Implementation Details

### [login.component.ts](src/app/components/login/login.component.ts)

- **Listens for events** on changing user name and password.
- **Logs user in** on submitting username and password `login` method is called from authService
- **alerts** if credentials are wrong
- **Redirects** to home-page on successful login

### [login.component.html](src/app/components/login/login.component.html)

- **Loads login form screen** on enter user name and password.
- **Alerts** on successful or unsuccessful login
- **Submit** button `id="onSubmit"` to submit details
  -Calls the `onSubmit` method on form submission and stores values using **two-way binding**.

### [home.component.ts](src/app/components/home/home.component.ts)

- **Fetches products** on initialization using `getProducts` from `HttpService`.
- Defines methods for **adding** (`addStudent`), updating the UI based on the response from the server.
- **Render products** Angular directives.

### [home.component.ts](src/app/components/home/home.component.html) 

- Defines grid structure for displaying products with the following specifications in card like:
  -  All showing name: `id="product_name"`
  -  All showing description: `id="product_description"`
  -  All showing price: `id="price"`
  -  Add to cart button: `id="addToCart"` adding products to cart based on product id

## [user.component.ts](src/app/components/home/user-cart/user-cart.component.ts)

- **Loads** products added to cart after initializing based on caling `initFun` calling `cartByUserId` method from `http-service.service.ts` file
- **Delete from cart** using `deleteFromCart` method by calling `deleteFromCart` method from `http-service.service.ts` file
- Refreshes to sync with current cart products

## [user.component.html](src/app/components/home/user-cart/user-cart.component.html)

- **Loads** all the products stored in user's cart based on userId
- **Delete from cart** button for each product present in cart to remove product from cart
- **Displays** all the product from the cart with:
  -  All showing name: `id="product_name"`
  -  All showing description: `id="product_description"`
  -  All showing price: `id="price"`
  -  Add to cart button: `id="deleteFromCart"` delete products from cart based on product id
- Syncs everytime delete button is clicked

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
  - `getProduct`: Fetches existing products by making a request to `{apiUrl}/products` endpoint
  - `addToCart`: Creates a new student record on the server by making a request to `${url}/cart`endpoint with body {"user_id":userId, "product_id":product_id} 
  - `deleteFromCart`: Deletes a product record from cart based on ID by making a request to `${url}/cart/${userId}/${product_id}` endpoint
  - `cartByUserId` : laods cart for user based on userId, request endpoint is `${url}/cart/${userId}`

### [auth.service.ts](src/app/services/auth.service.ts)

- Imports the **apiUrl** for making HTTP requests.
- Implements methods for:
  - `login`: Fetches existing products by making a request to `{apiUrl}/login` endpoint
  - `setToken`: to store token in session storage
  - `getToken`: to load token everytime it is called
  - `logout`: remove token from storage
  - `isTokenExpired`: Checks if token is expired or not

## **[app-routing.module.ts](src/app/app-routing.module.ts)

- **Routes to different** pages like `login`, `products`, `user-cart`
  - `login` load `login.comoponent.ts`
  - `products` load `home.component.ts`
  - `cart` laod `user-cart.component.ts`
  - if url is incorrect it will redirect to `product` page
- Checks on token everytime url is hit using `auth.gaurd.ts` canActivate method as well as each call is intercepted with help of `auth.inceptor.ts`

## Expected Live Preview

![Live Preview](https://media-doselect.s3.amazonaws.com/generic/89APJr95xadKOzVwGe05YvOXn/SchoolManagementSystem.gif)

#### Go to [README.md](../README.md) or [BACKEND_README.md](../backend/BACKEND_README.md)