const controller = require("../controllers/");

const dataRoutes = (app) => {
    app.get('/data/', async (req, res) => await controller.data.getWeatherStationData(req, res));
}

module.exports = dataRoutes;
