const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test', { 
  useNewUrlParser: true,
  useFindAndModify: false 
});
mongoose.connection
  .once('open', () => console.log('Connected to test database...'))
  .on('error', (error) => {
    console.warn('Error: ', error);
  });

beforeEach((done) => {
  mongoose.connection.collections.jobs.drop(() => {
    mongoose.connection.collections.users.drop(() => done())
  })
})