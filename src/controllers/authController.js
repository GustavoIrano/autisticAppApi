const express = require('express');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

const router = express.Router();

const WordExpression = require('../models/wordsExpressions');

router.get('/authenticate', async (req, res) => {
    const token = jwt.sign({ id: WordExpression.id }, authConfig.secret, {
        expiresIn: 86400,
    });

    return res.send({ token });
});

module.exports = app => app.use('/auth', router);