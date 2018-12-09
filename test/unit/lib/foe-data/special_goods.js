import specialGoods from "../../../../lib/foe-data/special_goods";

// For coverage
describe("Special goods", function() {
  test("Valid value", () => {
    expect(specialGoods).toBeTruthy();
  });
});
