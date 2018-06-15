const moment = require("moment");
const age = require("../ages").Tomorrow.key;

module.exports = {
  key: "papercrete",
  age: age,
  building: {
    resources: {
      coins: 153000,
      supplies: 353000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 4,
      width: 4
    },
    population: 2980,
    connection: 2
  },
  unrefined: "packaging"
};
