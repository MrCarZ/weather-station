const mysqlConnector = require("./mysqlConnector.js");

const getDataFromDB = async (startingDate, endingDate, dbTable) => {
	const mysqlPromise = mysqlConnector.promise();
	const sql = "SELECT timestamp, temperature, humidity, pressure, lightningStrike FROM ?? WHERE (timestamp BETWEEN ? AND ?);";
	const [rows, fields] = await mysqlPromise.query(sql,[dbTable, startingDate, endingDate]);
/*
	await dbConnection.getConnection(async (err, connection) => {
		if(err) throw err;
		console.log("Connected! Retrieving data from Database!")

		const select = () => { 
			return new Promise((resolve, reject) => {
					connection.query(sql, [dbTable, startingDate, endingDate], (err, result) => {
						connection.release();
						if(err) return reject(err);
						const formattedResult = JSON.parse(JSON.stringify(result));
						return resolve(formattedResult);
					})
			})
		}
		data = await select();
	}).then(data => console.log(data));
*/

	return rows;
};

module.exports = getDataFromDB
