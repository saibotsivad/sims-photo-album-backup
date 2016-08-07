# sims-photo-album-backup

Automatically export and save Sims 2 photo albums as they change.

## install

Install the normal npm way:

```sh
npm install sims-photo-album-backup
```

## use

Call it with an options object containing the two variables:

* `options.neighborhoodPath` : Path to the Sims 2 Neighborhood folder.
* `options.backupPath` : Path to save backup files.

Then use it like:

```js
var albumBackup = require('sims-photo-album-backup')
var options = {
	neighborhoodPath: '/Users/me/Games/Sims2/Neighborhood',
	backupPath: '/Users/me/Backup/Sims2Albums/'
}
albumBackup(options)
```

## bugs and requests

If you find a bug or want to make a request, please file an [issue](https://github.com/tobiaslabs/sims-photo-album-backup/issues).

## license

[VOL](http://veryopenlicense.com/)
