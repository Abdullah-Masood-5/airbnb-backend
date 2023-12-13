const Listing = require('../models/listing');

exports.getAllListings = async (req, res) => {
  try {
    const hostId = req.user.id;
    const listings = await Listing.find({ hostId });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addListing = async (req, res) => {
  try {
    const { title, category, description, price, location } = req.body;
    const images = req.files.map(file => file.path);

    const newListing = new Listing({
      title,
      description,
      price,
      location,
      images,
      category,
      hostId: req.user.id
    });
    await newListing.save();
    res.status(201).json({ message: 'Listing created successfully', listing: newListing });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateListing = async (req, res) => {
  try {
    const { title, category, description, price, location } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];

    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    listing.title = title || listing.title;
    listing.description = description || listing.description;
    listing.price = price || listing.price;
    listing.location = location || listing.location;
    listing.category = category || listing.category;

    if (images.length > 0) {
      listing.images = images;
    }

    await listing.save();

    res.json({ message: 'Listing updated successfully', listing });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteListing = async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
