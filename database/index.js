const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/mvp';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error: ', err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const Schema = mongoose.Schema;

let userSchema = new Schema({
  firstName: String,
  lastName: String,
  // TODO: index email
  email: String,
  gratitudes: {},
});

let User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
