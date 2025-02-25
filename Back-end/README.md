# API Documentation

## /users/register

### Description
This endpoint is used to register a new user. It validates the input data and creates a new user in the database.

### Method
POST

### Endpoint
`/users/register`

### Request Body
The request body should be a JSON object with the following structure:
```json
{
  "fullname": {
    "firstname": "string (min length 3)",
    "lastname": "string (min length 3)"
  },
  "email": "string (valid email format)",
  "password": "string (min length 6)"
}
```

### Response

#### Success (201 Created)
```json
{
  "token": "string (JWT token)"
}
```

#### Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (parameter name)",
      "location": "string (location of the parameter)"
    }
  ]
}
```

### Example Request
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
