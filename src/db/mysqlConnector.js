const mysql = require("mysql2");

const mysqlConnector = mysql.createPool({
        connectionLimit: 10,
        	dateStrings:true,
		host: process.env.DB_HOSTNAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	});

module.exports = mysqlConnector;

