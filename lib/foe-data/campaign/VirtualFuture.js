const { bonus } = require("../bonus");

module.exports = {
  Bytedirt_Planes: {
    key: "Bytedirt_Planes",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good },
          { key: "plankton", value: 90, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "corals", value: 90, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "biolight", value: 90, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good },
          { key: "plankton", value: 90, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "artificial_scales", value: 85, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "artificial_scales", value: 90, type: bonus.good },
          { key: "biolight", value: 110, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "pearls", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "biolight", value: 75, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "plankton", value: 65, type: bonus.good }
        ]
      }
    ]
  },
  End_of_the_Void: {
    key: "End_of_the_Void",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "biolight", value: 85, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "corals", value: 90, type: bonus.good },
          { key: "nanites", value: 70, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "artificial_scales", value: 90, type: bonus.good },
          { key: "data_crystals", value: 45, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "pearls", value: 110, type: bonus.good },
          { key: "cryptocash", value: 40, type: bonus.good },
          { key: "data_crystals", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "plankton", value: 150, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "corals", value: 90, type: bonus.good },
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "nanites", value: 65, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "biolight", value: 80, type: bonus.good },
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "golden_rice", value: 25, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "artificial_scales", value: 80, type: bonus.good },
          { key: "data_crystals", value: 55, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "pearls", value: 70, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      }
    ]
  }
};
