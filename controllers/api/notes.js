const Note = require('../../models/note')

module.exports = {
  index,
  create
}

async function index(req, res) {
  notes = await Note.find({user: req.user._id});
  res.json(notes)
}

async function create(req, res) {
  req.body.user = req.user._id
  note = await Note.create(req.body)
}