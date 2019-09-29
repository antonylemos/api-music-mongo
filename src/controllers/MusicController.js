const Music = require("../models/Music");

module.exports = {
  async store(req, res) {
    const music = await Music.create(req.body);

    return res.json(music);
  },

  async search(req, res) {
    await Music.find((err, musics) => {
      err ? console.log(err) : res.json(musics);
    });
  },

  async searchId(req, res) {
    const music = await Music.findById(req.params.id);

    return res.json(music);
  }
};
