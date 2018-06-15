const moment = require("moment");
const age = require("../ages").LateMiddleAges.key;

module.exports = {
  key: "silk",
  age: age,
  building: {
    resources: {
      coins: 27000,
      supplies: 54000
    },
    time: moment.duration({ hours: 11, minutes: 20 }),
    size: {
      length: 3,
      width: 3
    },
    population: 580,
    connection: 1
  },
  unrefined: null
};
