const moment = require("moment");
const age = require("../ages").IronAge.key;

module.exports = {
  key: "cloth",
  age: age,
  building: {
    resources: {
      coins: 1500,
      supplies: 2400
    },
    time: moment.duration({ hours: 1, minutes: 30 }),
    size: {
      length: 4,
      width: 3
    },
    population: 230,
    connection: 1
  },
  unrefined: null
};
