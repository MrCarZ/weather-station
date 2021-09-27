//var Chart = require("chart.js");

class linearChart {
  constructor(id, datapoints) {
    this.chartID = id;
    this.datapoints = datapoints;
    this.data = {
      labels: datapoints.label,
      datasets: [
        {
          labels: "temperature",
          data: datapoints.temperature,
          borderColor: "#000000",
          cubicInterpolationMode: "monotone",
        },
      ],
    };
    this.config = {
      type: "line",
      data: this.data,
      options: {
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: "LPDA Weather Station Measurement System - Temperature",
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            text: "Temperature (°C)",
          },
        },
      },
    };

    this.chart = new Chart(this.chartID, this.config);
  }

  addToChart = (newData) => {
    this.chart.data.labels.push(newData.label);
    this.chart.data.datasets.forEach((dataset) => {
      dataset.data.push(newData.temperature);
    });
    this.chart.update();
  };

  removeFromChart = () => {
    this.chart.data.labels.pop();
    this.chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    this.chart.update();
  };
}
