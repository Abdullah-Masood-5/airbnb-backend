const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Import static data for listings from JSON
const listings = require("../data/listings.json");
const bookingsFilePath = path.join(__dirname, "../data/Bookings.json");

// Helper function to read and write the bookings file
const readBookings = () => {
  try {
    const data = fs.readFileSync(bookingsFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading bookings file:", err);
    return [];
  }
};

const writeBookings = (bookings) => {
  try {
    fs.writeFileSync(bookingsFilePath, JSON.stringify(bookings, null, 2));
  } catch (err) {
    console.error("Error writing to bookings file:", err);
  }
};
router.get("/", (req, res) => {
  res.json(listings); // Respond with all listings in JSON format
});
// Get all listings
router.get("/search", (req, res) => {
  const query = req.query.query || "";
  console.log(query);
  const filteredListings = listings.filter(
    (listing) => listing.location && listing.location.includes(query)
  );

  res.json(filteredListings);
});
// Get listing details by ID
router.get("/:id", (req, res) => {
  const listingId = parseInt(req.params.id, 10);
  const listing = listings.find((item) => item.id === listingId);

  if (!listing) {
    return res.status(404).json({ message: "Listing not found" });
  }

  res.json(listing);
});

// Search listings by location
router.get("/search", (req, res) => {
  const query = req.query.query?.toLowerCase() || "";
  const filteredListings = listings.filter((listing) =>
    listing.location.toLowerCase().includes(query)
  );

  res.json(filteredListings);
});

// Create a booking (mock and save to Bookings.json)
router.post("/bookings", (req, res) => {
  const { listingId, userName, dates } = req.body;

  if (!listingId || !userName || !dates) {
    return res
      .status(400)
      .json({ message: "Missing required booking details" });
  }

  // Check if the listing exists
  const listing = listings.find((item) => item.id === listingId);
  if (!listing) {
    return res.status(404).json({ message: "Listing not found" });
  }

  // Read existing bookings
  const bookings = readBookings();

  // Create a new booking object
  const newBooking = {
    id: bookings.length + 1, // Auto-increment booking ID
    listingId,
    userName,
    dates,
    status: "confirmed", // Default status
  };

  // Add new booking to the bookings array
  bookings.push(newBooking);

  // Write the updated bookings back to the Bookings.json file
  writeBookings(bookings);

  // Return the response with the created booking
  res
    .status(201)
    .json({ message: "Booking created successfully", booking: newBooking });
});

module.exports = router;
