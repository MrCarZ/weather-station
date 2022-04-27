const fecha = require("fecha");

const getSQLStartingAndEndingDate = (currentDateISO) => {
	 const currentDate = new Date(currentDateISO);
         const unformattedStartingDate = new Date(currentDate.setHours(0,0,0,0));
         const unformattedEndingDate = new Date(currentDate.setHours(23, 59, 59, 99));

         const startingDate = fecha.format(unformattedStartingDate, 'YYYY-MM-DD HH:mm:ss');
         const endingDate = fecha.format(unformattedEndingDate, 'YYYY-MM-DD HH:mm:ss');

	return {startingDate, endingDate};
}

module.exports = getSQLStartingAndEndingDate;
