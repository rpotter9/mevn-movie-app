const path = require('path'),
	fs = require('fs'),
	config = require('../config')

/**
 * Registers routes for express router
 */
exports.registerRoutes = app => {
	//@ require all controllers here
	fs.readdirSync('./routes')
		.filter(file => {
			return file != 'index.js'
		})
		.forEach(file => {
		
			let fileObj = require(path.resolve(`./routes/${file}`))

			app.use(config.api.prefix + fileObj.base, fileObj.router)
		})
		
}