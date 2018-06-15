const moment = require("moment");
const age = require("../ages").HighMiddleAges.key;

module.exports = {
  key: "salt",
  age: age,
  building: {
    resources: {
      coins: 14000,
      supplies: 27000
    },
    time: moment.duration({ hours: 7, minutes: 30 }),
    size: {
      length: 3,
      width: 4
    },
    population: 460,
    connection: 1
  },
  unrefined: null
};
