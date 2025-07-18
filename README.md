# 🧠 Mini Express.js API Server

A simple Node.js + Express.js server with token-based login, feed CRUD, pagination, rate limiting, input validation, and logging.

## 🚀 Features

- Login with hardcoded users
- base64 token authentication
- Create, Read, Update, Delete feeds
- Pagination on feed list
- Rate limiting (5 requests/min per IP)
- Input validation using express-validator
- Logging middleware for method & status code
- In-memory data (no DB)

## 📦 Setup

npm install
npm start

## 📡 Endpoints

1. POST /login => Accepts username and password in json format and Returns a token to be used in the Authorization header.

    { 
        "username": "user1", 
        "password": "pass123" 
    }

2. GET /feeds?page=1&limit=10 =>  Requires Authorization: Bearer {token}

3. POST /feeds => Requires Authorization: Bearer {token}. Create a new feed in thw json format:

    { 
        "title": "Test", 
        "content": "Sample content" 
    }

4. PUT /feeds/:id => Requires Authorization: Bearer {token}. Updates a feed by ID.

    { 
        "title": "Updated Title", 
        "content": "Updated content" 
    }

5. DELETE /feeds/:id => Requires Authorization: Bearer {token}. Delete a feed by ID.

## 💡 Notes

- Feeds and users are stored in-memory (not persistent)
- Restarting server will reset all feeds
- Designed for learning, prototyping, and interview practice

##  🔐 Sample Hardcoded Users 
    { 
        "Jayesh": "pass123", 
        "admin": "admin123" 
    }

## 👨‍💻 Author
Built by Jayesh Srivastava