const express = require('express');
const cors = require('cors');
const { item, plate } = require('./api');

module.exports = async (app) => {
    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limite: '1mb' }));
    app.use(cors());

    // api    
    item(app);
}