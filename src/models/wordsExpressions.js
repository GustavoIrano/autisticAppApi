const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const WordExpressionSchema = new mongoose.Schema({
    word_expression:{
        type: String,
        required: true,
    },
    meaning:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: false,
        select: false,
    }
},
    {collection: 'wordExpression'});

const WordExpression = mongoose.model('WordExpression', WordExpressionSchema);

module.exports = WordExpression;