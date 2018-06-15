const moment = require("moment");
const age = require("../ages").OceanicFuture.key;

module.exports = {
  key: "plankton",
  age: age,
  building: {
    resources: {
      coins: 332000,
      supplies: 716000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 7,
      width: 4
    },
    population: 5000,
    connection: 2
  },
  unrefined: "nutrition_research"
};
