const moment = require("moment");
const age = require("../ages").TheFuture.key;

module.exports = {
  key: "purified_water",
  age: age,
  building: {
    resources: {
      coins: 220000,
      supplies: 481000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 7,
      width: 4
    },
    population: 4920,
    connection: 2
  },
  unrefined: "industrial_filters"
};
