export const parseToJSON = async (data) => {
    const newLine = data.split(",");
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
            "pressure",
            "humidity",
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
  
    return JSON.stringify(dataAsObject);
  };