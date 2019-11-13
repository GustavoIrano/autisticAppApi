const express = require('express');
const authMiddleware = require('../middlewares/auth');

const WordExpression = require('../models/wordsExpressions');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) =>{
    //var type = req.body;
    var query = { type: "W" };
    const expressions = await WordExpression.find(query);

    return res.send({ expressions })
});

module.exports = app => app.use('/wordsExpressions', router);