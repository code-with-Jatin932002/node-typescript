# Node.js + TypeScript Boilerplate 🛠️

A clean and modular boilerplate for building scalable Node.js applications using **TypeScript**, **MongoDB**, and **Express**.

---

## 🚀 Features

- ✅ **TypeScript** support
- ✅ **Express** for routing
- ✅ **MongoDB** with Mongoose
- ✅ Layered architecture: Controllers, Services, DAOs
- ✅ **JWT Authentication**
- ✅ DTOs for request validation
- ✅ Middleware: Error handling, Auth, Logging
- ✅ ESLint + Prettier configuration
- ✅ Folder structure for scaling

---

## 📁 Folder Structure

src/
├── config/ # Environment config
├── controllers/ # Route logic
├── daos/ # MongoDB data access layer
├── database/ # DB connection
├── dtos/ # Data Transfer Objects
├── interfaces/ # TypeScript interfaces
├── middleware/ # Auth, error handling, logging
├── models/ # Mongoose models
├── routes/ # Route definitions
├── services/ # Business logic
├── utils/ # Logger and helpers
├── app.ts # Main app entry
├── server.ts # Server bootstrap


---

## 🛠️ Setup & Run

### 1. Clone the repo

```bash
git clone https://github.com/code-with-Jatin932002/node-typescript.git
cd node-typescript


2. Install dependencies

npm install

3. Create .env file

PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_jwt_secret_key

4. Run the server

# For development
npm run dev

# For production
npm run build
npm start


🧪 API Endpoints (Examples)
Auth Routes
POST /api/auth/register – Register user

POST /api/auth/login – Login user (returns JWT token)

User Routes
GET /api/users – Get all users

POST /api/users – Create a user

Product Routes
GET /api/products – Get all products

POST /api/products – Create product

Use Postman or similar tool to test routes.


✨ Contributing
Pull requests are welcome. For major changes, please open an issue first.



