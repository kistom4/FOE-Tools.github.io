const moment = require("moment");
const age = require("../ages").ArcticFuture.key;

module.exports = {
  key: "ai_data",
  age: age,
  building: {
    resources: {
      coins: 293000,
      supplies: 638000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 6
    },
    population: 5110,
    connection: 2
  },
  unrefined: "robots"
};
