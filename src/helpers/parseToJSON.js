const parseToJSON = async (data) => {
    const newLine = data.split(",")
    const dataAsObject = {};
    const properties =
      newLine[0] == 1
        ? [
            "type",
            "year",
            "month",
            "day",
            "hour",
            "minute",
            "second",
            "temperature",
            "humidity",
 	    "pressure",
	]
        : [
            "type",
            "year",
            "month",
            "day",
            "hour",
            "minute",
            "second",
            "microssecond",
          ];

    properties.map((value, index) => {
      dataAsObject[value] =
        newLine[index] !== undefined ? Number(newLine[index]) : null;
    });


  const {
    type,
    year,
    month,
    day,
    hour,
    minute,
    second,
    microssecond,
    temperature,
    humidity,
    pressure,
  } = dataAsObject;

  const millisecond = (microssecond !== undefined) ? microssecond / 100 : null;

  const timestampUTC = Date.UTC(
    year,
    month-1, // Javascript Date Object is zero based for months
    day,
    hour,
    minute,
    second,
//    millisecond
  );

  const timestamp = new Date(timestampUTC);
  console.log(timestamp);

  const measureObject = {
    timestamp: timestamp,
    temperature: temperature ? temperature : null,
    humidity: humidity ? humidity : null,
    pressure: pressure ? pressure : null,
    lightningStrike: (type !== 1),
  };

    return measureObject;
  };

module.exports = parseToJSON;

