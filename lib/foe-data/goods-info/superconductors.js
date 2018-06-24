const moment = require("moment");
const age = require("../ages").TheFuture.key;

module.exports = {
  key: "superconductors",
  age: age,
  building: {
    resources: {
      coins: 220000,
      supplies: 481000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 4,
      width: 6
    },
    population: 3220,
    connection: 2
  },
  unrefined: "semiconductors"
};
