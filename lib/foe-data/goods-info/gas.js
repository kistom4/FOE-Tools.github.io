const moment = require("moment");
const age = require("../ages").ContemporaryEra.key;

module.exports = {
  key: "gas",
  age: age,
  building: {
    resources: {
      coins: 120000,
      supplies: 278000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 6,
      width: 5
    },
    population: 1480,
    connection: 2
  },
  unrefined: "explosives"
};
