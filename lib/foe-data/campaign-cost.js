const { bonus } = require("./bonus");

const campaignCost = {
  BronzeAge: {
    Dunarsund: {
      key: "Dunarsund",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "coin", value: 50 }], cost: [{ key: "stone", value: 2, type: bonus.good }] },
        { reward: [{ type: "supply", value: 60 }], cost: [{ key: "wine", value: 2, type: bonus.good }] },
        { reward: [{ type: "supply", value: 60 }], cost: [{ key: "dye", value: 2, type: bonus.good }] }
      ]
    },
    Tyr: {
      key: "Tyr",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "coin", value: 100 }], cost: [{ key: "marble", value: 3, type: bonus.good }] },
        { reward: [{ type: "supply", value: 100 }], cost: [{ key: "lumber", value: 5, type: bonus.good }] },
        { reward: [{ type: "supply", value: 100 }], cost: [{ key: "dye", value: 5, type: bonus.good }] },
        { reward: [{ type: "coin", value: 100 }], cost: [{ key: "wine", value: 5, type: bonus.good }] },
        { reward: [{ type: "coin", value: 100 }], cost: [{ key: "stone", value: 5, type: bonus.good }] }
      ]
    },
    Fel_Dranghyr: {
      key: "Fel_Dranghyr",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "supply", value: 75 }], cost: [{ key: "marble", value: 5, type: bonus.good }] },
        { reward: [{ type: "coin", value: 75 }], cost: [{ key: "lumber", value: 4, type: bonus.good }] },
        {
          reward: [{ type: "coin", value: 75 }],
          cost: [{ key: "stone", value: 2, type: bonus.good }, { key: "wine", value: 2, type: bonus.good }]
        }
      ]
    },
    Hymir: {
      key: "Hymir",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100 }],
          cost: [{ key: "stone", value: 3, type: bonus.good }, { key: "marble", value: 5, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 100 }],
          cost: [{ key: "marble", value: 5, type: bonus.good }, { key: "wine", value: 3, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 100 }],
          cost: [{ key: "lumber", value: 5, type: bonus.good }, { key: "dye", value: 5, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 100 }],
          cost: [{ key: "lumber", value: 3, type: bonus.good }, { key: "wine", value: 3, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 100 }],
          cost: [{ key: "stone", value: 3, type: bonus.good }, { key: "dye", value: 3, type: bonus.good }]
        }
      ]
    }
  },
  IronAge: {
    Badakus: {
      key: "Badakus",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "supply", value: 400 }], cost: [{ key: "lumber", value: 8, type: bonus.good }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ key: "wine", value: 6, type: bonus.good }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ key: "stone", value: 10, type: bonus.good }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ key: "marble", value: 8, type: bonus.good }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ key: "dye", value: 8, type: bonus.good }] }
      ]
    },
    Paruuch: {
      key: "Paruuch",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 400 }],
          cost: [{ key: "marble", value: 6, type: bonus.good }, { key: "dye", value: 6, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "stone", value: 6, type: bonus.good }, { key: "lumber", value: 6, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "marble", value: 6, type: bonus.good }, { key: "wine", value: 6, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "lumber", value: 6, type: bonus.good }, { key: "dye", value: 6, type: bonus.good }]
        }
      ]
    },
    Ruug: {
      key: "Ruug",
      reward: [{ type: "coin", value: 800 }, { type: "supply", value: 800 }],
      sectors: [
        { reward: [{ type: "coin", value: 400 }], cost: [{ key: "ebony", value: 8, type: bonus.good }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ key: "limestone", value: 6, type: bonus.good }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ key: "iron", value: 6, type: bonus.good }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ key: "cloth", value: 6, type: bonus.good }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ key: "jewelry", value: 6, type: bonus.good }] }
      ]
    },
    Karchagu: {
      key: "Karchagu",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "stone", value: 10, type: bonus.good }, { key: "ebony", value: 7, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 400 }],
          cost: [{ key: "dye", value: 4, type: bonus.good }, { key: "iron", value: 7, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "wine", value: 10, type: bonus.good }, { key: "cloth", value: 7, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "lumber", value: 10, type: bonus.good }, { key: "limestone", value: 7, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 400 }],
          cost: [{ key: "lumber", value: 6, type: bonus.good }, { key: "jewelry", value: 7, type: bonus.good }]
        }
      ]
    },
    East_Nagach: {
      key: "East_Nagach",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 400 }],
          cost: [{ key: "ebony", value: 12, type: bonus.good }, { key: "jewelry", value: 12, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 400 }],
          cost: [{ key: "limestone", value: 6, type: bonus.good }, { key: "cloth", value: 6, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "ebony", value: 8, type: bonus.good }, { key: "jewelry", value: 12, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 400 }],
          cost: [{ key: "iron", value: 6, type: bonus.good }, { key: "cloth", value: 6, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "limestone", value: 14, type: bonus.good }, { key: "iron", value: 5, type: bonus.good }]
        }
      ]
    },
    West_Nagach: {
      key: "West_Nagach",
      reward: [{ type: "coin", value: 1400 }, { type: "supply", value: 1400 }],
      sectors: [
        { reward: [{ type: "coin", value: 400 }], cost: [{ key: "lumber", value: 12, type: bonus.good }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ key: "wine", value: 18, type: bonus.good }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ key: "dye", value: 16, type: bonus.good }] },
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "stone", value: 18, type: bonus.good }, { key: "marble", value: 18, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 400 }],
          cost: [{ key: "dye", value: 5, type: bonus.good }, { key: "wine", value: 5, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 400 }],
          cost: [{ key: "stone", value: 6, type: bonus.good }, { key: "marble", value: 4, type: bonus.good }]
        }
      ]
    }
  },
  EarlyMiddleAges: {
    Pfefferberg: {
      key: "Pfefferberg",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ key: "ebony", value: 14, type: bonus.good }, { key: "iron", value: 10, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 900 }],
          cost: [{ key: "cloth", value: 14, type: bonus.good }, { key: "jewelry", value: 10, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 900 }],
          cost: [{ key: "limestone", value: 12, type: bonus.good }, { key: "cloth", value: 10, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ key: "limestone", value: 10, type: bonus.good }, { key: "iron", value: 10, type: bonus.good }]
        }
      ]
    },
    Dunkelwald: {
      key: "Dunkelwald",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 900 }],
          cost: [{ key: "ebony", value: 14, type: bonus.good }, { key: "jewelry", value: 10, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ key: "limestone", value: 8, type: bonus.good }, { key: "iron", value: 10, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 900 }],
          cost: [{ key: "limestone", value: 14, type: bonus.good }, { key: "cloth", value: 10, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ key: "iron", value: 10, type: bonus.good }, { key: "cloth", value: 14, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ key: "ebony", value: 10, type: bonus.good }, { key: "jewelry", value: 14, type: bonus.good }]
        }
      ]
    },
    Greifental: {
      key: "Greifental",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "coin", value: 900 }], cost: [{ key: "cloth", value: 28, type: bonus.good }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ key: "jewelry", value: 35, type: bonus.good }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ key: "ebony", value: 35, type: bonus.good }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ key: "iron", value: 25, type: bonus.good }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ key: "limestone", value: 35, type: bonus.good }] }
      ]
    },
    Kaltenweiher: {
      key: "Kaltenweiher",
      reward: [{ type: "coin", value: 2500 }, { type: "supply", value: 2500 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 450 }],
          cost: [
            { key: "limestone", value: 10, type: bonus.good },
            { key: "iron", value: 8, type: bonus.good },
            { key: "alabaster", value: 14, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 450 }],
          cost: [
            { key: "ebony", value: 8, type: bonus.good },
            { key: "granite", value: 14, type: bonus.good },
            { key: "gold", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 450 }],
          cost: [
            { key: "cloth", value: 8, type: bonus.good },
            { key: "copper", value: 8, type: bonus.good },
            { key: "honey", value: 14, type: bonus.good }
          ]
        }
      ]
    },
    Teufelsfurt: {
      key: "Teufelsfurt",
      reward: [{ type: "coin", value: 3000 }, { type: "supply", value: 3000 }],
      sectors: [
        { reward: [{ type: "coin", value: 450 }], cost: [{ key: "granite", value: 20, type: bonus.good }] },
        { reward: [{ type: "supply", value: 450 }], cost: [{ key: "alabaster", value: 20, type: bonus.good }] },
        { reward: [{ type: "supply", value: 450 }], cost: [{ key: "copper", value: 20, type: bonus.good }] },
        { reward: [{ type: "supply", value: 450 }], cost: [{ key: "gold", value: 20, type: bonus.good }] },
        {
          reward: [{ type: "coin", value: 450 }],
          cost: [{ key: "copper", value: 10, type: bonus.good }, { key: "honey", value: 10, type: bonus.good }]
        }
      ]
    },
    Felssenke: {
      key: "Felssenke",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ key: "copper", value: 10, type: bonus.good }, { key: "alabaster", value: 14, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ key: "copper", value: 14, type: bonus.good }, { key: "honey", value: 12, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 900 }],
          cost: [{ key: "gold", value: 14, type: bonus.good }, { key: "honey", value: 14, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ key: "granite", value: 10, type: bonus.good }, { key: "gold", value: 14, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 900 }],
          cost: [{ key: "granite", value: 14, type: bonus.good }, { key: "alabaster", value: 10, type: bonus.good }]
        }
      ]
    },
    Breturia: {
      key: "Breturia",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 1500 }], cost: [{ key: "honey", value: 15, type: bonus.good }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ key: "copper", value: 25, type: bonus.good }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ key: "alabaster", value: 25, type: bonus.good }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ key: "granite", value: 22, type: bonus.good }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ key: "honey", value: 25, type: bonus.good }] }
      ]
    },
    Galgenschlucht: {
      key: "Galgenschlucht",
      reward: [{ type: "coin", value: 4000 }, { type: "supply", value: 4000 }, { type: "medal", value: 10 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 600 }],
          cost: [
            { key: "stone", value: 12, type: bonus.good },
            { key: "jewelry", value: 12, type: bonus.good },
            { key: "alabaster", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 600 }],
          cost: [
            { key: "wine", value: 12, type: bonus.good },
            { key: "cloth", value: 12, type: bonus.good },
            { key: "honey", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 600 }],
          cost: [
            { key: "dye", value: 12, type: bonus.good },
            { key: "limestone", value: 12, type: bonus.good },
            { key: "granite", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 600 }],
          cost: [
            { key: "marble", value: 12, type: bonus.good },
            { key: "iron", value: 12, type: bonus.good },
            { key: "gold", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 600 }],
          cost: [
            { key: "lumber", value: 12, type: bonus.good },
            { key: "ebony", value: 12, type: bonus.good },
            { key: "copper", value: 10, type: bonus.good }
          ]
        }
      ]
    },
    Todepass: {
      key: "Todepass",
      reward: [{ type: "coin", value: 4500 }, { type: "supply", value: 4500 }, { type: "medal", value: 15 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [
            { key: "stone", value: 12, type: bonus.good },
            { key: "jewelry", value: 12, type: bonus.good },
            { key: "copper", value: 10, type: bonus.good },
            { key: "gold", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [
            { key: "wine", value: 12, type: bonus.good },
            { key: "cloth", value: 12, type: bonus.good },
            { key: "copper", value: 10, type: bonus.good },
            { key: "honey", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [
            { key: "marble", value: 12, type: bonus.good },
            { key: "iron", value: 12, type: bonus.good },
            { key: "granite", value: 10, type: bonus.good },
            { key: "gold", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [
            { key: "dye", value: 12, type: bonus.good },
            { key: "limestone", value: 12, type: bonus.good },
            { key: "alabaster", value: 10, type: bonus.good },
            { key: "honey", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [
            { key: "lumber", value: 12, type: bonus.good },
            { key: "ebony", value: 12, type: bonus.good },
            { key: "alabaster", value: 10, type: bonus.good },
            { key: "gold", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [
            { key: "stone", value: 12, type: bonus.good },
            { key: "iron", value: 12, type: bonus.good },
            { key: "granite", value: 10, type: bonus.good },
            { key: "alabaster", value: 10, type: bonus.good }
          ]
        }
      ]
    },
    Steilsturz: {
      key: "Steilsturz",
      reward: [{ type: "coin", value: 5000 }, { type: "supply", value: 5000 }, { type: "medal", value: 15 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 1200 }],
          cost: [
            { key: "ebony", value: 12, type: bonus.good },
            { key: "copper", value: 10, type: bonus.good },
            { key: "granite", value: 10, type: bonus.good },
            { key: "gold", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1200 }],
          cost: [
            { key: "limestone", value: 12, type: bonus.good },
            { key: "copper", value: 10, type: bonus.good },
            { key: "granite", value: 10, type: bonus.good },
            { key: "honey", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1200 }],
          cost: [
            { key: "jewelry", value: 12, type: bonus.good },
            { key: "copper", value: 10, type: bonus.good },
            { key: "alabaster", value: 10, type: bonus.good },
            { key: "honey", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1200 }],
          cost: [
            { key: "cloth", value: 12, type: bonus.good },
            { key: "alabaster", value: 10, type: bonus.good },
            { key: "gold", value: 10, type: bonus.good },
            { key: "honey", value: 10, type: bonus.good }
          ]
        }
      ]
    },
    Tarmelmann: {
      key: "Tarmelmann",
      reward: [
        { type: "coin", value: 5000 },
        { type: "supply", value: 5000 },
        { type: "medal", value: 20 },
        { type: "diamond", value: 100 }
      ],
      sectors: [
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "granite", value: 18, type: bonus.good },
            { key: "alabaster", value: 12, type: bonus.good },
            { key: "honey", value: 12, type: bonus.good },
            { key: "glass", value: 4, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "granite", value: 12, type: bonus.good },
            { key: "gold", value: 12, type: bonus.good },
            { key: "honey", value: 18, type: bonus.good },
            { key: "rope", value: 8, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "granite", value: 12, type: bonus.good },
            { key: "alabaster", value: 18, type: bonus.good },
            { key: "honey", value: 12, type: bonus.good },
            { key: "dried_herbs", value: 8, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "copper", value: 12, type: bonus.good },
            { key: "granite", value: 12, type: bonus.good },
            { key: "gold", value: 18, type: bonus.good },
            { key: "salt", value: 4, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "copper", value: 18, type: bonus.good },
            { key: "granite", value: 12, type: bonus.good },
            { key: "gold", value: 12, type: bonus.good },
            { key: "brick", value: 4, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "copper", value: 12, type: bonus.good },
            { key: "gold", value: 18, type: bonus.good },
            { key: "honey", value: 12, type: bonus.good },
            { key: "brick", value: 4, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "copper", value: 12, type: bonus.good },
            { key: "alabaster", value: 18, type: bonus.good },
            { key: "honey", value: 12, type: bonus.good },
            { key: "glass", value: 4, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "copper", value: 18, type: bonus.good },
            { key: "alabaster", value: 12, type: bonus.good },
            { key: "gold", value: 12, type: bonus.good },
            { key: "salt", value: 4, type: bonus.good }
          ]
        }
      ]
    }
  },
  HighMiddleAges: {
    Canturia: {
      key: "Canturia",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [
            { key: "lumber", value: 10, type: bonus.good },
            { key: "dye", value: 70, type: bonus.good },
            { key: "cloth", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 900 }],
          cost: [
            { key: "marble", value: 35, type: bonus.good },
            { key: "wine", value: 30, type: bonus.good },
            { key: "ebony", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [
            { key: "stone", value: 40, type: bonus.good },
            { key: "iron", value: 25, type: bonus.good },
            { key: "jewelry", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Breturia: {
      key: "Breturia",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 1500 }], cost: [{ key: "honey", value: 15, type: bonus.good }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ key: "copper", value: 25, type: bonus.good }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ key: "alabaster", value: 25, type: bonus.good }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ key: "granite", value: 22, type: bonus.good }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ key: "honey", value: 25, type: bonus.good }] }
      ]
    },
    Veletrites: {
      key: "Veletrites",
      reward: [{ type: "coin", value: 5000 }, { type: "supply", value: 5000 }],
      sectors: [
        { reward: [{ type: "supply", value: 900 }], cost: [{ key: "jewelry", value: 35, type: bonus.good }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ key: "iron", value: 33, type: bonus.good }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ key: "limestone", value: 48, type: bonus.good }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ key: "ebony", value: 50, type: bonus.good }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ key: "cloth", value: 35, type: bonus.good }] }
      ]
    },
    Frathia: {
      key: "Frathia",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [{ key: "marble", value: 40, type: bonus.good }, { key: "copper", value: 25, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [{ key: "lumber", value: 55, type: bonus.good }, { key: "granite", value: 25, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [{ key: "alabaster", value: 25, type: bonus.good }, { key: "honey", value: 35, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [{ key: "wine", value: 45, type: bonus.good }, { key: "gold", value: 30, type: bonus.good }]
        }
      ]
    },
    Jaims: {
      key: "Jaims",
      reward: [{ type: "coin", value: 15000 }, { type: "supply", value: 15000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 3000 }],
          cost: [{ key: "granite", value: 25, type: bonus.good }, { key: "glass", value: 15, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 3000 }],
          cost: [{ key: "copper", value: 25, type: bonus.good }, { key: "brick", value: 15, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 3000 }],
          cost: [{ key: "gold", value: 35, type: bonus.good }, { key: "rope", value: 15, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 3000 }],
          cost: [{ key: "honey", value: 20, type: bonus.good }, { key: "salt", value: 15, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 3000 }],
          cost: [{ key: "alabaster", value: 25, type: bonus.good }, { key: "dried_herbs", value: 20, type: bonus.good }]
        }
      ]
    },
    Mons_Suiry: {
      key: "Mons_Suiry",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 3000 }], cost: [{ key: "salt", value: 18, type: bonus.good }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ key: "brick", value: 15, type: bonus.good }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ key: "rope", value: 18, type: bonus.good }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ key: "glass", value: 18, type: bonus.good }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ key: "dried_herbs", value: 22, type: bonus.good }] }
      ]
    },
    Moravaria: {
      key: "Moravaria",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [{ key: "salt", value: 6, type: bonus.good }, { key: "dried_herbs", value: 20, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [{ key: "rope", value: 14, type: bonus.good }, { key: "glass", value: 8, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [{ key: "brick", value: 20, type: bonus.good }, { key: "salt", value: 8, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [{ key: "brick", value: 20, type: bonus.good }, { key: "salt", value: 12, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [{ key: "dried_herbs", value: 10, type: bonus.good }, { key: "glass", value: 20, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [{ key: "rope", value: 8, type: bonus.good }, { key: "dried_herbs", value: 20, type: bonus.good }]
        }
      ]
    }
  },
  LateMiddleAges: {
    Cragshire: {
      key: "Cragshire",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [{ key: "rope", value: 18, type: bonus.good }, { key: "glass", value: 12, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [{ key: "brick", value: 18, type: bonus.good }, { key: "glass", value: 12, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 2000 }],
          cost: [{ key: "rope", value: 12, type: bonus.good }, { key: "salt", value: 18, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 2000 }],
          cost: [{ key: "brick", value: 12, type: bonus.good }, { key: "dried_herbs", value: 18, type: bonus.good }]
        }
      ]
    },
    Cuttingham: {
      key: "Cuttingham",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "cloth", value: 30, type: bonus.good },
            { key: "alabaster", value: 35, type: bonus.good },
            { key: "rope", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "iron", value: 20, type: bonus.good },
            { key: "granite", value: 35, type: bonus.good },
            { key: "glass", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [
            { key: "jewelry", value: 25, type: bonus.good },
            { key: "gold", value: 45, type: bonus.good },
            { key: "brick", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 2000 }],
          cost: [
            { key: "limestone", value: 35, type: bonus.good },
            { key: "copper", value: 35, type: bonus.good },
            { key: "dried_herbs", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 2000 }],
          cost: [
            { key: "iron", value: 25, type: bonus.good },
            { key: "honey", value: 30, type: bonus.good },
            { key: "salt", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Eldenborough: {
      key: "Eldenborough",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [{ key: "rope", value: 20, type: bonus.good }, { key: "salt", value: 15, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [{ key: "brick", value: 12, type: bonus.good }, { key: "dried_herbs", value: 25, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [{ key: "brick", value: 20, type: bonus.good }, { key: "glass", value: 15, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 2000 }],
          cost: [{ key: "rope", value: 12, type: bonus.good }, { key: "salt", value: 25, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 2000 }],
          cost: [{ key: "brick", value: 12, type: bonus.good }, { key: "glass", value: 25, type: bonus.good }]
        }
      ]
    },
    Spearth: {
      key: "Spearth",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "coin", value: 2500 }], cost: [{ key: "talc_powder", value: 15, type: bonus.good }] },
        { reward: [{ type: "coin", value: 2500 }], cost: [{ key: "basalt", value: 15, type: bonus.good }] },
        { reward: [{ type: "coin", value: 2500 }], cost: [{ key: "silk", value: 13, type: bonus.good }] },
        { reward: [{ type: "supply", value: 2500 }], cost: [{ key: "gunpowder", value: 15, type: bonus.good }] },
        { reward: [{ type: "supply", value: 2500 }], cost: [{ key: "brass", value: 15, type: bonus.good }] }
      ]
    },
    Wolvhampton: {
      key: "Wolvhampton",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 3000 }],
          cost: [
            { key: "marble", value: 25, type: bonus.good },
            { key: "silk", value: 12, type: bonus.good },
            { key: "gunpowder", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3000 }],
          cost: [
            { key: "lumber", value: 20, type: bonus.good },
            { key: "alabaster", value: 22, type: bonus.good },
            { key: "basalt", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3000 }],
          cost: [
            { key: "wine", value: 25, type: bonus.good },
            { key: "copper", value: 25, type: bonus.good },
            { key: "talc_powder", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3000 }],
          cost: [
            { key: "stone", value: 40, type: bonus.good },
            { key: "honey", value: 15, type: bonus.good },
            { key: "brass", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3000 }],
          cost: [
            { key: "dye", value: 25, type: bonus.good },
            { key: "granite", value: 25, type: bonus.good },
            { key: "gunpowder", value: 10, type: bonus.good }
          ]
        }
      ]
    },
    FourGallows: {
      key: "FourGallows",
      reward: [{ type: "coin", value: 10500 }, { type: "supply", value: 10500 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "basalt", value: 5, type: bonus.good },
            { key: "brass", value: 15, type: bonus.good },
            { key: "talc_powder", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "basalt", value: 5, type: bonus.good },
            { key: "silk", value: 18, type: bonus.good },
            { key: "gunpowder", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "silk", value: 12, type: bonus.good },
            { key: "talc_powder", value: 5, type: bonus.good },
            { key: "gunpowder", value: 6, type: bonus.good }
          ]
        }
      ]
    },
    Mount_Killmore: {
      key: "Mount_Killmore",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ key: "talc_powder", value: 20, type: bonus.good }, { key: "gunpowder", value: 15, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ key: "basalt", value: 20, type: bonus.good }, { key: "brass", value: 20, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ key: "basalt", value: 20, type: bonus.good }, { key: "talc_powder", value: 20, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ key: "brass", value: 20, type: bonus.good }, { key: "silk", value: 20, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ key: "basalt", value: 20, type: bonus.good }, { key: "brass", value: 12, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ key: "silk", value: 20, type: bonus.good }, { key: "gunpowder", value: 20, type: bonus.good }]
        }
      ]
    },
    RavensCreek: {
      key: "RavensCreek",
      reward: [{ type: "coin", value: 7500 }, { type: "supply", value: 7500 }, { type: "medal", value: 25 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "stone", value: 50, type: bonus.good },
            { key: "honey", value: 30, type: bonus.good },
            { key: "rope", value: 10, type: bonus.good },
            { key: "basalt", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "wine", value: 50, type: bonus.good },
            { key: "gold", value: 30, type: bonus.good },
            { key: "salt", value: 20, type: bonus.good },
            { key: "brass", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1000 }],
          cost: [
            { key: "lumber", value: 50, type: bonus.good },
            { key: "copper", value: 30, type: bonus.good },
            { key: "dried_herbs", value: 20, type: bonus.good },
            { key: "talc_powder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1000 }],
          cost: [
            { key: "dye", value: 50, type: bonus.good },
            { key: "alabaster", value: 30, type: bonus.good },
            { key: "glass", value: 20, type: bonus.good },
            { key: "silk", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1000 }],
          cost: [
            { key: "stone", value: 50, type: bonus.good },
            { key: "copper", value: 30, type: bonus.good },
            { key: "rope", value: 20, type: bonus.good },
            { key: "basalt", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "marble", value: 50, type: bonus.good },
            { key: "granite", value: 30, type: bonus.good },
            { key: "brick", value: 20, type: bonus.good },
            { key: "gunpowder", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Zaldon_on_Sea: {
      key: "Zaldon_on_Sea",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        { type: "medal", value: 15 },
        { type: bonus.good, good: "coffee", value: 20 }
      ],
      sectors: [
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "cloth", value: 50, type: bonus.good },
            { key: "alabaster", value: 15, type: bonus.good },
            { key: "salt", value: 20, type: bonus.good },
            { key: "basalt", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "jewelry", value: 50, type: bonus.good },
            { key: "copper", value: 30, type: bonus.good },
            { key: "brick", value: 20, type: bonus.good },
            { key: "talc_powder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "ebony", value: 50, type: bonus.good },
            { key: "honey", value: 30, type: bonus.good },
            { key: "glass", value: 20, type: bonus.good },
            { key: "brass", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "lumber", value: 50, type: bonus.good },
            { key: "granite", value: 30, type: bonus.good },
            { key: "rope", value: 10, type: bonus.good },
            { key: "gunpowder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "wine", value: 25, type: bonus.good },
            { key: "gold", value: 30, type: bonus.good },
            { key: "dried_herbs", value: 20, type: bonus.good },
            { key: "silk", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "marble", value: 50, type: bonus.good },
            { key: "granite", value: 30, type: bonus.good },
            { key: "salt", value: 20, type: bonus.good },
            { key: "brass", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Houndsmoor: {
      key: "Houndsmoor",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        { type: "medal", value: 15 },
        { type: bonus.good, good: "paper", value: 20 }
      ],
      sectors: [
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "limestone", value: 50, type: bonus.good },
            { key: "copper", value: 30, type: bonus.good },
            { key: "salt", value: 20, type: bonus.good },
            { key: "talc_powder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "ebony", value: 50, type: bonus.good },
            { key: "gold", value: 30, type: bonus.good },
            { key: "rope", value: 20, type: bonus.good },
            { key: "silk", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "cloth", value: 50, type: bonus.good },
            { key: "honey", value: 30, type: bonus.good },
            { key: "dried_herbs", value: 20, type: bonus.good },
            { key: "talc_powder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "iron", value: 50, type: bonus.good },
            { key: "granite", value: 30, type: bonus.good },
            { key: "glass", value: 20, type: bonus.good },
            { key: "gunpowder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "jewelry", value: 50, type: bonus.good },
            { key: "honey", value: 15, type: bonus.good },
            { key: "brick", value: 20, type: bonus.good },
            { key: "brass", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "cloth", value: 50, type: bonus.good },
            { key: "alabaster", value: 30, type: bonus.good },
            { key: "dried_herbs", value: 10, type: bonus.good },
            { key: "basalt", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Grand_Cap: {
      key: "Grand_Cap",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        { type: "medal", value: 30 },
        { type: "diamond", value: 100 }
      ],
      sectors: [
        {
          reward: [{ type: "coin", value: 2500 }],
          cost: [
            { key: "limestone", value: 50, type: bonus.good },
            { key: "alabaster", value: 30, type: bonus.good },
            { key: "brick", value: 20, type: bonus.good },
            { key: "basalt", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 2500 }],
          cost: [
            { key: "iron", value: 50, type: bonus.good },
            { key: "copper", value: 30, type: bonus.good },
            { key: "glass", value: 20, type: bonus.good },
            { key: "talc_powder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 2500 }],
          cost: [
            { key: "wine", value: 50, type: bonus.good },
            { key: "granite", value: 30, type: bonus.good },
            { key: "dried_herbs", value: 20, type: bonus.good },
            { key: "gunpowder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 2500 }],
          cost: [
            { key: "marble", value: 50, type: bonus.good },
            { key: "gold", value: 30, type: bonus.good },
            { key: "salt", value: 20, type: bonus.good },
            { key: "silk", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 2500 }],
          cost: [
            { key: "dye", value: 50, type: bonus.good },
            { key: "gold", value: 30, type: bonus.good },
            { key: "brick", value: 20, type: bonus.good },
            { key: "gunpowder", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 2500 }],
          cost: [
            { key: "lumber", value: 50, type: bonus.good },
            { key: "honey", value: 30, type: bonus.good },
            { key: "rope", value: 20, type: bonus.good },
            { key: "brass", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Northcastle: {
      key: "Northcastle",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        { type: "medal", value: 25 },
        { type: bonus.good, good: "porcelain", value: 20 }
      ],
      sectors: [
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "cloth", value: 50, type: bonus.good },
            { key: "alabaster", value: 30, type: bonus.good },
            { key: "brick", value: 20, type: bonus.good },
            { key: "basalt", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "limestone", value: 50, type: bonus.good },
            { key: "copper", value: 30, type: bonus.good },
            { key: "glass", value: 20, type: bonus.good },
            { key: "talc_powder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1250 }],
          cost: [
            { key: "jewelry", value: 50, type: bonus.good },
            { key: "honey", value: 30, type: bonus.good },
            { key: "rope", value: 20, type: bonus.good },
            { key: "brass", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "iron", value: 50, type: bonus.good },
            { key: "granite", value: 30, type: bonus.good },
            { key: "dried_herbs", value: 20, type: bonus.good },
            { key: "gunpowder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "ebony", value: 50, type: bonus.good },
            { key: "gold", value: 30, type: bonus.good },
            { key: "salt", value: 20, type: bonus.good },
            { key: "silk", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "dye", value: 25, type: bonus.good },
            { key: "alabaster", value: 30, type: bonus.good },
            { key: "glass", value: 20, type: bonus.good },
            { key: "silk", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Queenshope: {
      key: "Queenshope",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        { type: "medal", value: 25 },
        { type: bonus.good, good: "wire", value: 20 }
      ],
      sectors: [
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [
            { key: "ebony", value: 50, type: bonus.good },
            { key: "honey", value: 30, type: bonus.good },
            { key: "rope", value: 20, type: bonus.good },
            { key: "basalt", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [
            { key: "iron", value: 50, type: bonus.good },
            { key: "gold", value: 30, type: bonus.good },
            { key: "salt", value: 20, type: bonus.good },
            { key: "silk", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "jewelry", value: 50, type: bonus.good },
            { key: "granite", value: 30, type: bonus.good },
            { key: "dried_herbs", value: 10, type: bonus.good },
            { key: "gunpowder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "limestone", value: 50, type: bonus.good },
            { key: "honey", value: 30, type: bonus.good },
            { key: "rope", value: 20, type: bonus.good },
            { key: "brass", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "cloth", value: 50, type: bonus.good },
            { key: "copper", value: 30, type: bonus.good },
            { key: "glass", value: 20, type: bonus.good },
            { key: "talc_powder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "stone", value: 50, type: bonus.good },
            { key: "alabaster", value: 15, type: bonus.good },
            { key: "brick", value: 20, type: bonus.good },
            { key: "basalt", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Ashcrook: {
      key: "Ashcrook",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        { type: "medal", value: 25 },
        { type: bonus.good, good: "tar", value: 20 }
      ],
      sectors: [
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [
            { key: "dye", value: 25, type: bonus.good },
            { key: "alabaster", value: 30, type: bonus.good },
            { key: "dried_herbs", value: 20, type: bonus.good },
            { key: "talc_powder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [
            { key: "iron", value: 50, type: bonus.good },
            { key: "granite", value: 30, type: bonus.good },
            { key: "dried_herbs", value: 20, type: bonus.good },
            { key: "gunpowder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "limestone", value: 50, type: bonus.good },
            { key: "copper", value: 30, type: bonus.good },
            { key: "glass", value: 20, type: bonus.good },
            { key: "talc_powder", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [
            { key: "ebony", value: 50, type: bonus.good },
            { key: "gold", value: 30, type: bonus.good },
            { key: "salt", value: 20, type: bonus.good },
            { key: "silk", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "wine", value: 25, type: bonus.good },
            { key: "alabaster", value: 30, type: bonus.good },
            { key: "brick", value: 20, type: bonus.good },
            { key: "basalt", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "jewelry", value: 50, type: bonus.good },
            { key: "honey", value: 15, type: bonus.good },
            { key: "rope", value: 20, type: bonus.good },
            { key: "brass", value: 15, type: bonus.good }
          ]
        }
      ]
    }
  },
  ColonialAge: {
    Narcien: {
      key: "Narcien",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 1000 }],
          cost: [
            { key: "copper", value: 40, type: bonus.good },
            { key: "brick", value: 35, type: bonus.good },
            { key: "silk", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1000 }],
          cost: [
            { key: "honey", value: 40, type: bonus.good },
            { key: "rope", value: 35, type: bonus.good },
            { key: "brass", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "alabaster", value: 40, type: bonus.good },
            { key: "glass", value: 35, type: bonus.good },
            { key: "talc_powder", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1000 }],
          cost: [
            { key: "granite", value: 40, type: bonus.good },
            { key: "glass", value: 35, type: bonus.good },
            { key: "brass", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1000 }],
          cost: [
            { key: "gold", value: 60, type: bonus.good },
            { key: "dried_herbs", value: 35, type: bonus.good },
            { key: "talc_powder", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Lavignon: {
      key: "Lavignon",
      reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "granite", value: 50, type: bonus.good },
            { key: "rope", value: 45, type: bonus.good },
            { key: "talc_powder", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "honey", value: 50, type: bonus.good },
            { key: "brick", value: 45, type: bonus.good },
            { key: "brass", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "copper", value: 50, type: bonus.good },
            { key: "glass", value: 45, type: bonus.good },
            { key: "silk", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "alabaster", value: 50, type: bonus.good },
            { key: "salt", value: 45, type: bonus.good },
            { key: "gunpowder", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Troulope: {
      key: "Troulope",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "copper", value: 55, type: bonus.good },
            { key: "dried_herbs", value: 50, type: bonus.good },
            { key: "basalt", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [
            { key: "alabaster", value: 55, type: bonus.good },
            { key: "salt", value: 50, type: bonus.good },
            { key: "gunpowder", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "honey", value: 55, type: bonus.good },
            { key: "brick", value: 50, type: bonus.good },
            { key: "gunpowder", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [
            { key: "gold", value: 60, type: bonus.good },
            { key: "rope", value: 50, type: bonus.good },
            { key: "silk", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 1500 }],
          cost: [
            { key: "granite", value: 55, type: bonus.good },
            { key: "dried_herbs", value: 50, type: bonus.good },
            { key: "basalt", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 1500 }],
          cost: [
            { key: "gold", value: 75, type: bonus.good },
            { key: "salt", value: 60, type: bonus.good },
            { key: "basalt", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Deuxerres: {
      key: "Deuxerres",
      reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "glass", value: 4, type: bonus.good },
            { key: "silk", value: 35, type: bonus.good },
            { key: "tar", value: 22, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "brick", value: 40, type: bonus.good },
            { key: "brass", value: 35, type: bonus.good },
            { key: "porcelain", value: 22, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "rope", value: 40, type: bonus.good },
            { key: "talc_powder", value: 35, type: bonus.good },
            { key: "tar", value: 22, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "salt", value: 40, type: bonus.good },
            { key: "gunpowder", value: 35, type: bonus.good },
            { key: "wire", value: 22, type: bonus.good }
          ]
        }
      ]
    },
    Lombardeaux: {
      key: "Lombardeaux",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "alabaster", value: 50, type: bonus.good },
            { key: "dried_herbs", value: 40, type: bonus.good },
            { key: "basalt", value: 35, type: bonus.good },
            { key: "wire", value: 28, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "copper", value: 50, type: bonus.good },
            { key: "glass", value: 40, type: bonus.good },
            { key: "silk", value: 35, type: bonus.good },
            { key: "tar", value: 28, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "honey", value: 50, type: bonus.good },
            { key: "brick", value: 40, type: bonus.good },
            { key: "brass", value: 35, type: bonus.good },
            { key: "porcelain", value: 28, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "granite", value: 50, type: bonus.good },
            { key: "rope", value: 40, type: bonus.good },
            { key: "talc_powder", value: 35, type: bonus.good },
            { key: "porcelain", value: 28, type: bonus.good }
          ]
        }
      ]
    },
    Varseille: {
      key: "Varseille",
      reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "salt", value: 28, type: bonus.good },
            { key: "brass", value: 22, type: bonus.good },
            { key: "paper", value: 42, type: bonus.good },
            { key: "wire", value: 22, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "glass", value: 28, type: bonus.good },
            { key: "gunpowder", value: 22, type: bonus.good },
            { key: "coffee", value: 42, type: bonus.good },
            { key: "porcelain", value: 22, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "brick", value: 28, type: bonus.good },
            { key: "silk", value: 22, type: bonus.good },
            { key: "porcelain", value: 42, type: bonus.good },
            { key: "tar", value: 22, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "salt", value: 28, type: bonus.good },
            { key: "brass", value: 22, type: bonus.good },
            { key: "paper", value: 22, type: bonus.good },
            { key: "wire", value: 42, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "rope", value: 28, type: bonus.good },
            { key: "basalt", value: 22, type: bonus.good },
            { key: "paper", value: 42, type: bonus.good },
            { key: "coffee", value: 22, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "dried_herbs", value: 28, type: bonus.good },
            { key: "talc_powder", value: 22, type: bonus.good },
            { key: "coffee", value: 42, type: bonus.good },
            { key: "tar", value: 22, type: bonus.good }
          ]
        }
      ]
    },
    Pisterrac: {
      key: "Pisterrac",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "basalt", value: 22, type: bonus.good },
            { key: "brass", value: 22, type: bonus.good },
            { key: "coffee", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "silk", value: 22, type: bonus.good },
            { key: "gunpowder", value: 22, type: bonus.good },
            { key: "wire", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "basalt", value: 22, type: bonus.good },
            { key: "silk", value: 22, type: bonus.good },
            { key: "paper", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "basalt", value: 22, type: bonus.good },
            { key: "gunpowder", value: 22, type: bonus.good },
            { key: "tar", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "talc_powder", value: 22, type: bonus.good },
            { key: "gunpowder", value: 22, type: bonus.good },
            { key: "porcelain", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Haulenois: {
      key: "Haulenois",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "salt", value: 28, type: bonus.good },
            { key: "brass", value: 28, type: bonus.good },
            { key: "paper", value: 50, type: bonus.good },
            { key: "wire", value: 28, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "rope", value: 28, type: bonus.good },
            { key: "talc_powder", value: 28, type: bonus.good },
            { key: "paper", value: 50, type: bonus.good },
            { key: "porcelain", value: 28, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "glass", value: 28, type: bonus.good },
            { key: "basalt", value: 28, type: bonus.good },
            { key: "coffee", value: 50, type: bonus.good },
            { key: "wire", value: 28, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "glass", value: 28, type: bonus.good },
            { key: "gunpowder", value: 28, type: bonus.good },
            { key: "wire", value: 50, type: bonus.good },
            { key: "tar", value: 28, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [
            { key: "brick", value: 28, type: bonus.good },
            { key: "silk", value: 28, type: bonus.good },
            { key: "paper", value: 28, type: bonus.good },
            { key: "coffee", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [
            { key: "dried_herbs", value: 28, type: bonus.good },
            { key: "talc_powder", value: 28, type: bonus.good },
            { key: "coffee", value: 28, type: bonus.good },
            { key: "tar", value: 50, type: bonus.good }
          ]
        }
      ]
    }
  },
  IndustrialAge: {
    Okahe: {
      key: "Okahe",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100 }],
          cost: [
            { key: "salt", value: 42, type: bonus.good },
            { key: "gunpowder", value: 50, type: bonus.good },
            { key: "tar", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100 }],
          cost: [
            { key: "glass", value: 42, type: bonus.good },
            { key: "talc_powder", value: 50, type: bonus.good },
            { key: "paper", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100 }],
          cost: [
            { key: "rope", value: 42, type: bonus.good },
            { key: "talc_powder", value: 50, type: bonus.good },
            { key: "wire", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100 }],
          cost: [
            { key: "dried_herbs", value: 42, type: bonus.good },
            { key: "gunpowder", value: 50, type: bonus.good },
            { key: "tar", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100 }],
          cost: [
            { key: "rope", value: 42, type: bonus.good },
            { key: "gunpowder", value: 50, type: bonus.good },
            { key: "wire", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100 }],
          cost: [
            { key: "glass", value: 42, type: bonus.good },
            { key: "gunpowder", value: 50, type: bonus.good },
            { key: "paper", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    NewCragshire: {
      key: "NewCragshire",
      reward: [{ type: "coin", value: 40000 }, { type: "supply", value: 40000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "brick", value: 32, type: bonus.good },
            { key: "brass", value: 35, type: bonus.good },
            { key: "porcelain", value: 50, type: bonus.good },
            { key: "tar", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "salt", value: 32, type: bonus.good },
            { key: "brass", value: 35, type: bonus.good },
            { key: "paper", value: 60, type: bonus.good },
            { key: "coffee", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "dried_herbs", value: 32, type: bonus.good },
            { key: "silk", value: 35, type: bonus.good },
            { key: "paper", value: 60, type: bonus.good },
            { key: "porcelain", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "brick", value: 32, type: bonus.good },
            { key: "silk", value: 35, type: bonus.good },
            { key: "coffee", value: 50, type: bonus.good },
            { key: "porcelain", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    Rantford: {
      key: "Rantford",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "brass", value: 47, type: bonus.good },
            { key: "coffee", value: 35, type: bonus.good },
            { key: "tar", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "silk", value: 47, type: bonus.good },
            { key: "wire", value: 55, type: bonus.good },
            { key: "porcelain", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "talc_powder", value: 47, type: bonus.good },
            { key: "coffee", value: 55, type: bonus.good },
            { key: "wire", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "basalt", value: 47, type: bonus.good },
            { key: "paper", value: 35, type: bonus.good },
            { key: "porcelain", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "talc_powder", value: 47, type: bonus.good },
            { key: "paper", value: 55, type: bonus.good },
            { key: "tar", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "silk", value: 47, type: bonus.good },
            { key: "wire", value: 55, type: bonus.good },
            { key: "tar", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Desperation: {
      key: "Desperation",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "dried_herbs", value: 32, type: bonus.good },
            { key: "silk", value: 35, type: bonus.good },
            { key: "coffee", value: 50, type: bonus.good },
            { key: "wire", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "dried_herbs", value: 32, type: bonus.good },
            { key: "basalt", value: 35, type: bonus.good },
            { key: "porcelain", value: 50, type: bonus.good },
            { key: "tar", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "rope", value: 42, type: bonus.good },
            { key: "gunpowder", value: 32, type: bonus.good },
            { key: "paper", value: 47, type: bonus.good },
            { key: "tar", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "glass", value: 22, type: bonus.good },
            { key: "basalt", value: 40, type: bonus.good },
            { key: "wire", value: 50, type: bonus.good },
            { key: "porcelain", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "salt", value: 42, type: bonus.good },
            { key: "talc_powder", value: 35, type: bonus.good },
            { key: "coffee", value: 60, type: bonus.good },
            { key: "tar", value: 47, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "brick", value: 32, type: bonus.good },
            { key: "brass", value: 35, type: bonus.good },
            { key: "paper", value: 60, type: bonus.good },
            { key: "coffee", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Las_Penas: {
      key: "Las_Penas",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "gunpowder", value: 47, type: bonus.good },
            { key: "porcelain", value: 60, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "talc_powder", value: 47, type: bonus.good },
            { key: "coffee", value: 60, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "brass", value: 47, type: bonus.good },
            { key: "wire", value: 60, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "basalt", value: 47, type: bonus.good },
            { key: "porcelain", value: 60, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "brass", value: 47, type: bonus.good },
            { key: "tar", value: 60, type: bonus.good },
            { key: "rubber", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "basalt", value: 47, type: bonus.good },
            { key: "wire", value: 60, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    DragonCity: {
      key: "DragonCity",
      reward: [{ type: "coin", value: 40000 }, { type: "supply", value: 40000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ key: "wire", value: 85, type: bonus.good }, { key: "rubber", value: 65, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ key: "tar", value: 85, type: bonus.good }, { key: "coke", value: 65, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ key: "coffee", value: 85, type: bonus.good }, { key: "whale_oil", value: 65, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ key: "porcelain", value: 85, type: bonus.good }, { key: "textiles", value: 65, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ key: "coffee", value: 85, type: bonus.good }, { key: "coke", value: 65, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ key: "paper", value: 85, type: bonus.good }, { key: "fertilizer", value: 65, type: bonus.good }]
        }
      ]
    },
    Garrincton: {
      key: "Garrincton",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "paper", value: 55, type: bonus.good },
            { key: "wire", value: 48, type: bonus.good },
            { key: "rubber", value: 30, type: bonus.good },
            { key: "fertilizer", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "coffee", value: 55, type: bonus.good },
            { key: "porcelain", value: 48, type: bonus.good },
            { key: "whale_oil", value: 25, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "paper", value: 48, type: bonus.good },
            { key: "porcelain", value: 55, type: bonus.good },
            { key: "coke", value: 25, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "porcelain", value: 55, type: bonus.good },
            { key: "tar", value: 48, type: bonus.good },
            { key: "rubber", value: 25, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "wire", value: 55, type: bonus.good },
            { key: "tar", value: 48, type: bonus.good },
            { key: "rubber", value: 30, type: bonus.good },
            { key: "whale_oil", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "paper", value: 55, type: bonus.good },
            { key: "coffee", value: 48, type: bonus.good },
            { key: "textiles", value: 25, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    St_Marque: {
      key: "St_Marque",
      reward: [{ type: "coin", value: 40000 }, { type: "supply", value: 40000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "basalt", value: 45, type: bonus.good },
            { key: "wire", value: 43, type: bonus.good },
            { key: "rubber", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "talc_powder", value: 45, type: bonus.good },
            { key: "tar", value: 43, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "brass", value: 45, type: bonus.good },
            { key: "porcelain", value: 43, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "silk", value: 45, type: bonus.good },
            { key: "coffee", value: 43, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "basalt", value: 45, type: bonus.good },
            { key: "paper", value: 43, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Embruniez: {
      key: "Embruniez",
      reward: [{ type: "coin", value: 60000 }, { type: "supply", value: 60000 }, { type: "medal", value: 150 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good },
            { key: "fertilizer", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good },
            { key: "whale_oil", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good },
            { key: "textiles", value: 10, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good },
            { key: "fertilizer", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "rubber", value: 10, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "rubber", value: 20, type: bonus.good },
            { key: "coke", value: 10, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good },
            { key: "textiles", value: 10, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good },
            { key: "whale_oil", value: 10, type: bonus.good }
          ]
        }
      ]
    },
    Gabordeaux: {
      key: "Gabordeaux",
      reward: [{ type: "coin", value: 70000 }, { type: "supply", value: 70000 }, { type: "medal", value: 150 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "rubber", value: 20, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "coke", value: 20, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "rubber", value: 20, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Ydine: {
      key: "Ydine",
      reward: [{ type: "coin", value: 100000 }, { type: "supply", value: 100000 }, { type: "medal", value: 200 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "whale_oil", value: 60, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "coke", value: 50, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 60, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "rubber", value: 60, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 60, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "rubber", value: 60, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "coke", value: 50, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    Wenoevre: {
      key: "Wenoevre",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "coke", value: 70, type: bonus.good },
            { key: "textiles", value: 60, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 70, type: bonus.good },
            { key: "coke", value: 60, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "rubber", value: 60, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "fertilizer", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "whale_oil", value: 70, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "textiles", value: 70, type: bonus.good },
            { key: "whale_oil", value: 60, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "coke", value: 70, type: bonus.good },
            { key: "textiles", value: 60, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "rubber", value: 70, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 60, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "fertilizer", value: 70, type: bonus.good }
          ]
        }
      ]
    },
    Nevarrone: {
      key: "Nevarrone",
      reward: [{ type: "coin", value: 50000 }, { type: "supply", value: 50000 }, { type: "medal", value: 100 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "coke", value: 60, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 60, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 60, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "rubber", value: 60, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 60, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "coke", value: 60, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    SantaCatalina: {
      key: "SantaCatalina",
      reward: [{ type: "coin", value: 60000 }, { type: "supply", value: 60000 }, { type: "medal", value: 100 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "rubber", value: 20, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 10, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "rubber", value: 10, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "coke", value: 10, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 10, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good },
            { key: "fertilizer", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "rubber", value: 20, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 10, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "rubber", value: 10, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [
            { key: "coke", value: 10, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Dorango: {
      key: "Dorango",
      reward: [{ type: "coin", value: 70000 }, { type: "supply", value: 70000 }, { type: "medal", value: 100 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "rubber", value: 20, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [
            { key: "rubber", value: 20, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    ElFuego: {
      key: "ElFuego",
      reward: [
        { type: "coin", value: 80000 },
        { type: "supply", value: 80000 },
        { type: "medal", value: 150 },
        { type: "diamond", value: 150 }
      ],
      sectors: [
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good },
            { key: "whale_oil", value: 10, type: bonus.good },
            { key: "fertilizer", value: 5, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [
            { key: "rubber", value: 20, type: bonus.good },
            { key: "coke", value: 10, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 5, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "rubber", value: 10, type: bonus.good },
            { key: "coke", value: 5, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "rubber", value: 5, type: bonus.good },
            { key: "textiles", value: 10, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good },
            { key: "whale_oil", value: 10, type: bonus.good },
            { key: "fertilizer", value: 5, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 5, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good },
            { key: "fertilizer", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [
            { key: "rubber", value: 20, type: bonus.good },
            { key: "coke", value: 10, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 5, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [
            { key: "rubber", value: 10, type: bonus.good },
            { key: "coke", value: 5, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good }
          ]
        }
      ]
    }
  },
  ProgressiveEra: {
    Havre: {
      key: "Havre",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [{ key: "basalt", value: 50, type: bonus.good }, { key: "tar", value: 25, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ key: "silk", value: 60, type: bonus.good }, { key: "coffee", value: 25, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [{ key: "brass", value: 60, type: bonus.good }, { key: "paper", value: 25, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ key: "gunpowder", value: 60, type: bonus.good }, { key: "wire", value: 25, type: bonus.good }]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [{ key: "talc_powder", value: 60, type: bonus.good }, { key: "porcelain", value: 25, type: bonus.good }]
        }
      ]
    },
    Uxrow: {
      key: "Uxrow",
      reward: [{ type: "coin", value: 75000 }, { type: "supply", value: 25000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "paper", value: 20, type: bonus.good },
            { key: "wire", value: 15, type: bonus.good },
            { key: "whale_oil", value: 25, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "coffee", value: 20, type: bonus.good },
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "rubber", value: 20, type: bonus.good },
            { key: "textiles", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "paper", value: 20, type: bonus.good },
            { key: "tar", value: 15, type: bonus.good },
            { key: "coke", value: 25, type: bonus.good },
            { key: "fertilizer", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "wire", value: 20, type: bonus.good },
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "rubber", value: 20, type: bonus.good },
            { key: "whale_oil", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Gaelford: {
      key: "Gaelford",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "wire", value: 15, type: bonus.good },
            { key: "tar", value: 20, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good },
            { key: "textiles", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "coffee", value: 20, type: bonus.good },
            { key: "tar", value: 15, type: bonus.good },
            { key: "coke", value: 25, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "paper", value: 15, type: bonus.good },
            { key: "tar", value: 20, type: bonus.good },
            { key: "rubber", value: 25, type: bonus.good },
            { key: "coke", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "paper", value: 15, type: bonus.good },
            { key: "porcelain", value: 20, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good },
            { key: "fertilizer", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "coffee", value: 15, type: bonus.good },
            { key: "porcelain", value: 20, type: bonus.good },
            { key: "whale_oil", value: 20, type: bonus.good },
            { key: "fertilizer", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "coffee", value: 15, type: bonus.good },
            { key: "wire", value: 20, type: bonus.good },
            { key: "rubber", value: 25, type: bonus.good },
            { key: "textiles", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Omoien: {
      key: "Omoien",
      reward: [{ type: "coin", value: 70000 }, { type: "supply", value: 70000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "basalt", value: 25, type: bonus.good },
            { key: "porcelain", value: 30, type: bonus.good },
            { key: "coke", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "basalt", value: 25, type: bonus.good },
            { key: "paper", value: 30, type: bonus.good },
            { key: "textiles", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "silk", value: 25, type: bonus.good },
            { key: "paper", value: 30, type: bonus.good },
            { key: "rubber", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "brass", value: 25, type: bonus.good },
            { key: "coffee", value: 30, type: bonus.good },
            { key: "textiles", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "gunpowder", value: 25, type: bonus.good },
            { key: "coffee", value: 30, type: bonus.good },
            { key: "whale_oil", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "silk", value: 25, type: bonus.good },
            { key: "porcelain", value: 30, type: bonus.good },
            { key: "rubber", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "brass", value: 25, type: bonus.good },
            { key: "wire", value: 30, type: bonus.good },
            { key: "coke", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "talc_powder", value: 25, type: bonus.good },
            { key: "tar", value: 30, type: bonus.good },
            { key: "fertilizer", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "gunpowder", value: 25, type: bonus.good },
            { key: "tar", value: 30, type: bonus.good },
            { key: "whale_oil", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "talc_powder", value: 25, type: bonus.good },
            { key: "wire", value: 30, type: bonus.good },
            { key: "fertilizer", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Kriegreich: {
      key: "Kriegreich",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "basalt", value: 20, type: bonus.good },
            { key: "wire", value: 30, type: bonus.good },
            { key: "whale_oil", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "gunpowder", value: 20, type: bonus.good },
            { key: "porcelain", value: 30, type: bonus.good },
            { key: "textiles", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "silk", value: 25, type: bonus.good },
            { key: "tar", value: 30, type: bonus.good },
            { key: "coke", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "brass", value: 20, type: bonus.good },
            { key: "paper", value: 30, type: bonus.good },
            { key: "fertilizer", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "gunpowder", value: 20, type: bonus.good },
            { key: "coffee", value: 30, type: bonus.good },
            { key: "rubber", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "talc_powder", value: 20, type: bonus.good },
            { key: "porcelain", value: 30, type: bonus.good },
            { key: "textiles", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "basalt", value: 20, type: bonus.good },
            { key: "wire", value: 30, type: bonus.good },
            { key: "whale_oil", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "silk", value: 20, type: bonus.good },
            { key: "tar", value: 30, type: bonus.good },
            { key: "coke", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "talc_powder", value: 25, type: bonus.good },
            { key: "paper", value: 30, type: bonus.good },
            { key: "fertilizer", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "brass", value: 20, type: bonus.good },
            { key: "coffee", value: 30, type: bonus.good },
            { key: "rubber", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Sud: {
      key: "Sud",
      reward: [{ type: "coin", value: 125000 }, { type: "medal", value: 150 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "basalt", value: 40, type: bonus.good },
            { key: "wire", value: 20, type: bonus.good },
            { key: "coke", value: 25, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "silk", value: 45, type: bonus.good },
            { key: "tar", value: 20, type: bonus.good },
            { key: "whale_oil", value: 25, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "brass", value: 40, type: bonus.good },
            { key: "porcelain", value: 20, type: bonus.good },
            { key: "rubber", value: 25, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "gunpowder", value: 40, type: bonus.good },
            { key: "coffee", value: 20, type: bonus.good },
            { key: "textiles", value: 25, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "talc_powder", value: 45, type: bonus.good },
            { key: "paper", value: 20, type: bonus.good },
            { key: "fertilizer", value: 25, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 2500 }],
          cost: [
            { key: "brass", value: 40, type: bonus.good },
            { key: "porcelain", value: 20, type: bonus.good },
            { key: "textiles", value: 25, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "basalt", value: 40, type: bonus.good },
            { key: "wire", value: 20, type: bonus.good },
            { key: "fertilizer", value: 25, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Ostrand: {
      key: "Ostrand",
      reward: [{ type: "coin", value: 90000 }, { type: "supply", value: 50000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "silk", value: 20, type: bonus.good },
            { key: "coffee", value: 30, type: bonus.good },
            { key: "textiles", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "basalt", value: 20, type: bonus.good },
            { key: "paper", value: 30, type: bonus.good },
            { key: "rubber", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "brass", value: 20, type: bonus.good },
            { key: "porcelain", value: 30, type: bonus.good },
            { key: "whale_oil", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "gunpowder", value: 20, type: bonus.good },
            { key: "wire", value: 30, type: bonus.good },
            { key: "coke", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "talc_powder", value: 20, type: bonus.good },
            { key: "tar", value: 30, type: bonus.good },
            { key: "fertilizer", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "gunpowder", value: 20, type: bonus.good },
            { key: "tar", value: 30, type: bonus.good },
            { key: "coke", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Langenreich: {
      key: "Langenreich",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "rubber", value: 30, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "wire", value: 15, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "coffee", value: 15, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "tar", value: 15, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "paper", value: 15, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Uceria: {
      key: "Uceria",
      reward: [{ type: "coin", value: 50000 }, { type: "supply", value: 50000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "rubber", value: 30, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "coffee", value: 15, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "paper", value: 15, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "tar", value: 15, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "wire", value: 15, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Gorski: {
      key: "Gorski",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "paper", value: 15, type: bonus.good },
            { key: "wire", value: 15, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "coffee", value: 15, type: bonus.good },
            { key: "wire", value: 15, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "coffee", value: 15, type: bonus.good },
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "coffee", value: 15, type: bonus.good },
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "coffee", value: 15, type: bonus.good },
            { key: "tar", value: 15, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "paper", value: 15, type: bonus.good },
            { key: "tar", value: 15, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "wire", value: 15, type: bonus.good },
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "paper", value: 15, type: bonus.good },
            { key: "tar", value: 15, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "paper", value: 15, type: bonus.good },
            { key: "tar", value: 15, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "coffee", value: 15, type: bonus.good },
            { key: "tar", value: 15, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [
            { key: "paper", value: 15, type: bonus.good },
            { key: "wire", value: 15, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [
            { key: "wire", value: 15, type: bonus.good },
            { key: "porcelain", value: 15, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        }
      ]
    }
  },
  ModernEra: {
    Natsuishu: {
      key: "Natsuishu",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "paper", value: 40, type: bonus.good },
            { key: "porcelain", value: 20, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "whale_oil", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "coffee", value: 40, type: bonus.good },
            { key: "tar", value: 20, type: bonus.good },
            { key: "rubber", value: 50, type: bonus.good },
            { key: "textiles", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "coffee", value: 20, type: bonus.good },
            { key: "wire", value: 40, type: bonus.good },
            { key: "coke", value: 60, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "paper", value: 20, type: bonus.good },
            { key: "tar", value: 40, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "wire", value: 20, type: bonus.good },
            { key: "porcelain", value: 40, type: bonus.good },
            { key: "rubber", value: 60, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "coffee", value: 20, type: bonus.good },
            { key: "porcelain", value: 40, type: bonus.good },
            { key: "coke", value: 60, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "wire", value: 40, type: bonus.good },
            { key: "tar", value: 20, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "paper", value: 20, type: bonus.good },
            { key: "porcelain", value: 40, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "porcelain", value: 20, type: bonus.good },
            { key: "tar", value: 40, type: bonus.good },
            { key: "rubber", value: 50, type: bonus.good },
            { key: "whale_oil", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "paper", value: 40, type: bonus.good },
            { key: "wire", value: 20, type: bonus.good },
            { key: "rubber", value: 60, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "paper", value: 20, type: bonus.good },
            { key: "coffee", value: 40, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "textiles", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    Inashu: {
      key: "Inashu",
      reward: [{ type: "coin", value: 75000 }, { type: "supply", value: 75000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "coffee", value: 25, type: bonus.good },
            { key: "rubber", value: 60, type: bonus.good },
            { key: "whale_oil", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "tar", value: 20, type: bonus.good },
            { key: "textiles", value: 60, type: bonus.good },
            { key: "fertilizer", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "paper", value: 25, type: bonus.good },
            { key: "rubber", value: 45, type: bonus.good },
            { key: "whale_oil", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "wire", value: 25, type: bonus.good },
            { key: "coke", value: 60, type: bonus.good },
            { key: "fertilizer", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Chigikawa: {
      key: "Chigikawa",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "rubber", value: 65, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "machine_parts", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "coke", value: 65, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "gasoline", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "textiles", value: 65, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "asbestos", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "coke", value: 65, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "fertilizer", value: 65, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 65, type: bonus.good },
            { key: "machine_parts", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "whale_oil", value: 65, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "gasoline", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 65, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "asbestos", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "whale_oil", value: 65, type: bonus.good },
            { key: "asbestos", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "textiles", value: 65, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "whale_oil", value: 65, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "machine_parts", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 65, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "fertilizer", value: 65, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Igujima: {
      key: "Igujima",
      reward: [{ type: "good_bonus", age: "BronzeAge" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "coke", value: 45, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "coke", value: 30, type: bonus.good },
            { key: "whale_oil", value: 45, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "textiles", value: 45, type: bonus.good },
            { key: "machine_parts", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "rubber", value: 45, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good },
            { key: "asbestos", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "textiles", value: 50, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "fertilizer", value: 45, type: bonus.good },
            { key: "gasoline", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "textiles", value: 45, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "fertilizer", value: 45, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "rubber", value: 45, type: bonus.good },
            { key: "coke", value: 50, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "machine_parts", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "coke", value: 45, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "gasoline", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Kyushima: {
      key: "Kyushima",
      reward: [
        { type: bonus.good, good: "coffee", value: 25 },
        { type: bonus.good, good: "porcelain", value: 25 },
        { type: bonus.good, good: "paper", value: 25 },
        { type: bonus.good, good: "tar", value: 25 },
        { type: bonus.good, good: "wire", value: 25 }
      ],
      sectors: [
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "porcelain", value: 30, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good },
            { key: "ferroconcrete", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "tar", value: 30, type: bonus.good },
            { key: "coke", value: 60, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "flavorants", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "tar", value: 30, type: bonus.good },
            { key: "rubber", value: 60, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "flavorants", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "paper", value: 30, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "tinplate", value: 60, type: bonus.good },
            { key: "packaging", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "coffee", value: 30, type: bonus.good },
            { key: "rubber", value: 40, type: bonus.good },
            { key: "whale_oil", value: 60, type: bonus.good },
            { key: "luxury_materials", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "coffee", value: 30, type: bonus.good },
            { key: "rubber", value: 40, type: bonus.good },
            { key: "fertilizer", value: 60, type: bonus.good },
            { key: "ferroconcrete", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "wire", value: 30, type: bonus.good },
            { key: "textiles", value: 60, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "convenience_food", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "porcelain", value: 30, type: bonus.good },
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 60, type: bonus.good },
            { key: "convenience_food", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "paper", value: 30, type: bonus.good },
            { key: "rubber", value: 60, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "packaging", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "wire", value: 30, type: bonus.good },
            { key: "coke", value: 60, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "luxury_materials", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Igioka: {
      key: "Igioka",
      reward: [{ type: "coin", value: 115000 }, { type: "supply", value: 115000 }, { type: "medal", value: 250 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "whale_oil", value: 60, type: bonus.good },
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "flavorants", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "textiles", value: 60, type: bonus.good },
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "convenience_food", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "rubber", value: 60, type: bonus.good },
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "flavorants", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "coke", value: 60, type: bonus.good },
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "coke", value: 60, type: bonus.good },
            { key: "explosives", value: 50, type: bonus.good },
            { key: "packaging", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "textiles", value: 60, type: bonus.good },
            { key: "gasoline", value: 50, type: bonus.good },
            { key: "ferroconcrete", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Igamoto: {
      key: "Igamoto",
      reward: [{ type: "good_bonus", age: "ColonialAge" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "whale_oil", value: 35, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good },
            { key: "machine_parts", value: 45, type: bonus.good },
            { key: "flavorants", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "coke", value: 50, type: bonus.good },
            { key: "fertilizer", value: 35, type: bonus.good },
            { key: "machine_parts", value: 45, type: bonus.good },
            { key: "convenience_food", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "coke", value: 35, type: bonus.good },
            { key: "asbestos", value: 45, type: bonus.good },
            { key: "luxury_materials", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "coke", value: 35, type: bonus.good },
            { key: "textiles", value: 50, type: bonus.good },
            { key: "asbestos", value: 45, type: bonus.good },
            { key: "packaging", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "textiles", value: 35, type: bonus.good },
            { key: "fertilizer", value: 50, type: bonus.good },
            { key: "machine_parts", value: 45, type: bonus.good },
            { key: "packaging", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "rubber", value: 50, type: bonus.good },
            { key: "fertilizer", value: 35, type: bonus.good },
            { key: "explosives", value: 45, type: bonus.good },
            { key: "flavorants", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 35, type: bonus.good },
            { key: "whale_oil", value: 50, type: bonus.good },
            { key: "gasoline", value: 45, type: bonus.good },
            { key: "convenience_food", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "coke", value: 50, type: bonus.good },
            { key: "whale_oil", value: 35, type: bonus.good },
            { key: "tinplate", value: 45, type: bonus.good },
            { key: "luxury_materials", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Higematsu: {
      key: "Higematsu",
      reward: [{ type: "coin", value: 125000 }, { type: "supply", value: 125000 }, { type: "medal", value: 250 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "machine_parts", value: 40, type: bonus.good },
            { key: "explosives", value: 50, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "asbestos", value: 40, type: bonus.good },
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "gasoline", value: 50, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "gasoline", value: 40, type: bonus.good },
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "flavorants", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "explosives", value: 50, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Kibakuguchi: {
      key: "Kibakuguchi",
      reward: [{ type: "coin", value: 135000 }, { type: "supply", value: 135000 }, { type: "medal", value: 250 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 25, type: bonus.good },
            { key: "tinplate", value: 55, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good },
            { key: "luxury_materials", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "fertilizer", value: 25, type: bonus.good },
            { key: "gasoline", value: 55, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good },
            { key: "ferroconcrete", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "whale_oil", value: 25, type: bonus.good },
            { key: "asbestos", value: 55, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good },
            { key: "convenience_food", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "textiles", value: 25, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good },
            { key: "explosives", value: 55, type: bonus.good },
            { key: "packaging", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "textiles", value: 25, type: bonus.good },
            { key: "machine_parts", value: 30, type: bonus.good },
            { key: "tinplate", value: 55, type: bonus.good },
            { key: "luxury_materials", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "textiles", value: 25, type: bonus.good },
            { key: "gasoline", value: 30, type: bonus.good },
            { key: "machine_parts", value: 55, type: bonus.good },
            { key: "flavorants", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "rubber", value: 25, type: bonus.good },
            { key: "asbestos", value: 55, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good },
            { key: "packaging", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "whale_oil", value: 25, type: bonus.good },
            { key: "asbestos", value: 30, type: bonus.good },
            { key: "gasoline", value: 55, type: bonus.good },
            { key: "ferroconcrete", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Toimuro: {
      key: "Toimuro",
      reward: [{ type: "coin", value: 150000 }, { type: "supply", value: 150000 }, { type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "gasoline", value: 35, type: bonus.good },
            { key: "tinplate", value: 55, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "packaging", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "machine_parts", value: 55, type: bonus.good },
            { key: "explosives", value: 35, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "luxury_materials", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "machine_parts", value: 55, type: bonus.good },
            { key: "tinplate", value: 35, type: bonus.good },
            { key: "ferroconcrete", value: 50, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "gasoline", value: 55, type: bonus.good },
            { key: "machine_parts", value: 35, type: bonus.good },
            { key: "convenience_food", value: 50, type: bonus.good },
            { key: "flavorants", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "asbestos", value: 35, type: bonus.good },
            { key: "tinplate", value: 55, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "luxury_materials", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "asbestos", value: 55, type: bonus.good },
            { key: "machine_parts", value: 35, type: bonus.good },
            { key: "flavorants", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "tinplate", value: 35, type: bonus.good },
            { key: "explosives", value: 55, type: bonus.good },
            { key: "ferroconcrete", value: 50, type: bonus.good },
            { key: "flavorants", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "asbestos", value: 35, type: bonus.good },
            { key: "gasoline", value: 55, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "convenience_food", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "asbestos", value: 55, type: bonus.good },
            { key: "explosives", value: 35, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "flavorants", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "gasoline", value: 35, type: bonus.good },
            { key: "explosives", value: 55, type: bonus.good },
            { key: "packaging", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Hiromaguchi: {
      key: "Hiromaguchi",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "flavorants", value: 40, type: bonus.good },
            { key: "packaging", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "packaging", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good },
            { key: "luxury_materials", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "flavorants", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "luxury_materials", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "gasoline", value: 50, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good },
            { key: "ferroconcrete", value: 20, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "gasoline", value: 50, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good },
            { key: "flavorants", value: 20, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "tinplate", value: 20, type: bonus.good },
            { key: "explosives", value: 50, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "flavorants", value: 20, type: bonus.good }
          ]
        }
      ]
    }
  },
  PostmodernEra: {
    CaiChetNui: {
      key: "CaiChetNui",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "fertilizer", value: 25, type: bonus.good },
            { key: "explosives", value: 25, type: bonus.good },
            { key: "luxury_materials", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "textiles", value: 25, type: bonus.good },
            { key: "asbestos", value: 25, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "whale_oil", value: 25, type: bonus.good },
            { key: "asbestos", value: 25, type: bonus.good },
            { key: "flavorants", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "whale_oil", value: 25, type: bonus.good },
            { key: "machine_parts", value: 25, type: bonus.good },
            { key: "ferroconcrete", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "fertilizer", value: 25, type: bonus.good },
            { key: "gasoline", value: 25, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "coke", value: 25, type: bonus.good },
            { key: "machine_parts", value: 25, type: bonus.good },
            { key: "ferroconcrete", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "textiles", value: 25, type: bonus.good },
            { key: "tinplate", value: 25, type: bonus.good },
            { key: "convenience_food", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    SotDamLay: {
      key: "SotDamLay",
      reward: [{ type: "coin", value: 150000 }, { type: "supply", value: 150000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [
            { key: "coke", value: 30, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "asbestos", value: 25, type: bonus.good },
            { key: "ferroconcrete", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "coke", value: 30, type: bonus.good },
            { key: "gasoline", value: 25, type: bonus.good },
            { key: "packaging", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "explosives", value: 25, type: bonus.good },
            { key: "luxury_materials", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12000 }],
          cost: [
            { key: "rubber", value: 30, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "machine_parts", value: 25, type: bonus.good },
            { key: "packaging", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [
            { key: "textiles", value: 30, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good },
            { key: "machine_parts", value: 25, type: bonus.good },
            { key: "ferroconcrete", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12000 }],
          cost: [
            { key: "coke", value: 30, type: bonus.good },
            { key: "textiles", value: 30, type: bonus.good },
            { key: "gasoline", value: 25, type: bonus.good },
            { key: "packaging", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12000 }],
          cost: [
            { key: "textiles", value: 30, type: bonus.good },
            { key: "fertilizer", value: 30, type: bonus.good },
            { key: "asbestos", value: 25, type: bonus.good },
            { key: "packaging", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [
            { key: "coke", value: 30, type: bonus.good },
            { key: "whale_oil", value: 30, type: bonus.good },
            { key: "tinplate", value: 25, type: bonus.good },
            { key: "convenience_food", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    TrungDoi: {
      key: "TrungDoi",
      reward: [{ type: "coin", value: 200000 }, { type: "supply", value: 200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [
            { key: "textiles", value: 40, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good },
            { key: "luxury_materials", value: 25, type: bonus.good },
            { key: "steel", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good },
            { key: "flavorants", value: 25, type: bonus.good },
            { key: "genome_data", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good },
            { key: "ferroconcrete", value: 25, type: bonus.good },
            { key: "industrial_filters", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "asbestos", value: 30, type: bonus.good },
            { key: "convenience_food", value: 25, type: bonus.good },
            { key: "semiconductors", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "machine_parts", value: 30, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good },
            { key: "steel", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "gasoline", value: 30, type: bonus.good },
            { key: "flavorants", value: 25, type: bonus.good },
            { key: "renewable_resources", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    DayDuAo: {
      key: "DayDuAo",
      reward: [{ type: "coin", value: 180000 }, { type: "supply", value: 180000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "gasoline", value: 30, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "gasoline", value: 30, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good },
            { key: "luxury_materials", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [
            { key: "textiles", value: 40, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good },
            { key: "flavorants", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "asbestos", value: 30, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "asbestos", value: 30, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good },
            { key: "ferroconcrete", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "asbestos", value: 30, type: bonus.good },
            { key: "machine_parts", value: 30, type: bonus.good },
            { key: "ferroconcrete", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "gasoline", value: 30, type: bonus.good },
            { key: "machine_parts", value: 30, type: bonus.good },
            { key: "convenience_food", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    KhayHuyenBayGio: {
      key: "KhayHuyenBayGio",
      reward: [{ type: "good_bonus", age: "IndustrialAge" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [
            { key: "asbestos", value: 40, type: bonus.good },
            { key: "gasoline", value: 40, type: bonus.good },
            { key: "flavorants", value: 35, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "asbestos", value: 40, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "ferroconcrete", value: 35, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "gasoline", value: 40, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "convenience_food", value: 35, type: bonus.good },
            { key: "genome_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good },
            { key: "packaging", value: 35, type: bonus.good },
            { key: "industrial_filters", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [
            { key: "gasoline", value: 40, type: bonus.good },
            { key: "machine_parts", value: 40, type: bonus.good },
            { key: "luxury_materials", value: 35, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [
            { key: "asbestos", value: 40, type: bonus.good },
            { key: "machine_parts", value: 40, type: bonus.good },
            { key: "convenience_food", value: 35, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [
            { key: "asbestos", value: 40, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good },
            { key: "flavorants", value: 35, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    RungTrai: {
      key: "RungTrai",
      reward: [{ type: "diamond", value: 100 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "explosives", value: 50, type: bonus.good },
            { key: "packaging", value: 45, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "explosives", value: 50, type: bonus.good },
            { key: "convenience_food", value: 45, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "gasoline", value: 50, type: bonus.good },
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "flavorants", value: 45, type: bonus.good },
            { key: "renewable_resources", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [
            { key: "gasoline", value: 50, type: bonus.good },
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "ferroconcrete", value: 45, type: bonus.good },
            { key: "steel", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "explosives", value: 50, type: bonus.good },
            { key: "flavorants", value: 45, type: bonus.good },
            { key: "steel", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "explosives", value: 50, type: bonus.good },
            { key: "packaging", value: 45, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "explosives", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 45, type: bonus.good },
            { key: "semiconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 45, type: bonus.good },
            { key: "semiconductors", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    OngChuCuoiCung: {
      key: "OngChuCuoiCung",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good },
            { key: "semiconductors", value: 55, type: bonus.good },
            { key: "industrial_filters", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "ferroconcrete", value: 30, type: bonus.good },
            { key: "packaging", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 55, type: bonus.good },
            { key: "steel", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "flavorants", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 30, type: bonus.good },
            { key: "steel", value: 35, type: bonus.good },
            { key: "genome_data", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "convenience_food", value: 50, type: bonus.good },
            { key: "flavorants", value: 30, type: bonus.good },
            { key: "steel", value: 55, type: bonus.good },
            { key: "industrial_filters", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "ferroconcrete", value: 50, type: bonus.good },
            { key: "flavorants", value: 30, type: bonus.good },
            { key: "renewable_resources", value: 45, type: bonus.good },
            { key: "semiconductors", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "convenience_food", value: 30, type: bonus.good },
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "industrial_filters", value: 55, type: bonus.good },
            { key: "genome_data", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "ferroconcrete", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 30, type: bonus.good },
            { key: "renewable_resources", value: 45, type: bonus.good },
            { key: "industrial_filters", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "ferroconcrete", value: 20, type: bonus.good },
            { key: "flavorants", value: 60, type: bonus.good },
            { key: "semiconductors", value: 45, type: bonus.good },
            { key: "industrial_filters", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "convenience_food", value: 30, type: bonus.good },
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 55, type: bonus.good },
            { key: "genome_data", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    RungChienDau: {
      key: "RungChienDau",
      reward: [{ type: "good_bonus", age: "IronAge" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "textiles", value: 25, type: bonus.good },
            { key: "asbestos", value: 25, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "whale_oil", value: 25, type: bonus.good },
            { key: "explosives", value: 25, type: bonus.good },
            { key: "convenience_food", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "fertilizer", value: 25, type: bonus.good },
            { key: "machine_parts", value: 25, type: bonus.good },
            { key: "flavorants", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "rubber", value: 25, type: bonus.good },
            { key: "tinplate", value: 25, type: bonus.good },
            { key: "luxury_materials", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [
            { key: "fertilizer", value: 25, type: bonus.good },
            { key: "gasoline", value: 25, type: bonus.good },
            { key: "ferroconcrete", value: 25, type: bonus.good }
          ]
        },
        { reward: [{ type: "supply", value: 7500 }] }
      ]
    },
    PhucKich: {
      key: "PhucKich",
      reward: [{ type: "coin", value: 80000 }, { type: "supply", value: 80000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "ferroconcrete", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "textiles", value: 40, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "packaging", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "gasoline", value: 40, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good },
            { key: "ferroconcrete", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "machine_parts", value: 40, type: bonus.good },
            { key: "flavorants", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good },
            { key: "flavorants", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good },
            { key: "convenience_food", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "asbestos", value: 40, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "luxury_materials", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    GiaiCuuBinhMinh: {
      key: "GiaiCuuBinhMinh",
      reward: [{ type: "coin", value: 60000 }, { type: "supply", value: 60000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "machine_parts", value: 20, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "asbestos", value: 20, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "textiles", value: 40, type: bonus.good },
            { key: "whale_oil", value: 40, type: bonus.good },
            { key: "gasoline", value: 40, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [
            { key: "coke", value: 40, type: bonus.good },
            { key: "textiles", value: 40, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "machine_parts", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [
            { key: "rubber", value: 40, type: bonus.good },
            { key: "fertilizer", value: 40, type: bonus.good },
            { key: "asbestos", value: 40, type: bonus.good },
            { key: "machine_parts", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    MauMatDat: {
      key: "MauMatDat",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 11000 }],
          cost: [
            { key: "gasoline", value: 40, type: bonus.good },
            { key: "explosives", value: 20, type: bonus.good },
            { key: "ferroconcrete", value: 20, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 11000 }],
          cost: [
            { key: "machine_parts", value: 40, type: bonus.good },
            { key: "tinplate", value: 20, type: bonus.good },
            { key: "flavorants", value: 40, type: bonus.good },
            { key: "packaging", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 11000 }],
          cost: [
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "machine_parts", value: 40, type: bonus.good },
            { key: "convenience_food", value: 20, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 11000 }],
          cost: [
            { key: "asbestos", value: 20, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "convenience_food", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 11000 }],
          cost: [
            { key: "asbestos", value: 40, type: bonus.good },
            { key: "gasoline", value: 20, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "flavorants", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 11000 }],
          cost: [
            { key: "asbestos", value: 20, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "luxury_materials", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    DongBangSong: {
      key: "DongBangSong",
      reward: [{ type: "diamond", value: 100 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "asbestos", value: 60, type: bonus.good },
            { key: "luxury_materials", value: 60, type: bonus.good },
            { key: "genome_data", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "gasoline", value: 60, type: bonus.good },
            { key: "luxury_materials", value: 60, type: bonus.good },
            { key: "genome_data", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "gasoline", value: 60, type: bonus.good },
            { key: "ferroconcrete", value: 60, type: bonus.good },
            { key: "industrial_filters", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "asbestos", value: 60, type: bonus.good },
            { key: "flavorants", value: 60, type: bonus.good },
            { key: "semiconductors", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "machine_parts", value: 60, type: bonus.good },
            { key: "packaging", value: 60, type: bonus.good },
            { key: "renewable_resources", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "machine_parts", value: 60, type: bonus.good },
            { key: "convenience_food", value: 60, type: bonus.good },
            { key: "renewable_resources", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [
            { key: "tinplate", value: 60, type: bonus.good },
            { key: "luxury_materials", value: 60, type: bonus.good },
            { key: "steel", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [
            { key: "explosives", value: 60, type: bonus.good },
            { key: "convenience_food", value: 60, type: bonus.good },
            { key: "steel", value: 60, type: bonus.good }
          ]
        }
      ]
    }
  },
  ContemporaryEra: {
    Amaryah_City: {
      key: "Amaryah_City",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "explosives", value: 50, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 30, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "explosives", value: 50, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good },
            { key: "genome_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 30, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "machine_parts", value: 40, type: bonus.good },
            { key: "flavorants", value: 40, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "electromagnets", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Khail: {
      key: "Khail",
      reward: [{ type: "good_bonus", age: "HighMiddleAges" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "flavorants", value: 40, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "gasoline", value: 50, type: bonus.good },
            { key: "flavorants", value: 40, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "electromagnets", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "gasoline", value: 60, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 30, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "explosives", value: 50, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good },
            { key: "genome_data", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Batif: {
      key: "Batif",
      reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "genome_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "explosives", value: 50, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "asbestos", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "gasoline", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "tinplate", value: 50, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "electromagnets", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "genome_data", value: 30, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "machine_parts", value: 50, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "electromagnets", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Hafar_Al_Karak: {
      key: "Hafar_Al_Karak",
      reward: [{ type: "coin", value: 35000 }, { type: "supply", value: 35000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "gasoline", value: 75, type: bonus.good },
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "asbestos", value: 75, type: bonus.good },
            { key: "flavorants", value: 50, type: bonus.good },
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "tinplate", value: 75, type: bonus.good },
            { key: "flavorants", value: 50, type: bonus.good },
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [] },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "asbestos", value: 75, type: bonus.good },
            { key: "convenience_food", value: 50, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "gasoline", value: 75, type: bonus.good },
            { key: "convenience_food", value: 50, type: bonus.good },
            { key: "steel", value: 40, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "machine_parts", value: 75, type: bonus.good },
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "steel", value: 40, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "explosives", value: 75, type: bonus.good },
            { key: "flavorants", value: 50, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Salfah: {
      key: "Salfah",
      reward: [{ type: "good_bonus", age: "ProgressiveEra" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "cloth", value: 35, type: bonus.good },
            { key: "whale_oil", value: 35, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "genome_data", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "iron", value: 35, type: bonus.good },
            { key: "coke", value: 35, type: bonus.good },
            { key: "flavorants", value: 40, type: bonus.good },
            { key: "steel", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "jewelry", value: 35, type: bonus.good },
            { key: "rubber", value: 35, type: bonus.good },
            { key: "packaging", value: 40, type: bonus.good },
            { key: "semiconductors", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "ebony", value: 35, type: bonus.good },
            { key: "fertilizer", value: 35, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good },
            { key: "renewable_resources", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "cloth", value: 35, type: bonus.good },
            { key: "whale_oil", value: 35, type: bonus.good },
            { key: "luxury_materials", value: 40, type: bonus.good },
            { key: "genome_data", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "ebony", value: 35, type: bonus.good },
            { key: "fertilizer", value: 35, type: bonus.good },
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "renewable_resources", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "limestone", value: 35, type: bonus.good },
            { key: "textiles", value: 35, type: bonus.good },
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Al_Shadyra: {
      key: "Al_Shadyra",
      reward: [{ type: "coin", value: 50000 }, { type: "supply", value: 50000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "stone", value: 30, type: bonus.good },
            { key: "wire", value: 30, type: bonus.good },
            { key: "explosives", value: 30, type: bonus.good },
            { key: "ferroconcrete", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "lumber", value: 30, type: bonus.good },
            { key: "paper", value: 30, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good },
            { key: "packaging", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "dye", value: 30, type: bonus.good },
            { key: "tar", value: 30, type: bonus.good },
            { key: "tinplate", value: 30, type: bonus.good },
            { key: "flavorants", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "marble", value: 30, type: bonus.good },
            { key: "porcelain", value: 30, type: bonus.good },
            { key: "machine_parts", value: 30, type: bonus.good },
            { key: "ferroconcrete", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "wine", value: 30, type: bonus.good },
            { key: "coffee", value: 30, type: bonus.good },
            { key: "gasoline", value: 30, type: bonus.good },
            { key: "convenience_food", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "lumber", value: 30, type: bonus.good },
            { key: "paper", value: 30, type: bonus.good },
            { key: "asbestos", value: 30, type: bonus.good },
            { key: "packaging", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Ain_Al_Khansa: {
      key: "Ain_Al_Khansa",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "gold", value: 40, type: bonus.good },
            { key: "machine_parts", value: 40, type: bonus.good },
            { key: "renewable_resources", value: 50, type: bonus.good },
            { key: "robots", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "honey", value: 40, type: bonus.good },
            { key: "asbestos", value: 40, type: bonus.good },
            { key: "semiconductors", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "alabaster", value: 40, type: bonus.good },
            { key: "gasoline", value: 40, type: bonus.good },
            { key: "steel", value: 50, type: bonus.good },
            { key: "plastics", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "copper", value: 40, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 50, type: bonus.good },
            { key: "electromagnets", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "granite", value: 40, type: bonus.good },
            { key: "explosives", value: 40, type: bonus.good },
            { key: "steel", value: 50, type: bonus.good },
            { key: "gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "alabaster", value: 40, type: bonus.good },
            { key: "gasoline", value: 40, type: bonus.good },
            { key: "genome_data", value: 50, type: bonus.good },
            { key: "plastics", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "granite", value: 40, type: bonus.good },
            { key: "tinplate", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 50, type: bonus.good },
            { key: "gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "gold", value: 40, type: bonus.good },
            { key: "machine_parts", value: 40, type: bonus.good },
            { key: "semiconductors", value: 50, type: bonus.good },
            { key: "robots", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Suqqah: {
      key: "Suqqah",
      reward: [{ type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "glass", value: 45, type: bonus.good },
            { key: "silk", value: 45, type: bonus.good },
            { key: "ferroconcrete", value: 45, type: bonus.good },
            { key: "electromagnets", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "rope", value: 45, type: bonus.good },
            { key: "brass", value: 45, type: bonus.good },
            { key: "packaging", value: 45, type: bonus.good },
            { key: "plastics", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "salt", value: 45, type: bonus.good },
            { key: "basalt", value: 45, type: bonus.good },
            { key: "flavorants", value: 45, type: bonus.good },
            { key: "robots", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "dried_herbs", value: 45, type: bonus.good },
            { key: "silk", value: 45, type: bonus.good },
            { key: "convenience_food", value: 45, type: bonus.good },
            { key: "electromagnets", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "brick", value: 45, type: bonus.good },
            { key: "gunpowder", value: 45, type: bonus.good },
            { key: "luxury_materials", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "dried_herbs", value: 45, type: bonus.good },
            { key: "talc_powder", value: 45, type: bonus.good },
            { key: "convenience_food", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Shayhour: {
      key: "Shayhour",
      reward: [{ type: "coin", value: 250000 }, { type: "supply", value: 250000 }, { type: "medal", value: 400 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "steel", value: 30, type: bonus.good },
            { key: "semiconductors", value: 35, type: bonus.good },
            { key: "electromagnets", value: 20, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "industrial_filters", value: 35, type: bonus.good },
            { key: "plastics", value: 20, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 35, type: bonus.good },
            { key: "genome_data", value: 30, type: bonus.good },
            { key: "electromagnets", value: 20, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "steel", value: 35, type: bonus.good },
            { key: "electromagnets", value: 25, type: bonus.good },
            { key: "gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 35, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "electromagnets", value: 20, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "industrial_filters", value: 30, type: bonus.good },
            { key: "genome_data", value: 35, type: bonus.good },
            { key: "robots", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "steel", value: 30, type: bonus.good },
            { key: "genome_data", value: 35, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Kardad: {
      key: "Kardad",
      reward: [
        { type: bonus.good, good: "bionics_data", value: 20 },
        { type: bonus.good, good: "electromagnets", value: 20 },
        { type: bonus.good, good: "gas", value: 20 },
        { type: bonus.good, good: "plastics", value: 20 },
        { type: bonus.good, good: "robots", value: 20 }
      ],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 35, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "steel", value: 35, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "semiconductors", value: 35, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "steel", value: 40, type: bonus.good },
            { key: "semiconductors", value: 35, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "steel", value: 40, type: bonus.good },
            { key: "genome_data", value: 35, type: bonus.good },
            { key: "electromagnets", value: 25, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "industrial_filters", value: 35, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 35, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 35, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Qumeira: {
      key: "Qumeira",
      reward: [{ type: "diamond", value: 150 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "steel", value: 40, type: bonus.good },
            { key: "genome_data", value: 45, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "steel", value: 40, type: bonus.good },
            { key: "semiconductors", value: 45, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "semiconductors", value: 45, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "steel", value: 45, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 45, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "industrial_filters", value: 45, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "genome_data", value: 45, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Jandahar: {
      key: "Jandahar",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "steel", value: 50, type: bonus.good },
            { key: "semiconductors", value: 45, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 50, type: bonus.good },
            { key: "steel", value: 45, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "industrial_filters", value: 45, type: bonus.good },
            { key: "genome_data", value: 50, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "plastics", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 50, type: bonus.good },
            { key: "genome_data", value: 45, type: bonus.good },
            { key: "gas", value: 40, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 45, type: bonus.good },
            { key: "semiconductors", value: 50, type: bonus.good },
            { key: "plastics", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 45, type: bonus.good },
            { key: "semiconductors", value: 50, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "robots", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 50, type: bonus.good },
            { key: "industrial_filters", value: 45, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "plastics", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "industrial_filters", value: 50, type: bonus.good },
            { key: "genome_data", value: 45, type: bonus.good },
            { key: "electromagnets", value: 40, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "steel", value: 45, type: bonus.good },
            { key: "genome_data", value: 50, type: bonus.good },
            { key: "gas", value: 40, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good }
          ]
        }
      ]
    }
  },
  Tomorrow: {
    Torrinhos: {
      key: "Torrinhos",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "ferroconcrete", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "convenience_food", value: 50, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "flavorants", value: 40, type: bonus.good },
            { key: "steel", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "packaging", value: 50, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "bionics_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "flavorants", value: 50, type: bonus.good },
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "ferroconcrete", value: 50, type: bonus.good },
            { key: "steel", value: 40, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Villabaja: {
      key: "Villabaja",
      reward: [{ type: "coin", value: 150000 }, { type: "supply", value: 230000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "ferroconcrete", value: 60, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good },
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "flavorants", value: 25, type: bonus.good },
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "steel", value: 40, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "ferroconcrete", value: 25, type: bonus.good },
            { key: "packaging", value: 50, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "bionics_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "flavorants", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 25, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "convenience_food", value: 50, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "convenience_food", value: 25, type: bonus.good },
            { key: "flavorants", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Itabarai: {
      key: "Itabarai",
      reward: [{ type: "coin", value: 160000 }, { type: "supply", value: 220000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "ferroconcrete", value: 25, type: bonus.good },
            { key: "packaging", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "ferroconcrete", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 25, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "bionics_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "ferroconcrete", value: 25, type: bonus.good },
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "bionics_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "ferroconcrete", value: 50, type: bonus.good },
            { key: "luxury_materials", value: 25, type: bonus.good },
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "convenience_food", value: 25, type: bonus.good },
            { key: "packaging", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "convenience_food", value: 50, type: bonus.good },
            { key: "flavorants", value: 25, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Bajatai: {
      key: "Bajatai",
      reward: [{ type: "good_bonus", age: "EarlyMiddleAges" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "flavorants", value: 75, type: bonus.good },
            { key: "semiconductors", value: 50, type: bonus.good },
            { key: "gas", value: 40, type: bonus.good },
            { key: "smart_materials", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "luxury_materials", value: 75, type: bonus.good },
            { key: "steel", value: 50, type: bonus.good },
            { key: "plastics", value: 40, type: bonus.good },
            { key: "nutrition_research", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "flavorants", value: 75, type: bonus.good },
            { key: "semiconductors", value: 50, type: bonus.good },
            { key: "plastics", value: 40, type: bonus.good },
            { key: "translucent_concrete", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "convenience_food", value: 75, type: bonus.good },
            { key: "steel", value: 50, type: bonus.good },
            { key: "robots", value: 40, type: bonus.good },
            { key: "preservatives", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "convenience_food", value: 75, type: bonus.good },
            { key: "industrial_filters", value: 50, type: bonus.good },
            { key: "robots", value: 40, type: bonus.good },
            { key: "papercrete", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "packaging", value: 75, type: bonus.good },
            { key: "industrial_filters", value: 50, type: bonus.good },
            { key: "bionics_data", value: 40, type: bonus.good },
            { key: "nutrition_research", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "flavorants", value: 75, type: bonus.good },
            { key: "genome_data", value: 50, type: bonus.good },
            { key: "electromagnets", value: 40, type: bonus.good },
            { key: "preservatives", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Villariba: {
      key: "Villariba",
      reward: [{ type: "coin", value: 170000 }, { type: "supply", value: 210000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "ferroconcrete", value: 30, type: bonus.good },
            { key: "luxury_materials", value: 25, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "convenience_food", value: 25, type: bonus.good },
            { key: "packaging", value: 30, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "ferroconcrete", value: 25, type: bonus.good },
            { key: "luxury_materials", value: 30, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "convenience_food", value: 30, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "bionics_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "ferroconcrete", value: 25, type: bonus.good },
            { key: "flavorants", value: 30, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "convenience_food", value: 30, type: bonus.good },
            { key: "packaging", value: 25, type: bonus.good },
            { key: "industrial_filters", value: 30, type: bonus.good },
            { key: "bionics_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "ferroconcrete", value: 30, type: bonus.good },
            { key: "flavorants", value: 25, type: bonus.good },
            { key: "industrial_filters", value: 30, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "convenience_food", value: 25, type: bonus.good },
            { key: "packaging", value: 30, type: bonus.good },
            { key: "genome_data", value: 30, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Rio_Roxo: {
      key: "Rio_Roxo",
      reward: [{ type: bonus.good, age: "Tomorrow", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "genome_data", value: 30, type: bonus.good },
            { key: "renewable_resources", value: 35, type: bonus.good },
            { key: "electromagnets", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "luxury_materials", value: 40, type: bonus.good },
            { key: "renewable_resources", value: 35, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "flavorants", value: 40, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "steel", value: 35, type: bonus.good },
            { key: "robots", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 35, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "plastics", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "convenience_food", value: 40, type: bonus.good },
            { key: "genome_data", value: 30, type: bonus.good },
            { key: "industrial_filters", value: 35, type: bonus.good },
            { key: "electromagnets", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "ferroconcrete", value: 40, type: bonus.good },
            { key: "genome_data", value: 35, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "plastics", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "luxury_materials", value: 40, type: bonus.good },
            { key: "genome_data", value: 35, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [
            { key: "packaging", value: 40, type: bonus.good },
            { key: "industrial_filters", value: 30, type: bonus.good },
            { key: "semiconductors", value: 35, type: bonus.good },
            { key: "bionics_data", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Sierra_Torrido: {
      key: "Sierra_Torrido",
      reward: [{ type: "coin", value: 550000 }, { type: "supply", value: 600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "convenience_food", value: 50, type: bonus.good },
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good },
            { key: "translucent_concrete", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "ferroconcrete", value: 50, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "electromagnets", value: 25, type: bonus.good },
            { key: "smart_materials", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good },
            { key: "nutrition_research", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "convenience_food", value: 50, type: bonus.good },
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "bionics_data", value: 25, type: bonus.good },
            { key: "preservatives", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "flavorants", value: 50, type: bonus.good },
            { key: "steel", value: 40, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good },
            { key: "nutrition_research", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "packaging", value: 50, type: bonus.good },
            { key: "steel", value: 40, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good },
            { key: "translucent_concrete", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "luxury_materials", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good },
            { key: "papercrete", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Santa_Nerea: {
      key: "Santa_Nerea",
      reward: [{ type: "supply", value: 11100000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "renewable_resources", value: 45, type: bonus.good },
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "steel", value: 45, type: bonus.good },
            { key: "bionics_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "semiconductors", value: 45, type: bonus.good },
            { key: "steel", value: 45, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "renewable_resources", value: 45, type: bonus.good },
            { key: "semiconductors", value: 45, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "genome_data", value: 45, type: bonus.good },
            { key: "industrial_filters", value: 45, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "genome_data", value: 30, type: bonus.good },
            { key: "industrial_filters", value: 45, type: bonus.good },
            { key: "semiconductors", value: 45, type: bonus.good },
            { key: "bionics_data", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "genome_data", value: 45, type: bonus.good },
            { key: "industrial_filters", value: 30, type: bonus.good },
            { key: "semiconductors", value: 45, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    La_Huega: {
      key: "La_Huega",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "bionics_data", value: 20, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good },
            { key: "robots", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "electromagnets", value: 25, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good },
            { key: "plastics", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "bionics_data", value: 30, type: bonus.good },
            { key: "electromagnets", value: 20, type: bonus.good },
            { key: "gas", value: 25, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "bionics_data", value: 25, type: bonus.good },
            { key: "gas", value: 20, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "bionics_data", value: 20, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good },
            { key: "robots", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "plastics", value: 25, type: bonus.good },
            { key: "robots", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Jamenez: {
      key: "Jamenez",
      reward: [{ type: bonus.good, age: "Tomorrow", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "steel", value: 40, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good },
            { key: "translucent_concrete", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "semiconductors", value: 40, type: bonus.good },
            { key: "bionics_data", value: 30, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "smart_materials", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 40, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good },
            { key: "nutrition_research", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "papercrete", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "preservatives", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "genome_data", value: 40, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "preservatives", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "industrial_filters", value: 40, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "papercrete", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Falsa_Cruz: {
      key: "Falsa_Cruz",
      reward: [{ type: "coin", value: 770000 }, { type: "supply", value: 430000 }, { type: "medal", value: 500 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "steel", value: 35, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "preservatives", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "steel", value: 35, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "nutrition_research", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "renewable_resources", value: 35, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "papercrete", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "genome_data", value: 35, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "smart_materials", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "industrial_filters", value: 35, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "steel", value: 35, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "smart_materials", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "renewable_resources", value: 35, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "genome_data", value: 35, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "nutrition_research", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Desierto_de_la_Muerte: {
      key: "Desierto_de_la_Muerte",
      reward: [{ type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "bionics_data", value: 50, type: bonus.good },
            { key: "plastics", value: 45, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good },
            { key: "smart_materials", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "gas", value: 50, type: bonus.good },
            { key: "robots", value: 45, type: bonus.good },
            { key: "papercrete", value: 40, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "electromagnets", value: 45, type: bonus.good },
            { key: "gas", value: 50, type: bonus.good },
            { key: "nutrition_research", value: 35, type: bonus.good },
            { key: "papercrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "bionics_data", value: 45, type: bonus.good },
            { key: "robots", value: 50, type: bonus.good },
            { key: "papercrete", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "gas", value: 45, type: bonus.good },
            { key: "plastics", value: 50, type: bonus.good },
            { key: "nutrition_research", value: 40, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "electromagnets", value: 50, type: bonus.good },
            { key: "plastics", value: 45, type: bonus.good },
            { key: "preservatives", value: 40, type: bonus.good },
            { key: "translucent_concrete", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Sao_Malvado: {
      key: "Sao_Malvado",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "electromagnets", value: 60, type: bonus.good },
            { key: "robots", value: 45, type: bonus.good },
            { key: "nutrition_research", value: 40, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "electromagnets", value: 60, type: bonus.good },
            { key: "gas", value: 45, type: bonus.good },
            { key: "papercrete", value: 35, type: bonus.good },
            { key: "preservatives", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "gas", value: 60, type: bonus.good },
            { key: "robots", value: 45, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "bionics_data", value: 45, type: bonus.good },
            { key: "robots", value: 60, type: bonus.good },
            { key: "nutrition_research", value: 35, type: bonus.good },
            { key: "papercrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "bionics_data", value: 60, type: bonus.good },
            { key: "plastics", value: 45, type: bonus.good },
            { key: "nutrition_research", value: 35, type: bonus.good },
            { key: "smart_materials", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "bionics_data", value: 45, type: bonus.good },
            { key: "plastics", value: 60, type: bonus.good },
            { key: "smart_materials", value: 40, type: bonus.good },
            { key: "translucent_concrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "plastics", value: 45, type: bonus.good },
            { key: "robots", value: 60, type: bonus.good },
            { key: "preservatives", value: 40, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "bionics_data", value: 60, type: bonus.good },
            { key: "gas", value: 45, type: bonus.good },
            { key: "nutrition_research", value: 40, type: bonus.good },
            { key: "papercrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "electromagnets", value: 45, type: bonus.good },
            { key: "gas", value: 60, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "gas", value: 45, type: bonus.good },
            { key: "plastics", value: 60, type: bonus.good },
            { key: "papercrete", value: 40, type: bonus.good },
            { key: "translucent_concrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "bionics_data", value: 45, type: bonus.good },
            { key: "electromagnets", value: 60, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good },
            { key: "smart_materials", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [
            { key: "gas", value: 60, type: bonus.good },
            { key: "robots", value: 45, type: bonus.good },
            { key: "nutrition_research", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 40, type: bonus.good }
          ]
        }
      ]
    }
  },
  TheFuture: {
    Agadar: {
      key: "Agadar",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "genome_data", value: 55, type: bonus.good },
            { key: "robots", value: 45, type: bonus.good },
            { key: "translucent_concrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "industrial_filters", value: 55, type: bonus.good },
            { key: "plastics", value: 45, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "steel", value: 55, type: bonus.good },
            { key: "electromagnets", value: 45, type: bonus.good },
            { key: "nutrition_research", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "semiconductors", value: 55, type: bonus.good },
            { key: "plastics", value: 45, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "industrial_filters", value: 55, type: bonus.good },
            { key: "bionics_data", value: 45, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "renewable_resources", value: 55, type: bonus.good },
            { key: "gas", value: 45, type: bonus.good },
            { key: "papercrete", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Esan_Ewu: {
      key: "Esan_Ewu",
      reward: [{ type: bonus.good, age: "TheFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "genome_data", value: 60, type: bonus.good },
            { key: "robots", value: 45, type: bonus.good },
            { key: "translucent_concrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "steel", value: 60, type: bonus.good },
            { key: "electromagnets", value: 45, type: bonus.good },
            { key: "nutrition_research", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "semiconductors", value: 60, type: bonus.good },
            { key: "plastics", value: 45, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "renewable_resources", value: 60, type: bonus.good },
            { key: "gas", value: 45, type: bonus.good },
            { key: "papercrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "industrial_filters", value: 60, type: bonus.good },
            { key: "bionics_data", value: 45, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Omogba: {
      key: "Omogba",
      reward: [{ type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "genome_data", value: 30, type: bonus.good },
            { key: "renewable_resources", value: 55, type: bonus.good },
            { key: "plastics", value: 45, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "industrial_filters", value: 30, type: bonus.good },
            { key: "semiconductors", value: 55, type: bonus.good },
            { key: "gas", value: 45, type: bonus.good },
            { key: "nutrition_research", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "renewable_resources", value: 55, type: bonus.good },
            { key: "steel", value: 30, type: bonus.good },
            { key: "bionics_data", value: 45, type: bonus.good },
            { key: "translucent_concrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "semiconductors", value: 30, type: bonus.good },
            { key: "steel", value: 55, type: bonus.good },
            { key: "electromagnets", value: 45, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "genome_data", value: 55, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "gas", value: 45, type: bonus.good },
            { key: "papercrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "genome_data", value: 55, type: bonus.good },
            { key: "renewable_resources", value: 30, type: bonus.good },
            { key: "robots", value: 45, type: bonus.good },
            { key: "translucent_concrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "genome_data", value: 30, type: bonus.good },
            { key: "industrial_filters", value: 55, type: bonus.good },
            { key: "bionics_data", value: 45, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Owopele: {
      key: "Owopele",
      reward: [{ type: "good_bonus", age: "LateMiddleAges" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "industrial_filters", value: 60, type: bonus.good },
            { key: "robots", value: 50, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "steel", value: 60, type: bonus.good },
            { key: "electromagnets", value: 50, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "algae", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "renewable_resources", value: 60, type: bonus.good },
            { key: "gas", value: 50, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "semiconductors", value: 60, type: bonus.good },
            { key: "plastics", value: 50, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "semiconductors", value: 60, type: bonus.good },
            { key: "plastics", value: 50, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "steel", value: 60, type: bonus.good },
            { key: "bionics_data", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "industrial_filters", value: 60, type: bonus.good },
            { key: "gas", value: 50, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [
            { key: "genome_data", value: 60, type: bonus.good },
            { key: "robots", value: 50, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "algae", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Jak: {
      key: "Jak",
      reward: [{ type: "coin", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "genome_data", value: 55, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "papercrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "industrial_filters", value: 55, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "steel", value: 55, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "genome_data", value: 55, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "renewable_resources", value: 55, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "nutrition_research", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { key: "semiconductors", value: 55, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Pala: {
      key: "Pala",
      reward: [{ type: bonus.good, age: "TheFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "steel", value: 55, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "semiconductors", value: 55, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "papercrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "genome_data", value: 55, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "smart_materials", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "semiconductors", value: 55, type: bonus.good },
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "papercrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "industrial_filters", value: 55, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "preservatives", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "renewable_resources", value: 55, type: bonus.good },
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "smart_materials", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "steel", value: 55, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "nutrition_research", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Kolabourg: {
      key: "Kolabourg",
      reward: [{ type: "coin", value: 300000 }, { type: "supply", value: 800000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "renewable_resources", value: 50, type: bonus.good },
            { key: "semiconductors", value: 50, type: bonus.good },
            { key: "papercrete", value: 40, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "industrial_filters", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 50, type: bonus.good },
            { key: "papercrete", value: 40, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "semiconductors", value: 50, type: bonus.good },
            { key: "steel", value: 50, type: bonus.good },
            { key: "nutrition_research", value: 40, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "industrial_filters", value: 50, type: bonus.good },
            { key: "renewable_resources", value: 50, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "genome_data", value: 50, type: bonus.good },
            { key: "steel", value: 50, type: bonus.good },
            { key: "preservatives", value: 40, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "genome_data", value: 50, type: bonus.good },
            { key: "industrial_filters", value: 50, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "smart_materials", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Bontaville: {
      key: "Bontaville",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "nutrition_research", value: 60, type: bonus.good },
            { key: "papercrete", value: 40, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "nutrition_research", value: 60, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 40, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "nutrition_research", value: 40, type: bonus.good },
            { key: "preservatives", value: 60, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "preservatives", value: 40, type: bonus.good },
            { key: "translucent_concrete", value: 60, type: bonus.good },
            { key: "algae", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "papercrete", value: 60, type: bonus.good },
            { key: "smart_materials", value: 40, type: bonus.good },
            { key: "biogeochemical_data", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "preservatives", value: 40, type: bonus.good },
            { key: "smart_materials", value: 60, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "papercrete", value: 40, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "smart_materials", value: 60, type: bonus.good },
            { key: "algae", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "smart_materials", value: 40, type: bonus.good },
            { key: "translucent_concrete", value: 60, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Botuku: {
      key: "Botuku",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "electromagnets", value: 40, type: bonus.good },
            { key: "plastics", value: 40, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "gas", value: 40, type: bonus.good },
            { key: "robots", value: 40, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "bionics_data", value: 40, type: bonus.good },
            { key: "plastics", value: 40, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "plastics", value: 40, type: bonus.good },
            { key: "robots", value: 40, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "electromagnets", value: 40, type: bonus.good },
            { key: "gas", value: 40, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "bionics_data", value: 40, type: bonus.good },
            { key: "robots", value: 40, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "electromagnets", value: 40, type: bonus.good },
            { key: "gas", value: 40, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Kalabuye: {
      key: "Kalabuye",
      reward: [{ type: "medal", value: 2000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [
            { key: "plastics", value: 40, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [
            { key: "robots", value: 40, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "purified_water", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [
            { key: "bionics_data", value: 40, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "algae", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [
            { key: "bionics_data", value: 40, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "superconductors", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [
            { key: "electromagnets", value: 40, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "algae", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [
            { key: "gas", value: 40, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Bisoraba: {
      key: "Bisoraba",
      reward: [{ type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "smart_materials", value: 60, type: bonus.good },
            { key: "algae", value: 35, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "papercrete", value: 60, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 40, type: bonus.good },
            { key: "purified_water", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "preservatives", value: 60, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "algae", value: 35, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [
            { key: "smart_materials", value: 60, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "algae", value: 40, type: bonus.good },
            { key: "nanoparticles", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "preservatives", value: 60, type: bonus.good },
            { key: "nanoparticles", value: 35, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nutrition_research", value: 60, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 35, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 60, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good },
            { key: "superconductors", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Fort_Buntu: {
      key: "Fort_Buntu",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "preservatives", value: 60, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "algae", value: 40, type: bonus.good },
            { key: "nanoparticles", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "papercrete", value: 60, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "algae", value: 35, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "papercrete", value: 60, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "purified_water", value: 35, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 60, type: bonus.good },
            { key: "biogeochemical_data", value: 40, type: bonus.good },
            { key: "superconductors", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nutrition_research", value: 60, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 35, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "smart_materials", value: 60, type: bonus.good },
            { key: "purified_water", value: 35, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nutrition_research", value: 60, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 35, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "papercrete", value: 60, type: bonus.good },
            { key: "nanoparticles", value: 35, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nutrition_research", value: 60, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "algae", value: 35, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "smart_materials", value: 60, type: bonus.good },
            { key: "biogeochemical_data", value: 40, type: bonus.good },
            { key: "nanoparticles", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "papercrete", value: 60, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "algae", value: 40, type: bonus.good },
            { key: "biogeochemical_data", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "preservatives", value: 60, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "algae", value: 40, type: bonus.good },
            { key: "biogeochemical_data", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nutrition_research", value: 60, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 40, type: bonus.good },
            { key: "superconductors", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "smart_materials", value: 60, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "algae", value: 35, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 60, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good },
            { key: "purified_water", value: 35, type: bonus.good }
          ]
        }
      ]
    }
  },
  ArcticFuture: {
    Nutarniq: {
      key: "Nutarniq",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "bionics_data", value: 60, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "robots", value: 60, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "electromagnets", value: 60, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "bionics_data", value: 60, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "plastics", value: 60, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "gas", value: 60, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "algae", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "robots", value: 60, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Iluliaq: {
      key: "Iluliaq",
      reward: [{ type: "medal", value: 3000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "electromagnets", value: 65, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "robots", value: 65, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "gas", value: 65, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "bionics_data", value: 65, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "plastics", value: 65, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "algae", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "electromagnets", value: 65, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "plastics", value: 65, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "gas", value: 65, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Aurora_s_Dale: {
      key: "Aurora_s_Dale",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1400000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "papercrete", value: 45, type: bonus.good },
            { key: "biogeochemical_data", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "gas", value: 35, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "smart_materials", value: 45, type: bonus.good },
            { key: "purified_water", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "gas", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "preservatives", value: 45, type: bonus.good },
            { key: "algae", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "plastics", value: 35, type: bonus.good },
            { key: "nutrition_research", value: 45, type: bonus.good },
            { key: "algae", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "gas", value: 35, type: bonus.good },
            { key: "robots", value: 35, type: bonus.good },
            { key: "preservatives", value: 45, type: bonus.good },
            { key: "biogeochemical_data", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "electromagnets", value: 35, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "smart_materials", value: 45, type: bonus.good },
            { key: "nanoparticles", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "bionics_data", value: 35, type: bonus.good },
            { key: "gas", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 45, type: bonus.good },
            { key: "purified_water", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Arctic_Horizon: {
      key: "Arctic_Horizon",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "bionics_data", value: 30, type: bonus.good },
            { key: "gas", value: 50, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "algae", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "gas", value: 30, type: bonus.good },
            { key: "plastics", value: 50, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "robots", value: 50, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "plastics", value: 50, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "electromagnets", value: 50, type: bonus.good },
            { key: "plastics", value: 30, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "bionics_data", value: 50, type: bonus.good },
            { key: "robots", value: 30, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "gas", value: 30, type: bonus.good },
            { key: "robots", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "algae", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "electromagnets", value: 50, type: bonus.good },
            { key: "gas", value: 30, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "electromagnets", value: 30, type: bonus.good },
            { key: "gas", value: 50, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Cold_Bay: {
      key: "Cold_Bay",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "plastics", value: 50, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 30, type: bonus.good },
            { key: "purified_water", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "gas", value: 50, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 20, type: bonus.good },
            { key: "superconductors", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "plastics", value: 50, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "algae", value: 20, type: bonus.good },
            { key: "superconductors", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "robots", value: 50, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "purified_water", value: 20, type: bonus.good },
            { key: "superconductors", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "bionics_data", value: 50, type: bonus.good },
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 20, type: bonus.good },
            { key: "nanoparticles", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "electromagnets", value: 50, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 30, type: bonus.good },
            { key: "superconductors", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Tuklavik: {
      key: "Tuklavik",
      reward: [{ type: "good_bonus", age: "ColonialAge" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "gas", value: 70, type: bonus.good },
            { key: "preservatives", value: 45, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "bionics_data", value: 70, type: bonus.good },
            { key: "nutrition_research", value: 45, type: bonus.good },
            { key: "biogeochemical_data", value: 25, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "plastics", value: 70, type: bonus.good },
            { key: "nutrition_research", value: 45, type: bonus.good },
            { key: "algae", value: 25, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "bionics_data", value: 70, type: bonus.good },
            { key: "nutrition_research", value: 45, type: bonus.good },
            { key: "algae", value: 25, type: bonus.good },
            { key: "biogeochemical_data", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "robots", value: 70, type: bonus.good },
            { key: "papercrete", value: 45, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "electromagnets", value: 70, type: bonus.good },
            { key: "translucent_concrete", value: 45, type: bonus.good },
            { key: "algae", value: 25, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "robots", value: 70, type: bonus.good },
            { key: "smart_materials", value: 45, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "electromagnets", value: 70, type: bonus.good },
            { key: "papercrete", value: 45, type: bonus.good },
            { key: "biogeochemical_data", value: 25, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Ananevut: {
      key: "Ananevut",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "plastics", value: 70, type: bonus.good },
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good },
            { key: "purified_water", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "bionics_data", value: 70, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 25, type: bonus.good },
            { key: "superconductors", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "robots", value: 70, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 30, type: bonus.good },
            { key: "purified_water", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "bionics_data", value: 70, type: bonus.good },
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "algae", value: 25, type: bonus.good },
            { key: "superconductors", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "electromagnets", value: 70, type: bonus.good },
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "algae", value: 30, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "plastics", value: 70, type: bonus.good },
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 30, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Qaniit: {
      key: "Qaniit",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "preservatives", value: 55, type: bonus.good },
            { key: "nanoparticles", value: 20, type: bonus.good },
            { key: "superconductors", value: 35, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "nutrition_research", value: 55, type: bonus.good },
            { key: "biogeochemical_data", value: 20, type: bonus.good },
            { key: "superconductors", value: 35, type: bonus.good },
            { key: "ai_data", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "translucent_concrete", value: 55, type: bonus.good },
            { key: "biogeochemical_data", value: 20, type: bonus.good },
            { key: "nanoparticles", value: 35, type: bonus.good },
            { key: "ai_data", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "translucent_concrete", value: 55, type: bonus.good },
            { key: "biogeochemical_data", value: 35, type: bonus.good },
            { key: "purified_water", value: 20, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "nutrition_research", value: 55, type: bonus.good },
            { key: "algae", value: 20, type: bonus.good },
            { key: "nanoparticles", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "smart_materials", value: 55, type: bonus.good },
            { key: "biogeochemical_data", value: 20, type: bonus.good },
            { key: "purified_water", value: 35, type: bonus.good },
            { key: "ai_data", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "smart_materials", value: 55, type: bonus.good },
            { key: "algae", value: 35, type: bonus.good },
            { key: "superconductors", value: 20, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "translucent_concrete", value: 55, type: bonus.good },
            { key: "algae", value: 20, type: bonus.good },
            { key: "biogeochemical_data", value: 35, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "papercrete", value: 55, type: bonus.good },
            { key: "algae", value: 35, type: bonus.good },
            { key: "biogeochemical_data", value: 20, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "preservatives", value: 55, type: bonus.good },
            { key: "algae", value: 35, type: bonus.good },
            { key: "purified_water", value: 20, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "papercrete", value: 55, type: bonus.good },
            { key: "biogeochemical_data", value: 35, type: bonus.good },
            { key: "superconductors", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    White_Gate: {
      key: "White_Gate",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "algae", value: 40, type: bonus.good },
            { key: "nanoparticles", value: 25, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "purified_water", value: 25, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "algae", value: 25, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "nanoparticles", value: 25, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "biogeochemical_data", value: 40, type: bonus.good },
            { key: "superconductors", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 25, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Median_Waters: {
      key: "Median_Waters",
      reward: [{ type: "medal", value: 3000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "ai_data", value: 20, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "algae", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "ai_data", value: 20, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Snowdrifts: {
      key: "Snowdrifts",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 10 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "bioplastics", value: 15, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "algae", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "ai_data", value: 15, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "nanowire", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Frosty_Mountain: {
      key: "Frosty_Mountain",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 10 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "algae", value: 40, type: bonus.good },
            { key: "purified_water", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 40, type: bonus.good },
            { key: "superconductors", value: 30, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 40, type: bonus.good },
            { key: "nanoparticles", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 30, type: bonus.good },
            { key: "nanoparticles", value: 40, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "purified_water", value: 30, type: bonus.good },
            { key: "superconductors", value: 40, type: bonus.good },
            { key: "ai_data", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "biogeochemical_data", value: 30, type: bonus.good },
            { key: "purified_water", value: 40, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Southern_Valley: {
      key: "Southern_Valley",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 10, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 25, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "transester_gas", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 25, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "transester_gas", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 10, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 10, type: bonus.good },
            { key: "paper_batteries", value: 25, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanowire", value: 10, type: bonus.good },
            { key: "paper_batteries", value: 25, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 10, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 25, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "transester_gas", value: 10, type: bonus.good }
          ]
        }
      ]
    },
    Ilug: {
      key: "Ilug",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nutrition_research", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "preservatives", value: 70, type: bonus.good },
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "translucent_concrete", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "translucent_concrete", value: 70, type: bonus.good },
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "smart_materials", value: 70, type: bonus.good },
            { key: "ai_data", value: 20, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "papercrete", value: 70, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "smart_materials", value: 70, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Chugiak: {
      key: "Chugiak",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [
            { key: "gas", value: 90, type: bonus.good },
            { key: "purified_water", value: 60, type: bonus.good },
            { key: "bioplastics", value: 15, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [
            { key: "robots", value: 90, type: bonus.good },
            { key: "biogeochemical_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "bionics_data", value: 90, type: bonus.good },
            { key: "nanoparticles", value: 60, type: bonus.good },
            { key: "nanowire", value: 15, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "bionics_data", value: 90, type: bonus.good },
            { key: "superconductors", value: 60, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "transester_gas", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "electromagnets", value: 90, type: bonus.good },
            { key: "biogeochemical_data", value: 60, type: bonus.good },
            { key: "nanowire", value: 15, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [
            { key: "plastics", value: 90, type: bonus.good },
            { key: "biogeochemical_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "robots", value: 90, type: bonus.good },
            { key: "purified_water", value: 60, type: bonus.good },
            { key: "bioplastics", value: 15, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "gas", value: 90, type: bonus.good },
            { key: "purified_water", value: 60, type: bonus.good },
            { key: "ai_data", value: 15, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [
            { key: "electromagnets", value: 90, type: bonus.good },
            { key: "nanoparticles", value: 60, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "transester_gas", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Kesukavut: {
      key: "Kesukavut",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "purified_water", value: 75, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "algae", value: 75, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "superconductors", value: 75, type: bonus.good },
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 75, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "nanoparticles", value: 75, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "purified_water", value: 75, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 75, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 75, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "algae", value: 75, type: bonus.good },
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Adlartok: {
      key: "Adlartok",
      reward: [{ type: "medal", value: 3000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "superconductors", value: 80, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 80, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 80, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "purified_water", value: 80, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "superconductors", value: 80, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "purified_water", value: 80, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "algae", value: 80, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "algae", value: 80, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Northern_Passage: {
      key: "Northern_Passage",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 10 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 25, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 25, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 25, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Avalanche: {
      key: "Avalanche",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Manirak: {
      key: "Manirak",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "algae", value: 80, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "nanoparticles", value: 80, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "superconductors", value: 80, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "algae", value: 80, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [
            { key: "purified_water", value: 80, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [
            { key: "biogeochemical_data", value: 80, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Tundra_Rock: {
      key: "Tundra_Rock",
      reward: [{ type: "good_bonus", age: "BronzeAge" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good },
            { key: "transester_gas", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 35, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Patuktuq: {
      key: "Patuktuq",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "nanoparticles", value: 80, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "purified_water", value: 80, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "superconductors", value: 80, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "algae", value: 80, type: bonus.good },
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 80, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "superconductors", value: 80, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "nanoparticles", value: 80, type: bonus.good },
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "algae", value: 80, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Kilalurak: {
      key: "Kilalurak",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 25 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good }
          ]
        }
      ]
    },
    Summit_Ice: {
      key: "Summit_Ice",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 40 }],
      sectors: [
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    Nilak: {
      key: "Nilak",
      reward: [{ type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanoparticles", value: 85, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "purified_water", value: 85, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "algae", value: 85, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "superconductors", value: 85, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "algae", value: 85, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "superconductors", value: 85, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "algae", value: 85, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanoparticles", value: 85, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "superconductors", value: 85, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "purified_water", value: 85, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nanoparticles", value: 85, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 85, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Chulyin: {
      key: "Chulyin",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 25 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Tattilgat: {
      key: "Tattilgat",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1600000 }, { type: "medal", value: 2000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 10, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
          cost: [
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 75, type: bonus.good },
            { key: "transester_gas", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "nanowire", value: 10, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 75, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 10, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good },
            { key: "transester_gas", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "bioplastics", value: 10, type: bonus.good },
            { key: "nanowire", value: 75, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 10, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good }
          ]
        }
      ]
    },
    Atka: {
      key: "Atka",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 25 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "transester_gas", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 75, type: bonus.good },
            { key: "transester_gas", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 75, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 15, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "bioplastics", value: 75, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "nanowire", value: 15, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 15, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "bioplastics", value: 15, type: bonus.good },
            { key: "nanowire", value: 75, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 15, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good },
            { key: "transester_gas", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Glacial_Peak: {
      key: "Glacial_Peak",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "bioplastics", value: 75, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 25, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "nanowire", value: 75, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good }
          ]
        }
      ]
    },
    Nunataq: {
      key: "Nunataq",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "superconductors", value: 110, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanoparticles", value: 110, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "algae", value: 110, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 25, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "superconductors", value: 110, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nanoparticles", value: 110, type: bonus.good },
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "algae", value: 110, type: bonus.good },
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nanoparticles", value: 110, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 110, type: bonus.good },
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good }
          ]
        }
      ]
    },
    Precipice: {
      key: "Precipice",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 50 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 85, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "nanowire", value: 85, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 85, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "transester_gas", value: 85, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 85, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 85, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "ai_data", value: 85, type: bonus.good },
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Nanuq: {
      key: "Nanuq",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "nanowire", value: 80, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 80, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "transester_gas", value: 80, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 80, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 80, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 80, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "transester_gas", value: 80, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 80, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 80, type: bonus.good }
          ]
        }
      ]
    },
    Neural_Rites: {
      key: "Neural_Rites",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "ai_data", value: 90, type: bonus.good },
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "nanowire", value: 90, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 90, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "ai_data", value: 90, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "nanowire", value: 90, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 90, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 90, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "transester_gas", value: 90, type: bonus.good }
          ]
        }
      ]
    },
    Unalaq: {
      key: "Unalaq",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "superconductors", value: 120, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "nanoparticles", value: 120, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "nanoparticles", value: 120, type: bonus.good },
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "algae", value: 120, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "purified_water", value: 120, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "nanoparticles", value: 120, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "purified_water", value: 120, type: bonus.good },
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "transester_gas", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "purified_water", value: 120, type: bonus.good },
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "superconductors", value: 120, type: bonus.good },
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "purified_water", value: 120, type: bonus.good },
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "algae", value: 120, type: bonus.good },
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "transester_gas", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Anyu: {
      key: "Anyu",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "superconductors", value: 100, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 100, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nanoparticles", value: 100, type: bonus.good },
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "purified_water", value: 100, type: bonus.good },
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "superconductors", value: 100, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 100, type: bonus.good },
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "algae", value: 100, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Frozen_Steppe: {
      key: "Frozen_Steppe",
      reward: [{ type: bonus.good, age: "ArcticFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 35, type: bonus.good },
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 95, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "bioplastics", value: 95, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 95, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 95, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 95, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "transester_gas", value: 95, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "nanowire", value: 95, type: bonus.good },
            { key: "transester_gas", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "transester_gas", value: 95, type: bonus.good }
          ]
        }
      ]
    },
    Pimniq: {
      key: "Pimniq",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 45, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 20, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 75, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "bioplastics", value: 75, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    The_Grotto: {
      key: "The_Grotto",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "nanowire", value: 75, type: bonus.good },
            { key: "paper_batteries", value: 95, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "nanowire", value: 95, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 95, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 75, type: bonus.good },
            { key: "paper_batteries", value: 95, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "bioplastics", value: 95, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    Temple_Floe: {
      key: "Temple_Floe",
      reward: [{ type: "coin", value: 1800000 }, { type: "supply", value: 1800000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 100, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 100, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 100, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "ai_data", value: 100, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 100, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good },
            { key: "transester_gas", value: 100, type: bonus.good }
          ]
        },
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
          cost: [
            { key: "ai_data", value: 100, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good }
          ]
        }
      ]
    },
    Spirit_Plane: {
      key: "Spirit_Plane",
      reward: [{ type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
          cost: [
            { key: "ai_data", value: 100, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 80, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 100, type: bonus.good },
            { key: "paper_batteries", value: 80, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "ai_data", value: 100, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 80, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 80, type: bonus.good },
            { key: "transester_gas", value: 100, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "ai_data", value: 80, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 100, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 80, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 100, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "nanowire", value: 100, type: bonus.good },
            { key: "paper_batteries", value: 80, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 100, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 80, type: bonus.good }
          ]
        }
      ]
    }
  },
  OceanicFuture: {
    Coral_Depths: {
      key: "Coral_Depths",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "nutrition_research", value: 45, type: bonus.good },
            { key: "smart_materials", value: 35, type: bonus.good },
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "ai_data", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "papercrete", value: 45, type: bonus.good },
            { key: "preservatives", value: 35, type: bonus.good },
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "papercrete", value: 35, type: bonus.good },
            { key: "preservatives", value: 45, type: bonus.good },
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "nutrition_research", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 45, type: bonus.good },
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "papercrete", value: 35, type: bonus.good },
            { key: "smart_materials", value: 45, type: bonus.good },
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "nutrition_research", value: 35, type: bonus.good },
            { key: "translucent_concrete", value: 45, type: bonus.good },
            { key: "algae", value: 50, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Murky_Waters: {
      key: "Murky_Waters",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "papercrete", value: 65, type: bonus.good },
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "preservatives", value: 65, type: bonus.good },
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "smart_materials", value: 65, type: bonus.good },
            { key: "algae", value: 50, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nutrition_research", value: 65, type: bonus.good },
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "translucent_concrete", value: 65, type: bonus.good },
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Cursed_Current: {
      key: "Cursed_Current",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "smart_materials", value: 60, type: bonus.good },
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "ai_data", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "papercrete", value: 60, type: bonus.good },
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "nutrition_research", value: 60, type: bonus.good },
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "translucent_concrete", value: 60, type: bonus.good },
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "preservatives", value: 60, type: bonus.good },
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "nutrition_research", value: 60, type: bonus.good },
            { key: "algae", value: 50, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Dark_Abyss: {
      key: "Dark_Abyss",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1800000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "translucent_concrete", value: 80, type: bonus.good },
            { key: "nanoparticles", value: 45, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "papercrete", value: 80, type: bonus.good },
            { key: "biogeochemical_data", value: 45, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "smart_materials", value: 80, type: bonus.good },
            { key: "superconductors", value: 45, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "nutrition_research", value: 80, type: bonus.good },
            { key: "purified_water", value: 45, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { key: "preservatives", value: 80, type: bonus.good },
            { key: "algae", value: 45, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Fresh_Flow: {
      key: "Fresh_Flow",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "purified_water", value: 70, type: bonus.good },
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "transester_gas", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "algae", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 70, type: bonus.good },
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "purified_water", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "superconductors", value: 70, type: bonus.good },
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "nanowire", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [
            { key: "biogeochemical_data", value: 70, type: bonus.good },
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "ai_data", value: 25, type: bonus.good },
            { key: "bioplastics", value: 35, type: bonus.good }
          ]
        }
      ]
    },
    Strong_Tide: {
      key: "Strong_Tide",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "papercrete", value: 30, type: bonus.good },
            { key: "translucent_concrete", value: 55, type: bonus.good },
            { key: "algae", value: 50, type: bonus.good },
            { key: "ai_data", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "papercrete", value: 55, type: bonus.good },
            { key: "translucent_concrete", value: 30, type: bonus.good },
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nutrition_research", value: 30, type: bonus.good },
            { key: "smart_materials", value: 55, type: bonus.good },
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "preservatives", value: 30, type: bonus.good },
            { key: "translucent_concrete", value: 55, type: bonus.good },
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "transester_gas", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nutrition_research", value: 55, type: bonus.good },
            { key: "translucent_concrete", value: 30, type: bonus.good },
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "smart_materials", value: 55, type: bonus.good },
            { key: "translucent_concrete", value: 30, type: bonus.good },
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "papercrete", value: 30, type: bonus.good },
            { key: "preservatives", value: 55, type: bonus.good },
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "papercrete", value: 55, type: bonus.good },
            { key: "smart_materials", value: 30, type: bonus.good },
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "nanowire", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Rough_Expanse: {
      key: "Rough_Expanse",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "papercrete", value: 50, type: bonus.good },
            { key: "algae", value: 50, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "ai_data", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nutrition_research", value: 50, type: bonus.good },
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "preservatives", value: 50, type: bonus.good },
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "translucent_concrete", value: 50, type: bonus.good },
            { key: "algae", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "smart_materials", value: 50, type: bonus.good },
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Serene_Waves: {
      key: "Serene_Waves",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "transester_gas", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 35, type: bonus.good },
            { key: "plankton", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "corals", value: 35, type: bonus.good },
            { key: "plankton", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 35, type: bonus.good },
            { key: "biolight", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "corals", value: 35, type: bonus.good },
            { key: "plankton", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 35, type: bonus.good },
            { key: "pearls", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 20, type: bonus.good },
            { key: "pearls", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "transester_gas", value: 70, type: bonus.good },
            { key: "corals", value: 20, type: bonus.good },
            { key: "plankton", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "biolight", value: 20, type: bonus.good },
            { key: "plankton", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "biolight", value: 20, type: bonus.good },
            { key: "pearls", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "biolight", value: 35, type: bonus.good },
            { key: "pearls", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "biolight", value: 35, type: bonus.good },
            { key: "corals", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 20, type: bonus.good },
            { key: "biolight", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "transester_gas", value: 70, type: bonus.good },
            { key: "corals", value: 20, type: bonus.good },
            { key: "pearls", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 20, type: bonus.good },
            { key: "plankton", value: 35, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "biolight", value: 35, type: bonus.good },
            { key: "pearls", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Tideless_Deep: {
      key: "Tideless_Deep",
      reward: [{ type: "medal", value: 4000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "algae", value: 65, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "biogeochemical_data", value: 65, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanoparticles", value: 65, type: bonus.good },
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "superconductors", value: 65, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "purified_water", value: 65, type: bonus.good },
            { key: "paper_batteries", value: 25, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good },
            { key: "artificial_scales", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "superconductors", value: 65, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "purified_water", value: 65, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "biogeochemical_data", value: 65, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "algae", value: 65, type: bonus.good },
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Red_Sea: {
      key: "Red_Sea",
      reward: [{ type: "medal", value: 4000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "pearls", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "corals", value: 15, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "artificial_scales", value: 15, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "plankton", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "biolight", value: 15, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "pearls", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Glimmering_Surf: {
      key: "Glimmering_Surf",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Wondering_Ocean: {
      key: "Wondering_Ocean",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 20, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Foam_Ceiling: {
      key: "Foam_Ceiling",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 20, type: bonus.good },
            { key: "plankton", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "biolight", value: 10, type: bonus.good },
            { key: "pearls", value: 20, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "biolight", value: 50, type: bonus.good },
            { key: "corals", value: 10, type: bonus.good },
            { key: "pearls", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "corals", value: 20, type: bonus.good },
            { key: "pearls", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "artificial_scales", value: 10, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "artificial_scales", value: 20, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "plankton", value: 10, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "artificial_scales", value: 10, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 20, type: bonus.good }
          ]
        }
      ]
    },
    Walled_Gulf: {
      key: "Walled_Gulf",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "superconductors", value: 75, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "corals", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "algae", value: 75, type: bonus.good },
            { key: "biolight", value: 25, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nanoparticles", value: 75, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "biogeochemical_data", value: 75, type: bonus.good },
            { key: "artificial_scales", value: 25, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "biogeochemical_data", value: 75, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "plankton", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "biogeochemical_data", value: 75, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 25, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nanoparticles", value: 75, type: bonus.good },
            { key: "pearls", value: 25, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "algae", value: 75, type: bonus.good },
            { key: "corals", value: 25, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Lower_Grotto: {
      key: "Lower_Grotto",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nanoparticles", value: 100, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "corals", value: 15, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "algae", value: 100, type: bonus.good },
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "pearls", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "purified_water", value: 100, type: bonus.good },
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "corals", value: 15, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "superconductors", value: 100, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good },
            { key: "biolight", value: 15, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "biogeochemical_data", value: 100, type: bonus.good },
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 15, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "algae", value: 100, type: bonus.good },
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good },
            { key: "plankton", value: 15, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nanoparticles", value: 100, type: bonus.good },
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good },
            { key: "pearls", value: 15, type: bonus.good }
          ]
        }
      ]
    },
    Silver_Swarms: {
      key: "Silver_Swarms",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 80, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good },
            { key: "corals", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nanowire", value: 80, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good },
            { key: "plankton", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "paper_batteries", value: 80, type: bonus.good },
            { key: "biolight", value: 55, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "transester_gas", value: 80, type: bonus.good },
            { key: "biolight", value: 55, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "paper_batteries", value: 80, type: bonus.good },
            { key: "artificial_scales", value: 55, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "ai_data", value: 80, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "pearls", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 80, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "corals", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "nanowire", value: 80, type: bonus.good },
            { key: "biolight", value: 55, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "transester_gas", value: 80, type: bonus.good },
            { key: "pearls", value: 55, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "ai_data", value: 80, type: bonus.good },
            { key: "artificial_scales", value: 55, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Rocky_Domain: {
      key: "Rocky_Domain",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1400000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "artificial_scales", value: 70, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "biolight", value: 30, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "biolight", value: 70, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "corals", value: 30, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Upper_Grotto: {
      key: "Upper_Grotto",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 90, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 90, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanowire", value: 90, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nanowire", value: 90, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "transester_gas", value: 90, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 90, type: bonus.good },
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 90, type: bonus.good },
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Nautical_Parlay: {
      key: "Nautical_Parlay",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ key: "bioplastics", value: 40, type: bonus.good }, { key: "biolight", value: 50, type: bonus.good }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Restless_Buoy: {
      key: "Restless_Buoy",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "promethium", value: 50, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Ripped_Sails: {
      key: "Ripped_Sails",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "promethium", value: 50, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Nautilus_Mirage: {
      key: "Nautilus_Mirage",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "promethium", value: 60, type: bonus.special_good }
          ]
        }
      ]
    },
    Ravenous_Tides: {
      key: "Ravenous_Tides",
      reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good },
            { key: "pearls", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "artificial_scales", value: 20, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "corals", value: 20, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "biolight", value: 20, type: bonus.good },
            { key: "pearls", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "biolight", value: 60, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "plankton", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "artificial_scales", value: 20, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good },
            { key: "promethium", value: 60, type: bonus.special_good }
          ]
        }
      ]
    },
    Deep_Dive: {
      key: "Deep_Dive",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "promethium", value: 70, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Furious_Storm: {
      key: "Furious_Storm",
      reward: [{ type: "good_bonus", age: "IndustrialAge" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "corals", value: 30, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "biolight", value: 50, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "biolight", value: 50, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good },
            { key: "promethium", value: 60, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [
            { key: "corals", value: 30, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Translucent_Algae: {
      key: "Translucent_Algae",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good },
            { key: "promethium", value: 60, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good },
            { key: "promethium", value: 60, type: bonus.special_good }
          ]
        }
      ]
    },
    Silver_Crest: {
      key: "Silver_Crest",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Single_Wave: {
      key: "Single_Wave",
      reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good },
            { key: "artificial_scales", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "purified_water", value: 50, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good },
            { key: "orichalcum", value: 60, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "transester_gas", value: 60, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good },
            { key: "promethium", value: 65, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "algae", value: 50, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "superconductors", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "biogeochemical_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Grey_Clouds: {
      key: "Grey_Clouds",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good },
            { key: "promethium", value: 50, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "orichalcum", value: 50, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Treacherous_Surf: {
      key: "Treacherous_Surf",
      reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "nanoparticles", value: 90, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "superconductors", value: 90, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good },
            { key: "orichalcum", value: 65, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "algae", value: 90, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "purified_water", value: 90, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "biogeochemical_data", value: 65, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Coral_Kingdom: {
      key: "Coral_Kingdom",
      reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good },
            { key: "orichalcum", value: 50, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "promethium", value: 50, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Telescopic_Barrel: {
      key: "Telescopic_Barrel",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "corals", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        }
      ]
    },
    Sponge_Sands: {
      key: "Sponge_Sands",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "nanoparticles", value: 100, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 95000 }],
          cost: [
            { key: "purified_water", value: 100, type: bonus.good },
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "biogeochemical_data", value: 100, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "promethium", value: 50, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "algae", value: 100, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 95000 }],
          cost: [
            { key: "superconductors", value: 100, type: bonus.good },
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 95000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        }
      ]
    },
    Cursed_Lip: {
      key: "Cursed_Lip",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "corals", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "corals", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        }
      ]
    },
    Scuba_Bay: {
      key: "Scuba_Bay",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "orichalcum", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "promethium", value: 75, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Seagull_Domain: {
      key: "Seagull_Domain",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "nanoparticles", value: 75, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [
            { key: "superconductors", value: 75, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [
            { key: "purified_water", value: 75, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "biogeochemical_data", value: 75, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [
            { key: "algae", value: 75, type: bonus.good },
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good }
          ]
        }
      ]
    },
    Tangled_Fins: {
      key: "Tangled_Fins",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "purified_water", value: 60, type: bonus.good },
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [
            { key: "nanoparticles", value: 60, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [
            { key: "biogeochemical_data", value: 60, type: bonus.good },
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "superconductors", value: 60, type: bonus.good },
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "paper_batteries", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    Breakwater_Wharf: {
      key: "Breakwater_Wharf",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 25 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good },
            { key: "pearls", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "biolight", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    Adrift_Liner: {
      key: "Adrift_Liner",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 70, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good },
            { key: "orichalcum", value: 70, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 70, type: bonus.good },
            { key: "pearls", value: 30, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "biolight", value: 30, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "biolight", value: 70, type: bonus.good },
            { key: "corals", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good },
            { key: "biolight", value: 70, type: bonus.good },
            { key: "plankton", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 30, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good }
          ]
        }
      ]
    },
    Bermuda_Quay: {
      key: "Bermuda_Quay",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1400000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "promethium", value: 75, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "orichalcum", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Sextant_Mast: {
      key: "Sextant_Mast",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "ai_data", value: 35, type: bonus.good },
            { key: "biolight", value: 80, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "paper_batteries", value: 85, type: bonus.good },
            { key: "transester_gas", value: 35, type: bonus.good },
            { key: "plankton", value: 80, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "nanowire", value: 85, type: bonus.good },
            { key: "pearls", value: 80, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "bioplastics", value: 85, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "artificial_scales", value: 80, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "ai_data", value: 35, type: bonus.good },
            { key: "transester_gas", value: 85, type: bonus.good },
            { key: "pearls", value: 80, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "ai_data", value: 85, type: bonus.good },
            { key: "transester_gas", value: 35, type: bonus.good },
            { key: "biolight", value: 80, type: bonus.good }
          ]
        }
      ]
    },
    Grog_Wash: {
      key: "Grog_Wash",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "ai_data", value: 60, type: bonus.good },
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "paper_batteries", value: 60, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "nanowire", value: 60, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    R_lyeh_Reef: {
      key: "R_lyeh_Reef",
      reward: [{ type: "coin", value: 1300000 }, { type: "supply", value: 1300000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "transester_gas", value: 70, type: bonus.good },
            { key: "plankton", value: 55, type: bonus.good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "pearls", value: 55, type: bonus.good },
            { key: "orichalcum", value: 60, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good },
            { key: "corals", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "plankton", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "corals", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 55, type: bonus.good },
            { key: "orichalcum", value: 80, type: bonus.special_good }
          ]
        }
      ]
    },
    Capricorn_Waterway: {
      key: "Capricorn_Waterway",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 40 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 70, type: bonus.good },
            { key: "promethium", value: 65, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good },
            { key: "biolight", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        }
      ]
    },
    Barnacle_Deck: {
      key: "Barnacle_Deck",
      reward: [{ type: "coin", value: 1700000 }, { type: "supply", value: 1700000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 55, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "transester_gas", value: 65, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "plankton", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "artificial_scales", value: 45, type: bonus.good },
            { key: "plankton", value: 55, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "biolight", value: 45, type: bonus.good },
            { key: "pearls", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "biolight", value: 55, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good },
            { key: "orichalcum", value: 70, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "biolight", value: 55, type: bonus.good },
            { key: "plankton", value: 45, type: bonus.good }
          ]
        }
      ]
    },
    Ahab_s_Tomb: {
      key: "Ahab_s_Tomb",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "orichalcum", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "orichalcum", value: 50, type: bonus.special_good }
          ]
        }
      ]
    },
    Galley_Commodore: {
      key: "Galley_Commodore",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "ai_data", value: 35, type: bonus.good },
            { key: "nanowire", value: 75, type: bonus.good },
            { key: "promethium", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "paper_batteries", value: 35, type: bonus.good },
            { key: "pearls", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "biolight", value: 60, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "ai_data", value: 35, type: bonus.good },
            { key: "paper_batteries", value: 75, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "bioplastics", value: 35, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good },
            { key: "artificial_scales", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { key: "bioplastics", value: 75, type: bonus.good },
            { key: "transester_gas", value: 35, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [
            { key: "nanowire", value: 35, type: bonus.good },
            { key: "transester_gas", value: 75, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    Adamastor: {
      key: "Adamastor",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "orichalcum", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "paper_batteries", value: 25, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "transester_gas", value: 25, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "nanowire", value: 25, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [
            { key: "ai_data", value: 25, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 25, type: bonus.good },
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "paper_batteries", value: 25, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        }
      ]
    },
    Deadeye_Admiral: {
      key: "Deadeye_Admiral",
      reward: [{ type: "coin", value: 1600000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "transester_gas", value: 20, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 20, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "ai_data", value: 20, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "orichalcum", value: 70, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "nanowire", value: 20, type: bonus.good },
            { key: "transester_gas", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 20, type: bonus.good },
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good }
          ]
        }
      ]
    },
    Monkey_s_Fist: {
      key: "Monkey_s_Fist",
      reward: [{ type: "coin", value: 1800000 }, { type: "supply", value: 1800000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "paper_batteries", value: 40, type: bonus.good },
            { key: "plankton", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "nanowire", value: 40, type: bonus.good },
            { key: "biolight", value: 55, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "transester_gas", value: 40, type: bonus.good },
            { key: "corals", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "ai_data", value: 40, type: bonus.good },
            { key: "transester_gas", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 55, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "pearls", value: 55, type: bonus.good },
            { key: "orichalcum", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "bioplastics", value: 40, type: bonus.good },
            { key: "pearls", value: 55, type: bonus.good }
          ]
        }
      ]
    },
    Dagon_s_Dagger: {
      key: "Dagon_s_Dagger",
      reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "pearls", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "biolight", value: 60, type: bonus.good },
            { key: "promethium", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "transester_gas", value: 30, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "artificial_scales", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good },
            { key: "orichalcum", value: 65, type: bonus.special_good }
          ]
        }
      ]
    },
    Sunken_Leviathan: {
      key: "Sunken_Leviathan",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 35 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 120000 }],
          cost: [
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 120000 }],
          cost: [
            { key: "transester_gas", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "orichalcum", value: 130, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "pearls", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 120000 }],
          cost: [
            { key: "nanowire", value: 55, type: bonus.good },
            { key: "transester_gas", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 120000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "promethium", value: 75, type: bonus.special_good }
          ]
        }
      ]
    },
    Behemoth: {
      key: "Behemoth",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 35 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "pearls", value: 65, type: bonus.good },
            { key: "promethium", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "transester_gas", value: 70, type: bonus.good },
            { key: "corals", value: 65, type: bonus.good },
            { key: "plankton", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "ai_data", value: 70, type: bonus.good },
            { key: "plankton", value: 65, type: bonus.good },
            { key: "promethium", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "paper_batteries", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 65, type: bonus.good },
            { key: "corals", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "artificial_scales", value: 65, type: bonus.good },
            { key: "corals", value: 65, type: bonus.good },
            { key: "orichalcum", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "nanowire", value: 70, type: bonus.good },
            { key: "biolight", value: 65, type: bonus.good },
            { key: "plankton", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { key: "bioplastics", value: 70, type: bonus.good },
            { key: "corals", value: 65, type: bonus.good },
            { key: "orichalcum", value: 130, type: bonus.special_good }
          ]
        }
      ]
    },
    Privateer_Helm: {
      key: "Privateer_Helm",
      reward: [{ type: "coin", value: 1300000 }, { type: "supply", value: 1300000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "transester_gas", value: 100, type: bonus.good },
            { key: "artificial_scales", value: 70, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 100, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good },
            { key: "orichalcum", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 100, type: bonus.good },
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "nanowire", value: 100, type: bonus.good },
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "bioplastics", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 100, type: bonus.good },
            { key: "biolight", value: 70, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 100, type: bonus.good },
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "pearls", value: 60, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        }
      ]
    },
    Anchorage_Ruin: {
      key: "Anchorage_Ruin",
      reward: [{ type: "coin", value: 1600000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good },
            { key: "orichalcum", value: 75, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "orichalcum", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "paper_batteries", value: 55, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "transester_gas", value: 55, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "promethium", value: 75, type: bonus.special_good }
          ]
        }
      ]
    },
    Man_O_War: {
      key: "Man_O_War",
      reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "artificial_scales", value: 70, type: bonus.good },
            { key: "biolight", value: 70, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 50, type: bonus.good },
            { key: "biolight", value: 70, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "transester_gas", value: 50, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good },
            { key: "orichalcum", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good },
            { key: "promethium", value: 95, type: bonus.special_good }
          ]
        }
      ]
    },
    Nemo_s_Dock: {
      key: "Nemo_s_Dock",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good },
            { key: "orichalcum", value: 75, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "transester_gas", value: 65, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "orichalcum", value: 75, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "bioplastics", value: 55, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        }
      ]
    },
    Medusa_Cove: {
      key: "Medusa_Cove",
      reward: [{ type: "coin", value: 1800000 }, { type: "supply", value: 1800000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "biolight", value: 90, type: bonus.good },
            { key: "pearls", value: 90, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "bioplastics", value: 65, type: bonus.good },
            { key: "plankton", value: 90, type: bonus.good },
            { key: "orichalcum", value: 125, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "nanowire", value: 65, type: bonus.good },
            { key: "corals", value: 90, type: bonus.good },
            { key: "pearls", value: 90, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "paper_batteries", value: 65, type: bonus.good },
            { key: "biolight", value: 90, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 65, type: bonus.good },
            { key: "artificial_scales", value: 90, type: bonus.good },
            { key: "promethium", value: 115, type: bonus.special_good }
          ]
        }
      ]
    },
    Craggy_Cay: {
      key: "Craggy_Cay",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "ai_data", value: 30, type: bonus.good },
            { key: "nanowire", value: 80, type: bonus.good },
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "promethium", value: 130, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "nanowire", value: 30, type: bonus.good },
            { key: "paper_batteries", value: 80, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "paper_batteries", value: 30, type: bonus.good },
            { key: "transester_gas", value: 80, type: bonus.good },
            { key: "pearls", value: 60, type: bonus.good },
            { key: "plankton", value: 40, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "ai_data", value: 80, type: bonus.good },
            { key: "biolight", value: 40, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good }
          ]
        }
      ]
    },
    Buccaneer_Plateau: {
      key: "Buccaneer_Plateau",
      reward: [{ type: "good_bonus", age: "EarlyMiddleAges" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "bioplastics", value: 80, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "promethium", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "paper_batteries", value: 80, type: bonus.good },
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good },
            { key: "orichalcum", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "ai_data", value: 80, type: bonus.good },
            { key: "biolight", value: 50, type: bonus.good },
            { key: "promethium", value: 105, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "nanowire", value: 80, type: bonus.good },
            { key: "promethium", value: 70, type: bonus.special_good },
            { key: "orichalcum", value: 70, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "transester_gas", value: 80, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good }
          ]
        }
      ]
    },
    Raging_Tides: {
      key: "Raging_Tides",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 40 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 130000 }],
          cost: [
            { key: "biolight", value: 60, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good },
            { key: "orichalcum", value: 105, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [
            { key: "biolight", value: 60, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good },
            { key: "promethium", value: 105, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 130000 }],
          cost: [
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "pearls", value: 60, type: bonus.good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "biolight", value: 60, type: bonus.good },
            { key: "promethium", value: 65, type: bonus.special_good },
            { key: "orichalcum", value: 70, type: bonus.special_good }
          ]
        }
      ]
    },
    Ahoy_Alee: {
      key: "Ahoy_Alee",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 10 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "transester_gas", value: 60, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "plankton", value: 65, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "paper_batteries", value: 75, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good },
            { key: "orichalcum", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "ai_data", value: 80, type: bonus.good },
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "biolight", value: 70, type: bonus.good },
            { key: "corals", value: 65, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "transester_gas", value: 80, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good },
            { key: "promethium", value: 70, type: bonus.special_good },
            { key: "orichalcum", value: 75, type: bonus.special_good }
          ]
        }
      ]
    },
    Ghost_Trench: {
      key: "Ghost_Trench",
      reward: [{ type: "coin", value: 1600000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 60, type: bonus.good },
            { key: "artificial_scales", value: 75, type: bonus.good },
            { key: "orichalcum", value: 170, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "corals", value: 70, type: bonus.good },
            { key: "pearls", value: 90, type: bonus.good },
            { key: "orichalcum", value: 150, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "biogeochemical_data", value: 70, type: bonus.good },
            { key: "nanoparticles", value: 80, type: bonus.good },
            { key: "promethium", value: 65, type: bonus.special_good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "artificial_scales", value: 70, type: bonus.good },
            { key: "biolight", value: 80, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "plankton", value: 80, type: bonus.good }
          ]
        }
      ]
    },
    Ursula_s_Valley: {
      key: "Ursula_s_Valley",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 80, type: bonus.good },
            { key: "corals", value: 65, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good },
            { key: "plankton", value: 80, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "transester_gas", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 55, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "nanowire", value: 50, type: bonus.good },
            { key: "pearls", value: 50, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "biolight", value: 65, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good },
            { key: "pearls", value: 60, type: bonus.good },
            { key: "orichalcum", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "biolight", value: 55, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good },
            { key: "orichalcum", value: 110, type: bonus.special_good }
          ]
        }
      ]
    },
    Dungbie_Trough: {
      key: "Dungbie_Trough",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "corals", value: 60, type: bonus.good },
            { key: "pearls", value: 65, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good },
            { key: "orichalcum", value: 130, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "artificial_scales", value: 40, type: bonus.good },
            { key: "biolight", value: 55, type: bonus.good },
            { key: "promethium", value: 120, type: bonus.special_good },
            { key: "orichalcum", value: 95, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "pearls", value: 75, type: bonus.good },
            { key: "promethium", value: 75, type: bonus.special_good },
            { key: "orichalcum", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "corals", value: 60, type: bonus.good },
            { key: "pearls", value: 75, type: bonus.good },
            { key: "plankton", value: 50, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good }
          ]
        }
      ]
    },
    Idlers_Range: {
      key: "Idlers_Range",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "pearls", value: 50, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good },
            { key: "promethium", value: 95, type: bonus.special_good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "algae", value: 40, type: bonus.good },
            { key: "nanoparticles", value: 45, type: bonus.good },
            { key: "pearls", value: 75, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "algae", value: 60, type: bonus.good },
            { key: "biogeochemical_data", value: 60, type: bonus.good },
            { key: "artificial_scales", value: 85, type: bonus.good },
            { key: "biolight", value: 90, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "artificial_scales", value: 70, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "biolight", value: 55, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "plankton", value: 65, type: bonus.good },
            { key: "promethium", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "pearls", value: 45, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good },
            { key: "orichalcum", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "artificial_scales", value: 60, type: bonus.good },
            { key: "corals", value: 40, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good }
          ]
        }
      ]
    },
    Wherry_Gap: {
      key: "Wherry_Gap",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "corals", value: 80, type: bonus.good },
            { key: "promethium", value: 120, type: bonus.special_good },
            { key: "orichalcum", value: 130, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "biolight", value: 95, type: bonus.good },
            { key: "pearls", value: 80, type: bonus.good },
            { key: "promethium", value: 150, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "artificial_scales", value: 70, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good },
            { key: "orichalcum", value: 150, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "artificial_scales", value: 50, type: bonus.good },
            { key: "corals", value: 50, type: bonus.good },
            { key: "pearls", value: 55, type: bonus.good },
            { key: "promethium", value: 140, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "biolight", value: 40, type: bonus.good },
            { key: "plankton", value: 65, type: bonus.good },
            { key: "promethium", value: 120, type: bonus.special_good }
          ]
        }
      ]
    },
    Nock_s_Turn: {
      key: "Nock_s_Turn",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1400000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "plankton", value: 95, type: bonus.good },
            { key: "promethium", value: 70, type: bonus.special_good },
            { key: "orichalcum", value: 130, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "promethium", value: 130, type: bonus.special_good },
            { key: "orichalcum", value: 160, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "algae", value: 75, type: bonus.good },
            { key: "artificial_scales", value: 90, type: bonus.good },
            { key: "orichalcum", value: 150, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "purified_water", value: 75, type: bonus.good },
            { key: "superconductors", value: 55, type: bonus.good },
            { key: "plankton", value: 80, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good }
          ]
        }
      ]
    },
    Scuttle_Ridge: {
      key: "Scuttle_Ridge",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "corals", value: 45, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good },
            { key: "orichalcum", value: 140, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "biolight", value: 65, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "artificial_scales", value: 75, type: bonus.good },
            { key: "pearls", value: 80, type: bonus.good },
            { key: "orichalcum", value: 160, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "biolight", value: 65, type: bonus.good },
            { key: "corals", value: 75, type: bonus.good },
            { key: "plankton", value: 60, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        }
      ]
    },
    Neptune_s_Galleon: {
      key: "Neptune_s_Galleon",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "artificial_scales", value: 100, type: bonus.good },
            { key: "pearls", value: 100, type: bonus.good },
            { key: "promethium", value: 95, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "promethium", value: 145, type: bonus.special_good },
            { key: "orichalcum", value: 160, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 95, type: bonus.good },
            { key: "superconductors", value: 75, type: bonus.good },
            { key: "plankton", value: 135, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "algae", value: 65, type: bonus.good },
            { key: "purified_water", value: 45, type: bonus.good },
            { key: "biolight", value: 90, type: bonus.good },
            { key: "corals", value: 100, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "superconductors", value: 80, type: bonus.good },
            { key: "pearls", value: 75, type: bonus.good },
            { key: "orichalcum", value: 150, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "pearls", value: 125, type: bonus.good },
            { key: "promethium", value: 60, type: bonus.special_good },
            { key: "orichalcum", value: 130, type: bonus.special_good }
          ]
        }
      ]
    },
    Scurvy_Atoll: {
      key: "Scurvy_Atoll",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "algae", value: 70, type: bonus.good },
            { key: "biolight", value: 140, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "corals", value: 60, type: bonus.good },
            { key: "plankton", value: 80, type: bonus.good },
            { key: "promethium", value: 60, type: bonus.special_good },
            { key: "orichalcum", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "artificial_scales", value: 140, type: bonus.good },
            { key: "biolight", value: 95, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "nanoparticles", value: 80, type: bonus.good },
            { key: "purified_water", value: 75, type: bonus.good },
            { key: "orichalcum", value: 145, type: bonus.special_good }
          ]
        }
      ]
    },
    Seafarer_s_Current: {
      key: "Seafarer_s_Current",
      reward: [{ type: "coin", value: 14400000 }, { type: "supply", value: 14400000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "nanowire", value: 85, type: bonus.good },
            { key: "paper_batteries", value: 80, type: bonus.good },
            { key: "promethium", value: 130, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "corals", value: 75, type: bonus.good },
            { key: "plankton", value: 85, type: bonus.good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "ai_data", value: 80, type: bonus.good },
            { key: "transester_gas", value: 90, type: bonus.good },
            { key: "orichalcum", value: 140, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "biolight", value: 80, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good },
            { key: "orichalcum", value: 140, type: bonus.special_good }
          ]
        }
      ]
    },
    Capsize_Lagoon: {
      key: "Capsize_Lagoon",
      reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { key: "promethium", value: 120, type: bonus.special_good },
            { key: "orichalcum", value: 180, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "superconductors", value: 65, type: bonus.good },
            { key: "plankton", value: 95, type: bonus.good },
            { key: "promethium", value: 140, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { key: "nanoparticles", value: 80, type: bonus.good },
            { key: "promethium", value: 110, type: bonus.special_good },
            { key: "orichalcum", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "corals", value: 95, type: bonus.good },
            { key: "plankton", value: 85, type: bonus.good },
            { key: "orichalcum", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "biolight", value: 45, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good },
            { key: "pearls", value: 55, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        }
      ]
    },
    Corsair_s_Skerry: {
      key: "Corsair_s_Skerry",
      reward: [{ type: "coin", value: 187500000 }, { type: "supply", value: 187500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "purified_water", value: 85, type: bonus.good },
            { key: "superconductors", value: 80, type: bonus.good },
            { key: "orichalcum", value: 160, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { key: "biogeochemical_data", value: 80, type: bonus.good },
            { key: "artificial_scales", value: 75, type: bonus.good },
            { key: "biolight", value: 70, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 110000 }],
          cost: [
            { key: "nanoparticles", value: 70, type: bonus.good },
            { key: "artificial_scales", value: 90, type: bonus.good },
            { key: "promethium", value: 80, type: bonus.special_good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "algae", value: 65, type: bonus.good },
            { key: "nanoparticles", value: 50, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good },
            { key: "promethium", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "promethium", value: 140, type: bonus.special_good },
            { key: "orichalcum", value: 150, type: bonus.special_good }
          ]
        }
      ]
    },
    Undertow_Bank: {
      key: "Undertow_Bank",
      reward: [{ type: "coin", value: 1300000 }, { type: "supply", value: 1300000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "algae", value: 140, type: bonus.good },
            { key: "orichalcum", value: 170, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { key: "artificial_scales", value: 85, type: bonus.good },
            { key: "biolight", value: 65, type: bonus.good },
            { key: "promethium", value: 75, type: bonus.special_good },
            { key: "orichalcum", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "plankton", value: 135, type: bonus.good },
            { key: "promethium", value: 100, type: bonus.special_good },
            { key: "orichalcum", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "biolight", value: 145, type: bonus.good },
            { key: "pearls", value: 75, type: bonus.good },
            { key: "promethium", value: 90, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "biogeochemical_data", value: 80, type: bonus.good },
            { key: "purified_water", value: 100, type: bonus.good },
            { key: "corals", value: 120, type: bonus.good }
          ]
        }
      ]
    },
    Blackwater_Cape: {
      key: "Blackwater_Cape",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "promethium", value: 130, type: bonus.special_good },
            { key: "orichalcum", value: 160, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "nanowire", value: 80, type: bonus.good },
            { key: "artificial_scales", value: 95, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "pearls", value: 85, type: bonus.good },
            { key: "plankton", value: 80, type: bonus.good },
            { key: "orichalcum", value: 150, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "artificial_scales", value: 100, type: bonus.good },
            { key: "corals", value: 80, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good },
            { key: "orichalcum", value: 80, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { key: "bioplastics", value: 60, type: bonus.good },
            { key: "corals", value: 95, type: bonus.good },
            { key: "promethium", value: 150, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "paper_batteries", value: 90, type: bonus.good },
            { key: "artificial_scales", value: 100, type: bonus.good },
            { key: "biolight", value: 90, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "ai_data", value: 75, type: bonus.good },
            { key: "transester_gas", value: 85, type: bonus.good },
            { key: "promethium", value: 140, type: bonus.special_good }
          ]
        }
      ]
    },
    Typhoon_Peninsula: {
      key: "Typhoon_Peninsula",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "transester_gas", value: 60, type: bonus.good },
            { key: "plankton", value: 80, type: bonus.good },
            { key: "orichalcum", value: 120, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 110000 }],
          cost: [
            { key: "transester_gas", value: 95, type: bonus.good },
            { key: "biolight", value: 100, type: bonus.good },
            { key: "pearls", value: 100, type: bonus.good }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { key: "ai_data", value: 55, type: bonus.good },
            { key: "corals", value: 45, type: bonus.good },
            { key: "promethium", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { key: "plankton", value: 70, type: bonus.good },
            { key: "promethium", value: 130, type: bonus.special_good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "paper_batteries", value: 50, type: bonus.good },
            { key: "corals", value: 70, type: bonus.good },
            { key: "plankton", value: 70, type: bonus.good },
            { key: "promethium", value: 110, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "bioplastics", value: 50, type: bonus.good },
            { key: "nanowire", value: 95, type: bonus.good },
            { key: "orichalcum", value: 145, type: bonus.special_good }
          ]
        }
      ]
    },
    Mutiny_Canyon: {
      key: "Mutiny_Canyon",
      reward: [{ type: bonus.good, age: "OceanicFuture", value: 40 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "algae", value: 55, type: bonus.good },
            { key: "promethium", value: 120, type: bonus.special_good },
            { key: "orichalcum", value: 135, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 110000 }],
          cost: [
            { key: "nanoparticles", value: 60, type: bonus.good },
            { key: "corals", value: 100, type: bonus.good },
            { key: "orichalcum", value: 150, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "promethium", value: 145, type: bonus.special_good },
            { key: "orichalcum", value: 145, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "biolight", value: 55, type: bonus.good },
            { key: "pearls", value: 70, type: bonus.good },
            { key: "plankton", value: 55, type: bonus.good },
            { key: "promethium", value: 130, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "artificial_scales", value: 85, type: bonus.good },
            { key: "pearls", value: 75, type: bonus.good },
            { key: "orichalcum", value: 150, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { key: "biogeochemical_data", value: 75, type: bonus.good },
            { key: "biolight", value: 75, type: bonus.good },
            { key: "plankton", value: 65, type: bonus.good },
            { key: "orichalcum", value: 100, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "purified_water", value: 75, type: bonus.good },
            { key: "superconductors", value: 65, type: bonus.good },
            { key: "promethium", value: 150, type: bonus.special_good }
          ]
        }
      ]
    },
    Leviathan_Wreck: {
      key: "Leviathan_Wreck",
      reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { key: "corals", value: 80, type: bonus.good },
            { key: "plankton", value: 90, type: bonus.good },
            { key: "orichalcum", value: 140, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [
            { key: "pearls", value: 120, type: bonus.good },
            { key: "promethium", value: 175, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { key: "promethium", value: 130, type: bonus.special_good },
            { key: "orichalcum", value: 160, type: bonus.special_good }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { key: "artificial_scales", value: 85, type: bonus.good },
            { key: "biolight", value: 70, type: bonus.good },
            { key: "corals", value: 60, type: bonus.good },
            { key: "orichalcum", value: 110, type: bonus.special_good }
          ]
        }
      ]
    }
  }
};

module.exports.campaignCost = campaignCost;
