const moment = require("moment");
const age = require("../ages").OceanicFuture.key;

module.exports = {
  key: "pearls",
  age: age,
  building: {
    resources: {
      coins: 332000,
      supplies: 716000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 6,
      width: 5
    },
    population: 4400,
    connection: 2
  },
  unrefined: "translucent_concrete"
};
