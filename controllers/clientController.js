// controllers/clientController.js

const Listing = require("../models/listing");

exports.getAllListings = async (req, res) => {
  const { category } = req.query;
  try {
    const query = category && category !== "All" ? { category } : {};
    const listings = await Listing.find(query);
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllFilteredListings = async (req, res) => {
  try {
    const { title, category } = req.query;
    let filter = {};
    if (title) {
      filter.title = title;
    }
    if (category) {
      filter.category = category;
    }
    const listings = await Listing.find(filter);
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong, please try again later." });
  }
};

exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.json(listing);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
