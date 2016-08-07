var path = require('path')
var albumWatcher = require('sims-photo-album-watcher')
var albumLister = require('sims-photo-album-list')

module.exports = function simsPhotoAlbumBackup(options) {
	if (!options || !options.neighborhoodPath || !options.backupPath) {
		throw new Error('use correct options')
	}

	var watcher = albumWatcher(options.neighborhoodPath)
	watcher.on('save', function(photoAlbum) {
		// if the photoAlbum.stats.lastUpdatedDateThing is after the saved one, update and save
	})
}
