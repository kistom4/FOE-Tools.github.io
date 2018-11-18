import i18n from "../../../scripts/i18n";
import Utils from "../../../scripts/utils";
import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

describe("Utils", () => {
  describe("getFormatedDuration", () => {
    test("1 year 2 months 25 days", () => {
      const duration = moment.duration({
        seconds: 7,
        minutes: 6,
        hours: 5,
        days: 4,
        weeks: 3,
        months: 2,
        years: 1
      });

      const result = Utils.getFormatedDuration(duration, i18n.i18next);

      expect(result).toBe("1 year 2 months 25 days");
    });

    test("2 years 1 month 1 day", () => {
      const duration = moment.duration({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 1,
        weeks: 0,
        months: 1,
        years: 2
      });

      const result = Utils.getFormatedDuration(duration, i18n.i18next);

      expect(result).toBe("2 years 1 month 1 day");
    });

    test("3 years 2 days", () => {
      const duration = moment.duration({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 2,
        weeks: 0,
        months: 0,
        years: 3
      });

      const result = Utils.getFormatedDuration(duration, i18n.i18next);

      expect(result).toBe("3 years 2 days");
    });

    test("1 month", () => {
      const duration = moment.duration({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        weeks: 0,
        months: 1,
        years: 0
      });

      const result = Utils.getFormatedDuration(duration, i18n.i18next);

      expect(result).toBe("1 month");
    });

    test("21 days", () => {
      const duration = moment.duration({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 21,
        weeks: 0,
        months: 0,
        years: 0
      });

      const result = Utils.getFormatedDuration(duration, i18n.i18next);

      expect(result).toBe("21 days");
    });

    test("Throw error when null duration", () => {
      expect(() => Utils.getFormatedDuration(null, i18n.i18next)).toThrow(Utils.NullOrEmptyArgError);
    });

    test("Throw error when empty duration string", () => {
      expect(() => Utils.getFormatedDuration("", i18n.i18next)).toThrow(Utils.NullOrEmptyArgError);
    });

    test("Throw error when empty duration object", () => {
      expect(() => Utils.getFormatedDuration({}, i18n.i18next)).toThrow(Utils.NullOrEmptyArgError);
    });

    test("Throw error when duration is an invalid object", () => {
      expect(() =>
        Utils.getFormatedDuration(
          {
            seconds: 7,
            minutes: 6,
            hours: 5,
            days: 4,
            weeks: 3,
            months: 2,
            years: 1
          },
          i18n.i18next
        )
      ).toThrow(Utils.InvalidTypeError("Duration", "Object"));
    });

    test("Throw error when null i18next", () => {
      expect(() => Utils.getFormatedDuration(null, i18n.i18next)).toThrow(Utils.NullOrEmptyArgError);
    });

    test("Throw error when empty i18next string", () => {
      expect(() => Utils.getFormatedDuration("", i18n.i18next)).toThrow(Utils.NullOrEmptyArgError);
    });

    test("Throw error when empty i18next object", () => {
      expect(() => Utils.getFormatedDuration({}, i18n.i18next)).toThrow(Utils.NullOrEmptyArgError);
    });
  });

  describe("inRange", () => {
    test("2 in range [1;3]", () => {
      expect(Utils.inRange(2, 1, 3)).toBe(true);
    });

    test("4 not in range [1;3]", () => {
      expect(Utils.inRange(4, 1, 3)).toBe(false);
    });

    test("Throw invalid type error when value is not a number", () => {
      expect(() => Utils.inRange("1", 2, 3)).toThrow(
        Utils.InvalidTypeError("number", {
          value: "string",
          lowerBound: "number",
          upperBound: "number"
        })
      );
    });

    test("Throw invalid type error when lowerBound is null", () => {
      expect(() => Utils.inRange(1, null, 3)).toThrow(
        Utils.InvalidTypeError("number", {
          value: "number",
          lowerBound: "Object",
          upperBound: "number"
        })
      );
    });

    test("Throw invalid type error when upperBound is not a number", () => {
      expect(() => Utils.inRange("1", 2, () => false)).toThrow(
        Utils.InvalidTypeError("number", {
          value: "number",
          lowerBound: "number",
          upperBound: "function"
        })
      );
    });
  });
});
