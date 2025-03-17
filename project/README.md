# Express.js Authentication & CRUD API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication Endpoints

### Register a New User
```http
POST /auth/register
```

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Response:**
- `201 Created`: User successfully registered
- `400 Bad Request`: User already exists
- `500 Internal Server Error`: Server error

### Login
```http
POST /auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Response:**
- `200 OK`: Successfully logged in
  ```json
  {
    "token": "jwt_token_here"
  }
  ```
- `401 Unauthorized`: Invalid credentials
- `500 Internal Server Error`: Server error

### Logout
```http
POST /auth/logout
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
- `200 OK`: Successfully logged out
- `401 Unauthorized`: Authentication required

## User Endpoints

All user endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

### Get User Profile
```http
GET /users/profile
```

**Response:**
- `200 OK`: Returns user profile
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "createdAt": "2024-03-21T10:00:00.000Z",
    "updatedAt": "2024-03-21T10:00:00.000Z"
  }
  ```
- `401 Unauthorized`: Authentication required
- `404 Not Found`: User not found

### Update User Profile
```http
PUT /users/profile
```

**Request Body:**
```json
{
  "username": "newusername",
  "email": "newemail@example.com"
}
```

**Response:**
- `200 OK`: Profile updated successfully
- `401 Unauthorized`: Authentication required
- `404 Not Found`: User not found
- `500 Internal Server Error`: Server error

### Delete Account
```http
DELETE /users/account
```

**Response:**
- `200 OK`: Account deleted successfully
- `401 Unauthorized`: Authentication required
- `500 Internal Server Error`: Server error

## Error Responses

The API returns error responses in the following format:
```json
{
  "message": "Error description here"
}
```

## Authentication

The API uses JWT (JSON Web Token) for authentication. After successful login, you'll receive a token that should be included in subsequent requests in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Environment Variables

The application requires the following environment variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth-crud
JWT_SECRET=your-super-secret-key-change-this-in-production
```

## Dependencies

- express: Web framework
- bcryptjs: Password hashing
- jsonwebtoken: JWT authentication
- mongoose: MongoDB ODM
- cookie-parser: Cookie parsing middleware
- cors: Cross-Origin Resource Sharing
- dotenv: Environment variable management

## Database Schema

### User Model

```javascript
{
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  timestamps: true
}
```