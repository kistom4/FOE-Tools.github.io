const moment = require("moment");
const age = require("../ages").ProgressiveEra.key;

module.exports = {
  key: "explosives",
  age: age,
  building: {
    resources: {
      coins: 54000,
      supplies: 129000
    },
    time: moment.duration({ hours: 14, minutes: 50 }),
    size: {
      length: 4,
      width: 5
    },
    population: 1200,
    connection: 2
  },
  unrefined: null
};
