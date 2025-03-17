# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication Routes

### Register a new user
```http
POST /auth/register
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string"
}

Response (201):
{
  "message": "User created successfully"
}
```

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}

Response (200):
{
  "token": "string"
}
```

### Logout
```http
POST /auth/logout

Response (200):
{
  "message": "Logged out successfully"
}
```

## User Routes
All user routes require Authentication header: `Authorization: Bearer {token}`

### Get User Profile
```http
GET /users/profile

Response (200):
{
  "_id": "string",
  "username": "string",
  "email": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

### Update User Profile
```http
PUT /users/profile
Content-Type: application/json

{
  "username": "string",
  "email": "string"
}

Response (200):
{
  "message": "Profile updated successfully"
}
```

### Delete Account
```http
DELETE /users/account

Response (200):
{
  "message": "Account deleted successfully"
}
```

## Todo Routes
All todo routes require Authentication header: `Authorization: Bearer {token}`

### Create Todo
```http
POST /todos
Content-Type: application/json

{
  "title": "string",
  "description": "string"
}

Response (201):
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "completed": false,
  "user": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

### Get All Todos
```http
GET /todos

Response (200):
[
  {
    "_id": "string",
    "title": "string",
    "description": "string",
    "completed": boolean,
    "user": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
]
```

### Get Todo by ID
```http
GET /todos/:id

Response (200):
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "completed": boolean,
  "user": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

### Update Todo
```http
PUT /todos/:id
Content-Type: application/json

{
  "title": "string",
  "description": "string",
  "completed": boolean
}

Response (200):
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "completed": boolean,
  "user": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

### Delete Todo
```http
DELETE /todos/:id

Response (200):
{
  "message": "Todo deleted successfully"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "message": "Error message describing the issue"
}
```

### 401 Unauthorized
```json
{
  "message": "Authentication required"
}
```

### 403 Forbidden
```json
{
  "message": "Invalid or expired token"
}
```

### 404 Not Found
```json
{
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Something went wrong!"
}
```