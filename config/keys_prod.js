//module.exports = { mongoURI: 'mongodb+srv://Devadmin:Password123@devconnector-fh3lv.mongodb.net/test?retryWrites=true&w=majority'}
module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
}
