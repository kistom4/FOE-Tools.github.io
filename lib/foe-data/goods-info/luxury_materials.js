const moment = require("moment");
const age = require("../ages").ModernEra.key;

module.exports = {
  key: "luxury_materials",
  age: age,
  building: {
    resources: {
      coins: 66000,
      supplies: 155000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 5
    },
    population: 1360,
    connection: 2
  },
  unrefined: "porcelain"
};
