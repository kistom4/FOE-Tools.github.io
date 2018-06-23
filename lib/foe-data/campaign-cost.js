const campaignCost = {
  BronzeAge: {
    Dunarsund: {
      key: "Dunarsund",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "coins", value: 50 }], cost: [{ stone: 2 }] },
        { reward: [{ type: "supply", value: 60 }], cost: [{ wine: 2 }] },
        { reward: [{ type: "supply", value: 60 }], cost: [{ dye: 2 }] }
      ]
    },
    Tyr: {
      key: "Tyr",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "coins", value: 100 }], cost: [{ marble: 3 }] },
        { reward: [{ type: "supply", value: 100 }], cost: [{ lumber: 5 }] },
        { reward: [{ type: "supply", value: 100 }], cost: [{ dye: 5 }] },
        { reward: [{ type: "coins", value: 100 }], cost: [{ wine: 5 }] },
        { reward: [{ type: "coins", value: 100 }], cost: [{ stone: 5 }] }
      ]
    },
    Fel_Dranghyr: {
      key: "Fel_Dranghyr",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "supply", value: 75 }], cost: [{ marble: 5 }] },
        { reward: [{ type: "coins", value: 75 }], cost: [{ lumber: 4 }] },
        { reward: [{ type: "coins", value: 75 }], cost: [{ stone: 2 }, { wine: 2 }] }
      ]
    },
    Hymir: {
      key: "Hymir",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 100 }], cost: [{ stone: 3 }, { marble: 5 }] },
        { reward: [{ type: "supply", value: 100 }], cost: [{ marble: 5 }, { wine: 3 }] },
        { reward: [{ type: "supply", value: 100 }], cost: [{ lumber: 5 }, { dye: 5 }] },
        { reward: [{ type: "coins", value: 100 }], cost: [{ lumber: 3 }, { wine: 3 }] },
        { reward: [{ type: "coins", value: 100 }], cost: [{ stone: 3 }, { dye: 3 }] }
      ]
    }
  },
  IronAge: {
    Badakus: {
      key: "Badakus",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "supply", value: 400 }], cost: [{ lumber: 8 }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ wine: 6 }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ stone: 10 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ marble: 8 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ dye: 8 }] }
      ]
    },
    Paruuch: {
      key: "Paruuch",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "coin", value: 400 }], cost: [{ marble: 6 }, { dye: 6 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ stone: 6 }, { lumber: 6 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ marble: 6 }, { wine: 6 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ lumber: 6 }, { dye: 6 }] }
      ]
    },
    Ruug: {
      key: "Ruug",
      reward: [{ type: "coin", value: 800 }, { type: "supply", value: 800 }],
      sectors: [
        { reward: [{ type: "coin", value: 400 }], cost: [{ ebony: 8 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ limestone: 6 }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ iron: 6 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ cloth: 6 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ jewelry: 6 }] }
      ]
    },
    Karchagu: {
      key: "Karchagu",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "supply", value: 400 }], cost: [{ stone: 10 }, { ebony: 7 }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ dye: 4 }, { iron: 7 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ wine: 10 }, { cloth: 7 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ lumber: 10 }, { limestone: 7 }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ lumber: 6 }, { jewelry: 7 }] }
      ]
    },
    East_Nagach: {
      key: "East_Nagach",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "coin", value: 400 }], cost: [{ ebony: 12 }, { jewelry: 12 }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ limestone: 6 }, { cloth: 6 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ ebony: 8 }, { jewelry: 12 }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ iron: 6 }, { cloth: 6 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ limestone: 14 }, { iron: 5 }] }
      ]
    },
    West_Nagach: {
      key: "West_Nagach",
      reward: [{ type: "coin", value: 1400 }, { type: "supply", value: 1400 }],
      sectors: [
        { reward: [{ type: "coin", value: 400 }], cost: [{ lumber: 12 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ wine: 18 }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ dye: 16 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ stone: 18 }, { marble: 18 }] },
        { reward: [{ type: "coin", value: 400 }], cost: [{ dye: 5 }, { wine: 5 }] },
        { reward: [{ type: "supply", value: 400 }], cost: [{ stone: 6 }, { marble: 4 }] }
      ]
    }
  },
  HighMiddleAges: {
    Pfefferberg: {
      key: "Pfefferberg",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "supply", value: 900 }], cost: [{ ebony: 14 }, { iron: 10 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ cloth: 14 }, { jewelry: 10 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ limestone: 12 }, { cloth: 10 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ limestone: 10 }, { iron: 10 }] }
      ]
    },
    Dunkelwald: {
      key: "Dunkelwald",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "coin", value: 900 }], cost: [{ ebony: 14 }, { jewelry: 10 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ limestone: 8 }, { iron: 10 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ limestone: 14 }, { cloth: 10 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ iron: 10 }, { cloth: 14 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ ebony: 10 }, { jewelry: 14 }] }
      ]
    },
    Greifental: {
      key: "Greifental",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "coin", value: 900 }], cost: [{ cloth: 28 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ jewelry: 35 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ ebony: 35 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ iron: 25 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ limestone: 35 }] }
      ]
    },
    Kaltenweiher: {
      key: "Kaltenweiher",
      reward: [{ type: "coin", value: 2500 }, { type: "supply", value: 2500 }],
      sectors: [
        { reward: [{ type: "coin", value: 450 }], cost: [{ limestone: 10 }, { iron: 8 }, { alabaster: 14 }] },
        { reward: [{ type: "supply", value: 450 }], cost: [{ ebony: 8 }, { granite: 14 }, { gold: 10 }] },
        { reward: [{ type: "coin", value: 450 }], cost: [{ cloth: 8 }, { copper: 8 }, { honey: 14 }] }
      ]
    },
    Teufelsfurt: {
      key: "Teufelsfurt",
      reward: [{ type: "coin", value: 3000 }, { type: "supply", value: 3000 }],
      sectors: [
        { reward: [{ type: "coin", value: 450 }], cost: [{ granite: 20 }] },
        { reward: [{ type: "supply", value: 450 }], cost: [{ alabaster: 20 }] },
        { reward: [{ type: "supply", value: 450 }], cost: [{ copper: 20 }] },
        { reward: [{ type: "supply", value: 450 }], cost: [{ gold: 20 }] },
        { reward: [{ type: "coin", value: 450 }], cost: [{ copper: 10 }, { honey: 10 }] }
      ]
    },
    Felssenke: {
      key: "Felssenke",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "supply", value: 900 }], cost: [{ copper: 10 }, { alabaster: 14 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ copper: 14 }, { honey: 12 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ gold: 14 }, { honey: 14 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ granite: 10 }, { gold: 14 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ granite: 14 }, { alabaster: 10 }] }
      ]
    },
    Breturia: {
      key: "Breturia",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 1500 }], cost: [{ honey: 15 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ copper: 25 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ alabaster: 25 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ granite: 22 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ honey: 25 }] }
      ]
    },
    Galgenschlucht: {
      key: "Galgenschlucht",
      reward: [{ type: "coin", value: 4000 }, { type: "supply", value: 4000 }, { type: "medal", value: 10 }],
      sectors: [
        { reward: [{ type: "supply", value: 600 }], cost: [{ stone: 12 }, { jewelry: 12 }, { alabaster: 10 }] },
        { reward: [{ type: "supply", value: 600 }], cost: [{ wine: 12 }, { cloth: 12 }, { honey: 10 }] },
        { reward: [{ type: "supply", value: 600 }], cost: [{ dye: 12 }, { limestone: 12 }, { granite: 10 }] },
        { reward: [{ type: "supply", value: 600 }], cost: [{ marble: 12 }, { iron: 12 }, { gold: 10 }] },
        { reward: [{ type: "supply", value: 600 }], cost: [{ lumber: 12 }, { ebony: 12 }, { copper: 10 }] }
      ]
    },
    Todespass: {
      key: "Todespass",
      reward: [{ type: "coin", value: 4500 }, { type: "supply", value: 4500 }, { type: "medal", value: 15 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ stone: 12 }, { jewelry: 12 }, { copper: 10 }, { gold: 10 }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ wine: 12 }, { cloth: 12 }, { copper: 10 }, { honey: 10 }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ marble: 12 }, { iron: 12 }, { granite: 10 }, { gold: 10 }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ dye: 12 }, { limestone: 12 }, { alabaster: 10 }, { honey: 10 }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ lumber: 12 }, { ebony: 12 }, { alabaster: 10 }, { gold: 10 }]
        },
        {
          reward: [{ type: "supply", value: 900 }],
          cost: [{ stone: 12 }, { iron: 12 }, { granite: 10 }, { alabaster: 10 }]
        }
      ]
    },
    Steilsturz: {
      key: "Steilsturz",
      reward: [{ type: "coin", value: 5000 }, { type: "supply", value: 5000 }, { type: "medal", value: 15 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 1200 }],
          cost: [{ ebony: 12 }, { copper: 10 }, { granite: 10 }, { gold: 10 }]
        },
        {
          reward: [{ type: "supply", value: 1200 }],
          cost: [{ limestone: 12 }, { copper: 10 }, { granite: 10 }, { honey: 10 }]
        },
        {
          reward: [{ type: "supply", value: 1200 }],
          cost: [{ jewelry: 12 }, { copper: 10 }, { alabaster: 10 }, { honey: 10 }]
        },
        {
          reward: [{ type: "supply", value: 1200 }],
          cost: [{ cloth: 12 }, { alabaster: 10 }, { gold: 10 }, { honey: 10 }]
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
          cost: [{ granite: 18 }, { alabaster: 12 }, { honey: 12 }, { glass: 4 }]
        },
        { reward: [{ type: "coin", value: 2000 }], cost: [{ granite: 12 }, { gold: 12 }, { honey: 18 }, { rope: 8 }] },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [{ granite: 12 }, { alabaster: 18 }, { honey: 12 }, { dried_herbs: 8 }]
        },
        { reward: [{ type: "coin", value: 2000 }], cost: [{ copper: 12 }, { granite: 12 }, { gold: 18 }, { salt: 4 }] },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [{ copper: 18 }, { granite: 12 }, { gold: 12 }, { brick: 4 }]
        },
        { reward: [{ type: "coin", value: 2000 }], cost: [{ copper: 12 }, { gold: 18 }, { honey: 12 }, { brick: 4 }] },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [{ copper: 12 }, { alabaster: 18 }, { honey: 12 }, { glass: 4 }]
        },
        {
          reward: [{ type: "coin", value: 2000 }],
          cost: [{ copper: 18 }, { alabaster: 12 }, { gold: 12 }, { salt: 4 }]
        }
      ]
    }
  },
  EarlyMiddleAges: {
    Canturia: {
      key: "Canturia",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "supply", value: 900 }], cost: [{ lumber: 10 }, { dye: 70 }, { cloth: 25 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ marble: 35 }, { wine: 30 }, { ebony: 30 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ stone: 40 }, { iron: 25 }, { jewelry: 30 }] }
      ]
    },
    Breturia: {
      key: "Breturia",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 1500 }], cost: [{ honey: 15 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ copper: 25 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ alabaster: 25 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ granite: 22 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ honey: 25 }] }
      ]
    },
    Veletrites: {
      key: "Veletrites",
      reward: [{ type: "coin", value: 5000 }, { type: "supply", value: 5000 }],
      sectors: [
        { reward: [{ type: "supply", value: 900 }], cost: [{ jewelry: 35 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ iron: 33 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ limestone: 48 }] },
        { reward: [{ type: "supply", value: 900 }], cost: [{ ebony: 50 }] },
        { reward: [{ type: "coin", value: 900 }], cost: [{ cloth: 35 }] }
      ]
    },
    Frathia: {
      key: "Frathia",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "supply", value: 1500 }], cost: [{ marble: 40 }, { copper: 25 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ lumber: 55 }, { granite: 25 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ alabaster: 25 }, { honey: 35 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ wine: 45 }, { gold: 30 }] }
      ]
    },
    Jaims: {
      key: "Jaims",
      reward: [{ type: "coin", value: 15000 }, { type: "supply", value: 15000 }],
      sectors: [
        { reward: [{ type: "coin", value: 3000 }], cost: [{ granite: 25 }, { glass: 15 }] },
        { reward: [{ type: "supply", value: 3000 }], cost: [{ copper: 25 }, { brick: 15 }] },
        { reward: [{ type: "supply", value: 3000 }], cost: [{ gold: 35 }, { rope: 15 }] },
        { reward: [{ type: "supply", value: 3000 }], cost: [{ honey: 20 }, { salt: 15 }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ alabaster: 25 }, { dried_herbs: 20 }] }
      ]
    },
    Mons_Suiry: {
      key: "Mons_Suiry",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 3000 }], cost: [{ salt: 18 }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ brick: 15 }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ rope: 18 }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ glass: 18 }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ dried_herbs: 22 }] }
      ]
    },
    Moravaria: {
      key: "Moravaria",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "supply", value: 1500 }], cost: [{ salt: 6 }, { dried_herbs: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ rope: 14 }, { glass: 8 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ brick: 20 }, { salt: 8 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ brick: 20 }, { salt: 12 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ dried_herbs: 10 }, { glass: 20 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ rope: 8 }, { dried_herbs: 20 }] }
      ]
    }
  },
  LateMiddleAges: {
    Cragshire: {
      key: "Cragshire",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "coin", value: 2000 }], cost: [{ rope: 18 }, { glass: 12 }] },
        { reward: [{ type: "coin", value: 2000 }], cost: [{ brick: 18 }, { glass: 12 }] },
        { reward: [{ type: "supply", value: 2000 }], cost: [{ rope: 12 }, { salt: 18 }] },
        { reward: [{ type: "supply", value: 2000 }], cost: [{ brick: 12 }, { dried_herbs: 18 }] }
      ]
    },
    Cuttingham: {
      key: "Cuttingham",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "coin", value: 2000 }], cost: [{ cloth: 30 }, { alabaster: 35 }, { rope: 35 }] },
        { reward: [{ type: "coin", value: 2000 }], cost: [{ iron: 20 }, { granite: 35 }, { glass: 35 }] },
        { reward: [{ type: "coin", value: 2000 }], cost: [{ jewelry: 25 }, { gold: 45 }, { brick: 35 }] },
        { reward: [{ type: "supply", value: 2000 }], cost: [{ limestone: 35 }, { copper: 35 }, { dried_herbs: 35 }] },
        { reward: [{ type: "supply", value: 2000 }], cost: [{ iron: 25 }, { honey: 30 }, { salt: 35 }] }
      ]
    },
    Eldenborough: {
      key: "Eldenborough",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "coin", value: 2000 }], cost: [{ rope: 20 }, { salt: 15 }] },
        { reward: [{ type: "coin", value: 2000 }], cost: [{ brick: 12 }, { dried_herbs: 25 }] },
        { reward: [{ type: "coin", value: 2000 }], cost: [{ brick: 20 }, { glass: 15 }] },
        { reward: [{ type: "supply", value: 2000 }], cost: [{ rope: 12 }, { salt: 25 }] },
        { reward: [{ type: "supply", value: 2000 }], cost: [{ brick: 12 }, { glass: 25 }] }
      ]
    },
    Spearth: {
      key: "Spearth",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "coin", value: 2500 }], cost: [] },
        { reward: [{ type: "coin", value: 2500 }], cost: [] },
        { reward: [{ type: "coin", value: 2500 }], cost: [] },
        { reward: [{ type: "supply", value: 2500 }], cost: [] },
        { reward: [{ type: "supply", value: 2500 }], cost: [] }
      ]
    },
    Wolvhampton: {
      key: "Wolvhampton",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "coin", value: 3000 }], cost: [{ marble: 25 }] },
        { reward: [{ type: "supply", value: 3000 }], cost: [{ lumber: 20 }, { alabaster: 22 }] },
        { reward: [{ type: "supply", value: 3000 }], cost: [{ wine: 25 }, { copper: 25 }] },
        { reward: [{ type: "coin", value: 3000 }], cost: [{ stone: 40 }, { honey: 15 }] },
        { reward: [{ type: "supply", value: 3000 }], cost: [{ dye: 25 }, { granite: 25 }] }
      ]
    },
    FourGallows: {
      key: "FourGallows",
      reward: [{ type: "coin", value: 10500 }, { type: "supply", value: 10500 }],
      sectors: [
        { reward: [{ type: "supply", value: 3500 }], cost: [] },
        { reward: [{ type: "coin", value: 3500 }], cost: [] },
        { reward: [{ type: "supply", value: 3500 }], cost: [] }
      ]
    },
    Mount_Killmore: {
      key: "Mount_Killmore",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "coin", value: 4000 }], cost: [] },
        { reward: [{ type: "coin", value: 4000 }], cost: [] },
        { reward: [{ type: "coin", value: 4000 }], cost: [] },
        { reward: [{ type: "supply", value: 4000 }], cost: [] },
        { reward: [{ type: "supply", value: 4000 }], cost: [] },
        { reward: [{ type: "supply", value: 4000 }], cost: [] }
      ]
    },
    RavensCreek: {
      key: "RavensCreek",
      reward: [{ type: "coin", value: 7500 }, { type: "supply", value: 7500 }, { type: "medal", value: 25 }],
      sectors: [
        { reward: [{ type: "coin", value: 1000 }], cost: [{ stone: 50 }, { honey: 30 }, { rope: 10 }] },
        { reward: [{ type: "coin", value: 1000 }], cost: [{ wine: 50 }, { gold: 30 }, { salt: 20 }] },
        { reward: [{ type: "supply", value: 1000 }], cost: [{ lumber: 50 }, { copper: 30 }, { dried_herbs: 20 }] },
        { reward: [{ type: "supply", value: 1000 }], cost: [{ dye: 50 }, { alabaster: 30 }, { glass: 20 }] },
        { reward: [{ type: "supply", value: 1000 }], cost: [{ stone: 50 }, { copper: 30 }, { rope: 20 }] },
        { reward: [{ type: "coin", value: 1000 }], cost: [{ marble: 50 }, { granite: 30 }, { brick: 20 }] }
      ]
    },
    Zaldon_on_Sea: {
      key: "Zaldon_on_Sea",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        { type: "medal", value: 15 },
        { type: "good", good: "coffee", value: 20 }
      ],
      sectors: [
        { reward: [{ type: "supply", value: 1500 }], cost: [{ cloth: 50 }, { alabaster: 15 }, { salt: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ jewelry: 50 }, { copper: 30 }, { brick: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ ebony: 50 }, { honey: 30 }, { glass: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ lumber: 50 }, { granite: 30 }, { rope: 10 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ wine: 25 }, { gold: 30 }, { dried_herbs: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ marble: 50 }, { granite: 30 }, { salt: 20 }] }
      ]
    },
    Houndsmoor: {
      key: "Houndsmoor",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        {
          type: "medal",
          value: 15
        },
        { type: "good", good: "paper", value: 20 }
      ],
      sectors: [
        { reward: [{ type: "coin", value: 1000 }], cost: [{ limestone: 50 }, { copper: 30 }, { salt: 20 }] },
        { reward: [{ type: "coin", value: 1000 }], cost: [{ ebony: 50 }, { gold: 30 }, { rope: 20 }] },
        { reward: [{ type: "coin", value: 1000 }], cost: [{ cloth: 50 }, { honey: 30 }, { dried_herbs: 20 }] },
        { reward: [{ type: "coin", value: 1000 }], cost: [{ iron: 50 }, { granite: 30 }, { glass: 20 }] },
        { reward: [{ type: "coin", value: 1000 }], cost: [{ jewelry: 50 }, { honey: 15 }, { brick: 20 }] },
        { reward: [{ type: "coin", value: 1000 }], cost: [{ cloth: 50 }, { alabaster: 30 }, { dried_herbs: 10 }] }
      ]
    },
    Grand_Cap: {
      key: "Grand_Cap",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        {
          type: "medal",
          value: 30
        },
        { type: "diamond", value: 100 }
      ],
      sectors: [
        { reward: [{ type: "coin", value: 2500 }], cost: [{ limestone: 50 }, { alabaster: 30 }, { brick: 20 }] },
        { reward: [{ type: "supply", value: 2500 }], cost: [{ iron: 50 }, { copper: 30 }, { glass: 20 }] },
        { reward: [{ type: "supply", value: 2500 }], cost: [{ wine: 50 }, { granite: 30 }, { dried_herbs: 20 }] },
        { reward: [{ type: "supply", value: 2500 }], cost: [{ marble: 50 }, { gold: 30 }, { salt: 20 }] },
        { reward: [{ type: "coin", value: 2500 }], cost: [{ dye: 50 }, { gold: 30 }, { brick: 20 }] },
        { reward: [{ type: "supply", value: 2500 }], cost: [{ lumber: 50 }, { honey: 30 }, { rope: 20 }] }
      ]
    },
    Northcastle: {
      key: "Northcastle",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        {
          type: "medal",
          value: 25
        },
        { type: "good", good: "porcelain", value: 20 }
      ],
      sectors: [
        { reward: [{ type: "supply", value: 12500 }], cost: [{ cloth: 50 }, { alabaster: 30 }, { brick: 20 }] },
        { reward: [{ type: "supply", value: 12500 }], cost: [{ limestone: 50 }, { copper: 30 }, { glass: 20 }] },
        { reward: [{ type: "supply", value: 1250 }], cost: [{ jewelry: 50 }, { honey: 30 }, { rope: 20 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ iron: 50 }, { granite: 30 }, { dried_herbs: 20 }] },
        { reward: [{ type: "supply", value: 12500 }], cost: [{ ebony: 50 }, { gold: 30 }, { salt: 20 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ dye: 25 }, { alabaster: 30 }, { glass: 20 }] }
      ]
    },
    Queenshope: {
      key: "Queenshope",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        { type: "medal", value: 25 },
        { type: "good", good: "wire", value: 20 }
      ],
      sectors: [
        { reward: [{ type: "coin", value: 1500 }], cost: [{ ebony: 50 }, { honey: 30 }, { rope: 20 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ iron: 50 }, { gold: 30 }, { salt: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ jewelry: 50 }, { granite: 30 }, { dried_herbs: 10 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ limestone: 50 }, { honey: 30 }, { rope: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ cloth: 50 }, { copper: 30 }, { glass: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ stone: 50 }, { alabaster: 15 }, { brick: 20 }] }
      ]
    },
    Ashcrook: {
      key: "Ashcrook",
      reward: [
        { type: "coin", value: 7500 },
        { type: "supply", value: 7500 },
        {
          type: "medal",
          value: 25
        },
        { type: "good", good: "tar", value: 20 }
      ],
      sectors: [
        { reward: [{ type: "coin", value: 1500 }], cost: [{ dye: 25 }, { alabaster: 30 }, { dried_herbs: 20 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ iron: 50 }, { granite: 30 }, { dried_herbs: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ limestone: 50 }, { copper: 30 }, { glass: 20 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ ebony: 50 }, { gold: 30 }, { salt: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ wine: 25 }, { alabaster: 30 }, { brick: 20 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ jewelry: 50 }, { honey: 15 }, { rope: 20 }] }
      ]
    }
  },
  ColonialAge: {
    Narcien: {
      key: "Narcien",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "supply", value: 1000 }], cost: [{ copper: 40 }, { brick: 35 }, { silk: 25 }] },
        { reward: [{ type: "supply", value: 1000 }], cost: [{ honey: 40 }, { rope: 35 }, { brass: 25 }] },
        { reward: [{ type: "coin", value: 1000 }], cost: [{ alabaster: 40 }, { glass: 35 }, { talc_powder: 25 }] },
        { reward: [{ type: "coin", value: 1000 }], cost: [{ granite: 40 }, { glass: 35 }, { brass: 25 }] },
        { reward: [{ type: "supply", value: 1000 }], cost: [{ gold: 60 }, { dried_herbs: 35 }, { talc_powder: 25 }] }
      ]
    },
    Lavignon: {
      key: "Lavignon",
      reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
      sectors: [
        { reward: [{ type: "coin", value: 12500 }], cost: [{ granite: 50 }, { rope: 45 }, { talc_powder: 35 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ honey: 50 }, { brick: 45 }, { brass: 35 }] },
        { reward: [{ type: "supply", value: 12500 }], cost: [{ copper: 50 }, { glass: 45 }, { silk: 35 }] },
        { reward: [{ type: "supply", value: 12500 }], cost: [{ alabaster: 50 }, { salt: 45 }, { gunpowder: 35 }] }
      ]
    },
    Troulope: {
      key: "Troulope",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 1500 }], cost: [{ copper: 55 }, { dried_herbs: 50 }, { basalt: 45 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ alabaster: 55 }, { salt: 50 }, { gunpowder: 45 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ honey: 55 }, { brick: 50 }, { gunpowder: 45 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ gold: 60 }, { rope: 50 }, { silk: 45 }] },
        { reward: [{ type: "supply", value: 1500 }], cost: [{ granite: 55 }, { dried_herbs: 50 }, { basalt: 45 }] },
        { reward: [{ type: "coin", value: 1500 }], cost: [{ gold: 75 }, { salt: 60 }, { basalt: 45 }] }
      ]
    },
    Deuxerres: {
      key: "Deuxerres",
      reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
      sectors: [
        { reward: [{ type: "coin", value: 3500 }], cost: [{ glass: 4 }, { silk: 35 }, { tar: 22 }] },
        { reward: [{ type: "coin", value: 3500 }], cost: [{ brick: 40 }, { brass: 35 }, { porcelain: 22 }] },
        { reward: [{ type: "coin", value: 3500 }], cost: [{ rope: 40 }, { talc_powder: 35 }, { tar: 22 }] },
        { reward: [{ type: "coin", value: 3500 }], cost: [{ salt: 40 }, { gunpowder: 35 }, { wire: 22 }] }
      ]
    },
    Lombardeaux: {
      key: "Lombardeaux",
      reward: [{ type: "good_bonus" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [{ alabaster: 50 }, { dried_herbs: 40 }, { basalt: 35 }, { wire: 28 }]
        },
        { reward: [{ type: "coin", value: 3500 }], cost: [{ copper: 50 }, { glass: 40 }, { silk: 35 }, { tar: 28 }] },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [{ honey: 50 }, { brick: 40 }, { brass: 35 }, { porcelain: 28 }]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [{ granite: 50 }, { rope: 40 }, { talc_powder: 35 }, { porcelain: 28 }]
        }
      ]
    },
    Varseilles: {
      key: "Varseilles",
      reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
      sectors: [
        { reward: [{ type: "coin", value: 3500 }], cost: [{ salt: 28 }, { brass: 22 }, { paper: 42 }, { wire: 22 }] },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [{ glass: 28 }, { gunpowder: 22 }, { coffee: 42 }, { porcelain: 22 }]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [{ brick: 28 }, { silk: 22 }, { porcelain: 42 }, { tar: 22 }]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [{ salt: 28 }, { brass: 22 }, { paper: 22 }, { wire: 42 }]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [{ rope: 28 }, { basalt: 22 }, { paper: 42 }, { coffee: 22 }]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [{ dried_herbs: 28 }, { talc_powder: 22 }, { coffee: 42 }, { tar: 22 }]
        }
      ]
    },
    Pisterrac: {
      key: "Pisterrac",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "supply", value: 3500 }], cost: [{ basalt: 22 }, { brass: 22 }, { coffee: 35 }] },
        { reward: [{ type: "coin", value: 3500 }], cost: [{ silk: 22 }, { gunpowder: 22 }, { wire: 35 }] },
        { reward: [{ type: "coin", value: 3500 }], cost: [{ basalt: 22 }, { silk: 22 }, { paper: 35 }] },
        { reward: [{ type: "supply", value: 3500 }], cost: [{ basalt: 22 }, { gunpowder: 22 }, { tar: 35 }] },
        { reward: [{ type: "coin", value: 3500 }], cost: [{ talc_powder: 22 }, { gunpowder: 22 }, { porcelain: 35 }] }
      ]
    },
    Haulenois: {
      key: "Haulenois",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "coin", value: 3500 }], cost: [{ salt: 28 }, { brass: 28 }, { paper: 50 }, { wire: 28 }] },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [{ rope: 28 }, { talc_powder: 28 }, { paper: 50 }, { porcelain: 28 }]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [{ glass: 28 }, { basalt: 28 }, { coffee: 50 }, { wire: 28 }]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [{ glass: 28 }, { gunpowder: 28 }, { wire: 50 }, { tar: 28 }]
        },
        {
          reward: [{ type: "coin", value: 3500 }],
          cost: [{ brick: 28 }, { silk: 28 }, { paper: 28 }, { coffee: 50 }]
        },
        {
          reward: [{ type: "supply", value: 3500 }],
          cost: [{ dried_herbs: 28 }, { talc_powder: 28 }, { coffee: 28 }, { tar: 50 }]
        }
      ]
    }
  },
  IndustrialAge: {
    Okahe: {
      key: "Okahe",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "supply", value: 100 }], cost: [{ salt: 42 }, { gunpowder: 50 }, { tar: 60 }] },
        { reward: [{ type: "supply", value: 100 }], cost: [{ glass: 42 }, { talc_powder: 50 }, { paper: 60 }] },
        { reward: [{ type: "coin", value: 100 }], cost: [{ rope: 42 }, { talc_powder: 50 }, { wire: 60 }] },
        { reward: [{ type: "coin", value: 100 }], cost: [{ dried_herbs: 42 }, { gunpowder: 50 }, { tar: 60 }] },
        { reward: [{ type: "supply", value: 100 }], cost: [{ rope: 42 }, { gunpowder: 50 }, { wire: 60 }] },
        { reward: [{ type: "coin", value: 100 }], cost: [{ glass: 42 }, { gunpowder: 50 }, { paper: 60 }] }
      ]
    },
    NewCragshire: {
      key: "NewCragshire",
      reward: [{ type: "coin", value: 40000 }, { type: "supply", value: 40000 }],
      sectors: [
        { reward: [{ type: "supply", value: 5000 }], cost: [{ brass: 35 }, { porcelain: 50 }, { tar: 60 }] },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ salt: 32 }, { brass: 35 }, { paper: 60 }, { coffee: 50 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ dried_herbs: 32 }, { silk: 35 }, { paper: 60 }, { porcelain: 50 }]
        },
        { reward: [{ type: "coin", value: 5000 }], cost: [{ silk: 35 }, { coffee: 50 }, { porcelain: 60 }] }
      ]
    },
    Rantford: {
      key: "Rantford",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 6000 }], cost: [{ brass: 47 }, { coffee: 35 }, { tar: 55 }] },
        { reward: [{ type: "coin", value: 6000 }], cost: [{ silk: 47 }, { wire: 55 }, { porcelain: 35 }] },
        { reward: [{ type: "supply", value: 6000 }], cost: [{ talc_powder: 47 }, { coffee: 55 }, { wire: 35 }] },
        { reward: [{ type: "coin", value: 6000 }], cost: [{ basalt: 47 }, { paper: 35 }, { porcelain: 55 }] },
        { reward: [{ type: "coin", value: 6000 }], cost: [{ talc_powder: 47 }, { paper: 55 }, { tar: 35 }] },
        { reward: [{ type: "supply", value: 6000 }], cost: [{ silk: 47 }, { wire: 55 }, { tar: 35 }] }
      ]
    },
    Desperation: {
      key: "Desperation",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ dried_herbs: 32 }, { silk: 35 }, { coffee: 50 }, { wire: 60 }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ dried_herbs: 32 }, { basalt: 35 }, { porcelain: 50 }, { tar: 60 }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ rope: 42 }, { gunpowder: 32 }, { paper: 47 }, { tar: 60 }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ glass: 22 }, { basalt: 40 }, { wire: 50 }, { porcelain: 60 }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ salt: 42 }, { talc_powder: 35 }, { coffee: 60 }, { tar: 47 }]
        },
        { reward: [{ type: "coin", value: 4000 }], cost: [{ brass: 35 }, { paper: 60 }, { coffee: 50 }] }
      ]
    },
    Las_Penas: {
      key: "Las_Penas",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "supply", value: 4000 }], cost: [{ gunpowder: 47 }, { porcelain: 60 }, { fertilizer: 20 }] },
        { reward: [{ type: "coin", value: 4000 }], cost: [{ talc_powder: 47 }, { coffee: 60 }, { textiles: 20 }] },
        { reward: [{ type: "supply", value: 4000 }], cost: [{ brass: 47 }, { wire: 60 }, { whale_oil: 20 }] },
        { reward: [{ type: "coin", value: 4000 }], cost: [{ basalt: 47 }, { porcelain: 60 }, { coke: 20 }] },
        { reward: [{ type: "coin", value: 4000 }], cost: [{ brass: 47 }, { tar: 60 }, { rubber: 20 }] },
        { reward: [{ type: "supply", value: 4000 }], cost: [{ basalt: 47 }, { wire: 60 }, { textiles: 20 }] }
      ]
    },
    DragonCity: {
      key: "DragonCity",
      reward: [{ type: "coin", value: 40000 }, { type: "supply", value: 40000 }],
      sectors: [
        { reward: [{ type: "supply", value: 4000 }], cost: [{ wire: 85 }, { rubber: 65 }] },
        { reward: [{ type: "supply", value: 4000 }], cost: [{ tar: 85 }, { coke: 65 }] },
        { reward: [{ type: "supply", value: 4000 }], cost: [{ coffee: 85 }, { whale_oil: 65 }] },
        { reward: [{ type: "coin", value: 4000 }], cost: [{ porcelain: 85 }, { textiles: 65 }] },
        { reward: [{ type: "supply", value: 4000 }], cost: [{ coffee: 85 }, { coke: 65 }] },
        { reward: [{ type: "coin", value: 4000 }], cost: [{ paper: 85 }, { fertilizer: 65 }] }
      ]
    },
    Garrincton: {
      key: "Garrincton",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ paper: 55 }, { wire: 48 }, { rubber: 30 }, { fertilizer: 25 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ coffee: 55 }, { porcelain: 48 }, { whale_oil: 25 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ paper: 48 }, { porcelain: 55 }, { coke: 25 }, { textiles: 30 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ porcelain: 55 }, { tar: 48 }, { rubber: 25 }, { coke: 30 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ wire: 55 }, { tar: 48 }, { rubber: 30 }, { whale_oil: 25 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ paper: 55 }, { coffee: 48 }, { textiles: 25 }, { whale_oil: 30 }]
        }
      ]
    },
    St_Marque: {
      key: "St_Marque",
      reward: [{ type: "coin", value: 40000 }, { type: "supply", value: 40000 }],
      sectors: [
        { reward: [{ type: "coin", value: 6000 }], cost: [{ basalt: 45 }, { wire: 43 }, { rubber: 40 }] },
        { reward: [{ type: "coin", value: 6000 }], cost: [{ talc_powder: 45 }, { tar: 43 }, { coke: 40 }] },
        { reward: [{ type: "coin", value: 6000 }], cost: [{ brass: 45 }, { porcelain: 43 }, { textiles: 40 }] },
        { reward: [{ type: "coin", value: 6000 }], cost: [{ silk: 45 }, { coffee: 43 }, { whale_oil: 40 }] },
        { reward: [{ type: "supply", value: 6000 }], cost: [{ basalt: 45 }, { paper: 43 }, { fertilizer: 40 }] }
      ]
    },
    Embruniez: {
      key: "Embruniez",
      reward: [{ type: "coin", value: 60000 }, { type: "supply", value: 60000 }, { type: "medal", value: 150 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ coke: 40 }, { textiles: 30 }, { whale_oil: 20 }, { fertilizer: 10 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ rubber: 40 }, { coke: 30 }, { textiles: 20 }, { whale_oil: 10 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ rubber: 30 }, { coke: 20 }, { textiles: 10 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ coke: 40 }, { textiles: 30 }, { whale_oil: 20 }, { fertilizer: 10 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ rubber: 10 }, { textiles: 40 }, { whale_oil: 30 }, { fertilizer: 20 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ rubber: 20 }, { coke: 10 }, { whale_oil: 40 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ rubber: 30 }, { coke: 20 }, { textiles: 10 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ rubber: 40 }, { coke: 30 }, { textiles: 20 }, { whale_oil: 10 }]
        }
      ]
    },
    Gabordeaux: {
      key: "Gabordeaux",
      reward: [{ type: "coin", value: 70000 }, { type: "supply", value: 70000 }, { type: "medal", value: 150 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [{ rubber: 30 }, { coke: 40 }, { textiles: 50 }, { fertilizer: 20 }]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [{ rubber: 20 }, { coke: 30 }, { textiles: 40 }, { whale_oil: 50 }]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [{ rubber: 40 }, { coke: 50 }, { whale_oil: 20 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [{ coke: 20 }, { textiles: 30 }, { whale_oil: 40 }, { fertilizer: 50 }]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [{ rubber: 50 }, { textiles: 20 }, { whale_oil: 30 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [{ rubber: 40 }, { coke: 50 }, { whale_oil: 20 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [{ rubber: 20 }, { coke: 30 }, { textiles: 40 }, { whale_oil: 50 }]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [{ rubber: 30 }, { coke: 40 }, { textiles: 50 }, { fertilizer: 20 }]
        }
      ]
    },
    Ydine: {
      key: "Ydine",
      reward: [{ type: "coin", value: 100000 }, { type: "supply", value: 100000 }, { type: "medal", value: 200 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ rubber: 40 }, { textiles: 50 }, { whale_oil: 60 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ coke: 50 }, { textiles: 30 }, { whale_oil: 40 }, { fertilizer: 60 }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ rubber: 30 }, { textiles: 40 }, { whale_oil: 50 }, { fertilizer: 60 }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ rubber: 50 }, { coke: 30 }, { textiles: 60 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ rubber: 60 }, { coke: 40 }, { whale_oil: 30 }, { fertilizer: 50 }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ rubber: 30 }, { coke: 60 }, { textiles: 40 }, { whale_oil: 50 }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ rubber: 60 }, { coke: 40 }, { whale_oil: 30 }, { fertilizer: 50 }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ coke: 50 }, { textiles: 30 }, { whale_oil: 40 }, { fertilizer: 60 }]
        }
      ]
    },
    Wenoevre: {
      key: "Wenoevre",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ coke: 70 }, { textiles: 60 }, { whale_oil: 50 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ rubber: 70 }, { coke: 60 }, { textiles: 50 }, { whale_oil: 40 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ rubber: 60 }, { coke: 50 }, { textiles: 40 }, { fertilizer: 70 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ rubber: 50 }, { coke: 40 }, { whale_oil: 70 }, { fertilizer: 60 }]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [{ rubber: 40 }, { textiles: 70 }, { whale_oil: 60 }, { fertilizer: 50 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ coke: 70 }, { textiles: 60 }, { whale_oil: 50 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ rubber: 70 }, { textiles: 50 }, { whale_oil: 40 }, { fertilizer: 60 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ rubber: 60 }, { coke: 50 }, { textiles: 40 }, { fertilizer: 70 }]
        }
      ]
    },
    Nevarrone: {
      key: "Nevarrone",
      reward: [{ type: "coin", value: 50000 }, { type: "supply", value: 50000 }, { type: "medal", value: 100 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ rubber: 30 }, { coke: 50 }, { whale_oil: 40 }, { fertilizer: 60 }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ rubber: 40 }, { coke: 60 }, { textiles: 30 }, { whale_oil: 50 }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ rubber: 50 }, { textiles: 40 }, { whale_oil: 60 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ coke: 40 }, { textiles: 60 }, { whale_oil: 30 }, { fertilizer: 50 }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ rubber: 60 }, { textiles: 50 }, { whale_oil: 30 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ rubber: 50 }, { textiles: 40 }, { whale_oil: 60 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "supply", value: 4000 }],
          cost: [{ rubber: 40 }, { coke: 60 }, { textiles: 30 }, { whale_oil: 50 }]
        },
        {
          reward: [{ type: "coin", value: 4000 }],
          cost: [{ rubber: 30 }, { coke: 50 }, { whale_oil: 40 }, { fertilizer: 60 }]
        }
      ]
    },
    SantaCatalina: {
      key: "SantaCatalina",
      reward: [{ type: "coin", value: 60000 }, { type: "supply", value: 60000 }, { type: "medal", value: 100 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ rubber: 20 }, { coke: 30 }, { textiles: 10 }, { whale_oil: 40 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ rubber: 10 }, { coke: 20 }, { whale_oil: 30 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ coke: 10 }, { textiles: 40 }, { whale_oil: 20 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ rubber: 40 }, { textiles: 30 }, { whale_oil: 10 }, { fertilizer: 20 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ rubber: 30 }, { coke: 40 }, { textiles: 20 }, { fertilizer: 10 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ rubber: 20 }, { coke: 30 }, { textiles: 10 }, { whale_oil: 40 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ rubber: 10 }, { coke: 20 }, { whale_oil: 30 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "coin", value: 5000 }],
          cost: [{ coke: 10 }, { textiles: 40 }, { whale_oil: 20 }, { fertilizer: 30 }]
        }
      ]
    },
    Dorango: {
      key: "Dorango",
      reward: [{ type: "coin", value: 70000 }, { type: "supply", value: 70000 }, { type: "medal", value: 100 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [{ rubber: 30 }, { coke: 50 }, { whale_oil: 20 }, { fertilizer: 40 }]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [{ rubber: 40 }, { textiles: 20 }, { whale_oil: 30 }, { fertilizer: 50 }]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [{ rubber: 50 }, { coke: 20 }, { textiles: 30 }, { whale_oil: 40 }]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [{ rubber: 20 }, { coke: 40 }, { textiles: 50 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [{ coke: 30 }, { textiles: 40 }, { whale_oil: 50 }, { fertilizer: 20 }]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [{ rubber: 50 }, { coke: 20 }, { textiles: 30 }, { whale_oil: 40 }]
        },
        {
          reward: [{ type: "supply", value: 6000 }],
          cost: [{ rubber: 20 }, { coke: 40 }, { textiles: 50 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "coin", value: 6000 }],
          cost: [{ coke: 30 }, { textiles: 40 }, { whale_oil: 50 }, { fertilizer: 20 }]
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
          cost: [{ rubber: 30 }, { coke: 20 }, { whale_oil: 10 }, { fertilizer: 5 }]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [{ rubber: 20 }, { coke: 10 }, { textiles: 30 }, { whale_oil: 5 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ rubber: 10 }, { coke: 5 }, { textiles: 20 }, { fertilizer: 30 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ rubber: 5 }, { textiles: 10 }, { whale_oil: 30 }, { fertilizer: 20 }]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [{ rubber: 30 }, { coke: 20 }, { whale_oil: 10 }, { fertilizer: 5 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ coke: 30 }, { textiles: 5 }, { whale_oil: 20 }, { fertilizer: 10 }]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [{ rubber: 20 }, { coke: 10 }, { textiles: 30 }, { whale_oil: 5 }]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [{ rubber: 10 }, { coke: 5 }, { textiles: 20 }, { fertilizer: 30 }]
        }
      ]
    }
  },
  ProgressiveEra: {
    Havre: {
      key: "Havre",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        { reward: [{ type: "coin", value: 7000 }], cost: [{ 1: 50 }, { tar: 25 }] },
        { reward: [{ type: "supply", value: 5000 }], cost: [{ silk: 60 }, { coffee: 25 }] },
        { reward: [{ type: "coin", value: 7000 }], cost: [{ brass: 60 }, { paper: 25 }] },
        { reward: [{ type: "supply", value: 5000 }], cost: [{ gunpowder: 60 }, { wire: 25 }] },
        { reward: [{ type: "coin", value: 7000 }], cost: [{ talc_powder: 60 }, { porcelain: 25 }] }
      ]
    },
    Uxrow: {
      key: "Uxrow",
      reward: [{ type: "coin", value: 75000 }, { type: "supply", value: 25000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ paper: 20 }, { wire: 15 }, { whale_oil: 25 }, { fertilizer: 20 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ coffee: 20 }, { porcelain: 15 }, { rubber: 20 }, { textiles: 25 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ paper: 20 }, { tar: 15 }, { coke: 25 }, { fertilizer: 20 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ wire: 20 }, { porcelain: 15 }, { rubber: 20 }, { whale_oil: 25 }]
        }
      ]
    },
    Gaelford: {
      key: "Gaelford",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "coin", value: 10000 }], cost: [{ wire: 15 }, { tar: 20 }, { coke: 20 }, { textiles: 25 }] },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ coffee: 20 }, { tar: 15 }, { coke: 25 }, { whale_oil: 20 }]
        },
        { reward: [{ type: "supply", value: 7500 }], cost: [{ paper: 15 }, { tar: 20 }, { rubber: 25 }, { coke: 20 }] },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ paper: 15 }, { porcelain: 20 }, { textiles: 20 }, { fertilizer: 25 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ coffee: 15 }, { porcelain: 20 }, { whale_oil: 20 }, { fertilizer: 25 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ coffee: 15 }, { wire: 20 }, { rubber: 25 }, { textiles: 20 }]
        }
      ]
    },
    Omoien: {
      key: "Omoien",
      reward: [{ type: "coin", value: 70000 }, { type: "supply", value: 70000 }],
      sectors: [
        { reward: [{ type: "coin", value: 7000 }], cost: [{ 1: 25 }, { porcelain: 30 }, { coke: 35 }] },
        { reward: [{ type: "supply", value: 5000 }], cost: [{ 1: 25 }, { paper: 30 }, { textiles: 35 }] },
        { reward: [{ type: "coin", value: 7000 }], cost: [{ silk: 25 }, { paper: 30 }, { rubber: 35 }] },
        { reward: [{ type: "supply", value: 5000 }], cost: [{ brass: 25 }, { coffee: 30 }, { textiles: 35 }] },
        { reward: [{ type: "coin", value: 7000 }], cost: [{ gunpowder: 25 }, { coffee: 30 }, { whale_oil: 35 }] },
        { reward: [{ type: "supply", value: 5000 }], cost: [{ silk: 25 }, { porcelain: 30 }, { rubber: 35 }] },
        { reward: [{ type: "coin", value: 7000 }], cost: [{ brass: 25 }, { wire: 30 }, { coke: 35 }] },
        { reward: [{ type: "supply", value: 5000 }], cost: [{ talc_powder: 25 }, { tar: 30 }, { fertilizer: 35 }] },
        { reward: [{ type: "coin", value: 7000 }], cost: [{ gunpowder: 25 }, { tar: 30 }, { whale_oil: 35 }] },
        { reward: [{ type: "coin", value: 7000 }], cost: [{ talc_powder: 25 }, { wire: 30 }, { fertilizer: 35 }] }
      ]
    },
    Kriegreich: {
      key: "Kriegreich",
      reward: [{ type: "good_bonus" }],
      sectors: [
        { reward: [{ type: "coin", value: 12500 }], cost: [{ 1: 20 }, { wire: 30 }, { whale_oil: 35 }] },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ gunpowder: 20 }, { porcelain: 30 }, { textiles: 35 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ silk: 25 }, { tar: 30 }, { coke: 35 }] },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ brass: 20 }, { paper: 30 }, { fertilizer: 35 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ gunpowder: 20 }, { coffee: 30 }, { rubber: 35 }] },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ talc_powder: 20 }, { porcelain: 30 }, { textiles: 35 }]
        },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ 1: 20 }, { wire: 30 }, { whale_oil: 35 }] },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ silk: 20 }, { tar: 30 }, { coke: 35 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ talc_powder: 25 }, { paper: 30 }, { fertilizer: 35 }] },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ brass: 20 }, { coffee: 30 }, { rubber: 35 }] }
      ]
    },
    Sud: {
      key: "Sud",
      reward: [{ type: "coin", value: 125000 }, { type: "medal", value: 150 }],
      sectors: [
        { reward: [{ type: "coin", value: 10000 }], cost: [{ 1: 40 }, { wire: 20 }, { coke: 25 }, { asbestos: 20 }] },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ silk: 45 }, { tar: 20 }, { whale_oil: 25 }, { gasoline: 20 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ brass: 40 }, { porcelain: 20 }, { rubber: 25 }, { machine_parts: 20 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ gunpowder: 40 }, { coffee: 20 }, { textiles: 25 }, { tinplate: 20 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ talc_powder: 45 }, { paper: 20 }, { fertilizer: 25 }, { explosives: 20 }]
        },
        {
          reward: [{ type: "supply", value: 2500 }],
          cost: [{ brass: 40 }, { porcelain: 20 }, { textiles: 25 }, { explosives: 20 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ 1: 40 }, { wire: 20 }, { fertilizer: 25 }, { tinplate: 20 }]
        }
      ]
    },
    Ostrand: {
      key: "Ostrand",
      reward: [{ type: "coin", value: 90000 }, { type: "supply", value: 50000 }],
      sectors: [
        { reward: [{ type: "supply", value: 7500 }], cost: [{ silk: 20 }, { coffee: 30 }, { textiles: 35 }] },
        { reward: [{ type: "coin", value: 10000 }], cost: [{ 1: 20 }, { paper: 30 }, { rubber: 35 }] },
        { reward: [{ type: "coin", value: 10000 }], cost: [{ brass: 20 }, { porcelain: 30 }, { whale_oil: 35 }] },
        { reward: [{ type: "supply", value: 7500 }], cost: [{ gunpowder: 20 }, { wire: 30 }, { coke: 35 }] },
        { reward: [{ type: "supply", value: 7500 }], cost: [{ talc_powder: 20 }, { tar: 30 }, { fertilizer: 35 }] },
        { reward: [{ type: "coin", value: 10000 }], cost: [{ gunpowder: 20 }, { tar: 30 }, { coke: 35 }] }
      ]
    },
    Langenreich: {
      key: "Langenreich",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "supply", value: 7500 }], cost: [{ porcelain: 15 }, { rubber: 30 }, { explosives: 20 }] },
        { reward: [{ type: "coin", value: 10000 }], cost: [{ wire: 15 }, { textiles: 30 }, { tinplate: 20 }] },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ porcelain: 15 }, { whale_oil: 30 }, { machine_parts: 20 }]
        },
        { reward: [{ type: "coin", value: 10000 }], cost: [{ coffee: 15 }, { coke: 30 }, { gasoline: 20 }] },
        { reward: [{ type: "supply", value: 7500 }], cost: [{ tar: 15 }, { fertilizer: 30 }, { asbestos: 20 }] },
        { reward: [{ type: "supply", value: 7500 }], cost: [{ paper: 15 }, { whale_oil: 30 }, { asbestos: 20 }] }
      ]
    },
    Uceria: {
      key: "Uceria",
      reward: [{ type: "coin", value: 50000 }, { type: "supply", value: 50000 }],
      sectors: [
        { reward: [{ type: "coin", value: 7000 }], cost: [{ porcelain: 15 }, { rubber: 30 }, { asbestos: 20 }] },
        { reward: [{ type: "supply", value: 5000 }], cost: [{ coffee: 15 }, { textiles: 30 }, { machine_parts: 20 }] },
        { reward: [{ type: "coin", value: 7000 }], cost: [{ paper: 15 }, { whale_oil: 30 }, { gasoline: 20 }] },
        { reward: [{ type: "supply", value: 5000 }], cost: [{ tar: 15 }, { coke: 30 }, { explosives: 20 }] },
        { reward: [{ type: "coin", value: 7000 }], cost: [{ porcelain: 15 }, { fertilizer: 30 }, { tinplate: 20 }] },
        { reward: [{ type: "supply", value: 5000 }], cost: [{ wire: 15 }, { fertilizer: 30 }, { machine_parts: 20 }] }
      ]
    },
    Gorski: {
      key: "Gorski",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [{ paper: 15 }, { wire: 15 }, { asbestos: 20 }, { machine_parts: 20 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ coffee: 15 }, { wire: 15 }, { gasoline: 20 }, { machine_parts: 20 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ coffee: 15 }, { porcelain: 15 }, { tinplate: 20 }, { explosives: 20 }]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [{ coffee: 15 }, { porcelain: 15 }, { gasoline: 20 }, { tinplate: 20 }]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [{ coffee: 15 }, { tar: 15 }, { asbestos: 20 }, { explosives: 20 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ paper: 15 }, { tar: 15 }, { machine_parts: 20 }, { tinplate: 20 }]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [{ wire: 15 }, { porcelain: 15 }, { asbestos: 20 }, { tinplate: 20 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ paper: 15 }, { tar: 15 }, { gasoline: 20 }, { explosives: 20 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ paper: 15 }, { tar: 15 }, { tinplate: 20 }, { explosives: 20 }]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [{ coffee: 15 }, { tar: 15 }, { gasoline: 20 }, { machine_parts: 20 }]
        },
        {
          reward: [{ type: "coin", value: 7000 }],
          cost: [{ paper: 15 }, { wire: 15 }, { asbestos: 20 }, { gasoline: 20 }]
        },
        {
          reward: [{ type: "supply", value: 5000 }],
          cost: [{ wire: 15 }, { porcelain: 15 }, { machine_parts: 20 }, { explosives: 20 }]
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
          cost: [{ paper: 40 }, { porcelain: 20 }, { textiles: 50 }, { whale_oil: 60 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ coffee: 40 }, { tar: 20 }, { rubber: 50 }, { textiles: 60 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ coffee: 20 }, { wire: 40 }, { coke: 60 }, { fertilizer: 50 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ paper: 20 }, { tar: 40 }, { whale_oil: 50 }, { fertilizer: 60 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ wire: 20 }, { porcelain: 40 }, { rubber: 60 }, { coke: 50 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ coffee: 20 }, { porcelain: 40 }, { coke: 60 }, { whale_oil: 50 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ wire: 40 }, { tar: 20 }, { textiles: 50 }, { fertilizer: 60 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ paper: 20 }, { porcelain: 40 }, { coke: 50 }, { fertilizer: 60 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ porcelain: 20 }, { tar: 40 }, { rubber: 50 }, { whale_oil: 60 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ paper: 40 }, { wire: 20 }, { rubber: 60 }, { fertilizer: 50 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ paper: 20 }, { coffee: 40 }, { coke: 50 }, { textiles: 60 }]
        }
      ]
    },
    Inashu: {
      key: "Inashu",
      reward: [{ type: "coin", value: 75000 }, { type: "supply", value: 75000 }],
      sectors: [
        { reward: [{ type: "supply", value: 7500 }], cost: [{ coffee: 25 }, { rubber: 60 }, { whale_oil: 45 }] },
        { reward: [{ type: "coin", value: 10000 }], cost: [{ tar: 20 }, { textiles: 60 }, { fertilizer: 45 }] },
        { reward: [{ type: "supply", value: 7500 }], cost: [{ paper: 25 }, { rubber: 45 }, { whale_oil: 60 }] },
        { reward: [{ type: "coin", value: 10000 }], cost: [{ wire: 25 }, { coke: 60 }, { fertilizer: 45 }] }
      ]
    },
    Chikigawa: {
      key: "Chikigawa",
      reward: [{ type: "expansion" }],
      sectors: [
        { reward: [{ type: "coin", value: 12500 }], cost: [{ rubber: 65 }, { whale_oil: 40 }, { machine_parts: 30 }] },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ coke: 65 }, { textiles: 40 }, { gasoline: 30 }] },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ textiles: 65 }, { fertilizer: 40 }, { asbestos: 30 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ rubber: 40 }, { coke: 65 }, { explosives: 30 }] },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ whale_oil: 40 }, { fertilizer: 65 }, { tinplate: 30 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ coke: 40 }, { textiles: 65 }, { machine_parts: 30 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ whale_oil: 65 }, { fertilizer: 40 }, { gasoline: 30 }] },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ rubber: 65 }, { textiles: 40 }, { asbestos: 30 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ rubber: 40 }, { whale_oil: 65 }, { asbestos: 30 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ textiles: 65 }, { whale_oil: 40 }, { tinplate: 30 }] },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ whale_oil: 65 }, { fertilizer: 40 }, { machine_parts: 30 }]
        },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ rubber: 65 }, { fertilizer: 40 }, { explosives: 30 }] },
        { reward: [{ type: "supply", value: 10000 }], cost: [{ rubber: 40 }, { fertilizer: 65 }, { explosives: 30 }] }
      ]
    },
    Igujima: {
      key: "Igujima",
      reward: [{ type: "good_bonus", age: "BronzeAge" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ coke: 45 }, { whale_oil: 30 }, { fertilizer: 50 }, { tinplate: 40 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ coke: 30 }, { whale_oil: 45 }, { fertilizer: 50 }, { explosives: 40 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ rubber: 30 }, { coke: 50 }, { textiles: 45 }, { machine_parts: 40 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ rubber: 45 }, { textiles: 30 }, { whale_oil: 50 }, { asbestos: 40 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ textiles: 50 }, { whale_oil: 30 }, { fertilizer: 45 }, { gasoline: 40 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ rubber: 50 }, { textiles: 45 }, { fertilizer: 30 }, { tinplate: 40 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ rubber: 50 }, { coke: 30 }, { fertilizer: 45 }, { explosives: 40 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ rubber: 45 }, { coke: 50 }, { textiles: 30 }, { machine_parts: 40 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ coke: 45 }, { textiles: 50 }, { whale_oil: 30 }, { gasoline: 40 }]
        }
      ]
    },
    Kyushima: {
      key: "Kyushima",
      reward: [
        { type: "good", good: "coffee", value: 25 },
        { type: "good", good: "porcelain", value: 25 },
        { type: "good", good: "paper", value: 25 },
        { type: "good", good: "tar", value: 25 },
        { type: "good", good: "wire", value: 25 }
      ],
      sectors: [
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ porcelain: 30 }, { textiles: 40 }, { fertilizer: 60 }, { ferroconcrete: 20 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ tar: 30 }, { coke: 60 }, { fertilizer: 40 }, { flavorants: 20 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ tar: 30 }, { rubber: 60 }, { coke: 40 }, { flavorants: 20 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ paper: 30 }, { fertilizer: 40 }, { tinplate: 60 }, { packaging: 20 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ coffee: 30 }, { rubber: 40 }, { whale_oil: 60 }, { luxury_materials: 20 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ coffee: 30 }, { rubber: 40 }, { fertilizer: 60 }, { ferroconcrete: 20 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ wire: 30 }, { textiles: 60 }, { whale_oil: 40 }, { convenience_food: 20 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ porcelain: 30 }, { coke: 40 }, { textiles: 60 }, { convenience_food: 20 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ paper: 30 }, { rubber: 60 }, { textiles: 40 }, { packaging: 20 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ wire: 30 }, { coke: 60 }, { whale_oil: 40 }, { luxury_materials: 20 }]
        }
      ]
    },
    Igioka: {
      key: "Igioka",
      reward: [{ type: "coin", value: 115000 }, { type: "supply", value: 115000 }, { type: "medal", value: 250 }],
      sectors: [
        { reward: [{ type: "supply", value: 10000 }], cost: [{ whale_oil: 60 }, { asbestos: 50 }, { flavorants: 30 }] },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ textiles: 60 }, { machine_parts: 50 }, { convenience_food: 30 }]
        },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ rubber: 60 }, { tinplate: 50 }, { flavorants: 30 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ coke: 60 }, { asbestos: 50 }, { luxury_materials: 30 }] },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ coke: 60 }, { explosives: 50 }, { packaging: 30 }] },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ textiles: 60 }, { gasoline: 50 }, { ferroconcrete: 30 }]
        }
      ]
    },
    Igamoto: {
      key: "Igamoto",
      reward: [{ type: "good_bonus", age: "ColonialAge" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ whale_oil: 35 }, { fertilizer: 50 }, { machine_parts: 45 }, { flavorants: 35 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ coke: 50 }, { fertilizer: 35 }, { machine_parts: 45 }, { convenience_food: 35 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ rubber: 50 }, { coke: 35 }, { asbestos: 45 }, { luxury_materials: 35 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ coke: 35 }, { textiles: 50 }, { asbestos: 45 }, { packaging: 35 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ textiles: 35 }, { fertilizer: 50 }, { machine_parts: 45 }, { packaging: 35 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ rubber: 50 }, { fertilizer: 35 }, { explosives: 45 }, { flavorants: 35 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ rubber: 35 }, { whale_oil: 50 }, { gasoline: 45 }, { convenience_food: 35 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ coke: 50 }, { whale_oil: 35 }, { tinplate: 45 }, { luxury_materials: 35 }]
        }
      ]
    },
    Higematsu: {
      key: "Higematsu",
      reward: [{ type: "coin", value: 125000 }, { type: "supply", value: 125000 }, { type: "medal", value: 250 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ machine_parts: 40 }, { explosives: 50 }, { ferroconcrete: 40 }]
        },
        { reward: [{ type: "coin", value: 12500 }], cost: [{ asbestos: 40 }, { tinplate: 50 }, { packaging: 40 }] },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ gasoline: 50 }, { explosives: 40 }, { ferroconcrete: 40 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ asbestos: 50 }, { explosives: 40 }, { luxury_materials: 40 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ gasoline: 40 }, { machine_parts: 50 }, { flavorants: 40 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ tinplate: 40 }, { explosives: 50 }, { convenience_food: 40 }]
        }
      ]
    },
    Kibakuguchi: {
      key: "Kibakuguchi",
      reward: [{ type: "coin", value: 135000 }, { type: "supply", value: 135000 }, { type: "medal", value: 250 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ rubber: 25 }, { tinplate: 55 }, { explosives: 30 }, { luxury_materials: 45 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ fertilizer: 25 }, { gasoline: 55 }, { tinplate: 30 }, { ferroconcrete: 45 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ whale_oil: 25 }, { asbestos: 55 }, { explosives: 30 }, { convenience_food: 45 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ textiles: 25 }, { tinplate: 30 }, { explosives: 55 }, { packaging: 45 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ textiles: 25 }, { machine_parts: 30 }, { tinplate: 55 }, { luxury_materials: 45 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ textiles: 25 }, { gasoline: 30 }, { machine_parts: 55 }, { flavorants: 45 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ rubber: 25 }, { asbestos: 55 }, { tinplate: 30 }, { packaging: 45 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ whale_oil: 25 }, { asbestos: 30 }, { gasoline: 55 }, { ferroconcrete: 45 }]
        }
      ]
    },
    Toimuro: {
      key: "Toimuro",
      reward: [{ type: "coin", value: 150000 }, { type: "supply", value: 150000 }, { type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ gasoline: 35 }, { tinplate: 55 }, { convenience_food: 40 }, { packaging: 50 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ machine_parts: 55 }, { explosives: 35 }, { convenience_food: 40 }, { luxury_materials: 50 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ machine_parts: 55 }, { tinplate: 35 }, { ferroconcrete: 50 }, { packaging: 40 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ gasoline: 55 }, { machine_parts: 35 }, { convenience_food: 50 }, { flavorants: 40 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ asbestos: 35 }, { tinplate: 55 }, { ferroconcrete: 40 }, { luxury_materials: 50 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ asbestos: 55 }, { machine_parts: 35 }, { flavorants: 50 }, { luxury_materials: 40 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ tinplate: 35 }, { explosives: 55 }, { ferroconcrete: 50 }, { flavorants: 40 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ asbestos: 35 }, { gasoline: 55 }, { ferroconcrete: 40 }, { convenience_food: 50 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ asbestos: 55 }, { explosives: 35 }, { convenience_food: 40 }, { flavorants: 50 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ gasoline: 35 }, { explosives: 55 }, { packaging: 50 }, { luxury_materials: 40 }]
        }
      ]
    },
    Hiromaguchi: {
      key: "Hiromaguchi",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ gasoline: 20 }, { tinplate: 50 }, { flavorants: 40 }, { packaging: 20 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ asbestos: 50 }, { explosives: 20 }, { convenience_food: 40 }, { packaging: 20 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ machine_parts: 50 }, { tinplate: 20 }, { packaging: 40 }, { luxury_materials: 20 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ gasoline: 20 }, { machine_parts: 50 }, { ferroconcrete: 40 }, { flavorants: 20 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ asbestos: 50 }, { gasoline: 20 }, { convenience_food: 40 }, { luxury_materials: 20 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ gasoline: 50 }, { tinplate: 20 }, { ferroconcrete: 20 }, { packaging: 40 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ gasoline: 50 }, { machine_parts: 20 }, { flavorants: 20 }, { luxury_materials: 40 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ tinplate: 20 }, { explosives: 50 }, { ferroconcrete: 40 }, { flavorants: 20 }]
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
          cost: [{ fertilizer: 25 }, { explosives: 25 }, { luxury_materials: 25 }]
        },
        { reward: [{ type: "supply", value: 7500 }], cost: [{ textiles: 25 }, { asbestos: 25 }, { packaging: 25 }] },
        { reward: [{ type: "supply", value: 7500 }], cost: [{ whale_oil: 25 }, { asbestos: 25 }, { flavorants: 25 }] },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ whale_oil: 25 }, { machine_parts: 25 }, { ferroconcrete: 25 }]
        },
        { reward: [{ type: "supply", value: 7500 }], cost: [{ fertilizer: 25 }, { gasoline: 25 }, { packaging: 25 }] },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ coke: 25 }, { machine_parts: 25 }, { ferroconcrete: 25 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ textiles: 25 }, { tinplate: 25 }, { convenience_food: 25 }]
        }
      ]
    },
    SotDamLay: {
      key: "SotDamLay",
      reward: [{ type: "coin", value: 150000 }, { type: "supply", value: 150000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [{ coke: 30 }, { whale_oil: 30 }, { asbestos: 25 }, { ferroconcrete: 20 }]
        },
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [{ rubber: 30 }, { coke: 30 }, { gasoline: 25 }, { packaging: 20 }]
        },
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [{ rubber: 30 }, { textiles: 30 }, { explosives: 25 }, { luxury_materials: 20 }]
        },
        {
          reward: [{ type: "supply", value: 12000 }],
          cost: [{ rubber: 30 }, { whale_oil: 30 }, { machine_parts: 25 }, { packaging: 20 }]
        },
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [{ textiles: 30 }, { fertilizer: 30 }, { machine_parts: 25 }, { ferroconcrete: 20 }]
        },
        {
          reward: [{ type: "supply", value: 12000 }],
          cost: [{ coke: 30 }, { textiles: 30 }, { gasoline: 25 }, { packaging: 20 }]
        },
        {
          reward: [{ type: "supply", value: 12000 }],
          cost: [{ textiles: 30 }, { fertilizer: 30 }, { asbestos: 25 }, { packaging: 20 }]
        },
        {
          reward: [{ type: "coin", value: 12000 }],
          cost: [{ coke: 30 }, { whale_oil: 30 }, { tinplate: 25 }, { convenience_food: 20 }]
        }
      ]
    },
    TrungDoi: {
      key: "TrungDoi",
      reward: [{ type: "coin", value: 200000 }, { type: "supply", value: 200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [{ textiles: 40 }, { explosives: 30 }, { luxury_materials: 25 }, { steel: 20 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ fertilizer: 40 }, { tinplate: 30 }, { flavorants: 25 }, { genome_data: 20 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ rubber: 40 }, { explosives: 30 }, { ferroconcrete: 25 }, { industrial_filters: 20 }]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [{ whale_oil: 40 }, { asbestos: 30 }, { convenience_food: 25 }, { semiconductors: 20 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ coke: 40 }, { machine_parts: 30 }, { packaging: 25 }, { steel: 20 }]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [{ coke: 40 }, { gasoline: 30 }, { flavorants: 25 }, { renewable_resources: 20 }]
        }
      ]
    },
    DayDuAo: {
      key: "DayDuAo",
      reward: [{ type: "coin", value: 180000 }, { type: "supply", value: 180000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ rubber: 40 }, { gasoline: 30 }, { tinplate: 30 }, { packaging: 25 }]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [{ whale_oil: 40 }, { gasoline: 30 }, { tinplate: 30 }, { luxury_materials: 25 }]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [{ textiles: 40 }, { tinplate: 30 }, { explosives: 30 }, { flavorants: 25 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ fertilizer: 40 }, { asbestos: 30 }, { explosives: 30 }, { packaging: 25 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ fertilizer: 40 }, { asbestos: 30 }, { explosives: 30 }, { ferroconcrete: 25 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ coke: 40 }, { asbestos: 30 }, { machine_parts: 30 }, { ferroconcrete: 25 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ rubber: 40 }, { gasoline: 30 }, { machine_parts: 30 }, { convenience_food: 25 }]
        }
      ]
    },
    KhayHuyenBayGio: {
      key: "KhayHuyenBayGio",
      reward: [{ type: "good_bonus", age: "IndustrialAge" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [{ asbestos: 40 }, { gasoline: 40 }, { flavorants: 35 }, { renewable_resources: 30 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ asbestos: 40 }, { tinplate: 40 }, { ferroconcrete: 35 }, { semiconductors: 30 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ gasoline: 40 }, { tinplate: 40 }, { convenience_food: 35 }, { genome_data: 30 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ tinplate: 40 }, { explosives: 40 }, { packaging: 35 }, { industrial_filters: 30 }]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [{ gasoline: 40 }, { machine_parts: 40 }, { luxury_materials: 35 }, { semiconductors: 30 }]
        },
        {
          reward: [{ type: "supply", value: 14000 }],
          cost: [{ asbestos: 40 }, { machine_parts: 40 }, { convenience_food: 35 }, { steel: 30 }]
        },
        {
          reward: [{ type: "coin", value: 14000 }],
          cost: [{ asbestos: 40 }, { explosives: 40 }, { flavorants: 35 }, { semiconductors: 30 }]
        }
      ]
    },
    RungTrai: {
      key: "RungTrai",
      reward: [{ type: "diamond", value: 100 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ tinplate: 50 }, { explosives: 50 }, { packaging: 45 }, { genome_data: 40 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ asbestos: 50 }, { explosives: 50 }, { convenience_food: 45 }, { industrial_filters: 40 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ gasoline: 50 }, { tinplate: 50 }, { flavorants: 45 }, { renewable_resources: 40 }]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [{ gasoline: 50 }, { machine_parts: 50 }, { ferroconcrete: 45 }, { steel: 40 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ tinplate: 50 }, { explosives: 50 }, { flavorants: 45 }, { steel: 40 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ machine_parts: 50 }, { explosives: 50 }, { packaging: 45 }, { genome_data: 40 }]
        },
        {
          reward: [{ type: "coin", value: 15000 }],
          cost: [{ tinplate: 50 }, { explosives: 50 }, { luxury_materials: 45 }, { semiconductors: 40 }]
        },
        {
          reward: [{ type: "supply", value: 15000 }],
          cost: [{ asbestos: 50 }, { machine_parts: 50 }, { luxury_materials: 45 }, { semiconductors: 40 }]
        }
      ]
    },
    OngChuCuoiCung: {
      key: "OngChuCuoiCung",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ convenience_food: 40 }, { packaging: 40 }, { semiconductors: 55 }, { industrial_filters: 45 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ ferroconcrete: 30 }, { packaging: 50 }, { renewable_resources: 55 }, { steel: 45 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ flavorants: 50 }, { luxury_materials: 30 }, { steel: 35 }, { genome_data: 65 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ convenience_food: 50 }, { flavorants: 30 }, { steel: 55 }, { industrial_filters: 45 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ ferroconcrete: 50 }, { flavorants: 30 }, { renewable_resources: 45 }, { semiconductors: 55 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ convenience_food: 30 }, { luxury_materials: 50 }, { industrial_filters: 55 }, { genome_data: 45 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [
            { ferroconcrete: 50 },
            { luxury_materials: 30 },
            { renewable_resources: 45 },
            { industrial_filters: 55 }
          ]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ ferroconcrete: 20 }, { flavorants: 60 }, { semiconductors: 45 }, { industrial_filters: 55 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ convenience_food: 30 }, { luxury_materials: 50 }, { renewable_resources: 55 }, { genome_data: 45 }]
        }
      ]
    },
    RungChienDau: {
      key: "RungChienDau",
      reward: [{ type: "good_bonus", age: "IronAge" }],
      sectors: [
        { reward: [{ type: "supply", value: 7500 }], cost: [{ textiles: 25 }, { asbestos: 25 }, { packaging: 25 }] },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ whale_oil: 25 }, { explosives: 25 }, { convenience_food: 25 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ fertilizer: 25 }, { machine_parts: 25 }, { flavorants: 25 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ rubber: 25 }, { tinplate: 25 }, { luxury_materials: 25 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }],
          cost: [{ fertilizer: 25 }, { gasoline: 25 }, { ferroconcrete: 25 }]
        },
        {
          reward: [{ type: "supply", value: 7500 }]
        }
      ]
    },
    PhucKich: {
      key: "PhucKich",
      reward: [{ type: "coin", value: 80000 }, { type: "supply", value: 80000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ rubber: 40 }, { asbestos: 20 }, { tinplate: 40 }, { ferroconcrete: 30 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ textiles: 40 }, { machine_parts: 20 }, { tinplate: 40 }, { packaging: 30 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ fertilizer: 40 }, { gasoline: 40 }, { tinplate: 20 }, { ferroconcrete: 30 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ rubber: 40 }, { gasoline: 20 }, { machine_parts: 40 }, { flavorants: 30 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ whale_oil: 40 }, { machine_parts: 20 }, { explosives: 40 }, { flavorants: 30 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ coke: 40 }, { machine_parts: 20 }, { explosives: 40 }, { convenience_food: 30 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ coke: 40 }, { asbestos: 40 }, { gasoline: 20 }, { luxury_materials: 30 }]
        }
      ]
    },
    GiaiCuuBinhMinh: {
      key: "GiaiCuuBinhMinh",
      reward: [{ type: "coin", value: 60000 }, { type: "supply", value: 60000 }],
      sectors: [
        { reward: [{ type: "supply", value: 10000 }], cost: [{ machine_parts: 20 }, { tinplate: 40 }] },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ coke: 40 }, { textiles: 40 }, { gasoline: 20 }, { explosives: 40 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ rubber: 40 }, { fertilizer: 40 }, { tinplate: 40 }, { explosives: 20 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ rubber: 40 }, { whale_oil: 40 }, { asbestos: 20 }, { explosives: 40 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ textiles: 40 }, { whale_oil: 40 }, { gasoline: 40 }, { tinplate: 20 }]
        },
        {
          reward: [{ type: "supply", value: 10000 }],
          cost: [{ coke: 40 }, { textiles: 40 }, { gasoline: 20 }, { machine_parts: 40 }]
        },
        {
          reward: [{ type: "coin", value: 10000 }],
          cost: [{ rubber: 40 }, { fertilizer: 40 }, { asbestos: 40 }, { machine_parts: 20 }]
        }
      ]
    },
    MauMatDat: {
      key: "MauMatDat",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 11000 }],
          cost: [{ gasoline: 40 }, { explosives: 20 }, { ferroconcrete: 20 }, { packaging: 40 }]
        },
        {
          reward: [{ type: "coin", value: 11000 }],
          cost: [{ machine_parts: 40 }, { tinplate: 20 }, { flavorants: 40 }, { packaging: 20 }]
        },
        {
          reward: [{ type: "supply", value: 11000 }],
          cost: [{ gasoline: 20 }, { machine_parts: 40 }, { convenience_food: 20 }, { packaging: 40 }]
        },
        {
          reward: [{ type: "supply", value: 11000 }],
          cost: [{ asbestos: 20 }, { explosives: 40 }, { ferroconcrete: 40 }, { convenience_food: 20 }]
        },
        {
          reward: [{ type: "coin", value: 11000 }],
          cost: [{ asbestos: 40 }, { gasoline: 20 }, { ferroconcrete: 40 }, { flavorants: 20 }]
        },
        {
          reward: [{ type: "supply", value: 11000 }],
          cost: [{ asbestos: 20 }, { tinplate: 40 }, { convenience_food: 40 }, { luxury_materials: 20 }]
        }
      ]
    },
    DongBangSong: {
      key: "DongBangSong",
      reward: [{ type: "diamond", value: 100 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ asbestos: 60 }, { luxury_materials: 60 }, { genome_data: 60 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ gasoline: 60 }, { luxury_materials: 60 }, { genome_data: 60 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ gasoline: 60 }, { ferroconcrete: 60 }, { industrial_filters: 60 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ asbestos: 60 }, { flavorants: 60 }, { semiconductors: 60 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ machine_parts: 60 }, { packaging: 60 }, { renewable_resources: 60 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ machine_parts: 60 }, { convenience_food: 60 }, { renewable_resources: 60 }]
        },
        {
          reward: [{ type: "supply", value: 12500 }],
          cost: [{ tinplate: 60 }, { luxury_materials: 60 }, { steel: 60 }]
        },
        {
          reward: [{ type: "coin", value: 12500 }],
          cost: [{ explosives: 60 }, { convenience_food: 60 }, { steel: 60 }]
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
          cost: [{ explosives: 50 }, { ferroconcrete: 40 }, { industrial_filters: 30 }, { robots: 25 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ explosives: 50 }, { packaging: 40 }, { genome_data: 30 }, { bionics_data: 25 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ machine_parts: 50 }, { luxury_materials: 40 }, { semiconductors: 30 }, { plastics: 25 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ tinplate: 50 }, { convenience_food: 40 }, { industrial_filters: 30 }, { robots: 25 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ asbestos: 50 }, { ferroconcrete: 40 }, { renewable_resources: 30 }, { gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ machine_parts: 40 }, { flavorants: 40 }, { steel: 30 }, { electromagnets: 25 }]
        }
      ]
    },
    Khail: {
      key: "Khail",
      reward: [{ type: "good_bonus", age: "HighMiddleAges" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ asbestos: 50 }, { flavorants: 40 }, { steel: 30 }, { plastics: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ asbestos: 50 }, { luxury_materials: 40 }, { semiconductors: 30 }, { plastics: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ tinplate: 50 }, { convenience_food: 40 }, { renewable_resources: 30 }, { robots: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ machine_parts: 50 }, { packaging: 40 }, { semiconductors: 30 }, { gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ gasoline: 50 }, { flavorants: 40 }, { steel: 30 }, { electromagnets: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ gasoline: 60 }, { ferroconcrete: 40 }, { industrial_filters: 30 }, { gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ explosives: 50 }, { packaging: 40 }, { genome_data: 30 }, { bionics_data: 25 }]
        }
      ]
    },
    Batif: {
      key: "Batif",
      reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ tinplate: 50 }, { ferroconcrete: 40 }, { genome_data: 30 }, { bionics_data: 25 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ explosives: 50 }, { packaging: 40 }, { steel: 30 }, { plastics: 25 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ asbestos: 50 }, { luxury_materials: 40 }, { industrial_filters: 30 }, { bionics_data: 25 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ gasoline: 50 }, { luxury_materials: 40 }, { renewable_resources: 30 }, { robots: 25 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ tinplate: 50 }, { ferroconcrete: 40 }, { semiconductors: 30 }, { electromagnets: 25 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ machine_parts: 50 }, { convenience_food: 40 }, { genome_data: 30 }, { gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ machine_parts: 50 }, { packaging: 40 }, { renewable_resources: 30 }, { electromagnets: 25 }]
        }
      ]
    },
    Hafar_Al_Karak: {
      key: "Hafar_Al_Karak",
      reward: [{ type: "coin", value: 35000 }, { type: "supply", value: 35000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ gasoline: 75 }, { luxury_materials: 50 }, { renewable_resources: 40 }, { gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ asbestos: 75 }, { flavorants: 50 }, { semiconductors: 40 }, { gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ tinplate: 75 }, { flavorants: 50 }, { semiconductors: 40 }, { plastics: 30 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [] },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ asbestos: 75 }, { convenience_food: 50 }, { industrial_filters: 40 }, { robots: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ gasoline: 75 }, { convenience_food: 50 }, { steel: 40 }, { robots: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ machine_parts: 75 }, { luxury_materials: 50 }, { steel: 40 }, { plastics: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ explosives: 75 }, { flavorants: 50 }, { genome_data: 40 }, { electromagnets: 30 }]
        }
      ]
    },
    Salfah: {
      key: "Salfah",
      reward: [{ type: "good_bonus", age: "ProgressiveEra" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ cloth: 35 }, { whale_oil: 35 }, { ferroconcrete: 40 }, { genome_data: 35 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ iron: 35 }, { coke: 35 }, { flavorants: 40 }, { steel: 35 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ jewelry: 35 }, { rubber: 35 }, { packaging: 40 }, { semiconductors: 35 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ ebony: 35 }, { fertilizer: 35 }, { luxury_materials: 40 }, { renewable_resources: 35 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ cloth: 35 }, { whale_oil: 35 }, { luxury_materials: 40 }, { genome_data: 35 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ ebony: 35 }, { fertilizer: 35 }, { convenience_food: 40 }, { renewable_resources: 35 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ limestone: 35 }, { textiles: 35 }, { ferroconcrete: 40 }, { industrial_filters: 35 }]
        }
      ]
    },
    Al_Shadyra: {
      key: "Al_Shadyra",
      reward: [{ type: "coin", value: 50000 }, { type: "supply", value: 50000 }],
      sectors: [
        { reward: [{ type: "supply", value: 20000 }], cost: [{ wire: 30 }, { explosives: 30 }, { ferroconcrete: 30 }] },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ lumber: 30 }, { paper: 30 }, { tinplate: 30 }, { packaging: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ dye: 30 }, { tar: 30 }, { tinplate: 30 }, { flavorants: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ marble: 30 }, { porcelain: 30 }, { machine_parts: 30 }, { ferroconcrete: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ wine: 30 }, { coffee: 30 }, { gasoline: 30 }, { convenience_food: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ lumber: 30 }, { paper: 30 }, { asbestos: 30 }, { packaging: 30 }]
        }
      ]
    },
    Ain_Al_Khansa: {
      key: "Ain_Al_Khansa",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ gold: 40 }, { machine_parts: 40 }, { renewable_resources: 50 }, { robots: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ honey: 40 }, { asbestos: 40 }, { semiconductors: 50 }, { bionics_data: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ alabaster: 40 }, { gasoline: 40 }, { steel: 50 }, { plastics: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ copper: 40 }, { tinplate: 40 }, { industrial_filters: 50 }, { electromagnets: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ granite: 40 }, { explosives: 40 }, { steel: 50 }, { gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ alabaster: 40 }, { gasoline: 40 }, { genome_data: 50 }, { plastics: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ granite: 40 }, { tinplate: 40 }, { industrial_filters: 50 }, { gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ gold: 40 }, { machine_parts: 40 }, { semiconductors: 50 }, { robots: 40 }]
        }
      ]
    },
    Suqqah: {
      key: "Suqqah",
      reward: [{ type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ glass: 45 }, { silk: 45 }, { ferroconcrete: 45 }, { electromagnets: 60 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ rope: 45 }, { brass: 45 }, { packaging: 45 }, { plastics: 60 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ salt: 45 }, { basalt: 45 }, { flavorants: 45 }, { robots: 60 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ dried_herbs: 45 }, { silk: 45 }, { convenience_food: 45 }, { electromagnets: 60 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ brick: 45 }, { gunpowder: 45 }, { luxury_materials: 45 }, { bionics_data: 60 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ dried_herbs: 45 }, { talc_powder: 45 }, { convenience_food: 45 }, { bionics_data: 60 }]
        }
      ]
    },
    Shayhour: {
      key: "Shayhour",
      reward: [{ type: "coin", value: 250000 }, { type: "supply", value: 250000 }, { type: "medal", value: 400 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ steel: 30 }, { semiconductors: 35 }, { electromagnets: 20 }, { plastics: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ semiconductors: 30 }, { industrial_filters: 35 }, { plastics: 20 }, { robots: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ renewable_resources: 35 }, { genome_data: 30 }, { electromagnets: 20 }, { plastics: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ renewable_resources: 30 }, { steel: 35 }, { electromagnets: 25 }, { gas: 20 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ renewable_resources: 35 }, { semiconductors: 30 }, { electromagnets: 20 }, { gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ industrial_filters: 30 }, { genome_data: 35 }, { robots: 20 }, { bionics_data: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ steel: 30 }, { genome_data: 35 }, { gas: 25 }, { bionics_data: 20 }]
        }
      ]
    },
    Kardad: {
      key: "Kardad",
      reward: [
        { type: "good", good: "bionics_data", value: 20 },
        { type: "good", good: "electromagnets", value: 20 },
        { type: "good", good: "gas", value: 20 },
        { type: "good", good: "plastics", value: 20 },
        { type: "good", good: "robots", value: 20 }
      ],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ renewable_resources: 35 }, { genome_data: 40 }, { gas: 30 }, { plastics: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ steel: 35 }, { industrial_filters: 40 }, { electromagnets: 30 }, { robots: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ semiconductors: 35 }, { industrial_filters: 40 }, { plastics: 30 }, { bionics_data: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ steel: 40 }, { semiconductors: 35 }, { plastics: 25 }, { bionics_data: 30 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ steel: 40 }, { genome_data: 35 }, { electromagnets: 25 }, { robots: 30 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ industrial_filters: 35 }, { genome_data: 40 }, { electromagnets: 30 }, { robots: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ semiconductors: 40 }, { industrial_filters: 35 }, { electromagnets: 30 }, { bionics_data: 25 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ renewable_resources: 35 }, { industrial_filters: 40 }, { gas: 25 }, { bionics_data: 30 }]
        }
      ]
    },
    Qumeira: {
      key: "Qumeira",
      reward: [{ type: "diamond", value: 150 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ steel: 40 }, { genome_data: 45 }, { robots: 30 }, { bionics_data: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ steel: 40 }, { semiconductors: 45 }, { electromagnets: 30 }, { gas: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ renewable_resources: 40 }, { semiconductors: 45 }, { plastics: 30 }, { bionics_data: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ renewable_resources: 40 }, { steel: 45 }, { gas: 30 }, { robots: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ renewable_resources: 45 }, { industrial_filters: 40 }, { plastics: 35 }, { robots: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ industrial_filters: 45 }, { genome_data: 40 }, { gas: 35 }, { bionics_data: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ semiconductors: 40 }, { genome_data: 45 }, { electromagnets: 35 }, { robots: 30 }]
        }
      ]
    },
    Jandahar: {
      key: "Jandahar",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ steel: 50 }, { semiconductors: 45 }, { gas: 35 }, { bionics_data: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ renewable_resources: 50 }, { steel: 45 }, { plastics: 35 }, { bionics_data: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ industrial_filters: 45 }, { genome_data: 50 }, { electromagnets: 35 }, { plastics: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ renewable_resources: 50 }, { genome_data: 45 }, { gas: 40 }, { robots: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ renewable_resources: 45 }, { semiconductors: 50 }, { plastics: 40 }, { bionics_data: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ renewable_resources: 45 }, { semiconductors: 50 }, { electromagnets: 35 }, { robots: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ renewable_resources: 50 }, { industrial_filters: 45 }, { gas: 35 }, { plastics: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ industrial_filters: 50 }, { genome_data: 45 }, { electromagnets: 40 }, { plastics: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ steel: 45 }, { genome_data: 50 }, { gas: 40 }, { robots: 35 }]
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
          cost: [{ ferroconcrete: 50 }, { renewable_resources: 40 }, { gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ convenience_food: 50 }, { industrial_filters: 40 }, { robots: 30 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ luxury_materials: 50 }, { semiconductors: 40 }, { plastics: 30 }]
        },
        { reward: [{ type: "coin", value: 25000 }], cost: [{ flavorants: 40 }, { steel: 40 }, { electromagnets: 30 }] },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ packaging: 50 }, { genome_data: 40 }, { bionics_data: 30 }]
        },
        { reward: [{ type: "coin", value: 25000 }], cost: [{ flavorants: 50 }, { semiconductors: 40 }, { gas: 30 }] },
        { reward: [{ type: "coin", value: 25000 }], cost: [{ ferroconcrete: 50 }, { steel: 40 }, { robots: 30 }] },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ luxury_materials: 50 }, { industrial_filters: 40 }, { electromagnets: 30 }]
        }
      ]
    },
    Villabaja: {
      key: "Villabaja",
      reward: [{ type: "coin", value: 150000 }, { type: "supply", value: 230000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ ferroconcrete: 60 }, { packaging: 25 }, { semiconductors: 40 }, { gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ flavorants: 25 }, { luxury_materials: 50 }, { steel: 40 }, { gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ ferroconcrete: 25 }, { packaging: 50 }, { industrial_filters: 40 }, { bionics_data: 30 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ flavorants: 50 }, { luxury_materials: 25 }, { genome_data: 40 }, { electromagnets: 30 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ convenience_food: 50 }, { packaging: 25 }, { genome_data: 40 }, { robots: 30 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ convenience_food: 25 }, { flavorants: 50 }, { renewable_resources: 40 }, { plastics: 30 }]
        }
      ]
    },
    Itabarai: {
      key: "Itabarai",
      reward: [{ type: "coin", value: 160000 }, { type: "supply", value: 220000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ ferroconcrete: 25 }, { packaging: 50 }, { renewable_resources: 40 }, { plastics: 30 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ ferroconcrete: 50 }, { luxury_materials: 25 }, { genome_data: 40 }, { bionics_data: 30 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ ferroconcrete: 25 }, { luxury_materials: 50 }, { renewable_resources: 40 }, { bionics_data: 30 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ ferroconcrete: 50 }, { luxury_materials: 25 }, { semiconductors: 40 }, { electromagnets: 30 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ convenience_food: 25 }, { packaging: 50 }, { renewable_resources: 40 }, { electromagnets: 30 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ convenience_food: 50 }, { flavorants: 25 }, { genome_data: 40 }, { gas: 30 }]
        }
      ]
    },
    Bajatai: {
      key: "Bajatai",
      reward: [{ type: "good_bonus", age: "EarlyMiddleAges" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ flavorants: 75 }, { semiconductors: 50 }, { gas: 40 }, { smart_materials: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ luxury_materials: 75 }, { steel: 50 }, { plastics: 40 }, { nutrition_research: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ flavorants: 75 }, { semiconductors: 50 }, { plastics: 40 }, { translucent_concrete: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ convenience_food: 75 }, { steel: 50 }, { robots: 40 }, { preservatives: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ convenience_food: 75 }, { industrial_filters: 50 }, { robots: 40 }, { papercrete: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ packaging: 75 }, { industrial_filters: 50 }, { bionics_data: 40 }, { nutrition_research: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ flavorants: 75 }, { genome_data: 50 }, { electromagnets: 40 }, { preservatives: 30 }]
        }
      ]
    },
    Villariba: {
      key: "Villariba",
      reward: [{ type: "coin", value: 170000 }, { type: "supply", value: 210000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ ferroconcrete: 30 }, { luxury_materials: 25 }, { steel: 30 }, { electromagnets: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ convenience_food: 25 }, { packaging: 30 }, { semiconductors: 30 }, { robots: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ ferroconcrete: 25 }, { luxury_materials: 30 }, { renewable_resources: 30 }, { plastics: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ convenience_food: 30 }, { packaging: 25 }, { renewable_resources: 30 }, { bionics_data: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ ferroconcrete: 25 }, { flavorants: 30 }, { steel: 30 }, { gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ convenience_food: 30 }, { packaging: 25 }, { industrial_filters: 30 }, { bionics_data: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ ferroconcrete: 30 }, { flavorants: 25 }, { industrial_filters: 30 }, { plastics: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ convenience_food: 25 }, { packaging: 30 }, { genome_data: 30 }, { robots: 30 }]
        }
      ]
    },
    Rio_Roxo: {
      key: "Rio_Roxo",
      reward: [{ type: "good", age: "Tomorrow", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ convenience_food: 40 }, { genome_data: 30 }, { renewable_resources: 35 }, { electromagnets: 20 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ luxury_materials: 40 }, { renewable_resources: 35 }, { semiconductors: 30 }, { gas: 20 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ flavorants: 40 }, { renewable_resources: 30 }, { steel: 35 }, { robots: 20 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ ferroconcrete: 40 }, { industrial_filters: 35 }, { steel: 30 }, { plastics: 20 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ convenience_food: 40 }, { genome_data: 30 }, { industrial_filters: 35 }, { electromagnets: 20 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ ferroconcrete: 40 }, { genome_data: 35 }, { steel: 30 }, { plastics: 20 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ luxury_materials: 40 }, { genome_data: 35 }, { semiconductors: 30 }, { gas: 20 }]
        },
        {
          reward: [{ type: "supply", value: 25000 }],
          cost: [{ packaging: 40 }, { industrial_filters: 30 }, { semiconductors: 35 }, { bionics_data: 20 }]
        }
      ]
    },
    Sierra_Torrido: {
      key: "Sierra_Torrido",
      reward: [{ type: "coin", value: 550000 }, { type: "supply", value: 600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ convenience_food: 50 }, { genome_data: 40 }, { plastics: 25 }, { translucent_concrete: 20 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ ferroconcrete: 50 }, { industrial_filters: 40 }, { electromagnets: 25 }, { smart_materials: 20 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ luxury_materials: 50 }, { industrial_filters: 40 }, { gas: 25 }, { nutrition_research: 20 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ convenience_food: 50 }, { semiconductors: 40 }, { bionics_data: 25 }, { preservatives: 20 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ flavorants: 50 }, { steel: 40 }, { plastics: 25 }, { nutrition_research: 20 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ packaging: 50 }, { steel: 40 }, { gas: 25 }, { translucent_concrete: 20 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ luxury_materials: 50 }, { renewable_resources: 40 }, { robots: 25 }, { papercrete: 20 }]
        }
      ]
    },
    Santa_Nerea: {
      key: "Santa_Nerea",
      reward: [{ type: "supply", value: 11100000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ renewable_resources: 45 }, { semiconductors: 30 }, { steel: 45 }, { bionics_data: 30 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ renewable_resources: 30 }, { semiconductors: 45 }, { steel: 45 }, { electromagnets: 30 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ renewable_resources: 45 }, { semiconductors: 45 }, { steel: 30 }, { robots: 30 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ genome_data: 45 }, { industrial_filters: 45 }, { renewable_resources: 30 }, { plastics: 30 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ genome_data: 30 }, { industrial_filters: 45 }, { semiconductors: 45 }, { bionics_data: 30 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ genome_data: 45 }, { industrial_filters: 30 }, { semiconductors: 45 }, { electromagnets: 30 }]
        }
      ]
    },
    La_Huega: {
      key: "La_Huega",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ bionics_data: 20 }, { electromagnets: 35 }, { plastics: 30 }, { robots: 25 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ electromagnets: 30 }, { gas: 35 }, { plastics: 25 }, { robots: 20 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ bionics_data: 35 }, { electromagnets: 25 }, { gas: 30 }, { plastics: 20 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ bionics_data: 30 }, { electromagnets: 20 }, { gas: 25 }, { robots: 35 }]
        },
        { reward: [{ type: "coin", value: 35000 }], cost: [{ bionics_data: 25 }, { gas: 20 }, { plastics: 35 }] },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ bionics_data: 20 }, { electromagnets: 35 }, { plastics: 30 }, { robots: 25 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ electromagnets: 30 }, { gas: 35 }, { plastics: 25 }, { robots: 20 }]
        }
      ]
    },
    Jamenez: {
      key: "Jamenez",
      reward: [{ type: "good", age: "Tomorrow", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ steel: 40 }, { electromagnets: 35 }, { robots: 30 }, { translucent_concrete: 25 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ semiconductors: 40 }, { bionics_data: 30 }, { plastics: 35 }, { smart_materials: 25 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ renewable_resources: 40 }, { bionics_data: 35 }, { plastics: 30 }, { nutrition_research: 25 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ industrial_filters: 40 }, { electromagnets: 30 }, { robots: 35 }, { papercrete: 25 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ genome_data: 40 }, { electromagnets: 30 }, { robots: 35 }, { preservatives: 25 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ genome_data: 40 }, { bionics_data: 35 }, { electromagnets: 30 }, { preservatives: 25 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ industrial_filters: 40 }, { gas: 30 }, { plastics: 35 }, { papercrete: 25 }]
        }
      ]
    },
    Falsa_Cruz: {
      key: "Falsa_Cruz",
      reward: [{ type: "coin", value: 770000 }, { type: "supply", value: 430000 }, { type: "medal", value: 500 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ steel: 35 }, { bionics_data: 35 }, { robots: 35 }, { preservatives: 30 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ steel: 35 }, { plastics: 35 }, { robots: 35 }, { nutrition_research: 30 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ renewable_resources: 35 }, { bionics_data: 35 }, { plastics: 35 }, { papercrete: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ genome_data: 35 }, { electromagnets: 35 }, { gas: 35 }, { smart_materials: 30 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ industrial_filters: 35 }, { gas: 35 }, { robots: 35 }, { translucent_concrete: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ steel: 35 }, { plastics: 35 }, { robots: 35 }, { smart_materials: 30 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ renewable_resources: 35 }, { electromagnets: 35 }, { robots: 35 }, { translucent_concrete: 30 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ genome_data: 35 }, { bionics_data: 35 }, { gas: 35 }, { nutrition_research: 30 }]
        }
      ]
    },
    Desierto_de_la_Muerte: {
      key: "Desierto_de_la_Muerte",
      reward: [{ type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ bionics_data: 50 }, { plastics: 45 }, { preservatives: 35 }, { smart_materials: 40 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ gas: 50 }, { robots: 45 }, { papercrete: 40 }, { preservatives: 35 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ electromagnets: 45 }, { gas: 50 }, { nutrition_research: 35 }, { papercrete: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ bionics_data: 45 }, { robots: 50 }, { papercrete: 35 }, { translucent_concrete: 40 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ gas: 45 }, { plastics: 50 }, { nutrition_research: 40 }, { smart_materials: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ electromagnets: 50 }, { plastics: 45 }, { preservatives: 40 }, { translucent_concrete: 35 }]
        }
      ]
    },
    Sao_Malvado: {
      key: "Sao_Malvado",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ electromagnets: 60 }, { robots: 45 }, { nutrition_research: 40 }, { smart_materials: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ electromagnets: 60 }, { gas: 45 }, { papercrete: 35 }, { preservatives: 40 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ gas: 60 }, { robots: 45 }, { preservatives: 35 }, { translucent_concrete: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ bionics_data: 45 }, { robots: 60 }, { nutrition_research: 35 }, { papercrete: 40 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ bionics_data: 60 }, { plastics: 45 }, { nutrition_research: 35 }, { smart_materials: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ bionics_data: 45 }, { plastics: 60 }, { smart_materials: 40 }, { translucent_concrete: 35 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ plastics: 45 }, { robots: 60 }, { preservatives: 40 }, { smart_materials: 35 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ bionics_data: 60 }, { gas: 45 }, { nutrition_research: 40 }, { papercrete: 35 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ electromagnets: 45 }, { gas: 60 }, { preservatives: 35 }, { translucent_concrete: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ gas: 45 }, { plastics: 60 }, { papercrete: 40 }, { translucent_concrete: 35 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ bionics_data: 45 }, { electromagnets: 60 }, { preservatives: 35 }, { smart_materials: 40 }]
        },
        {
          reward: [{ type: "supply", value: 20000 }],
          cost: [{ gas: 60 }, { robots: 45 }, { nutrition_research: 35 }, { translucent_concrete: 40 }]
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
          cost: [{ genome_data: 55 }, { robots: 45 }, { translucent_concrete: 35 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ industrial_filters: 55 }, { plastics: 45 }, { smart_materials: 35 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ steel: 55 }, { electromagnets: 45 }, { nutrition_research: 35 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ semiconductors: 55 }, { plastics: 45 }, { preservatives: 35 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ industrial_filters: 55 }, { bionics_data: 45 }, { smart_materials: 35 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ renewable_resources: 55 }, { gas: 45 }, { papercrete: 35 }]
        }
      ]
    },
    Esan_Ewu: {
      key: "Esan_Ewu",
      reward: [{ type: "good", age: "TheFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ genome_data: 60 }, { robots: 45 }, { translucent_concrete: 35 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ steel: 60 }, { electromagnets: 45 }, { nutrition_research: 35 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ semiconductors: 60 }, { plastics: 45 }, { preservatives: 35 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ renewable_resources: 60 }, { gas: 45 }, { papercrete: 35 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ industrial_filters: 60 }, { bionics_data: 45 }, { smart_materials: 35 }]
        }
      ]
    },
    Omogba: {
      key: "Omogba",
      reward: [{ type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ genome_data: 30 }, { renewable_resources: 55 }, { plastics: 45 }, { preservatives: 35 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ industrial_filters: 30 }, { semiconductors: 55 }, { gas: 45 }, { nutrition_research: 35 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ renewable_resources: 55 }, { steel: 30 }, { bionics_data: 45 }, { translucent_concrete: 35 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ semiconductors: 30 }, { steel: 55 }, { electromagnets: 45 }, { smart_materials: 35 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ genome_data: 55 }, { renewable_resources: 30 }, { gas: 45 }, { papercrete: 35 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ genome_data: 55 }, { renewable_resources: 30 }, { robots: 45 }, { translucent_concrete: 35 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ genome_data: 30 }, { industrial_filters: 55 }, { bionics_data: 45 }, { smart_materials: 35 }]
        }
      ]
    },
    Owopele: {
      key: "Owopele",
      reward: [{ type: "good_bonus", age: "LateMiddleAges" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ industrial_filters: 60 }, { robots: 50 }, { nutrition_research: 50 }, { purified_water: 25 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ steel: 60 }, { electromagnets: 50 }, { preservatives: 50 }, { algae: 25 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ renewable_resources: 60 }, { gas: 50 }, { smart_materials: 50 }, { biogeochemical_data: 25 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ semiconductors: 60 }, { plastics: 50 }, { papercrete: 50 }, { nanoparticles: 25 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ semiconductors: 60 }, { plastics: 50 }, { papercrete: 50 }, { biogeochemical_data: 25 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ steel: 60 }, { bionics_data: 50 }, { translucent_concrete: 50 }, { purified_water: 25 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ industrial_filters: 60 }, { gas: 50 }, { nutrition_research: 50 }, { superconductors: 25 }]
        },
        {
          reward: [{ type: "supply", value: 35000 }],
          cost: [{ genome_data: 60 }, { robots: 50 }, { preservatives: 50 }, { algae: 25 }]
        }
      ]
    },
    Jak: {
      key: "Jak",
      reward: [{ type: "coin", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ genome_data: 55 }, { electromagnets: 35 }, { robots: 35 }, { papercrete: 35 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ industrial_filters: 55 }, { bionics_data: 35 }, { electromagnets: 35 }, { preservatives: 35 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ steel: 55 }, { gas: 35 }, { plastics: 35 }, { translucent_concrete: 35 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ genome_data: 55 }, { bionics_data: 35 }, { electromagnets: 35 }, { smart_materials: 35 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ renewable_resources: 55 }, { gas: 35 }, { plastics: 35 }, { nutrition_research: 35 }]
        },
        {
          reward: [{ type: "coin", value: 20000 }],
          cost: [{ semiconductors: 55 }, { bionics_data: 35 }, { robots: 35 }, { preservatives: 35 }]
        }
      ]
    },
    Pala: {
      key: "Pala",
      reward: [{ type: "good", age: "TheFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ steel: 55 }, { electromagnets: 35 }, { plastics: 35 }, { translucent_concrete: 40 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ semiconductors: 55 }, { bionics_data: 35 }, { robots: 35 }, { papercrete: 40 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ genome_data: 55 }, { electromagnets: 35 }, { robots: 35 }, { smart_materials: 40 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ semiconductors: 55 }, { bionics_data: 35 }, { robots: 35 }, { papercrete: 40 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ industrial_filters: 55 }, { electromagnets: 35 }, { gas: 35 }, { preservatives: 40 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ renewable_resources: 55 }, { electromagnets: 35 }, { gas: 35 }, { smart_materials: 40 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ steel: 55 }, { plastics: 35 }, { robots: 35 }, { nutrition_research: 40 }]
        }
      ]
    },
    Kolabourg: {
      key: "Kolabourg",
      reward: [{ type: "coin", value: 300000 }, { type: "supply", value: 800000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ renewable_resources: 50 }, { semiconductors: 50 }, { papercrete: 40 }, { smart_materials: 50 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ industrial_filters: 50 }, { renewable_resources: 50 }, { papercrete: 40 }, { preservatives: 50 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ semiconductors: 50 }, { steel: 50 }, { nutrition_research: 40 }, { preservatives: 50 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [
            { industrial_filters: 50 },
            { renewable_resources: 50 },
            { nutrition_research: 50 },
            { translucent_concrete: 40 }
          ]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ genome_data: 50 }, { steel: 50 }, { preservatives: 40 }, { translucent_concrete: 50 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ genome_data: 50 }, { industrial_filters: 50 }, { papercrete: 50 }, { smart_materials: 40 }]
        }
      ]
    },
    Bontaville: {
      key: "Bontaville",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ nutrition_research: 60 }, { papercrete: 40 }, { preservatives: 50 }, { nanoparticles: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { nutrition_research: 60 },
            { smart_materials: 50 },
            { translucent_concrete: 40 },
            { purified_water: 25 }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [
            { nutrition_research: 40 },
            { preservatives: 60 },
            { translucent_concrete: 50 },
            { superconductors: 25 }
          ]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ papercrete: 50 }, { preservatives: 40 }, { translucent_concrete: 60 }, { algae: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ nutrition_research: 50 }, { papercrete: 60 }, { smart_materials: 40 }, { biogeochemical_data: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ preservatives: 40 }, { smart_materials: 60 }, { translucent_concrete: 50 }, { nanoparticles: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ papercrete: 40 }, { preservatives: 50 }, { smart_materials: 60 }, { algae: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ papercrete: 50 }, { smart_materials: 40 }, { translucent_concrete: 60 }, { superconductors: 25 }]
        }
      ]
    },
    Botuku: {
      key: "Botuku",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ electromagnets: 40 }, { plastics: 40 }, { nutrition_research: 50 }, { purified_water: 25 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ gas: 40 }, { robots: 40 }, { preservatives: 50 }, { biogeochemical_data: 25 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ bionics_data: 40 }, { plastics: 40 }, { translucent_concrete: 50 }, { purified_water: 25 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ plastics: 40 }, { robots: 40 }, { nutrition_research: 50 }, { purified_water: 25 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ electromagnets: 40 }, { gas: 40 }, { papercrete: 50 }, { nanoparticles: 25 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ bionics_data: 40 }, { robots: 40 }, { preservatives: 50 }, { superconductors: 25 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ electromagnets: 40 }, { gas: 40 }, { smart_materials: 50 }, { biogeochemical_data: 25 }]
        }
      ]
    },
    Kalabuye: {
      key: "Kalabuye",
      reward: [{ type: "medal", value: 2000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [{ plastics: 40 }, { preservatives: 50 }, { translucent_concrete: 50 }, { nanoparticles: 30 }]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [{ robots: 40 }, { papercrete: 50 }, { smart_materials: 50 }, { purified_water: 30 }]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [{ bionics_data: 40 }, { smart_materials: 50 }, { translucent_concrete: 50 }, { algae: 30 }]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [{ bionics_data: 40 }, { papercrete: 50 }, { preservatives: 50 }, { superconductors: 30 }]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [{ electromagnets: 40 }, { nutrition_research: 50 }, { translucent_concrete: 50 }, { algae: 30 }]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [{ gas: 40 }, { nutrition_research: 50 }, { translucent_concrete: 50 }, { biogeochemical_data: 30 }]
        }
      ]
    },
    Bisoraba: {
      key: "Bisoraba",
      reward: [{ type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [{ preservatives: 50 }, { smart_materials: 60 }, { algae: 35 }, { nanoparticles: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ papercrete: 60 }, { translucent_concrete: 50 }, { biogeochemical_data: 40 }, { purified_water: 35 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ preservatives: 60 }, { smart_materials: 50 }, { algae: 35 }, { superconductors: 40 }]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [{ smart_materials: 60 }, { translucent_concrete: 50 }, { algae: 40 }, { nanoparticles: 35 }]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [{ nutrition_research: 50 }, { preservatives: 60 }, { nanoparticles: 35 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { nutrition_research: 60 },
            { smart_materials: 50 },
            { biogeochemical_data: 35 },
            { superconductors: 40 }
          ]
        },
        {
          reward: [{ type: "coin", value: 55000 }],
          cost: [{ papercrete: 50 }, { translucent_concrete: 60 }, { nanoparticles: 40 }, { superconductors: 35 }]
        }
      ]
    },
    Fort_Buntu: {
      key: "Fort_Buntu",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ preservatives: 60 }, { smart_materials: 50 }, { algae: 40 }, { nanoparticles: 35 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ papercrete: 60 }, { translucent_concrete: 50 }, { algae: 35 }, { superconductors: 40 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ papercrete: 60 }, { translucent_concrete: 50 }, { purified_water: 35 }, { superconductors: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [
            { preservatives: 50 },
            { translucent_concrete: 60 },
            { biogeochemical_data: 40 },
            { superconductors: 35 }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ nutrition_research: 60 }, { preservatives: 50 }, { biogeochemical_data: 35 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nutrition_research: 50 }, { smart_materials: 60 }, { purified_water: 35 }, { superconductors: 40 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ nutrition_research: 60 }, { papercrete: 50 }, { biogeochemical_data: 35 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ nutrition_research: 50 }, { papercrete: 60 }, { nanoparticles: 35 }, { superconductors: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nutrition_research: 60 }, { preservatives: 50 }, { algae: 35 }, { nanoparticles: 40 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ papercrete: 50 }, { smart_materials: 60 }, { biogeochemical_data: 40 }, { nanoparticles: 35 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ papercrete: 60 }, { smart_materials: 50 }, { algae: 40 }, { biogeochemical_data: 35 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ preservatives: 60 }, { smart_materials: 50 }, { algae: 40 }, { biogeochemical_data: 35 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nutrition_research: 60 }, { papercrete: 50 }, { biogeochemical_data: 40 }, { superconductors: 35 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ smart_materials: 60 }, { translucent_concrete: 50 }, { algae: 35 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { nutrition_research: 50 },
            { translucent_concrete: 60 },
            { nanoparticles: 40 },
            { purified_water: 35 }
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
          cost: [{ bionics_data: 60 }, { papercrete: 50 }, { superconductors: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ robots: 60 }, { smart_materials: 50 }, { nanoparticles: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ electromagnets: 60 }, { translucent_concrete: 50 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ bionics_data: 60 }, { papercrete: 50 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ plastics: 60 }, { nutrition_research: 50 }, { superconductors: 40 }]
        },
        { reward: [{ type: "supply", value: 40000 }], cost: [{ gas: 60 }, { smart_materials: 50 }, { algae: 40 }] },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ robots: 60 }, { preservatives: 50 }, { nanoparticles: 40 }]
        }
      ]
    },
    Iluliaq: {
      key: "Iluliaq",
      reward: [{ type: "medal", value: 3000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ electromagnets: 65 }, { papercrete: 50 }, { superconductors: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ robots: 65 }, { translucent_concrete: 50 }, { biogeochemical_data: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ gas: 65 }, { smart_materials: 50 }, { nanoparticles: 40 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ bionics_data: 65 }, { nutrition_research: 50 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ plastics: 65 }, { translucent_concrete: 50 }, { algae: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ electromagnets: 65 }, { preservatives: 50 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ plastics: 65 }, { translucent_concrete: 50 }, { nanoparticles: 40 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ gas: 65 }, { nutrition_research: 50 }, { biogeochemical_data: 40 }]
        }
      ]
    },
    Aurora_s_Dale: {
      key: "Aurora_s_Dale",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1400000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ bionics_data: 35 }, { robots: 35 }, { papercrete: 45 }, { biogeochemical_data: 45 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ gas: 35 }, { plastics: 35 }, { smart_materials: 45 }, { purified_water: 45 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ gas: 35 }, { robots: 35 }, { preservatives: 45 }, { algae: 45 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ electromagnets: 35 }, { plastics: 35 }, { nutrition_research: 45 }, { algae: 45 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ gas: 35 }, { robots: 35 }, { preservatives: 45 }, { biogeochemical_data: 45 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ electromagnets: 35 }, { gas: 35 }, { smart_materials: 45 }, { nanoparticles: 45 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ bionics_data: 35 }, { gas: 35 }, { translucent_concrete: 45 }, { purified_water: 45 }]
        }
      ]
    },
    Arctic_Horizon: {
      key: "Arctic_Horizon",
      reward: [{ type: "good", age: "ArcticFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ bionics_data: 30 }, { gas: 50 }, { smart_materials: 50 }, { algae: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ gas: 30 }, { plastics: 50 }, { papercrete: 50 }, { biogeochemical_data: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ electromagnets: 30 }, { robots: 50 }, { preservatives: 50 }, { superconductors: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ plastics: 50 }, { robots: 30 }, { preservatives: 50 }, { nanoparticles: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ electromagnets: 50 }, { plastics: 30 }, { nutrition_research: 50 }, { biogeochemical_data: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ bionics_data: 50 }, { robots: 30 }, { smart_materials: 50 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ gas: 30 }, { robots: 50 }, { translucent_concrete: 50 }, { algae: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ electromagnets: 50 }, { gas: 30 }, { papercrete: 50 }, { purified_water: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ electromagnets: 30 }, { gas: 50 }, { nutrition_research: 50 }, { superconductors: 40 }]
        }
      ]
    },
    Cold_Bay: {
      key: "Cold_Bay",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ plastics: 50 }, { preservatives: 50 }, { nanoparticles: 30 }, { purified_water: 20 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ gas: 50 }, { nutrition_research: 50 }, { biogeochemical_data: 20 }, { superconductors: 30 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ plastics: 50 }, { preservatives: 50 }, { algae: 20 }, { superconductors: 30 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ robots: 50 }, { papercrete: 50 }, { purified_water: 20 }, { superconductors: 30 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ bionics_data: 50 }, { translucent_concrete: 50 }, { biogeochemical_data: 20 }, { nanoparticles: 30 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ electromagnets: 50 }, { smart_materials: 50 }, { nanoparticles: 30 }, { superconductors: 20 }]
        }
      ]
    },
    Tuklavik: {
      key: "Tuklavik",
      reward: [{ type: "good_bonus", age: "ColonialAge" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ gas: 70 }, { preservatives: 45 }, { nanoparticles: 25 }, { superconductors: 25 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ bionics_data: 70 }, { nutrition_research: 45 }, { biogeochemical_data: 25 }, { nanoparticles: 25 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ plastics: 70 }, { nutrition_research: 45 }, { algae: 25 }, { purified_water: 25 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ bionics_data: 70 }, { nutrition_research: 45 }, { algae: 25 }, { biogeochemical_data: 25 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ robots: 70 }, { papercrete: 45 }, { nanoparticles: 25 }, { purified_water: 25 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ electromagnets: 70 }, { translucent_concrete: 45 }, { algae: 25 }, { superconductors: 25 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ robots: 70 }, { smart_materials: 45 }, { purified_water: 25 }, { superconductors: 25 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ electromagnets: 70 }, { papercrete: 45 }, { biogeochemical_data: 25 }, { superconductors: 25 }]
        }
      ]
    },
    Ananevut: {
      key: "Ananevut",
      reward: [{ type: "good", age: "ArcticFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ plastics: 70 }, { nutrition_research: 50 }, { nanoparticles: 25 }, { purified_water: 30 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ bionics_data: 70 }, { papercrete: 50 }, { biogeochemical_data: 25 }, { superconductors: 30 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ robots: 70 }, { smart_materials: 50 }, { biogeochemical_data: 30 }, { purified_water: 25 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ bionics_data: 70 }, { papercrete: 50 }, { algae: 25 }, { superconductors: 30 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ electromagnets: 70 }, { smart_materials: 50 }, { algae: 30 }, { nanoparticles: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ plastics: 70 }, { preservatives: 50 }, { nanoparticles: 30 }, { superconductors: 25 }]
        }
      ]
    },
    Qaniit: {
      key: "Qaniit",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ preservatives: 55 }, { nanoparticles: 20 }, { superconductors: 35 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ nutrition_research: 55 }, { biogeochemical_data: 20 }, { superconductors: 35 }, { ai_data: 20 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ translucent_concrete: 55 }, { biogeochemical_data: 20 }, { nanoparticles: 35 }, { ai_data: 20 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ translucent_concrete: 55 }, { biogeochemical_data: 35 }, { purified_water: 20 }, { bioplastics: 30 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ nutrition_research: 55 }, { algae: 20 }, { nanoparticles: 35 }, { paper_batteries: 20 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ smart_materials: 55 }, { biogeochemical_data: 20 }, { purified_water: 35 }, { ai_data: 20 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ smart_materials: 55 }, { algae: 35 }, { superconductors: 20 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ translucent_concrete: 55 }, { algae: 20 }, { biogeochemical_data: 35 }, { nanowire: 30 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ papercrete: 55 }, { algae: 35 }, { biogeochemical_data: 20 }, { nanowire: 30 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ preservatives: 55 }, { algae: 35 }, { purified_water: 20 }, { bioplastics: 30 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ papercrete: 55 }, { biogeochemical_data: 35 }, { superconductors: 20 }, { paper_batteries: 30 }]
        }
      ]
    },
    White_Gate: {
      key: "White_Gate",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ algae: 40 }, { nanoparticles: 25 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ purified_water: 25 }, { superconductors: 40 }, { bioplastics: 40 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ algae: 25 }, { superconductors: 40 }, { nanowire: 40 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ nanoparticles: 25 }, { purified_water: 40 }, { ai_data: 40 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ biogeochemical_data: 40 }, { superconductors: 25 }, { paper_batteries: 40 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ biogeochemical_data: 25 }, { nanoparticles: 40 }, { ai_data: 40 }]
        }
      ]
    },
    Median_Waters: {
      key: "Median_Waters",
      reward: [{ type: "medal", value: 3000 }],
      sectors: [
        { reward: [{ type: "coin", value: 60000 }], cost: [{ purified_water: 50 }, { ai_data: 20 }, { nanowire: 30 }] },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ nanoparticles: 50 }, { bioplastics: 20 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ algae: 50 }, { paper_batteries: 30 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ superconductors: 50 }, { bioplastics: 30 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ biogeochemical_data: 50 }, { bioplastics: 20 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ biogeochemical_data: 50 }, { nanowire: 30 }, { paper_batteries: 20 }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ purified_water: 50 }, { ai_data: 20 }, { bioplastics: 30 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ biogeochemical_data: 50 }, { ai_data: 30 }, { nanowire: 20 }]
        }
      ]
    },
    Snowdrifts: {
      key: "Snowdrifts",
      reward: [{ type: "good", age: "ArcticFuture", value: 10 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ biogeochemical_data: 50 }, { paper_batteries: 30 }, { transester_gas: 15 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ nanoparticles: 50 }, { bioplastics: 15 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ biogeochemical_data: 50 }, { nanowire: 30 }, { paper_batteries: 15 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ algae: 50 }, { paper_batteries: 30 }, { transester_gas: 15 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ superconductors: 50 }, { bioplastics: 30 }, { nanowire: 15 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ purified_water: 50 }, { ai_data: 15 }, { bioplastics: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ biogeochemical_data: 50 }, { ai_data: 30 }, { nanowire: 15 }]
        }
      ]
    },
    Frosty_Mountain: {
      key: "Frosty_Mountain",
      reward: [{ type: "good", age: "ArcticFuture", value: 10 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ algae: 40 }, { purified_water: 30 }, { paper_batteries: 45 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ biogeochemical_data: 40 }, { superconductors: 30 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ biogeochemical_data: 40 }, { nanoparticles: 30 }, { paper_batteries: 45 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ biogeochemical_data: 30 }, { nanoparticles: 40 }, { bioplastics: 45 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ purified_water: 30 }, { superconductors: 40 }, { ai_data: 45 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ biogeochemical_data: 30 }, { purified_water: 40 }, { nanowire: 45 }]
        }
      ]
    },
    Southern_Valley: {
      key: "Southern_Valley",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 10 }, { nanowire: 25 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ ai_data: 25 }, { bioplastics: 30 }, { transester_gas: 10 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ ai_data: 25 }, { nanowire: 30 }, { paper_batteries: 10 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 25 }, { transester_gas: 10 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 10 }, { nanowire: 25 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 10 }, { paper_batteries: 25 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ nanowire: 10 }, { paper_batteries: 25 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 30 }, { nanowire: 10 }, { transester_gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 25 }, { paper_batteries: 10 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 25 }, { nanowire: 30 }, { transester_gas: 10 }]
        }
      ]
    },
    Ilug: {
      key: "Ilug",
      reward: [{ type: "good", age: "ArcticFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nutrition_research: 70 }, { paper_batteries: 50 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ preservatives: 70 }, { bioplastics: 20 }, { nanowire: 50 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ translucent_concrete: 70 }, { paper_batteries: 50 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ translucent_concrete: 70 }, { bioplastics: 20 }, { nanowire: 50 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ smart_materials: 70 }, { ai_data: 20 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ papercrete: 70 }, { bioplastics: 50 }, { paper_batteries: 20 }]
        },
        { reward: [{ type: "coin", value: 40000 }], cost: [{ smart_materials: 70 }, { ai_data: 50 }, { nanowire: 20 }] }
      ]
    },
    Chugiak: {
      key: "Chugiak",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [{ gas: 90 }, { purified_water: 60 }, { bioplastics: 15 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [{ robots: 90 }, { biogeochemical_data: 60 }, { bioplastics: 30 }, { paper_batteries: 15 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ bionics_data: 90 }, { nanoparticles: 60 }, { nanowire: 15 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ bionics_data: 90 }, { superconductors: 60 }, { ai_data: 30 }, { transester_gas: 15 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ electromagnets: 90 }, { biogeochemical_data: 60 }, { nanowire: 15 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [{ plastics: 90 }, { biogeochemical_data: 60 }, { bioplastics: 30 }, { paper_batteries: 15 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ robots: 90 }, { purified_water: 60 }, { bioplastics: 15 }, { nanowire: 30 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ gas: 90 }, { purified_water: 60 }, { ai_data: 15 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [{ electromagnets: 90 }, { nanoparticles: 60 }, { ai_data: 30 }, { transester_gas: 15 }]
        }
      ]
    },
    Kesukavut: {
      key: "Kesukavut",
      reward: [{ type: "good", age: "ArcticFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ purified_water: 75 }, { ai_data: 40 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ algae: 75 }, { bioplastics: 40 }, { paper_batteries: 20 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ superconductors: 75 }, { bioplastics: 20 }, { nanowire: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ biogeochemical_data: 75 }, { nanowire: 20 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ nanoparticles: 75 }, { bioplastics: 40 }, { paper_batteries: 20 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ purified_water: 75 }, { ai_data: 40 }, { nanowire: 20 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ biogeochemical_data: 75 }, { paper_batteries: 40 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ biogeochemical_data: 75 }, { nanowire: 40 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ algae: 75 }, { bioplastics: 20 }, { transester_gas: 40 }]
        }
      ]
    },
    Adlartok: {
      key: "Adlartok",
      reward: [{ type: "medal", value: 3000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ superconductors: 80 }, { bioplastics: 50 }, { nanowire: 30 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ biogeochemical_data: 80 }, { bioplastics: 30 }, { nanowire: 50 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ biogeochemical_data: 80 }, { bioplastics: 30 }, { paper_batteries: 50 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ purified_water: 80 }, { ai_data: 30 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ superconductors: 80 }, { ai_data: 50 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ purified_water: 80 }, { ai_data: 50 }, { nanowire: 30 }]
        },
        { reward: [{ type: "supply", value: 50000 }], cost: [{ algae: 80 }, { ai_data: 30 }, { nanowire: 50 }] },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ algae: 80 }, { paper_batteries: 30 }, { transester_gas: 50 }]
        }
      ]
    },
    Northern_Passage: {
      key: "Northern_Passage",
      reward: [{ type: "good", age: "ArcticFuture", value: 10 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 25 }, { bioplastics: 60 }, { paper_batteries: 40 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 40 }, { paper_batteries: 25 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ bioplastics: 60 }, { nanowire: 25 }, { paper_batteries: 40 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ bioplastics: 25 }, { nanowire: 60 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 40 }, { paper_batteries: 60 }, { transester_gas: 25 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 25 }, { nanowire: 40 }, { transester_gas: 60 }]
        },
        { reward: [{ type: "coin", value: 75000 }], cost: [{ ai_data: 60 }, { bioplastics: 40 }, { nanowire: 25 }] }
      ]
    },
    Avalanche: {
      key: "Avalanche",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ ai_data: 60 }, { bioplastics: 40 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ bioplastics: 30 }, { nanowire: 60 }, { paper_batteries: 40 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ ai_data: 40 }, { paper_batteries: 30 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ ai_data: 40 }, { bioplastics: 30 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ bioplastics: 60 }, { nanowire: 40 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ ai_data: 30 }, { paper_batteries: 60 }, { transester_gas: 40 }]
        }
      ]
    },
    Manirak: {
      key: "Manirak",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        { reward: [{ type: "coin", value: 45000 }], cost: [{ algae: 80 }, { bioplastics: 30 }, { nanowire: 50 }] },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ nanoparticles: 80 }, { nanowire: 30 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "coin", value: 45000 }],
          cost: [{ superconductors: 80 }, { ai_data: 50 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ algae: 80 }, { ai_data: 30 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [{ purified_water: 80 }, { bioplastics: 50 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 45000 }],
          cost: [{ biogeochemical_data: 80 }, { bioplastics: 30 }, { paper_batteries: 50 }]
        }
      ]
    },
    Tundra_Rock: {
      key: "Tundra_Rock",
      reward: [{ type: "good_bonus", age: "BronzeAge" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ nanowire: 60 }, { paper_batteries: 35 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 45 }, { paper_batteries: 35 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 45 }, { nanowire: 35 }, { paper_batteries: 60 }]
        },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ ai_data: 60 }, { bioplastics: 35 }, { nanowire: 45 }] },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 35 }, { paper_batteries: 60 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 45 }, { bioplastics: 60 }, { paper_batteries: 35 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 35 }, { paper_batteries: 60 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ bioplastics: 60 }, { nanowire: 35 }, { paper_batteries: 45 }]
        },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ ai_data: 60 }, { nanowire: 45 }, { transester_gas: 35 }] },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 35 }, { bioplastics: 60 }, { paper_batteries: 45 }]
        }
      ]
    },
    Patuktuq: {
      key: "Patuktuq",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ nanoparticles: 80 }, { bioplastics: 55 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ purified_water: 80 }, { ai_data: 40 }, { nanowire: 55 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ superconductors: 80 }, { nanowire: 40 }, { paper_batteries: 55 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ algae: 80 }, { ai_data: 55 }, { bioplastics: 40 }] },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ biogeochemical_data: 80 }, { bioplastics: 40 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ superconductors: 80 }, { nanowire: 40 }, { paper_batteries: 55 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ nanoparticles: 80 }, { ai_data: 55 }, { transester_gas: 40 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ algae: 80 }, { nanowire: 55 }, { paper_batteries: 40 }] }
      ]
    },
    Kilalurak: {
      key: "Kilalurak",
      reward: [{ type: "good", age: "ArcticFuture", value: 25 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ ai_data: 50 }, { nanowire: 40 }, { transester_gas: 70 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ bioplastics: 40 }, { paper_batteries: 70 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ ai_data: 40 }, { bioplastics: 70 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 20 }],
          cost: [{ ai_data: 70 }, { bioplastics: 50 }, { nanowire: 40 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ ai_data: 50 }, { nanowire: 70 }, { transester_gas: 40 }] },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ nanowire: 50 }, { paper_batteries: 40 }, { transester_gas: 70 }]
        }
      ]
    },
    Summit_Ice: {
      key: "Summit_Ice",
      reward: [{ type: "good", age: "ArcticFuture", value: 40 }],
      sectors: [
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ ai_data: 60 }, { nanowire: 40 }, { paper_batteries: 50 }]
        },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ ai_data: 50 }, { bioplastics: 60 }, { nanowire: 40 }] },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ nanowire: 50 }, { paper_batteries: 60 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ nanowire: 60 }, { paper_batteries: 40 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 60 }, { nanowire: 50 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 50 }, { nanowire: 40 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 10 }],
          cost: [{ ai_data: 50 }, { bioplastics: 40 }, { paper_batteries: 60 }]
        }
      ]
    },
    Nilak: {
      key: "Nilak",
      reward: [{ type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ nanoparticles: 85 }, { ai_data: 50 }, { paper_batteries: 40 }]
        },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ purified_water: 85 }, { ai_data: 50 }, { nanowire: 40 }] },
        { reward: [{ type: "supply", value: 60000 }], cost: [{ algae: 85 }, { ai_data: 40 }, { bioplastics: 50 }] },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ superconductors: 85 }, { nanowire: 40 }, { transester_gas: 50 }]
        },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ algae: 85 }, { ai_data: 40 }, { paper_batteries: 50 }] },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ superconductors: 85 }, { ai_data: 50 }, { nanowire: 40 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ algae: 85 }, { paper_batteries: 50 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ nanoparticles: 85 }, { bioplastics: 40 }, { nanowire: 50 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ superconductors: 85 }, { bioplastics: 40 }, { nanowire: 50 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ purified_water: 85 }, { bioplastics: 50 }, { paper_batteries: 40 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ nanoparticles: 85 }, { bioplastics: 50 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ biogeochemical_data: 85 }, { bioplastics: 40 }, { paper_batteries: 50 }]
        }
      ]
    },
    Chulyin: {
      key: "Chulyin",
      reward: [{ type: "good", age: "ArcticFuture", value: 25 }],
      sectors: [
        { reward: [{ type: "coin", value: 75000 }], cost: [{ ai_data: 40 }, { bioplastics: 55 }, { nanowire: 70 }] },
        {
          reward: [{ type: "special_good", good: "promethium", value: 20 }],
          cost: [{ ai_data: 70 }, { nanowire: 55 }, { paper_batteries: 40 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ ai_data: 40 }, { paper_batteries: 70 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ bioplastics: 70 }, { nanowire: 40 }, { paper_batteries: 55 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ bioplastics: 40 }, { paper_batteries: 55 }, { transester_gas: 70 }]
        },
        { reward: [{ type: "supply", value: 75000 }], cost: [{ ai_data: 55 }, { bioplastics: 70 }, { nanowire: 40 }] }
      ]
    },
    Tattilgat: {
      key: "Tattilgat",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1600000 }, { type: "medal", value: 2000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 55 }, { nanowire: 10 }, { paper_batteries: 75 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 20 }],
          cost: [{ ai_data: 45 }, { bioplastics: 55 }, { nanowire: 75 }, { transester_gas: 10 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 45 }, { nanowire: 10 }, { paper_batteries: 55 }, { transester_gas: 75 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ bioplastics: 75 }, { nanowire: 45 }, { paper_batteries: 10 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 75 }, { nanowire: 55 }, { paper_batteries: 45 }, { transester_gas: 10 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 55 }, { bioplastics: 10 }, { nanowire: 75 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ bioplastics: 45 }, { nanowire: 10 }, { paper_batteries: 55 }, { transester_gas: 75 }]
        }
      ]
    },
    Atka: {
      key: "Atka",
      reward: [{ type: "good", age: "ArcticFuture", value: 25 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 75 }, { bioplastics: 45 }, { nanowire: 55 }, { transester_gas: 15 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 55 }, { bioplastics: 45 }, { nanowire: 75 }, { transester_gas: 15 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 75 }, { nanowire: 45 }, { paper_batteries: 15 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 55 }, { bioplastics: 75 }, { nanowire: 45 }, { paper_batteries: 15 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 45 }, { nanowire: 15 }, { paper_batteries: 55 }, { transester_gas: 75 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ bioplastics: 45 }, { nanowire: 15 }, { paper_batteries: 75 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 55 }, { bioplastics: 15 }, { nanowire: 75 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 75 }, { bioplastics: 45 }, { paper_batteries: 15 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 75 }, { nanowire: 55 }, { paper_batteries: 45 }, { transester_gas: 15 }]
        }
      ]
    },
    Glacial_Peak: {
      key: "Glacial_Peak",
      reward: [{ type: "good", age: "ArcticFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 45 }, { bioplastics: 75 }, { nanowire: 25 }, { paper_batteries: 65 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 75 }, { bioplastics: 45 }, { nanowire: 65 }, { transester_gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 25 }, { bioplastics: 45 }, { paper_batteries: 65 }, { transester_gas: 75 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 45 }, { bioplastics: 65 }, { nanowire: 75 }, { transester_gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ bioplastics: 25 }, { nanowire: 45 }, { paper_batteries: 75 }, { transester_gas: 65 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 75 }, { bioplastics: 45 }, { nanowire: 25 }, { paper_batteries: 65 }]
        }
      ]
    },
    Nunataq: {
      key: "Nunataq",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ superconductors: 110 }, { bioplastics: 50 }, { paper_batteries: 65 }, { transester_gas: 25 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ nanoparticles: 110 }, { ai_data: 50 }, { bioplastics: 65 }, { transester_gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ algae: 110 }, { nanowire: 50 }, { paper_batteries: 25 }, { transester_gas: 65 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ superconductors: 110 }, { bioplastics: 50 }, { nanowire: 25 }, { paper_batteries: 65 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ nanoparticles: 110 }, { ai_data: 65 }, { bioplastics: 25 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ algae: 110 }, { bioplastics: 65 }, { nanowire: 25 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ nanoparticles: 110 }, { ai_data: 50 }, { nanowire: 25 }, { paper_batteries: 65 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ biogeochemical_data: 110 }, { nanowire: 65 }, { paper_batteries: 50 }, { transester_gas: 25 }]
        }
      ]
    },
    Precipice: {
      key: "Precipice",
      reward: [{ type: "good", age: "ArcticFuture", value: 50 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ bioplastics: 55 }, { nanowire: 30 }, { paper_batteries: 85 }, { transester_gas: 65 }]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ ai_data: 65 }, { nanowire: 85 }, { paper_batteries: 30 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ ai_data: 55 }, { nanowire: 30 }, { paper_batteries: 85 }, { transester_gas: 65 }]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ bioplastics: 55 }, { nanowire: 30 }, { paper_batteries: 65 }, { transester_gas: 85 }]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ ai_data: 65 }, { bioplastics: 30 }, { nanowire: 85 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ bioplastics: 65 }, { nanowire: 30 }, { paper_batteries: 85 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ ai_data: 85 }, { nanowire: 65 }, { paper_batteries: 55 }, { transester_gas: 30 }]
        }
      ]
    },
    Nanuq: {
      key: "Nanuq",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 50 }, { bioplastics: 65 }, { nanowire: 80 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ bioplastics: 80 }, { nanowire: 50 }, { paper_batteries: 30 }, { transester_gas: 65 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ bioplastics: 50 }, { nanowire: 30 }, { paper_batteries: 65 }, { transester_gas: 80 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 65 }, { bioplastics: 30 }, { nanowire: 80 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 80 }, { nanowire: 50 }, { paper_batteries: 65 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ bioplastics: 80 }, { nanowire: 50 }, { paper_batteries: 30 }, { transester_gas: 65 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ bioplastics: 50 }, { nanowire: 30 }, { paper_batteries: 65 }, { transester_gas: 80 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 65 }, { bioplastics: 30 }, { nanowire: 80 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 50 }, { bioplastics: 65 }, { nanowire: 30 }, { paper_batteries: 80 }]
        }
      ]
    },
    Neural_Rites: {
      key: "Neural_Rites",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ ai_data: 90 }, { nanowire: 70 }, { paper_batteries: 35 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ ai_data: 70 }, { bioplastics: 35 }, { nanowire: 90 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ bioplastics: 70 }, { nanowire: 35 }, { paper_batteries: 90 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ ai_data: 90 }, { bioplastics: 55 }, { nanowire: 35 }, { paper_batteries: 70 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 20 }],
          cost: [{ ai_data: 70 }, { bioplastics: 35 }, { nanowire: 90 }, { paper_batteries: 55 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ bioplastics: 55 }, { nanowire: 35 }, { paper_batteries: 90 }, { transester_gas: 70 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ ai_data: 70 }, { bioplastics: 55 }, { nanowire: 35 }, { paper_batteries: 90 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ ai_data: 55 }, { nanowire: 35 }, { paper_batteries: 70 }, { transester_gas: 90 }]
        }
      ]
    },
    Unalaq: {
      key: "Unalaq",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ superconductors: 120 }, { nanowire: 55 }, { paper_batteries: 35 }, { transester_gas: 70 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ nanoparticles: 120 }, { bioplastics: 55 }, { nanowire: 35 }, { paper_batteries: 70 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ nanoparticles: 120 }, { ai_data: 70 }, { bioplastics: 35 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ algae: 120 }, { bioplastics: 55 }, { nanowire: 35 }, { paper_batteries: 70 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ purified_water: 120 }, { nanowire: 55 }, { paper_batteries: 35 }, { transester_gas: 70 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ nanoparticles: 120 }, { nanowire: 55 }, { paper_batteries: 35 }, { transester_gas: 70 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ purified_water: 120 }, { ai_data: 55 }, { bioplastics: 70 }, { transester_gas: 35 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ purified_water: 120 }, { ai_data: 70 }, { bioplastics: 35 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ superconductors: 120 }, { ai_data: 70 }, { bioplastics: 35 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ purified_water: 120 }, { bioplastics: 70 }, { nanowire: 35 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ algae: 120 }, { ai_data: 55 }, { paper_batteries: 70 }, { transester_gas: 35 }]
        }
      ]
    },
    Anyu: {
      key: "Anyu",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ superconductors: 100 }, { bioplastics: 45 }, { nanowire: 20 }, { paper_batteries: 60 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ biogeochemical_data: 100 }, { nanowire: 45 }, { paper_batteries: 20 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ nanoparticles: 100 }, { ai_data: 45 }, { bioplastics: 60 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ purified_water: 100 }, { ai_data: 60 }, { bioplastics: 45 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ superconductors: 100 }, { bioplastics: 60 }, { nanowire: 20 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ biogeochemical_data: 100 }, { ai_data: 45 }, { nanowire: 20 }, { paper_batteries: 60 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ algae: 100 }, { nanowire: 60 }, { paper_batteries: 45 }, { transester_gas: 20 }]
        }
      ]
    },
    Frozen_Steppe: {
      key: "Frozen_Steppe",
      reward: [{ type: "good", age: "ArcticFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ ai_data: 35 }, { bioplastics: 70 }, { paper_batteries: 95 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ bioplastics: 95 }, { nanowire: 35 }, { paper_batteries: 70 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ ai_data: 95 }, { nanowire: 60 }, { paper_batteries: 35 }, { transester_gas: 70 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ ai_data: 70 }, { bioplastics: 60 }, { nanowire: 35 }, { paper_batteries: 95 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ ai_data: 95 }, { bioplastics: 60 }, { nanowire: 35 }, { paper_batteries: 70 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ ai_data: 70 }, { bioplastics: 60 }, { nanowire: 35 }, { transester_gas: 95 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ ai_data: 60 }, { bioplastics: 70 }, { nanowire: 95 }, { transester_gas: 35 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ ai_data: 60 }, { bioplastics: 35 }, { paper_batteries: 70 }, { transester_gas: 95 }]
        }
      ]
    },
    Pimniq: {
      key: "Pimniq",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ bioplastics: 55 }, { nanowire: 20 }, { paper_batteries: 75 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 45 }, { nanowire: 20 }, { paper_batteries: 55 }, { transester_gas: 75 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 75 }, { bioplastics: 20 }, { nanowire: 45 }, { paper_batteries: 55 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 20 }, { bioplastics: 55 }, { nanowire: 45 }, { paper_batteries: 75 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ bioplastics: 75 }, { nanowire: 45 }, { paper_batteries: 55 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 55 }, { bioplastics: 45 }, { nanowire: 20 }, { paper_batteries: 75 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 55 }, { bioplastics: 75 }, { nanowire: 20 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 75 }, { bioplastics: 45 }, { nanowire: 20 }, { transester_gas: 55 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 75 }, { nanowire: 20 }, { paper_batteries: 55 }, { transester_gas: 45 }]
        }
      ]
    },
    The_Grotto: {
      key: "The_Grotto",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ ai_data: 40 }, { bioplastics: 55 }, { nanowire: 60 }, { transester_gas: 75 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ ai_data: 60 }, { nanowire: 75 }, { paper_batteries: 95 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ ai_data: 60 }, { nanowire: 95 }, { paper_batteries: 75 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ ai_data: 95 }, { bioplastics: 60 }, { nanowire: 40 }, { paper_batteries: 75 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ bioplastics: 60 }, { nanowire: 75 }, { paper_batteries: 95 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ ai_data: 75 }, { bioplastics: 95 }, { paper_batteries: 40 }, { transester_gas: 60 }]
        }
      ]
    },
    Temple_Floe: {
      key: "Temple_Floe",
      reward: [{ type: "coin", value: 1800000 }, { type: "supply", value: 1800000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ bioplastics: 100 }, { nanowire: 60 }, { paper_batteries: 75 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ bioplastics: 40 }, { nanowire: 60 }, { paper_batteries: 100 }, { transester_gas: 75 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ ai_data: 75 }, { bioplastics: 40 }, { nanowire: 100 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ ai_data: 100 }, { bioplastics: 60 }, { nanowire: 40 }, { transester_gas: 75 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ ai_data: 75 }, { bioplastics: 60 }, { nanowire: 100 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ ai_data: 40 }, { bioplastics: 60 }, { paper_batteries: 75 }, { transester_gas: 100 }]
        },
        {
          reward: [{ type: "special_good", good: "promethium", value: 20 }],
          cost: [{ ai_data: 100 }, { bioplastics: 60 }, { nanowire: 40 }, { transester_gas: 75 }]
        }
      ]
    },
    Spirit_Plane: {
      key: "Spirit_Plane",
      reward: [{ type: "diamond", value: 200 }],
      sectors: [
        {
          reward: [{ type: "special_good", good: "promethium", value: 20 }],
          cost: [{ ai_data: 100 }, { bioplastics: 60 }, { nanowire: 40 }, { transester_gas: 80 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ ai_data: 40 }, { bioplastics: 60 }, { nanowire: 100 }, { paper_batteries: 80 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ ai_data: 100 }, { bioplastics: 60 }, { nanowire: 80 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ bioplastics: 60 }, { nanowire: 40 }, { paper_batteries: 80 }, { transester_gas: 100 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ ai_data: 80 }, { bioplastics: 40 }, { nanowire: 100 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ ai_data: 40 }, { bioplastics: 80 }, { nanowire: 60 }, { paper_batteries: 100 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ ai_data: 60 }, { nanowire: 100 }, { paper_batteries: 80 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ bioplastics: 100 }, { nanowire: 60 }, { paper_batteries: 40 }, { transester_gas: 80 }]
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
          cost: [{ nutrition_research: 45 }, { smart_materials: 35 }, { purified_water: 50 }, { ai_data: 50 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ papercrete: 45 }, { preservatives: 35 }, { superconductors: 50 }, { transester_gas: 50 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ papercrete: 35 }, { preservatives: 45 }, { biogeochemical_data: 50 }, { paper_batteries: 50 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ nutrition_research: 35 }, { translucent_concrete: 45 }, { nanoparticles: 50 }, { nanowire: 50 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ papercrete: 35 }, { smart_materials: 45 }, { purified_water: 50 }, { nanowire: 50 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ nutrition_research: 35 }, { translucent_concrete: 45 }, { algae: 50 }, { bioplastics: 50 }]
        }
      ]
    },
    Murky_Waters: {
      key: "Murky_Waters",
      reward: [{ type: "pvp_tower" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ papercrete: 65 }, { biogeochemical_data: 50 }, { bioplastics: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ preservatives: 65 }, { nanoparticles: 50 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ smart_materials: 65 }, { algae: 50 }, { nanowire: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nutrition_research: 65 }, { superconductors: 50 }, { paper_batteries: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ translucent_concrete: 65 }, { purified_water: 50 }, { ai_data: 40 }]
        }
      ]
    },
    Cursed_Current: {
      key: "Cursed_Current",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ smart_materials: 60 }, { superconductors: 50 }, { ai_data: 45 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ papercrete: 60 }, { biogeochemical_data: 50 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ nutrition_research: 60 }, { purified_water: 50 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ translucent_concrete: 60 }, { superconductors: 50 }, { bioplastics: 45 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ preservatives: 60 }, { nanoparticles: 50 }, { paper_batteries: 45 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ nutrition_research: 60 }, { algae: 50 }, { nanowire: 45 }]
        }
      ]
    },
    Dark_Abyss: {
      key: "Dark_Abyss",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1800000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ translucent_concrete: 80 }, { nanoparticles: 45 }, { ai_data: 30 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ papercrete: 80 }, { biogeochemical_data: 45 }, { paper_batteries: 30 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ smart_materials: 80 }, { superconductors: 45 }, { nanowire: 30 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ nutrition_research: 80 }, { purified_water: 45 }, { bioplastics: 30 }, { nanowire: 30 }]
        },
        {
          reward: [{ type: "coin", value: 25000 }],
          cost: [{ preservatives: 80 }, { algae: 45 }, { bioplastics: 30 }, { transester_gas: 30 }]
        }
      ]
    },
    Fresh_Flow: {
      key: "Fresh_Flow",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ purified_water: 70 }, { superconductors: 50 }, { nanowire: 25 }, { transester_gas: 35 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ algae: 50 }, { nanoparticles: 70 }, { bioplastics: 35 }, { paper_batteries: 25 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ biogeochemical_data: 50 }, { purified_water: 70 }, { paper_batteries: 35 }, { transester_gas: 25 }]
        },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ purified_water: 50 }, { superconductors: 70 }, { bioplastics: 25 }, { nanowire: 35 }]
        },
        {
          reward: [{ type: "supply", value: 30000 }],
          cost: [{ biogeochemical_data: 70 }, { nanoparticles: 50 }, { ai_data: 25 }, { bioplastics: 35 }]
        }
      ]
    },
    Strong_Tide: {
      key: "Strong_Tide",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ papercrete: 30 }, { translucent_concrete: 55 }, { algae: 50 }, { ai_data: 45 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ papercrete: 55 }, { translucent_concrete: 30 }, { superconductors: 50 }, { paper_batteries: 45 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ nutrition_research: 30 }, { smart_materials: 55 }, { purified_water: 50 }, { nanowire: 45 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ preservatives: 30 }, { translucent_concrete: 55 }, { purified_water: 50 }, { transester_gas: 45 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { nutrition_research: 55 },
            { translucent_concrete: 30 },
            { biogeochemical_data: 50 },
            { bioplastics: 45 }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ smart_materials: 55 }, { translucent_concrete: 30 }, { nanoparticles: 50 }, { paper_batteries: 45 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ papercrete: 30 }, { preservatives: 55 }, { superconductors: 50 }, { paper_batteries: 45 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ papercrete: 55 }, { smart_materials: 30 }, { purified_water: 50 }, { nanowire: 45 }]
        }
      ]
    },
    Rough_Expanse: {
      key: "Rough_Expanse",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ papercrete: 50 }, { algae: 50 }, { nanowire: 20 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ smart_materials: 50 }, { superconductors: 50 }, { ai_data: 20 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ nutrition_research: 50 }, { biogeochemical_data: 50 }, { ai_data: 30 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ preservatives: 50 }, { superconductors: 50 }, { bioplastics: 30 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ preservatives: 50 }, { nanoparticles: 50 }, { ai_data: 30 }, { paper_batteries: 20 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ translucent_concrete: 50 }, { algae: 50 }, { paper_batteries: 20 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ smart_materials: 50 }, { purified_water: 50 }, { bioplastics: 20 }, { paper_batteries: 30 }]
        }
      ]
    },
    Serene_Waves: {
      key: "Serene_Waves",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ transester_gas: 70 }, { artificial_scales: 35 }, { plankton: 20 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ nanowire: 70 }, { corals: 35 }, { plankton: 20 }] },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ bioplastics: 70 }, { artificial_scales: 35 }, { biolight: 20 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ ai_data: 70 }, { corals: 35 }, { plankton: 20 }] },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 70 }, { artificial_scales: 35 }, { pearls: 20 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ paper_batteries: 70 }, { artificial_scales: 20 }, { pearls: 35 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ transester_gas: 70 }, { corals: 20 }, { plankton: 35 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ bioplastics: 70 }, { biolight: 20 }, { plankton: 35 }] },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ nanowire: 70 }, { biolight: 20 }, { pearls: 35 }] },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ paper_batteries: 70 }, { biolight: 35 }, { pearls: 20 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ nanowire: 70 }, { biolight: 35 }, { corals: 20 }] },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ paper_batteries: 70 }, { artificial_scales: 20 }, { biolight: 35 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ transester_gas: 70 }, { corals: 20 }, { pearls: 35 }] },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ nanowire: 70 }, { artificial_scales: 20 }, { plankton: 35 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ ai_data: 70 }, { biolight: 35 }, { pearls: 20 }] }
      ]
    },
    Tideless_Deep: {
      key: "Tideless_Deep",
      reward: [{ type: "medal", value: 4000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ algae: 65 }, { bioplastics: 40 }, { nanowire: 25 }, { plankton: 30 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ biogeochemical_data: 65 }, { ai_data: 40 }, { transester_gas: 25 }, { corals: 30 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ nanoparticles: 65 }, { bioplastics: 25 }, { paper_batteries: 40 }, { pearls: 30 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ superconductors: 65 }, { nanowire: 40 }, { transester_gas: 25 }, { biolight: 30 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ purified_water: 65 }, { paper_batteries: 25 }, { transester_gas: 40 }, { artificial_scales: 30 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ superconductors: 65 }, { nanowire: 40 }, { transester_gas: 25 }, { biolight: 30 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ purified_water: 65 }, { paper_batteries: 40 }, { transester_gas: 25 }, { pearls: 30 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ biogeochemical_data: 65 }, { ai_data: 40 }, { transester_gas: 25 }, { corals: 30 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ algae: 65 }, { bioplastics: 25 }, { paper_batteries: 40 }, { pearls: 30 }]
        }
      ]
    },
    Red_Sea: {
      key: "Red_Sea",
      reward: [{ type: "medal", value: 4000 }],
      sectors: [
        { reward: [{ type: "supply", value: 70000 }], cost: [{ bioplastics: 55 }, { corals: 50 }, { pearls: 15 }] },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ paper_batteries: 55 }, { artificial_scales: 50 }, { biolight: 15 }]
        },
        { reward: [{ type: "supply", value: 70000 }], cost: [{ bioplastics: 55 }, { corals: 15 }, { plankton: 50 }] },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 55 }, { artificial_scales: 15 }, { biolight: 50 }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ paper_batteries: 55 }, { artificial_scales: 50 }, { plankton: 15 }]
        },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ nanowire: 55 }, { biolight: 15 }, { plankton: 50 }] },
        { reward: [{ type: "supply", value: 70000 }], cost: [{ bioplastics: 55 }, { biolight: 50 }, { pearls: 15 }] }
      ]
    },
    Glimmering_Surf: {
      key: "Glimmering_Surf",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ paper_batteries: 40 }, { transester_gas: 50 }, { artificial_scales: 40 }]
        },
        { reward: [{ type: "coin", value: 40000 }], cost: [{ ai_data: 50 }, { transester_gas: 40 }, { pearls: 40 }] },
        { reward: [{ type: "supply", value: 60000 }], cost: [{ ai_data: 40 }, { bioplastics: 50 }, { plankton: 40 }] },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ bioplastics: 40 }, { paper_batteries: 50 }, { artificial_scales: 40 }]
        },
        { reward: [{ type: "supply", value: 60000 }], cost: [{ ai_data: 50 }, { nanowire: 40 }, { corals: 40 }] }
      ]
    },
    Wondering_Ocean: {
      key: "Wondering_Ocean",
      reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 60 }, { paper_batteries: 20 }, { corals: 50 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 60 }, { bioplastics: 20 }, { artificial_scales: 50 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ bioplastics: 20 }, { transester_gas: 60 }, { pearls: 50 }]
        },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ ai_data: 20 }, { nanowire: 60 }, { corals: 50 }] },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 60 }, { paper_batteries: 20 }, { biolight: 50 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 20 }, { paper_batteries: 60 }, { plankton: 50 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ paper_batteries: 60 }, { transester_gas: 20 }, { artificial_scales: 50 }]
        }
      ]
    },
    Foam_Ceiling: {
      key: "Foam_Ceiling",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ artificial_scales: 50 }, { biolight: 20 }, { plankton: 10 }]
        },
        { reward: [{ type: "supply", value: 60000 }], cost: [{ biolight: 10 }, { pearls: 20 }, { plankton: 50 }] },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ biolight: 50 }, { corals: 10 }, { pearls: 20 }] },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ artificial_scales: 50 }, { corals: 20 }, { pearls: 10 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ artificial_scales: 10 }, { pearls: 50 }, { plankton: 20 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ artificial_scales: 20 }, { corals: 50 }, { plankton: 10 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ artificial_scales: 10 }, { pearls: 50 }, { plankton: 20 }]
        }
      ]
    },
    Walled_Gulf: {
      key: "Walled_Gulf",
      reward: [{ type: "medal", value: 3500 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ superconductors: 75 }, { biolight: 50 }, { corals: 25 }]
        },
        { reward: [{ type: "coin", value: 40000 }], cost: [{ algae: 75 }, { biolight: 25 }, { corals: 50 }] },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nanoparticles: 75 }, { artificial_scales: 50 }, { biolight: 25 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ biogeochemical_data: 75 }, { artificial_scales: 25 }, { corals: 50 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ biogeochemical_data: 75 }, { biolight: 50 }, { plankton: 25 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ biogeochemical_data: 75 }, { artificial_scales: 50 }, { biolight: 25 }]
        },
        { reward: [{ type: "supply", value: 40000 }], cost: [{ nanoparticles: 75 }, { pearls: 25 }, { plankton: 50 }] },
        { reward: [{ type: "coin", value: 40000 }], cost: [{ algae: 75 }, { corals: 25 }, { pearls: 50 }] }
      ]
    },
    Lower_Grotto: {
      key: "Lower_Grotto",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nanoparticles: 100 }, { paper_batteries: 65 }, { corals: 15 }, { plankton: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ algae: 100 }, { bioplastics: 65 }, { artificial_scales: 30 }, { pearls: 15 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ purified_water: 100 }, { ai_data: 65 }, { corals: 15 }, { pearls: 30 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ superconductors: 100 }, { transester_gas: 65 }, { biolight: 15 }, { pearls: 30 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ biogeochemical_data: 100 }, { bioplastics: 65 }, { artificial_scales: 15 }, { biolight: 30 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ algae: 100 }, { nanowire: 65 }, { biolight: 30 }, { plankton: 15 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nanoparticles: 100 }, { ai_data: 65 }, { corals: 30 }, { pearls: 15 }]
        }
      ]
    },
    Silver_Swarms: {
      key: "Silver_Swarms",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        { reward: [{ type: "supply", value: 50000 }], cost: [{ bioplastics: 80 }, { biolight: 40 }, { corals: 55 }] },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ nanowire: 80 }, { pearls: 40 }, { plankton: 55 }] },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ paper_batteries: 80 }, { biolight: 55 }, { pearls: 40 }]
        },
        { reward: [{ type: "coin", value: 60000 }], cost: [{ transester_gas: 80 }, { biolight: 55 }, { corals: 40 }] },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ paper_batteries: 80 }, { artificial_scales: 55 }, { plankton: 40 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ ai_data: 80 }, { artificial_scales: 40 }, { pearls: 55 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ bioplastics: 80 }, { artificial_scales: 40 }, { corals: 55 }]
        },
        { reward: [{ type: "supply", value: 50000 }], cost: [{ nanowire: 80 }, { biolight: 55 }, { plankton: 40 }] },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ transester_gas: 80 }, { pearls: 55 }, { plankton: 40 }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ ai_data: 80 }, { artificial_scales: 55 }, { biolight: 40 }]
        }
      ]
    },
    Rocky_Domain: {
      key: "Rocky_Domain",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1400000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ artificial_scales: 45 }, { pearls: 30 }, { plankton: 70 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ artificial_scales: 70 }, { corals: 30 }, { pearls: 45 }]
        },
        { reward: [{ type: "supply", value: 90000 }], cost: [{ biolight: 30 }, { corals: 45 }, { plankton: 70 }] },
        { reward: [{ type: "coin", value: 80000 }], cost: [{ biolight: 70 }, { pearls: 45 }, { plankton: 30 }] },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ artificial_scales: 30 }, { biolight: 45 }, { corals: 70 }]
        },
        { reward: [{ type: "supply", value: 90000 }], cost: [{ corals: 30 }, { pearls: 70 }, { plankton: 45 }] }
      ]
    },
    Upper_Grotto: {
      key: "Upper_Grotto",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        { reward: [{ type: "supply", value: 60000 }], cost: [{ bioplastics: 90 }, { biolight: 50 }, { pearls: 30 }] },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 90 }, { artificial_scales: 50 }, { plankton: 30 }]
        },
        { reward: [{ type: "supply", value: 60000 }], cost: [{ nanowire: 90 }, { pearls: 30 }, { plankton: 50 }] },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ nanowire: 90 }, { corals: 30 }, { plankton: 50 }] },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ transester_gas: 90 }, { biolight: 30 }, { corals: 50 }] },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 90 }, { artificial_scales: 30 }, { corals: 50 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ bioplastics: 90 }, { artificial_scales: 30 }, { pearls: 50 }]
        }
      ]
    },
    Nautical_Parlay: {
      key: "Nautical_Parlay",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        { reward: [{ type: "coin", value: 30000 }], cost: [{ bioplastics: 40 }, { biolight: 50 }] },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ bioplastics: 60 }, { paper_batteries: 40 }, { pearls: 50 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ ai_data: 60 }, { transester_gas: 40 }, { biolight: 50 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nanowire: 40 }, { transester_gas: 60 }, { plankton: 50 }]
        },
        { reward: [{ type: "coin", value: 30000 }], cost: [{ ai_data: 40 }, { paper_batteries: 60 }, { corals: 50 }] },
        {
          reward: [{ type: "coin", value: 30000 }],
          cost: [{ nanowire: 40 }, { transester_gas: 60 }, { artificial_scales: 50 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nanowire: 60 }, { paper_batteries: 40 }, { pearls: 50 }]
        }
      ]
    },
    Restless_Buoy: {
      key: "Restless_Buoy",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ ai_data: 50 }, { paper_batteries: 50 }, { artificial_scales: 40 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ ai_data: 50 }, { corals: 40 }, { promethium: 50, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ ai_data: 50 }, { transester_gas: 50 }, { biolight: 40 }] },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nanowire: 50 }, { paper_batteries: 50 }, { pearls: 40 }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ bioplastics: 50 }, { nanowire: 50 }, { plankton: 40 }] },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ nanowire: 50 }, { transester_gas: 50 }, { artificial_scales: 40 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ bioplastics: 50 }, { paper_batteries: 50 }, { plankton: 40 }]
        }
      ]
    },
    Ripped_Sails: {
      key: "Ripped_Sails",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 40 }, { nanowire: 30 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { ai_data: 40 },
            { paper_batteries: 30 },
            { transester_gas: 30 },
            { promethium: 50, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 40 }, { nanowire: 40 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 40 }, { bioplastics: 30 }, { nanowire: 40 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 30 }, { nanowire: 30 }, { paper_batteries: 40 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 40 }, { bioplastics: 30 }, { nanowire: 30 }, { paper_batteries: 40 }]
        }
      ]
    },
    Nautilus_Mirage: {
      key: "Nautilus_Mirage",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 30 }, { nanowire: 30 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 30 }, { nanowire: 30 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 30 }, { nanowire: 30 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 30 }, { nanowire: 30 }, { paper_batteries: 30 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 30 }, { nanowire: 30 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ ai_data: 30 }, { nanowire: 30 }, { paper_batteries: 30 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 30 }, { paper_batteries: 30 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { ai_data: 30 },
            { paper_batteries: 30 },
            { transester_gas: 30 },
            { promethium: 60, type: "special_good" }
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
          cost: [{ artificial_scales: 60 }, { biolight: 40 }, { pearls: 20 }]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ artificial_scales: 20 }, { corals: 60 }, { plankton: 40 }]
        },
        { reward: [{ type: "coin", value: 65000 }], cost: [{ corals: 20 }, { pearls: 40 }, { plankton: 60 }] },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ artificial_scales: 40 }, { biolight: 20 }, { pearls: 60 }]
        },
        { reward: [{ type: "supply", value: 70000 }], cost: [{ biolight: 60 }, { corals: 40 }, { plankton: 20 }] },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ artificial_scales: 20 }, { pearls: 40 }, { promethium: 60, type: "special_good" }]
        }
      ]
    },
    Deep_Dive: {
      key: "Deep_Dive",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ bioplastics: 30 }, { paper_batteries: 70 }, { plankton: 40 }]
        },
        { reward: [{ type: "coin", value: 65000 }], cost: [{ ai_data: 70 }, { transester_gas: 30 }, { biolight: 40 }] },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ ai_data: 30 }, { corals: 40 }, { promethium: 70, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ nanowire: 70 }, { transester_gas: 30 }, { plankton: 40 }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ nanowire: 30 }, { transester_gas: 70 }, { artificial_scales: 40 }]
        },
        { reward: [{ type: "coin", value: 65000 }], cost: [{ nanowire: 70 }, { paper_batteries: 30 }, { pearls: 40 }] },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ bioplastics: 30 }, { transester_gas: 70 }, { artificial_scales: 40 }]
        }
      ]
    },
    Furious_Storm: {
      key: "Furious_Storm",
      reward: [{ type: "good_bonus", age: "IndustrialAge" }],
      sectors: [
        { reward: [{ type: "coin", value: 65000 }], cost: [{ corals: 30 }, { pearls: 50 }, { plankton: 50 }] },
        { reward: [{ type: "coin", value: 65000 }], cost: [{ biolight: 50 }, { corals: 50 }, { plankton: 30 }] },
        { reward: [{ type: "coin", value: 65000 }], cost: [{ biolight: 50 }, { corals: 30 }, { plankton: 50 }] },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ artificial_scales: 50 }, { biolight: 50 }, { pearls: 30 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ artificial_scales: 30 }, { corals: 50 }, { plankton: 50 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ artificial_scales: 30 }, { corals: 50 }, { plankton: 50 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ artificial_scales: 30 }, { pearls: 50 }, { plankton: 50 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ pearls: 50 }, { plankton: 30 }, { promethium: 60, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ artificial_scales: 50 }, { biolight: 30 }, { pearls: 50 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ artificial_scales: 50 }, { biolight: 30 }, { pearls: 50 }]
        },
        {
          reward: [{ type: "coin", value: 65000 }],
          cost: [{ artificial_scales: 50 }, { biolight: 50 }, { pearls: 30 }]
        },
        { reward: [{ type: "coin", value: 65000 }], cost: [{ corals: 30 }, { pearls: 50 }, { plankton: 50 }] }
      ]
    },
    Translucent_Algae: {
      key: "Translucent_Algae",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ paper_batteries: 60 }, { transester_gas: 60 }, { corals: 30 }, { pearls: 30 }]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [{ bioplastics: 60 }, { paper_batteries: 60 }, { artificial_scales: 30 }, { corals: 30 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ nanowire: 60 }, { biolight: 30 }, { pearls: 30 }, { promethium: 60, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [{ ai_data: 60 }, { corals: 30 }, { plankton: 30 }, { promethium: 60, type: "special_good" }]
        }
      ]
    },
    Silver_Crest: {
      key: "Silver_Crest",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        { reward: [{ type: "supply", value: 70000 }], cost: [{ biolight: 45 }, { corals: 45 }, { plankton: 45 }] },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ artificial_scales: 45 }, { biolight: 45 }, { pearls: 45 }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ artificial_scales: 45 }, { pearls: 45 }, { promethium: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ artificial_scales: 45 }, { biolight: 45 }, { plankton: 45 }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ artificial_scales: 45 }, { biolight: 45 }, { pearls: 45 }]
        }
      ]
    },
    Single_Wave: {
      key: "Single_Wave",
      reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ nanoparticles: 50 }, { transester_gas: 60 }, { artificial_scales: 30 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ purified_water: 50 }, { corals: 30 }, { orichalcum: 60, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ transester_gas: 60 }, { corals: 30 }, { promethium: 65, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 85000 }], cost: [{ algae: 50 }, { nanowire: 60 }, { pearls: 30 }] },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ superconductors: 50 }, { paper_batteries: 60 }, { biolight: 30 }]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ biogeochemical_data: 50 }, { bioplastics: 60 }, { plankton: 30 }]
        }
      ]
    },
    Grey_Clouds: {
      key: "Grey_Clouds",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 30 }, { bioplastics: 30 }, { artificial_scales: 45 }, { plankton: 45 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ bioplastics: 30 }, { nanowire: 30 }, { artificial_scales: 45 }, { biolight: 45 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 30 }, { corals: 45 }, { plankton: 45 }, { promethium: 50, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ nanowire: 30 }, { biolight: 45 }, { pearls: 45 }, { orichalcum: 50, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ bioplastics: 30 }, { paper_batteries: 30 }, { corals: 45 }, { plankton: 45 }]
        }
      ]
    },
    Treacherous_Surf: {
      key: "Treacherous_Surf",
      reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ nanoparticles: 90 }, { paper_batteries: 30 }, { corals: 40 }, { pearls: 40 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ superconductors: 90 }, { biolight: 40 }, { pearls: 40 }, { orichalcum: 65, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { transester_gas: 30 },
            { artificial_scales: 40 },
            { plankton: 40 },
            { promethium: 90, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ algae: 90 }, { nanowire: 30 }, { artificial_scales: 40 }, { biolight: 40 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ purified_water: 90 }, { bioplastics: 30 }, { corals: 40 }, { plankton: 40 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ biogeochemical_data: 65 }, { ai_data: 30 }, { corals: 40 }, { plankton: 40 }]
        }
      ]
    },
    Coral_Kingdom: {
      key: "Coral_Kingdom",
      reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ ai_data: 30 }, { corals: 45 }, { plankton: 45 }, { orichalcum: 50, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ bioplastics: 30 }, { paper_batteries: 30 }, { artificial_scales: 45 }, { plankton: 45 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ ai_data: 30 }, { transester_gas: 30 }, { biolight: 45 }, { plankton: 45 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ bioplastics: 30 }, { transester_gas: 30 }, { biolight: 45 }, { pearls: 45 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ nanowire: 30 }, { biolight: 45 }, { pearls: 45 }, { promethium: 50, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ bioplastics: 30 }, { nanowire: 30 }, { artificial_scales: 45 }, { biolight: 45 }]
        }
      ]
    },
    Telescopic_Barrel: {
      key: "Telescopic_Barrel",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ artificial_scales: 45 }, { biolight: 45 }, { pearls: 45 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ artificial_scales: 45 }, { biolight: 45 }, { corals: 45 }]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ artificial_scales: 45 }, { biolight: 45 }, { plankton: 45 }]
        },
        { reward: [{ type: "supply", value: 90000 }], cost: [{ biolight: 45 }, { corals: 45 }, { plankton: 45 }] },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ corals: 45 }, { pearls: 45 }, { promethium: 80, type: "special_good" }]
        }
      ]
    },
    Sponge_Sands: {
      key: "Sponge_Sands",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ nanoparticles: 100 }, { nanowire: 30 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "supply", value: 95000 }],
          cost: [{ purified_water: 100 }, { ai_data: 60 }, { bioplastics: 30 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ biogeochemical_data: 100 }, { bioplastics: 60 }, { promethium: 50, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 90000 }], cost: [{ algae: 100 }, { nanowire: 60 }, { paper_batteries: 30 }] },
        {
          reward: [{ type: "supply", value: 95000 }],
          cost: [{ superconductors: 100 }, { ai_data: 30 }, { paper_batteries: 60 }]
        },
        {
          reward: [{ type: "supply", value: 95000 }],
          cost: [{ bioplastics: 30 }, { transester_gas: 60 }, { orichalcum: 100, type: "special_good" }]
        }
      ]
    },
    Cursed_Lip: {
      key: "Cursed_Lip",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ artificial_scales: 45 }, { biolight: 45 }, { pearls: 45 }]
        },
        { reward: [{ type: "coin", value: 85000 }], cost: [{ corals: 45 }, { pearls: 45 }, { plankton: 45 }] },
        { reward: [{ type: "coin", value: 85000 }], cost: [{ biolight: 45 }, { corals: 45 }, { plankton: 45 }] },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [{ artificial_scales: 45 }, { biolight: 45 }, { corals: 45 }]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [{ artificial_scales: 45 }, { pearls: 45 }, { promethium: 80, type: "special_good" }]
        },
        { reward: [{ type: "supply", value: 85000 }], cost: [{ biolight: 45 }, { corals: 45 }, { plankton: 45 }] },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [{ corals: 45 }, { pearls: 45 }, { promethium: 80, type: "special_good" }]
        }
      ]
    },
    Scuba_Bay: {
      key: "Scuba_Bay",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [{ artificial_scales: 45 }, { biolight: 45 }, { pearls: 45 }]
        },
        { reward: [{ type: "coin", value: 95000 }], cost: [{ biolight: 45 }, { corals: 45 }, { pearls: 45 }] },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [{ artificial_scales: 45 }, { pearls: 45 }, { orichalcum: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [{ artificial_scales: 45 }, { pearls: 45 }, { promethium: 75, type: "special_good" }]
        },
        { reward: [{ type: "supply", value: 90000 }], cost: [{ biolight: 45 }, { corals: 45 }, { plankton: 45 }] }
      ]
    },
    Seagull_Domain: {
      key: "Seagull_Domain",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ nanoparticles: 75 }, { ai_data: 40 }, { plankton: 30 }]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [{ superconductors: 75 }, { nanowire: 40 }, { biolight: 30 }]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [{ purified_water: 75 }, { bioplastics: 40 }, { pearls: 30 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ biogeochemical_data: 75 }, { transester_gas: 40 }, { promethium: 80, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 95000 }], cost: [{ algae: 75 }, { ai_data: 40 }, { corals: 30 }] },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ paper_batteries: 40 }, { artificial_scales: 30 }, { promethium: 100, type: "special_good" }]
        }
      ]
    },
    Tangled_Fins: {
      key: "Tangled_Fins",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ ai_data: 60 }, { bioplastics: 60 }, { promethium: 100, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ purified_water: 60 }, { ai_data: 60 }, { bioplastics: 60 }]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [{ nanoparticles: 60 }, { nanowire: 60 }, { transester_gas: 60 }]
        },
        {
          reward: [{ type: "coin", value: 95000 }],
          cost: [{ biogeochemical_data: 60 }, { bioplastics: 60 }, { orichalcum: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ superconductors: 60 }, { ai_data: 60 }, { paper_batteries: 60 }]
        }
      ]
    },
    Breakwater_Wharf: {
      key: "Breakwater_Wharf",
      reward: [{ type: "good", age: "OceanicFuture", value: 25 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ nanowire: 30 }, { transester_gas: 70 }, { pearls: 60 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 30 }, { paper_batteries: 70 }, { corals: 60 }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ bioplastics: 70 }, { paper_batteries: 30 }, { biolight: 60 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 30 }, { plankton: 60 }, { orichalcum: 100, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ ai_data: 70 }, { transester_gas: 30 }, { artificial_scales: 60 }]
        }
      ]
    },
    Adrift_Liner: {
      key: "Adrift_Liner",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ bioplastics: 50 }, { nanowire: 50 }, { artificial_scales: 70 }, { plankton: 30 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ nanowire: 50 }, { pearls: 30 }, { plankton: 70 }, { orichalcum: 70, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ nanowire: 50 }, { artificial_scales: 70 }, { pearls: 30 }, { promethium: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ ai_data: 50 }, { paper_batteries: 50 }, { biolight: 30 }, { corals: 70 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ ai_data: 50 }, { transester_gas: 50 }, { corals: 30 }, { pearls: 70 }]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ bioplastics: 50 }, { paper_batteries: 50 }, { biolight: 30 }, { corals: 70 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ bioplastics: 50 }, { transester_gas: 50 }, { artificial_scales: 30 }, { plankton: 70 }]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ bioplastics: 50 }, { nanowire: 50 }, { biolight: 70 }, { corals: 30 }]
        },
        {
          reward: [{ type: "supply", value: 65000 }],
          cost: [{ nanowire: 70 }, { transester_gas: 50 }, { biolight: 70 }, { plankton: 30 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ ai_data: 50 }, { paper_batteries: 50 }, { artificial_scales: 30 }, { pearls: 70 }]
        }
      ]
    },
    Bermuda_Quay: {
      key: "Bermuda_Quay",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1400000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ ai_data: 40 }, { paper_batteries: 40 }, { promethium: 75, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 35000 }],
          cost: [{ bioplastics: 40 }, { nanowire: 40 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 40 }, { paper_batteries: 40 }, { transester_gas: 40 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 40 }, { nanowire: 40 }, { orichalcum: 80, type: "special_good" }]
        },
        { reward: [{ type: "supply", value: 60000 }], cost: [{ ai_data: 40 }, { bioplastics: 40 }, { nanowire: 40 }] }
      ]
    },
    Sextant_Mast: {
      key: "Sextant_Mast",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ ai_data: 35 }, { biolight: 80 }, { orichalcum: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ paper_batteries: 85 }, { transester_gas: 35 }, { plankton: 80 }]
        },
        { reward: [{ type: "coin", value: 40000 }], cost: [{ bioplastics: 35 }, { nanowire: 85 }, { pearls: 80 }] },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ bioplastics: 85 }, { paper_batteries: 35 }, { artificial_scales: 80 }]
        },
        { reward: [{ type: "supply", value: 70000 }], cost: [{ ai_data: 35 }, { transester_gas: 85 }, { pearls: 80 }] },
        { reward: [{ type: "coin", value: 40000 }], cost: [{ ai_data: 85 }, { transester_gas: 35 }, { biolight: 80 }] }
      ]
    },
    Grog_Wash: {
      key: "Grog_Wash",
      reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
      sectors: [
        { reward: [{ type: "coin", value: 40000 }], cost: [{ ai_data: 60 }, { nanowire: 50 }, { pearls: 50 }] },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ paper_batteries: 60 }, { plankton: 50 }, { promethium: 80, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 45000 }], cost: [{ ai_data: 50 }, { nanowire: 60 }, { corals: 50 }] },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ bioplastics: 60 }, { transester_gas: 50 }, { biolight: 50 }]
        }
      ]
    },
    R_lyeh_Reef: {
      key: "R_lyeh_Reef",
      reward: [{ type: "coin", value: 1300000 }, { type: "supply", value: 1300000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ transester_gas: 70 }, { plankton: 55 }, { orichalcum: 100, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ bioplastics: 40 }, { paper_batteries: 70 }, { artificial_scales: 55 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ nanowire: 40 }, { pearls: 55 }, { orichalcum: 60, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ bioplastics: 70 }, { transester_gas: 40 }, { corals: 55 }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ ai_data: 70 }, { paper_batteries: 40 }, { plankton: 55 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ ai_data: 40 }, { paper_batteries: 70 }, { corals: 55 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ nanowire: 70 }, { artificial_scales: 55 }, { orichalcum: 80, type: "special_good" }]
        }
      ]
    },
    Capricorn_Waterway: {
      key: "Capricorn_Waterway",
      reward: [{ type: "good", age: "OceanicFuture", value: 40 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ nanowire: 30 }, { artificial_scales: 70 }, { promethium: 65, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ bioplastics: 65 }, { transester_gas: 30 }, { pearls: 70 }]
        },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ ai_data: 30 }, { paper_batteries: 65 }, { promethium: 90, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 40000 }],
          cost: [{ paper_batteries: 30 }, { transester_gas: 65 }, { biolight: 70 }]
        },
        { reward: [{ type: "supply", value: 75000 }], cost: [{ ai_data: 65 }, { bioplastics: 30 }, { plankton: 70 }] },
        {
          reward: [{ type: "supply", value: 75000 }],
          cost: [{ nanowire: 65 }, { corals: 70 }, { promethium: 80, type: "special_good" }]
        }
      ]
    },
    Barnacle_Deck: {
      key: "Barnacle_Deck",
      reward: [{ type: "coin", value: 1700000 }, { type: "supply", value: 1700000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ nanowire: 65 }, { artificial_scales: 55 }, { corals: 45 }]
        },
        { reward: [{ type: "coin", value: 70000 }], cost: [{ bioplastics: 65 }, { biolight: 45 }, { corals: 55 }] },
        { reward: [{ type: "coin", value: 70000 }], cost: [{ transester_gas: 65 }, { corals: 45 }, { plankton: 55 }] },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ artificial_scales: 45 }, { plankton: 55 }, { promethium: 100, type: "special_good" }]
        },
        { reward: [{ type: "supply", value: 80000 }], cost: [{ ai_data: 65 }, { biolight: 45 }, { pearls: 55 }] },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ biolight: 55 }, { plankton: 45 }, { orichalcum: 70, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [{ paper_batteries: 65 }, { biolight: 55 }, { plankton: 45 }]
        }
      ]
    },
    Ahab_s_Tomb: {
      key: "Ahab_s_Tomb",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [{ bioplastics: 40 }, { paper_batteries: 40 }, { transester_gas: 40 }, { plankton: 50 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ ai_data: 40 }, { nanowire: 40 }, { paper_batteries: 40 }, { biolight: 50 }]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [{ ai_data: 40 }, { nanowire: 40 }, { paper_batteries: 40 }, { corals: 50 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ ai_data: 40 }, { bioplastics: 40 }, { pearls: 50 }, { orichalcum: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [
            { bioplastics: 40 },
            { transester_gas: 40 },
            { artificial_scales: 50 },
            { orichalcum: 50, type: "special_good" }
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
          cost: [{ ai_data: 35 }, { nanowire: 75 }, { promethium: 120, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 75000 }], cost: [{ ai_data: 75 }, { paper_batteries: 35 }, { pearls: 60 }] },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [{ bioplastics: 35 }, { biolight: 60 }, { promethium: 90, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [{ ai_data: 35 }, { paper_batteries: 75 }, { corals: 60 }]
        },
        {
          reward: [{ type: "coin", value: 75000 }],
          cost: [{ bioplastics: 35 }, { transester_gas: 75 }, { artificial_scales: 60 }]
        },
        {
          reward: [{ type: "supply", value: 85000 }],
          cost: [{ bioplastics: 75 }, { transester_gas: 35 }, { corals: 60 }]
        },
        { reward: [{ type: "coin", value: 75000 }], cost: [{ nanowire: 35 }, { transester_gas: 75 }, { plankton: 60 }] }
      ]
    },
    Adamastor: {
      key: "Adamastor",
      reward: [{ type: "good", age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ ai_data: 65 }, { bioplastics: 25 }, { corals: 40 }, { orichalcum: 90, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ paper_batteries: 25 }, { transester_gas: 65 }, { artificial_scales: 40 }, { plankton: 40 }]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ ai_data: 65 }, { transester_gas: 25 }, { artificial_scales: 40 }, { corals: 40 }]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ nanowire: 25 }, { transester_gas: 65 }, { artificial_scales: 40 }, { corals: 40 }]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ nanowire: 25 }, { paper_batteries: 65 }, { artificial_scales: 40 }, { pearls: 40 }]
        },
        {
          reward: [{ type: "coin", value: 85000 }],
          cost: [{ ai_data: 25 }, { biolight: 40 }, { pearls: 40 }, { promethium: 90, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ bioplastics: 25 }, { nanowire: 65 }, { corals: 40 }, { plankton: 40 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ bioplastics: 65 }, { paper_batteries: 25 }, { biolight: 40 }, { plankton: 40 }]
        }
      ]
    },
    Deadeye_Admiral: {
      key: "Deadeye_Admiral",
      reward: [{ type: "coin", value: 1600000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ bioplastics: 30 }, { paper_batteries: 70 }, { transester_gas: 20 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ bioplastics: 70 }, { paper_batteries: 20 }, { transester_gas: 30 }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ ai_data: 20 }, { paper_batteries: 30 }, { orichalcum: 70, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ ai_data: 30 }, { nanowire: 20 }, { transester_gas: 70 }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ bioplastics: 20 }, { nanowire: 70 }, { transester_gas: 30 }]
        }
      ]
    },
    Monkey_s_Fist: {
      key: "Monkey_s_Fist",
      reward: [{ type: "coin", value: 1800000 }, { type: "supply", value: 1800000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ nanowire: 50 }, { paper_batteries: 40 }, { plankton: 55 }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ nanowire: 40 }, { biolight: 55 }, { promethium: 90, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ bioplastics: 50 }, { transester_gas: 40 }, { corals: 55 }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ ai_data: 40 }, { transester_gas: 50 }, { artificial_scales: 55 }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ paper_batteries: 50 }, { pearls: 55 }, { orichalcum: 90, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 100000 }], cost: [{ ai_data: 50 }, { bioplastics: 40 }, { pearls: 55 }] }
      ]
    },
    Dagon_s_Dagger: {
      key: "Dagon_s_Dagger",
      reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
      sectors: [
        { reward: [{ type: "coin", value: 100000 }], cost: [{ bioplastics: 30 }, { nanowire: 70 }, { pearls: 60 }] },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ nanowire: 70 }, { paper_batteries: 30 }, { plankton: 60 }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ ai_data: 30 }, { biolight: 60 }, { promethium: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ bioplastics: 70 }, { nanowire: 30 }, { artificial_scales: 60 }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ paper_batteries: 70 }, { transester_gas: 30 }, { corals: 60 }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ ai_data: 70 }, { bioplastics: 30 }, { artificial_scales: 60 }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ paper_batteries: 70 }, { plankton: 60 }, { orichalcum: 65, type: "special_good" }]
        }
      ]
    },
    Sunken_Leviathan: {
      key: "Sunken_Leviathan",
      reward: [{ type: "good", age: "OceanicFuture", value: 35 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 120000 }],
          cost: [{ bioplastics: 65 }, { nanowire: 55 }, { biolight: 40 }, { pearls: 50 }]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [{ bioplastics: 55 }, { nanowire: 65 }, { pearls: 50 }, { plankton: 40 }]
        },
        {
          reward: [{ type: "coin", value: 120000 }],
          cost: [
            { transester_gas: 65 },
            { artificial_scales: 40 },
            { corals: 50 },
            { orichalcum: 130, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [{ paper_batteries: 55 }, { biolight: 50 }, { corals: 40 }, { orichalcum: 100, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [{ ai_data: 65 }, { transester_gas: 55 }, { corals: 50 }, { pearls: 40 }]
        },
        {
          reward: [{ type: "coin", value: 120000 }],
          cost: [{ nanowire: 55 }, { transester_gas: 65 }, { artificial_scales: 50 }, { biolight: 40 }]
        },
        {
          reward: [{ type: "coin", value: 120000 }],
          cost: [{ ai_data: 55 }, { paper_batteries: 65 }, { artificial_scales: 40 }, { biolight: 50 }]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [{ ai_data: 55 }, { paper_batteries: 65 }, { corals: 50 }, { promethium: 75, type: "special_good" }]
        }
      ]
    },
    Behemoth: {
      key: "Behemoth",
      reward: [{ type: "good", age: "OceanicFuture", value: 35 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ nanowire: 70 }, { pearls: 65 }, { promethium: 110, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 50000 }], cost: [{ transester_gas: 70 }, { corals: 65 }, { plankton: 65 }] },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ ai_data: 70 }, { plankton: 65 }, { promethium: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ paper_batteries: 70 }, { artificial_scales: 65 }, { corals: 65 }]
        },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ artificial_scales: 65 }, { corals: 65 }, { orichalcum: 110, type: "special_good" }]
        },
        { reward: [{ type: "supply", value: 40000 }], cost: [{ nanowire: 70 }, { biolight: 65 }, { plankton: 65 }] },
        {
          reward: [{ type: "supply", value: 40000 }],
          cost: [{ bioplastics: 70 }, { corals: 65 }, { orichalcum: 130, type: "special_good" }]
        }
      ]
    },
    Privateer_Helm: {
      key: "Privateer_Helm",
      reward: [{ type: "coin", value: 1300000 }, { type: "supply", value: 1300000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ ai_data: 30 }, { transester_gas: 100 }, { artificial_scales: 70 }, { corals: 60 }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { paper_batteries: 30 },
            { transester_gas: 100 },
            { corals: 70 },
            { orichalcum: 90, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [
            { bioplastics: 100 },
            { artificial_scales: 60 },
            { plankton: 70 },
            { promethium: 100, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { nanowire: 100 },
            { artificial_scales: 60 },
            { pearls: 70 },
            { orichalcum: 120, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ bioplastics: 30 }, { paper_batteries: 100 }, { biolight: 70 }, { plankton: 60 }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 100 }, { nanowire: 30 }, { pearls: 60 }, { promethium: 90, type: "special_good" }]
        }
      ]
    },
    Anchorage_Ruin: {
      key: "Anchorage_Ruin",
      reward: [{ type: "coin", value: 1600000 }, { type: "supply", value: 1600000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ bioplastics: 65 }, { pearls: 50 }, { plankton: 40 }, { orichalcum: 75, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { ai_data: 55 },
            { paper_batteries: 65 },
            { artificial_scales: 50 },
            { orichalcum: 80, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ paper_batteries: 55 }, { biolight: 50 }, { corals: 40 }, { promethium: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { nanowire: 65 },
            { transester_gas: 55 },
            { artificial_scales: 40 },
            { promethium: 75, type: "special_good" }
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
          cost: [{ artificial_scales: 70 }, { biolight: 70 }, { promethium: 100, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 80000 }], cost: [{ ai_data: 50 }, { biolight: 70 }, { corals: 70 }] },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ transester_gas: 50 }, { pearls: 70 }, { orichalcum: 110, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ nanowire: 50 }, { pearls: 70 }, { orichalcum: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ bioplastics: 50 }, { plankton: 70 }, { promethium: 95, type: "special_good" }]
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
            { paper_batteries: 65 },
            { artificial_scales: 50 },
            { biolight: 40 },
            { orichalcum: 75, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ transester_gas: 65 }, { biolight: 50 }, { corals: 40 }, { orichalcum: 75, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ ai_data: 65 }, { bioplastics: 55 }, { pearls: 50 }, { promethium: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ ai_data: 55 }, { artificial_scales: 40 }, { plankton: 50 }, { promethium: 80, type: "special_good" }]
        }
      ]
    },
    Medusa_Cove: {
      key: "Medusa_Cove",
      reward: [{ type: "coin", value: 1800000 }, { type: "supply", value: 1800000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [{ biolight: 90 }, { pearls: 90 }, { promethium: 100, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ bioplastics: 65 }, { plankton: 90 }, { orichalcum: 125, type: "special_good" }]
        },
        { reward: [{ type: "supply", value: 80000 }], cost: [{ nanowire: 65 }, { corals: 90 }, { pearls: 90 }] },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [{ paper_batteries: 65 }, { biolight: 90 }, { orichalcum: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 65 }, { artificial_scales: 90 }, { promethium: 115, type: "special_good" }]
        }
      ]
    },
    Craggy_Cay: {
      key: "Craggy_Cay",
      reward: [{ type: "good", age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [
            { ai_data: 30 },
            { nanowire: 80 },
            { artificial_scales: 60 },
            { promethium: 130, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ nanowire: 30 }, { paper_batteries: 80 }, { corals: 40 }, { plankton: 60 }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ paper_batteries: 30 }, { transester_gas: 80 }, { pearls: 60 }, { plankton: 40 }]
        },
        { reward: [{ type: "supply", value: 70000 }], cost: [{ ai_data: 80 }, { biolight: 40 }, { corals: 60 }] }
      ]
    },
    Buccaneer_Plateau: {
      key: "Buccaneer_Plateau",
      reward: [{ type: "good_bonus", age: "EarlyMiddleAges" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ bioplastics: 80 }, { biolight: 50 }, { promethium: 110, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ paper_batteries: 80 }, { artificial_scales: 50 }, { corals: 50 }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ pearls: 50 }, { plankton: 50 }, { orichalcum: 110, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ ai_data: 80 }, { biolight: 50 }, { promethium: 105, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ artificial_scales: 50 }, { corals: 50 }, { orichalcum: 100, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [{ nanowire: 80 }, { promethium: 70, type: "special_good" }, { orichalcum: 70, type: "special_good" }]
        },
        { reward: [{ type: "coin", value: 100000 }], cost: [{ transester_gas: 80 }, { pearls: 50 }, { plankton: 50 }] }
      ]
    },
    Raging_Tides: {
      key: "Raging_Tides",
      reward: [{ type: "good", age: "OceanicFuture", value: 40 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 130000 }],
          cost: [{ biolight: 60 }, { corals: 60 }, { plankton: 60 }, { orichalcum: 105, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [{ biolight: 60 }, { corals: 60 }, { plankton: 60 }, { promethium: 105, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 130000 }],
          cost: [{ artificial_scales: 60 }, { corals: 60 }, { pearls: 60 }, { orichalcum: 100, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 120000 }],
          cost: [
            { artificial_scales: 60 },
            { biolight: 60 },
            { promethium: 65, type: "special_good" },
            { orichalcum: 70, type: "special_good" }
          ]
        }
      ]
    },
    Ahoy_Alee: {
      key: "Ahoy_Alee",
      reward: [{ type: "good", age: "OceanicFuture", value: 10 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ transester_gas: 60 }, { corals: 60 }, { plankton: 65 }, { promethium: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { paper_batteries: 75 },
            { corals: 60 },
            { promethium: 80, type: "special_good" },
            { orichalcum: 80, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ nanowire: 50 }, { artificial_scales: 60 }, { pearls: 70 }, { promethium: 90, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ ai_data: 80 }, { artificial_scales: 60 }, { biolight: 70 }, { corals: 65 }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { transester_gas: 80 },
            { plankton: 60 },
            { promethium: 70, type: "special_good" },
            { orichalcum: 75, type: "special_good" }
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
          cost: [{ biogeochemical_data: 60 }, { artificial_scales: 75 }, { orichalcum: 170, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [{ corals: 70 }, { pearls: 90 }, { orichalcum: 150, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { biogeochemical_data: 70 },
            { nanoparticles: 80 },
            { promethium: 65, type: "special_good" },
            { orichalcum: 100, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ artificial_scales: 70 }, { biolight: 80 }, { corals: 60 }, { plankton: 80 }]
        }
      ]
    },
    Ursula_s_Valley: {
      key: "Ursula_s_Valley",
      reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ bioplastics: 80 }, { corals: 65 }, { pearls: 70 }, { plankton: 80 }]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { transester_gas: 70 },
            { artificial_scales: 55 },
            { plankton: 60 },
            { orichalcum: 120, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { nanowire: 50 },
            { pearls: 50 },
            { promethium: 90, type: "special_good" },
            { orichalcum: 100, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ biolight: 65 }, { corals: 70 }, { pearls: 60 }, { orichalcum: 110, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { artificial_scales: 60 },
            { biolight: 55 },
            { promethium: 90, type: "special_good" },
            { orichalcum: 110, type: "special_good" }
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
          cost: [{ corals: 60 }, { pearls: 65 }, { plankton: 70 }, { orichalcum: 130, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { artificial_scales: 40 },
            { biolight: 55 },
            { promethium: 120, type: "special_good" },
            { orichalcum: 95, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [
            { artificial_scales: 60 },
            { pearls: 75 },
            { promethium: 75, type: "special_good" },
            { orichalcum: 90, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ corals: 60 }, { pearls: 75 }, { plankton: 50 }, { promethium: 100, type: "special_good" }]
        }
      ]
    },
    Idlers_Range: {
      key: "Idlers_Range",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { pearls: 50 },
            { plankton: 60 },
            { promethium: 95, type: "special_good" },
            { orichalcum: 100, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ algae: 40 }, { nanoparticles: 45 }, { pearls: 75 }, { orichalcum: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ algae: 60 }, { biogeochemical_data: 60 }, { artificial_scales: 85 }, { biolight: 90 }]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [
            { artificial_scales: 70 },
            { corals: 60 },
            { promethium: 80, type: "special_good" },
            { orichalcum: 100, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ biolight: 55 }, { corals: 60 }, { plankton: 65 }, { promethium: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [
            { artificial_scales: 50 },
            { pearls: 45 },
            { promethium: 90, type: "special_good" },
            { orichalcum: 110, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ artificial_scales: 60 }, { corals: 40 }, { plankton: 70 }, { promethium: 100, type: "special_good" }]
        }
      ]
    },
    Wherry_Gap: {
      key: "Wherry_Gap",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ corals: 80 }, { promethium: 120, type: "special_good" }, { orichalcum: 130, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ biolight: 95 }, { pearls: 80 }, { promethium: 150, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ artificial_scales: 70 }, { corals: 70 }, { orichalcum: 150, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ artificial_scales: 50 }, { corals: 50 }, { pearls: 55 }, { promethium: 140, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ biolight: 40 }, { plankton: 65 }, { promethium: 120, type: "special_good" }]
        }
      ]
    },
    Nock_s_Turn: {
      key: "Nock_s_Turn",
      reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1400000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [{ plankton: 95 }, { promethium: 70, type: "special_good" }, { orichalcum: 130, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ promethium: 130, type: "special_good" }, { orichalcum: 160, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ algae: 75 }, { artificial_scales: 90 }, { orichalcum: 150, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [
            { purified_water: 75 },
            { superconductors: 55 },
            { plankton: 80 },
            { promethium: 100, type: "special_good" }
          ]
        }
      ]
    },
    Scuttle_Ridge: {
      key: "Scuttle_Ridge",
      reward: [{ type: "good", age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ corals: 45 }, { promethium: 100, type: "special_good" }, { orichalcum: 140, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [
            { biolight: 65 },
            { plankton: 60 },
            { promethium: 80, type: "special_good" },
            { orichalcum: 100, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ artificial_scales: 75 }, { pearls: 80 }, { orichalcum: 160, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ biolight: 65 }, { corals: 75 }, { plankton: 60 }, { promethium: 90, type: "special_good" }]
        }
      ]
    },
    Neptune_s_Galleon: {
      key: "Neptune_s_Galleon",
      reward: [{ type: "good", age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ artificial_scales: 100 }, { pearls: 100 }, { promethium: 95, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ promethium: 145, type: "special_good" }, { orichalcum: 160, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ biogeochemical_data: 95 }, { superconductors: 75 }, { plankton: 135 }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ algae: 65 }, { purified_water: 45 }, { biolight: 90 }, { corals: 100 }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ superconductors: 80 }, { pearls: 75 }, { orichalcum: 150, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ pearls: 125 }, { promethium: 60, type: "special_good" }, { orichalcum: 130, type: "special_good" }]
        }
      ]
    },
    Scurvy_Atoll: {
      key: "Scurvy_Atoll",
      reward: [{ type: "good", age: "OceanicFuture", value: 20 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [{ algae: 70 }, { biolight: 140 }, { promethium: 90, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [
            { corals: 60 },
            { plankton: 80 },
            { promethium: 60, type: "special_good" },
            { orichalcum: 90, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ artificial_scales: 140 }, { biolight: 95 }, { promethium: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ nanoparticles: 80 }, { purified_water: 75 }, { orichalcum: 145, type: "special_good" }]
        }
      ]
    },
    Seafarer_s_Current: {
      key: "Seafarer_s_Current",
      reward: [{ type: "coin", value: 14400000 }, { type: "supply", value: 14400000 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ nanowire: 85 }, { paper_batteries: 80 }, { promethium: 130, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 60000 }],
          cost: [{ bioplastics: 50 }, { corals: 75 }, { plankton: 85 }, { orichalcum: 100, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ ai_data: 80 }, { transester_gas: 90 }, { orichalcum: 140, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ biolight: 80 }, { promethium: 80, type: "special_good" }, { orichalcum: 140, type: "special_good" }]
        }
      ]
    },
    Capsize_Lagoon: {
      key: "Capsize_Lagoon",
      reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 50000 }],
          cost: [{ promethium: 120, type: "special_good" }, { orichalcum: 180, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ superconductors: 65 }, { plankton: 95 }, { promethium: 140, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 70000 }],
          cost: [
            { nanoparticles: 80 },
            { promethium: 110, type: "special_good" },
            { orichalcum: 110, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [{ corals: 95 }, { plankton: 85 }, { orichalcum: 110, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ biolight: 45 }, { corals: 70 }, { pearls: 55 }, { orichalcum: 120, type: "special_good" }]
        }
      ]
    },
    Corsair_s_Skerry: {
      key: "Corsair_s_Skerry",
      reward: [{ type: "coin", value: 187500000 }, { type: "supply", value: 187500000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ purified_water: 85 }, { superconductors: 80 }, { orichalcum: 160, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 110000 }],
          cost: [
            { biogeochemical_data: 80 },
            { artificial_scales: 75 },
            { biolight: 70 },
            { orichalcum: 120, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 110000 }],
          cost: [
            { nanoparticles: 70 },
            { artificial_scales: 90 },
            { promethium: 80, type: "special_good" },
            { orichalcum: 100, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ algae: 65 }, { nanoparticles: 50 }, { pearls: 70 }, { promethium: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ promethium: 140, type: "special_good" }, { orichalcum: 150, type: "special_good" }]
        }
      ]
    },
    Undertow_Bank: {
      key: "Undertow_Bank",
      reward: [{ type: "coin", value: 1300000 }, { type: "supply", value: 1300000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ algae: 140 }, { orichalcum: 170, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 50000 }],
          cost: [
            { artificial_scales: 85 },
            { biolight: 65 },
            { promethium: 75, type: "special_good" },
            { orichalcum: 80, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ plankton: 135 }, { promethium: 100, type: "special_good" }, { orichalcum: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ biolight: 145 }, { pearls: 75 }, { promethium: 90, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ biogeochemical_data: 80 }, { purified_water: 100 }, { corals: 120 }]
        }
      ]
    },
    Blackwater_Cape: {
      key: "Blackwater_Cape",
      reward: [{ type: "expansion" }],
      sectors: [
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [{ promethium: 130, type: "special_good" }, { orichalcum: 160, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ nanowire: 80 }, { artificial_scales: 95 }, { orichalcum: 120, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ pearls: 85 }, { plankton: 80 }, { orichalcum: 150, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ artificial_scales: 100 }, { corals: 80 }, { pearls: 70 }, { orichalcum: 80, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 60000 }],
          cost: [{ bioplastics: 60 }, { corals: 95 }, { promethium: 150, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ paper_batteries: 90 }, { artificial_scales: 100 }, { biolight: 90 }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ ai_data: 75 }, { transester_gas: 85 }, { promethium: 140, type: "special_good" }]
        }
      ]
    },
    Typhoon_Peninsula: {
      key: "Typhoon_Peninsula",
      reward: [{ type: "good", age: "OceanicFuture", value: 30 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { bioplastics: 50 },
            { transester_gas: 60 },
            { plankton: 80 },
            { orichalcum: 120, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "coin", value: 110000 }],
          cost: [{ transester_gas: 95 }, { biolight: 100 }, { pearls: 100 }]
        },
        {
          reward: [{ type: "supply", value: 80000 }],
          cost: [{ ai_data: 55 }, { corals: 45 }, { promethium: 110, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 70000 }],
          cost: [{ plankton: 70 }, { promethium: 130, type: "special_good" }, { orichalcum: 100, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ paper_batteries: 50 }, { corals: 70 }, { plankton: 70 }, { promethium: 110, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [{ bioplastics: 50 }, { nanowire: 95 }, { orichalcum: 145, type: "special_good" }]
        }
      ]
    },
    Mutiny_Canyon: {
      key: "Mutiny_Canyon",
      reward: [{ type: "good", age: "OceanicFuture", value: 40 }],
      sectors: [
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ algae: 55 }, { promethium: 120, type: "special_good" }, { orichalcum: 135, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 110000 }],
          cost: [{ nanoparticles: 60 }, { corals: 100 }, { orichalcum: 150, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ promethium: 145, type: "special_good" }, { orichalcum: 145, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ biolight: 55 }, { pearls: 70 }, { plankton: 55 }, { promethium: 130, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ artificial_scales: 85 }, { pearls: 75 }, { orichalcum: 150, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 90000 }],
          cost: [
            { biogeochemical_data: 75 },
            { biolight: 75 },
            { plankton: 65 },
            { orichalcum: 100, type: "special_good" }
          ]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ purified_water: 75 }, { superconductors: 65 }, { promethium: 150, type: "special_good" }]
        }
      ]
    },
    Leviathan_Wreck: {
      key: "Leviathan_Wreck",
      reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
      sectors: [
        {
          reward: [{ type: "supply", value: 90000 }],
          cost: [{ corals: 80 }, { plankton: 90 }, { orichalcum: 140, type: "special_good" }]
        },
        {
          reward: [{ type: "supply", value: 100000 }],
          cost: [{ pearls: 120 }, { promethium: 175, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 100000 }],
          cost: [{ promethium: 130, type: "special_good" }, { orichalcum: 160, type: "special_good" }]
        },
        {
          reward: [{ type: "coin", value: 80000 }],
          cost: [{ artificial_scales: 85 }, { biolight: 70 }, { corals: 60 }, { orichalcum: 110, type: "special_good" }]
        }
      ]
    }
  }
};

module.exports.campaignCost = campaignCost;
