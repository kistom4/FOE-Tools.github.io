const moment = require("moment");
const age = require("../ages").VirtualFuture.key;

module.exports = {
  key: "golden_rice",
  age: age,
  building: {
    resources: {
      coins: 390000,
      supplies: 837000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 6
    },
    population: 5640,
    connection: 2
  },
  unrefined: "purified_water"
};
