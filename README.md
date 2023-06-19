# project_buycars


[Deployed Backend link](https://buycar-backend-j259.onrender.com)
[Deployed Website](https://dainty-nougat-9bb2ff.netlify.app)
---

# Buycars.com API Documentation

This documentation provides an overview of the Buycars.com API, which allows users to register, login, manage user accounts, and perform inventory-related operations.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Endpoints](#endpoints)
   - [User Endpoints](#user-endpoints)
   - [Inventory Endpoints](#inventory-endpoints)
3. [Authentication and Authorization](#authentication-and-authorization)

## Getting Started

To use the Buycars.com API, you need to have Node.js and MongoDB installed on your machine. Follow the steps below to set up the project:

1. Clone the repository: `git clone https://github.com/Jishnuraj2001/project_buycars.git`
2. Navigate to the project directory: `cd backend`
3. Install dependencies: `npm install`
4. Create a `.env` file in the project root directory and provide the necessary environment variables.
5. Start the server: `npm start`

## Endpoints

The Buycars.com API provides the following endpoints:

### User Endpoints

- **POST /register**: Register a new user. This endpoint requires the following parameters:
  - `name`: Name of the user
  - `email`: Email address of the user
  - `password`: Password for the user account
  - `role`: Role of the user (either "customer" or "dealer")

- **POST /login**: Login an existing user. This endpoint requires the following parameters:
  - `email`: Email address of the user
  - `password`: Password for the user account

- **GET /alluser**: Get a list of all users. This endpoint requires authentication and authorization.

### Inventory Endpoints

- **POST /addcar**: Add a new car to the inventory. This endpoint requires authentication and authorization. It accepts the following parameters:
  - `brand`: Brand of the car
  - `model_name`: Model name of the car
  - `model_year`: Model year of the car
  - `color`: Color of the car
  - `odometer_km`: Odometer reading of the car
  - `major_accidents`: Number of major accidents the car has been involved in
  - `previous_owners`: Number of previous owners of the car
  - `registration_place`: Place of car registration
  - `description`: Description of the car
  - `image`: Image URL of the car
  - `userID`: ID of the user adding the car (authenticated user)
  
- **GET /allcars**: Get a list of all cars in the inventory.

- **DELETE /deletecar/:id**: Delete a car from the inventory. This endpoint requires authentication and authorization. It accepts the car ID as a parameter in the URL.

## Authentication and Authorization

The Buycars.com API uses JWT (JSON Web Tokens) for authentication and authorization. When a user registers or logs in successfully, a JWT token is returned, which must be included in the `Authorization` header of subsequent requests.

To authenticate a request, add the JWT token to the `Authorization` header in the format: `<token>`. The API verifies the token's authenticity and extracts the user ID and role for authorization purposes.

The API also includes middleware functions to ensure that only authorized users can access certain endpoints. The `authenticator` middleware validates the JWT token, while the `authorizer` middleware checks if the user's role matches the required roles for a specific endpoint.


## Technology Stack

The Buycars.com API is built using the following technologies:

- Node.js: A JavaScript runtime environment for server-side development.
- Express: A fast and minimalist web application framework for Node.js.
- MongoDB: A NoSQL database for storing user and inventory data.
- Mongoose: An object data modeling (ODM) library for MongoDB and Node.js.
- Bcrypt: A library for hashing passwords.
- JSON Web Tokens (JWT): A standard for securely transmitting information as a JSON object.

## Conclusion

The Buycars.com API provides endpoints for user registration, login, managing user accounts, and inventory management. It is built using Node.js, Express, and MongoDB. The API incorporates authentication and authorization using JWT tokens, ensuring that only authenticated and authorized users can access certain resources and perform specific actions.

To get started, follow the instructions in the "Getting Started" section of this documentation. Refer to the provided code for more details on the available endpoints and their parameters.
