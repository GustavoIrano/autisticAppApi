const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/autisticApp', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;

