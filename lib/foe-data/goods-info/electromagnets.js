const moment = require("moment");
const age = require("../ages").ContemporaryEra.key;

module.exports = {
  key: "electromagnets",
  age: age,
  building: {
    resources: {
      coins: 120000,
      supplies: 278000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 5
    },
    population: 2180,
    connection: 2
  },
  unrefined: "tinplate"
};
