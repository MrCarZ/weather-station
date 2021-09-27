const express = require('express');

const routes = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })

    app.use('/public/javascripts', express.static(__dirname + '/node_modules/chart.js/dist'));
    app.use('/client/chart', express.static(__dirname + '/client/chart'));



};

module.exports = routes;
