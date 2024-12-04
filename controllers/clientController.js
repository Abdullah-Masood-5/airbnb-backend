// controllers/clientController.js

const Listing = require('../models/listing');

// Fetch all listings for the client
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find(); // Fetch all listings from DB
    res.json(listings); // Send the listings in response
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch a specific listing by ID
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id); // Find listing by ID

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    res.json(listing); // Send the listing details
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
