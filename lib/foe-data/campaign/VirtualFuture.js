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
  },
  Banker_s_Heaven: {
    key: "Banker_s_Heaven",
    reward: [{ type: "coin", value: 2200000 }, { type: "supply", value: 2200000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "data_crystals", value: 85, type: bonus.good },
          { key: "tea_silk", value: 70, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "biolight", value: 60, type: bonus.good },
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "tea_silk", value: 85, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "golden_rice", value: 90, type: bonus.good },
          { key: "nanites", value: 70, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "corals", value: 55, type: bonus.good },
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "tea_silk", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 95, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
          { key: "promethium", value: 125, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "artificial_scales", value: 65, type: bonus.good },
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "data_crystals", value: 70, type: bonus.good },
          { key: "nanites", value: 85, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "cryptocash", value: 75, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
          { key: "orichalcum", value: 70, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "plankton", value: 65, type: bonus.good },
          { key: "cryptocash", value: 95, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "pearls", value: 60, type: bonus.good },
          { key: "golden_rice", value: 90, type: bonus.good },
          { key: "nanites", value: 70, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Shift_Land: {
    key: "Shift_Land",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [{ key: "cryptocash", value: 60, type: bonus.good }, { key: "golden_rice", value: 50, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 55000 }],
        cost: [{ key: "data_crystals", value: 45, type: bonus.good }, { key: "nanites", value: 30, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "tea_silk", value: 25, type: bonus.good },
          { key: "promethium", value: 145, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [{ key: "nanites", value: 55, type: bonus.good }, { key: "tea_silk", value: 25, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "promethium", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "nanites", value: 30, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [{ key: "cryptocash", value: 20, type: bonus.good }, { key: "tea_silk", value: 60, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [{ key: "cryptocash", value: 40, type: bonus.good }, { key: "golden_rice", value: 20, type: bonus.good }]
      }
    ]
  },
  Black_Net_Market: {
    key: "Black_Net_Market",
    reward: [{ type: "diamond", value: 100 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "golden_rice", value: 75, type: bonus.good },
          { key: "nanites", value: 65, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "corals", value: 120, type: bonus.good },
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 85, type: bonus.good },
          { key: "nanites", value: 75, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "nanites", value: 60, type: bonus.good },
          { key: "promethium", value: 135, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "biolight", value: 100, type: bonus.good },
          { key: "data_crystals", value: 70, type: bonus.good },
          { key: "golden_rice", value: 75, type: bonus.good },
          { key: "nanites", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 1050000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "artificial_scales", value: 110, type: bonus.good },
          { key: "cryptocash", value: 75, type: bonus.good },
          { key: "golden_rice", value: 65, type: bonus.good },
          { key: "tea_silk", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "data_crystals", value: 75, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
          { key: "promethium", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "golden_rice", value: 100, type: bonus.good },
          { key: "tea_silk", value: 40, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 65, type: bonus.good },
          { key: "data_crystals", value: 55, type: bonus.good },
          { key: "tea_silk", value: 70, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good }
        ]
      }
    ]
  },
  Pulse_City: {
    key: "Pulse_City",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [{ key: "cryptocash", value: 80, type: bonus.good }, { key: "tea_silk", value: 80, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "tea_silk", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "nanites", value: 35, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "golden_rice", value: 35, type: bonus.good },
          { key: "tea_silk", value: 85, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 1200000 }],
        cost: [
          { key: "data_crystals", value: 25, type: bonus.good },
          { key: "golden_rice", value: 55, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [{ key: "golden_rice", value: 80, type: bonus.good }, { key: "tea_silk", value: 60, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "golden_rice", value: 45, type: bonus.good },
          { key: "nanites", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [{ key: "data_crystals", value: 90, type: bonus.good }, { key: "nanites", value: 90, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "golden_rice", value: 90, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Max_s_Shelter: {
    key: "Max_s_Shelter",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "nanites", value: 60, type: bonus.good },
          { key: "orichalcum", value: 200, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 105, type: bonus.good },
          { key: "nanites", value: 55, type: bonus.good },
          { key: "tea_silk", value: 160, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "nanites", value: 120, type: bonus.good },
          { key: "tea_silk", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 40, type: bonus.good },
          { key: "promethium", value: 190, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [{ key: "cryptocash", value: 150, type: bonus.good }, { key: "tea_silk", value: 90, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good }
        ]
      }
    ]
  },
  The_Open_Zone: {
    key: "The_Open_Zone",
    reward: [{ type: "coin", value: 1900000 }, { type: "supply", value: 1900000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 45, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "nanites", value: 110, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "golden_rice", value: 55, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 70, type: bonus.good },
          { key: "nanites", value: 40, type: bonus.good },
          { key: "orichalcum", value: 140, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "nanites", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 20, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good }
        ]
      }
    ]
  },
  The_Warring_Towers: {
    key: "The_Warring_Towers",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "cryptocash", value: 25, type: bonus.good },
          { key: "golden_rice", value: 85, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "data_crystals", value: 130, type: bonus.good },
          { key: "golden_rice", value: 75, type: bonus.good },
          { key: "tea_silk", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 70, type: bonus.good },
          { key: "golden_rice", value: 30, type: bonus.good },
          { key: "nanites", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "data_crystals", value: 45, type: bonus.good },
          { key: "nanites", value: 65, type: bonus.good },
          { key: "orichalcum", value: 105, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 75, type: bonus.good },
          { key: "golden_rice", value: 30, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "nanites", value: 30, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "cryptocash", value: 35, type: bonus.good },
          { key: "nanites", value: 60, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "cryptocash", value: 70, type: bonus.good },
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "golden_rice", value: 35, type: bonus.good },
          { key: "nanites", value: 100, type: bonus.good },
          { key: "tea_silk", value: 75, type: bonus.good }
        ]
      }
    ]
  },
  Forgotten_Fragments: {
    key: "Forgotten_Fragments",
    reward: [{ type: "coin", value: 2300000 }, { type: "supply", value: 2300000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "cryptocash", value: 85, type: bonus.good },
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "nanites", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "cryptocash", value: 65, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good },
          { key: "orichalcum", value: 70, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "data_crystals", value: 85, type: bonus.good },
          { key: "golden_rice", value: 65, type: bonus.good },
          { key: "tea_silk", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "cryptocash", value: 75, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
          { key: "promethium", value: 75, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "golden_rice", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Backup_NET: {
    key: "Backup_NET",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      { reward: [{ type: "supply", value: 85000 }], cost: [{ key: "nanites", value: 70, type: bonus.good }] },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "tea_silk", value: 65, type: bonus.good },
          { key: "orichalcum", value: 170, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "golden_rice", value: 70, type: bonus.good },
          { key: "orichalcum", value: 160, type: bonus.special_good }
        ]
      },
      { reward: [{ type: "coin", value: 85000 }], cost: [{ key: "cryptocash", value: 70, type: bonus.good }] },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [{ key: "data_crystals", value: 100, type: bonus.good }, { key: "tea_silk", value: 60, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "golden_rice", value: 100, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [{ key: "golden_rice", value: 75, type: bonus.good }, { key: "tea_silk", value: 110, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 75, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [{ key: "data_crystals", value: 105, type: bonus.good }, { key: "tea_silk", value: 75, type: bonus.good }]
      }
    ]
  },
  Spoiled_Resort: {
    key: "Spoiled_Resort",
    reward: [{ type: "good_bonus", age: "EarlyMiddleAges" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "tea_silk", value: 80, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 25, type: bonus.good },
          { key: "promethium", value: 85, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "orichalcum", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "nanites", value: 45, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [{ key: "cryptocash", value: 75, type: bonus.good }, { key: "tea_silk", value: 80, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "golden_rice", value: 35, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
          { key: "orichalcum", value: 125, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "data_crystals", value: 50, type: bonus.good },
          { key: "nanites", value: 30, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "golden_rice", value: 85, type: bonus.good }
        ]
      }
    ]
  },
  Fort_Duplex: {
    key: "Fort_Duplex",
    reward: [{ type: "coin", value: 2800000 }, { type: "supply", value: 2800000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "golden_rice", value: 55, type: bonus.good },
          { key: "nanites", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "nanites", value: 40, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "data_crystals", value: 70, type: bonus.good },
          { key: "tea_silk", value: 85, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "golden_rice", value: 20, type: bonus.good },
          { key: "nanites", value: 150, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 35, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
          { key: "orichalcum", value: 160, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "cryptocash", value: 65, type: bonus.good },
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "tea_silk", value: 85, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "nanites", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
          { key: "promethium", value: 130, type: bonus.special_good }
        ]
      }
    ]
  },
  LoneHub: {
    key: "LoneHub",
    reward: [{ type: "coin", value: 3000000 }, { type: "supply", value: 3000000 }],
    sectors: [
      { reward: [{ type: "coin", value: 55000 }], cost: [{ key: "golden_rice", value: 75, type: bonus.good }] },
      { reward: [{ type: "supply", value: 60000 }], cost: [{ key: "tea_silk", value: 80, type: bonus.good }] },
      { reward: [{ type: "coin", value: 55000 }], cost: [{ key: "tea_silk", value: 75, type: bonus.good }] },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "tea_silk", value: 50, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      { reward: [{ type: "coin", value: 95000 }], cost: [{ key: "cryptocash", value: 190, type: bonus.good }] },
      { reward: [{ type: "supply", value: 60000 }], cost: [{ key: "data_crystals", value: 85, type: bonus.good }] },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      },
      { reward: [{ type: "coin", value: 90000 }], cost: [{ key: "nanites", value: 180, type: bonus.good }] }
    ]
  },
  Alpha_1_Omega_2: {
    key: "Alpha_1_Omega_2",
    reward: [{ type: "diamond", value: 100 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 35, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "nanites", value: 30, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "golden_rice", value: 55, type: bonus.good },
          { key: "tea_silk", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "data_crystals", value: 25, type: bonus.good },
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 50, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 95, type: bonus.good },
          { key: "nanites", value: 170, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "promethium", value: 85, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "golden_rice", value: 160, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "nanites", value: 95, type: bonus.good },
          { key: "orichalcum", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "nanites", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "golden_rice", value: 30, type: bonus.good },
          { key: "nanites", value: 75, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
          { key: "orichalcum", value: 20, type: bonus.special_good }
        ]
      }
    ]
  }
};
