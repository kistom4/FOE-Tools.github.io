const ages = require("../ages");
const ageCost = require("../ages-cost/VirtualFuture");

module.exports = {
  key: "Terracotta_Army",
  age: ages.VirtualFuture.key,
  levels: ageCost
};
