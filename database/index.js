const mongoose = require('mongoose');

const mongoDB = 'mongodb://database/mvp';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error: ', err)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const Schema = mongoose.Schema;

let gratSchema = new Schema({
  word: String,
  count: Number,
  grat_id: Number,
})

let Store = mongoose.model('Gratitudes', gratSchema);

module.exports = {
  Gratitudes,
}