const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  gender: String,
  rating: String,
  releaseYear: Number
});

module.exports = mongoose.model("Music", MusicSchema);
