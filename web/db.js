const mongoose = require('mongoose');

mongoose.connect(
  process.env.DATABASE, {
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  console.error(err.message);
  console.log('Yo');
});

mongoose.connection.once('open', () => {
  console.log('Connected!');
});