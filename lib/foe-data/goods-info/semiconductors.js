const moment = require("moment");
const age = require("../ages").PostmodernEra.key;

module.exports = {
  key: "semiconductors",
  age: age,
  building: {
    resources: {
      coins: 79000,
      supplies: 185000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 4,
      width: 6
    },
    population: 1530,
    connection: 2
  },
  unrefined: "rubber"
};
