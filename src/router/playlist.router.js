const express = require('express')
const Playlist = require('../controllers/playlist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/playlists', md_auth.checkJwt, Playlist.getPlaylists)

module.exports = api;