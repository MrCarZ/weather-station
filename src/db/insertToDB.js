const mysql = require("mysql2");
const fecha = require("fecha");
const mysqlConnector = require("./mysqlConnector.js");

const insertToDB = async (newMeasureObject) => {
	const {timestamp, temperature, humidity, pressure, lightningStrike} = newMeasureObject;
	const sql = "INSERT INTO LPDA_weather_station (timestamp, temperature, humidity, pressure, lightningStrike) VALUES (?,?,?,?,?);"
        const formattedTimestamp = fecha.format(timestamp, 'YYYY-MM-DD HH:mm:ss');
	const mysqlPromise = mysqlConnector.promise();
	const queryResult = await mysqlPromise.query(sql,[timestamp, temperature, humidity, pressure, lightningStrike]);
	
	return queryResult;
	
	/*	
	dbConnection.getConnection((err, connection) => {
		if(err) throw err;
		console.log("Connected! Inserting Data into Database");
		const sql = "INSERT INTO LPDA_weather_station (timestamp, temperature, humidity, pressure, lightningStrike) VALUES (?,?,?,?,?);"
		const formattedTimestamp = fecha.format(timestamp, 'YYYY-MM-DD HH:mm:ss');
		connection.query(sql,
				[timestamp, temperature, humidity, pressure, lightningStrike],
				(err, result) => {
					connection.release();
					if(err) throw err;
					console.log(result);
				})

	});
	*/
}

module.exports = insertToDB;
