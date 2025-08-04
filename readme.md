# Node.js + Express API Project

This is a Node.js + Express RESTful API project backed by a MySQL database, designed for a school assignment. The project includes full CRUD operations, search functionality, pagination, and a simple documentation page.

---

## Features

- RESTful API using Express.js
- MySQL database (managed via phpMyAdmin or MySQL CLI)
- Two fully functional CRUD interfaces:
  - `users`
  - `posts`
- Input validation (empty fields, numeric fields, name checks)
- Pagination support using `limit` and `offset`
- Search endpoint by specific fields
- HTML documentation at root (`/`) listing all API endpoints

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup database

if you are using phpMyAdmin

PhpMyAdmin
- 1. Open PhpMyAdmin
- 2. Create a new database
- 3. import the provided SQL schema

other databases

- SQL command can be found in the schema.sql file

## Configure Database connection

Create and setup your .env file. There is an example file if you need help.

## Run the server

```bash
npm start
```

## Users API Endpoints

| **Method** | **Endpoint**                     | **Description**                     |
|------------|-----------------------------------|-------------------------------------|
| GET        | `/users`                        | Retrieve a list of all users        |
| GET        | `/users/:id`                    | Retrieve details of a specific user |
| POST       | `/users`                        | Create a new user                   |
| PUT        | `/users/:id`                    | Update an existing user             |
| DELETE     | `/users/:id`                    | Delete a user                       |
| GET        | `/users?limit=10&offset=0`      | Retrieve paginated users            |
| GET        | `/users?search=John`            | Search users by name                |

---

## Posts API Endpoints

| **Method** | **Endpoint**                     | **Description**                     |
|------------|-----------------------------------|-------------------------------------|
| GET        | `/posts`                        | Retrieve a list of all posts        |
| GET        | `/posts/:id`                    | Retrieve details of a specific post |
| POST       | `/posts`                        | Create a new post                   |
| PUT        | `/posts/:id`                    | Update an existing post             |
| DELETE     | `/posts/:id`                    | Delete a post                       |

## API endpoints examples
### User API endpoints

- get all users
```bash
curl -X GET http://localhost:3000/users
```

- get a specific user
```bash
curl -X GET http://localhost:3000/users/1
```

- create a new user
```bash
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "age": 25}'
```

- update a user
```bash
curl -X PUT http://localhost:3000/users/1 \
-H "Content-Type: application/json" \
-d '{"name": "Jane Doe", "age": 30}'
```
- delete a user
```bash
curl -X DELETE http://localhost:3000/users/1
```

- retrieve paginated user
```bash
curl -X GET "http://localhost:3000/users?limit=10&offset=0"
```

-search user by name
```bash
curl -X GET "http://localhost:3000/users?search=John"
```

### Posts API endpoints
- get all posts
```bash
curl -X GET http://localhost:3000/posts
```

- get a specific post
```bash
curl -X GET http://localhost:3000/posts/1
```

- create a new post
```bash
curl -X POST http://localhost:3000/posts \
-H "Content-Type: application/json" \
-d '{"title": "My First Post", "content": "This is the content of the post."}'
```

- update an exixting post
```bash
curl -X PUT http://localhost:3000/posts/1 \
-H "Content-Type: application/json" \
-d '{"title": "Updated Post Title", "content": "Updated content of the post."}'
```

- delete a post
```bash
curl -X DELETE http://localhost:3000/posts/1
```

# Technologies used

## Backend
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for creating RESTful APIs.

## Database
- **MySQL**: Relational database for storing and managing data.
- **phpMyAdmin**: Web-based interface for managing MySQL databases (optional).

## Middleware
- **body-parser**: Middleware for parsing incoming JSON requests.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **dotenv**: Module for managing environment variables.

## Database Driver
- **mysql2**: MySQL driver for Node.js with promise support.

## Frontend
- **HTML**: Documentation page for API endpoints.

# Tools used
- VS code
- github copilot
- chat GPT:https://chatgpt.com/share/6890c969-dc3c-8003-9808-fce9692bedaa