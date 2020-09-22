const envFound = require('dotenv').config()

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development'


if (envFound.error) {
	// This error should crash whole process
  
	console.error(`
  ⚠️  Could not find .env file  ⚠️
    Please create a .env file with the appropriate properties
  `)
	process.exit(1)

}

module.exports = {
	port: parseInt(process.env.PORT, 10),
	db: {
		name: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD
	},
	tmdbApiKey: process.env.TMDB_API_KEY,

	/**
   * API configs
   */
	api: {
		prefix: '/api',
	}
}
