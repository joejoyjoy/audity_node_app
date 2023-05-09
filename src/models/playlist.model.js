const { Schema, model } = require('mongoose')

const PlaylistSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	name: String,
	description: String,
	imageUrl: String,
	imagePublicId: String,
	publicAccessible: Boolean,
	totalTracks: Number,
	followers: Number,
	rating: Number,
	likedBy: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	tracks: [{
		type: Schema.Types.ObjectId,
		ref: 'Track',
		order: Number
	}]
	// collaborative: Boolean, //
	// thumbnail: String,
}, {
	timestamps: true
}
)

const PlaylistModel = model('Playlist', PlaylistSchema)

module.exports = PlaylistModel









