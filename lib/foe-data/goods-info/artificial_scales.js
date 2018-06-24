const moment = require("moment");
const age = require("../ages").OceanicFuture.key;

module.exports = {
  key: "artificial_scales",
  age: age,
  building: {
    resources: {
      coins: 332000,
      supplies: 716000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 6
    },
    population: 4450,
    connection: 2
  },
  unrefined: "preservatives"
};
