require('dotenv').config()

const PORT = process.env.PORT
const DATABASE_URI = process.env.DATABASE_URI

module.exports = {
    DATABASE_URI,
    PORT
}