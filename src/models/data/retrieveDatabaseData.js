const {getSQLStartingAndEndingDate} = require("../../helpers/");
const getDataFromDB = require("../../db/getDataFromDB.js");

const retrieveDatabaseData = async (currentDateISO, tableName) => {
	try{
		const {startingDate, endingDate} = getSQLStartingAndEndingDate(currentDateISO);
		console.log(startingDate);
		console.log(endingDate);
		const databaseData = await getDataFromDB(startingDate, endingDate, tableName);
		return databaseData;
	}
	catch(error){
		throw error;
	}
}

module.exports = retrieveDatabaseData;
