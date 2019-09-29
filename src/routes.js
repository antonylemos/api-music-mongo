const express = require("express");

const MusicController = require("./controllers/MusicController");

const routes = new express.Router();

routes.post("/music", MusicController.store);
routes.get("/musics", MusicController.search);
routes.get("/music/:id", MusicController.searchId);

module.exports = routes;
