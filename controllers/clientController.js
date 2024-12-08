// controllers/clientController.js

const Listing = require("../models/listing");

// Fetch all listings for the client
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find(); // Fetch all listings from DB
    res.json(listings); // Send the listings in response
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllFilteredListings = async (req, res) => {
  try {
    // Get title and category from the query parameters (req.query)
    const { title, category } = req.query;

    // Create a filter object to pass to the find method
    let filter = {};

    // If a title is provided, add it to the filter
    if (title) {
      filter.title = title;
    }

    // If a category is provided, add it to the filter
    if (category) {
      filter.category = category;
    }

    // Fetch listings from the database that match the filter
    const listings = await Listing.find(filter);

    // Return the found listings
    res.json(listings);
  } catch (error) {
    // Handle errors
    res
      .status(500)
      .json({ error: "Something went wrong, please try again later." });
  }
};

// Fetch a specific listing by ID
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id); // Find listing by ID

    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    res.json(listing); // Send the listing details
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
