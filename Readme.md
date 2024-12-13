# Airbnb Backend
This is the backend for an Airbnb application. The Airbnb Backend serves as the core of the application, enabling user authentication, profile management, listings management, and booking operations. It interacts with the frontend to provide a seamless experience for both guests and hosts.

### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Profile](#profile)
  - [Listings (Admin)](#listings-admin)
  - [Bookings](#bookings)
  - [Admin Bookings](#admin-bookings)
  - [Client](#client)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
#### Installation
1. Clone the repository:
``` bash
git https://github.com/Abdullah-Masood-5/airbnb-backend.git
cd airbnb-backend
```

2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret
```plaintext
MONGODB_URI = your_mongodb_uri
JWT_SECRET = your_jwt_secret
```
#### Usage
Start the server in development mode:
```bash
npm run dev
```
The server will start at `http:/localhost:500`.

#### API Endpoints

##### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

##### Profile
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile

##### Listings (Admin)
- `GET /api/admin/listings` - Get all listings for the logged-in host
- `POST /api/admin/listings` - Add a new listing
- `PUT /api/admin/listings/:id` - Update a listing by ID
- `DELETE /api/admin/listings/:id` - Delete a listing by ID

##### Bookings
- `POST /api/bookings`- Create a new booking
- `GET /api/bookings/get`-bookings - Get bookings for the logged-in guest

##### Admin Bookings
- GET /api/admin-bookings/bookings - Get bookings for the host's listings
Client
- `GET /api/listings` - Get all listings
- `GET /api/listings/search` - Get filtered listings
- `GET /api/listings/:id` - Get a listing by ID

##### Folder Structure
```plaintext
.env
.gitignore
controllers/
    adminBookingController.js
    adminController.js
    authController.js
    bookingController.js
    clientController.js
    profileController.js
images/
middleware/
    authMiddleware.js
models/
    booking.js
    listing.js
    user.js
mongoDB/
    db.js
package.json
routes/
    admin.js
    adminBookingRoutes.js
    auth.js
    bookingRoutes.js
    clientRoutes.js
    profile.js
server.js
```
##### Environment Variables
- `MONGODB_URI` - MongoDB conenction string
- `JWT_SECRET` - Secret ket for JWT
