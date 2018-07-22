const moment = require("moment");
const age = require("../ages").VirtualFuture.key;

module.exports = {
  key: "cryptocash",
  age: age,
  building: {
    resources: {
      coins: 390000,
      supplies: 837000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 7,
      width: 4
    },
    population: 6210,
    connection: 2
  },
  unrefined: "biogeochemical_data"
};
