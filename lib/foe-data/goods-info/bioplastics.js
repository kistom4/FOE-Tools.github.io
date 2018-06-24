const moment = require("moment");
const age = require("../ages").ArcticFuture.key;

module.exports = {
  key: "bioplastics",
  age: age,
  building: {
    resources: {
      coins: 293000,
      supplies: 638000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 5
    },
    population: 5600,
    connection: 2
  },
  unrefined: "plastics"
};
