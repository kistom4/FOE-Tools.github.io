const moment = require("moment");
const age = require("../ages").Tomorrow.key;

module.exports = {
  key: "nutrition_research",
  age: age,
  building: {
    resources: {
      coins: 153000,
      supplies: 353000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 3
    },
    population: 1780,
    connection: 2
  },
  unrefined: "convenience_food"
};
