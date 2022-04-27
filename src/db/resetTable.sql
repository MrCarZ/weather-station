USE weather_station;

DROP TABLE LPDA_weather_station;

CREATE TABLE IF NOT EXISTS LPDA_weather_station(
	id INT NOT NULL AUTO_INCREMENT,
	timestamp DATETIME NOT NULL,
	temperature DOUBLE,
	humidity DOUBLE,
	pressure DOUBLE,
	lightningStrike BOOL NOT NULL,
	PRIMARY KEY(id)
);
