const moment = require("moment");
const age = require("../ages").ArcticFuture.key;

module.exports = {
  key: "transester_gas",
  age: age,
  building: {
    resources: {
      coins: 293000,
      supplies: 638000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 5
    },
    population: 4330,
    connection: 2
  },
  unrefined: "gas"
};
