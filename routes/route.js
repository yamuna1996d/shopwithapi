var express = require('express');
var { model } = require('../models/model');
const routers = express.Router();
routers.get('/', (req, res) => {
    res.send('Hai');
});
routers.get('/view', async (req, res) => {
    try {
        var result = await model.find();
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
});
module.exports = routers