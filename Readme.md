# Airbnb Backend

This project is a simple backend for an Airbnb-like application. It provides APIs to manage listings and bookings.

## Project Structure
```plaintext
.env
.gitignore
data/
    Bookings.json
    listings.json
package.json
routes/
    listings.js
server.js
```


### Files and Directories

- **.env**: Environment variables configuration file.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **data/**: Directory containing JSON files for listings and bookings data.
  - **Bookings.json**: Contains booking data.
  - **listings.json**: Contains listing data.
- **package.json**: Contains project metadata and dependencies.
- **routes/**: Directory containing route handlers.
  - **listings.js**: Route handlers for listings and bookings.
- **server.js**: Main server file to start the Express.js application.

## API Endpoints

### Listings

- **GET /api/listings**: Get all listings.
- **GET /api/listings/search**: Search listings by location.
  - Query parameter: `query` (string) - Location to search for.
- **GET /api/listings/:id**: Get listing details by ID.

### Bookings

- **POST /api/listings/bookings**: Create a new booking.
  - Request body parameters:
    - `listingId` (number) - ID of the listing to book.
    - `userName` (string) - Name of the user making the booking.
    - `dates` (array) - Dates for the booking.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
3. Create a `.env` file where write : `PORT =` and give any port  Number
4. Start the server

```bash
npm start
```
_____________________________________________________