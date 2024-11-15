const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

// Import the listings routes from the listings.js file
const listingsRoutes = require("./routes/listings");
const serverUrl = process.env.PORT;
// Middleware to parse JSON data
app.use(express.json());

// Use the listings routes under the '/api/listings' path
app.use("/api/listings", listingsRoutes);

// Start the server
app.listen(serverUrl, () => {
  console.log(`Server running at http://localhost:${serverUrl}`);
});
