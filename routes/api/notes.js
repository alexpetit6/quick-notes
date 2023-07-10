const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const notesCtrl = require('../../controllers/api/notes')
//All paths start with '/api/notes'

router.get('/', ensureLoggedIn, notesCtrl.index)
router.post('/', ensureLoggedIn, notesCtrl.create)

module.exports = router;
