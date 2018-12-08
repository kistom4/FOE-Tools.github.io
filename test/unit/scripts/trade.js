import * as Trade from "../../../scripts/trade";
import Errors from "../../../scripts/errors";

describe("Trade", () => {
  describe("splitGoods", () => {
    const errorValues = [
      // toValue
      {
        isTypeError: true, // false for bound error
        value: { toValue: "a", splitValue: 10, ratioFromTo: 2, ratioToFrom: 0.5 },
        valueType: "string",
        paramName: "toValue"
      },
      {
        isTypeError: false,
        value: { toValue: -1, splitValue: 10, ratioFromTo: 2, ratioToFrom: 0.5 },
        valueType: "number",
        paramName: "toValue"
      },

      // splitValue
      {
        isTypeError: true,
        value: { toValue: 105, splitValue: {}, ratioFromTo: 2, ratioToFrom: 0.5 },
        valueType: "object",
        paramName: "splitValue"
      },
      {
        isTypeError: false,
        value: { toValue: 105, splitValue: 0, ratioFromTo: 2, ratioToFrom: 0.5 },
        valueType: "number",
        paramName: "splitValue"
      },

      // ratioFromTo
      {
        isTypeError: true,
        value: { toValue: 105, splitValue: 10, ratioFromTo: false, ratioToFrom: 0.5 },
        valueType: "boolean",
        paramName: "ratioFromTo"
      },
      {
        isTypeError: false,
        value: { toValue: 105, splitValue: 10, ratioFromTo: -1, ratioToFrom: 0.5 },
        valueType: "number",
        paramName: "ratioFromTo"
      },

      // ratioToFrom
      {
        isTypeError: true,
        value: { toValue: 105, splitValue: 10, ratioFromTo: 2, ratioToFrom: "a" },
        valueType: "string",
        paramName: "ratioToFrom"
      },
      {
        isTypeError: false,
        value: { toValue: 105, splitValue: 10, ratioFromTo: 2, ratioToFrom: -1 },
        valueType: "number",
        paramName: "ratioToFrom"
      }
    ];

    test("Valid value", () => {
      const result = Trade.splitGoods(105, 10, 2, 0.5);
      expect(result).toEqual([{ from: 5, to: 10, count: 10 }, { from: 3, to: 5 }]);
    });

    for (let errorvalue of errorValues) {
      test(`Throw error when ${errorvalue.isTypeError ? "type" : "bound"} of ${
        errorvalue.paramName
      } are invalid`, () => {
        if (errorvalue.isTypeError) {
          expect(() =>
            Trade.splitGoods(
              errorvalue.value.toValue,
              errorvalue.value.splitValue,
              errorvalue.value.ratioFromTo,
              errorvalue.value.ratioToFrom
            )
          ).toThrow(
            Errors.InvalidTypeError(
              "number",
              errorvalue.valueType,
              `for parameter "${errorvalue.paramName}" of splitGoods(toValue, splitValue, ratioFromTo, ratioToFrom)`
            )
          );
        } else {
          expect(() =>
            Trade.splitGoods(
              errorvalue.value.toValue,
              errorvalue.value.splitValue,
              errorvalue.value.ratioFromTo,
              errorvalue.value.ratioToFrom
            )
          ).toThrow(
            Errors.BoundExceededError(
              Errors.AvailableBoundTypes["<="],
              errorvalue.value[errorvalue.paramName],
              0,
              `for parameter "${errorvalue.paramName}" of splitGoods(toValue, splitValue, ratioFromTo, ratioToFrom)`
            )
          );
        }
      });
    }
  });
});
