const moment = require("moment");
const age = require("../ages").EarlyMiddleAges.key;

module.exports = {
  key: "copper",
  age: age,
  building: {
    resources: {
      coins: 6000,
      supplies: 10300
    },
    time: moment.duration({ hours: 3, minutes: 50 }),
    size: {
      length: 4,
      width: 3
    },
    population: 340,
    connection: 1
  },
  unrefined: null
};
