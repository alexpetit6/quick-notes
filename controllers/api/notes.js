const Note = require('../../models/note')

module.exports = {
  index
}

async function index(req, res) {
  console.log('notes-controller')
  notes = await Note.find({user: req.user._id});
  console.log(notes)
  res.json(notes)
}