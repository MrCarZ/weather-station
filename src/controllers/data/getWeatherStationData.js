const models = require("../../models/");

const getWeatherStationData = async (req, res) => {
	try{
		const { currentDateISO } = req.query;
		const weatherStationData = await models.data.retrieveDatabaseData(currentDateISO, "LPDA_weather_station");
		console.log(weatherStationData);
		res.send({
			weatherStationData: weatherStationData
		});
	}
	catch(err){
		console.log(err);
		res.sendStatus(500);
	}
}

module.exports = getWeatherStationData;
