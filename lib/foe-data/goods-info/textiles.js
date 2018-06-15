const moment = require("moment");
const age = require("../ages").IndustrialAge.key;

module.exports = {
  key: "textiles",
  age: age,
  building: {
    resources: {
      coins: 45000,
      supplies: 102000
    },
    time: moment.duration({ hours: 14, minutes: 30 }),
    size: {
      length: 3,
      width: 4
    },
    population: 1020,
    connection: 1
  },
  unrefined: null
};
