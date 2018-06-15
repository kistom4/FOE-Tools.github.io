const moment = require("moment");
const age = require("../ages").Tomorrow.key;

module.exports = {
  key: "smart_materials",
  age: age,
  building: {
    resources: {
      coins: 153000,
      supplies: 353000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 5,
      width: 5
    },
    population: 3180,
    connection: 2
  },
  unrefined: "luxury_materials"
};
