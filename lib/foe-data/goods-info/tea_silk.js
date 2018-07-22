const moment = require("moment");
const age = require("../ages").VirtualFuture.key;

module.exports = {
  key: "tea_silk",
  age: age,
  building: {
    resources: {
      coins: 390000,
      supplies: 837000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 4,
      width: 7
    },
    population: 6210,
    connection: 2
  },
  unrefined: "algae"
};
