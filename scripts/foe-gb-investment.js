import Utils from "./utils";
import Errors from "./errors";

/**
 * Get all data from GB for a specific level
 *
 * @param gb {object} Pointer of Great Building
 * @param currentLevel {number} Current level
 * @param investorPercentage {Array} percentage of investors (Arc)
 * @param defaultParticipation {Array} Default participation used if reward of the place is equal to 0.
 * If null, all default place participation are set to 0.
 * @return {object}
 */
function getValues(gb, currentLevel, investorPercentage, defaultParticipation) {
  const obj = {};
  obj.cost = gb[currentLevel - 1].cost;
  obj.investment = [];

  let levelCostReached = false;
  let cumulativeParticipation = 0;
  let maxPreparation = 0;

  for (let i = 0; i < gb[currentLevel - 1].reward.length; i++) {
    const investment = {};
    const factor = 1 + investorPercentage[i] / 100;

    // Compute the participation of the investor
    investment.reward = gb[currentLevel - 1].reward[i];
    investment.participation = 0;
    if (investment.reward > 0) {
      investment.participation = Math.round(investment.reward * factor);
    } else if (!levelCostReached) {
      if (defaultParticipation[i] > obj.investment[obj.investment.length - 1].participation) {
        throw Errors.InvalidParticipationException(i);
      }
      investment.participation = defaultParticipation[i];
    }

    // Compute the cost to secure the place
    investment.preparation = obj.cost - (cumulativeParticipation + investment.participation * 2);
    investment.preparation = investment.preparation < 0 ? 0 : investment.preparation;
    if (obj.investment.length > 0 && investment.preparation < obj.investment[obj.investment.length - 1].preparation) {
      investment.preparation = obj.investment[obj.investment.length - 1].preparation;
    }

    cumulativeParticipation += investment.participation;
    maxPreparation = Math.max(maxPreparation, investment.preparation);
    investment.cumulativeInvestment = cumulativeParticipation + maxPreparation;
    if (!levelCostReached && cumulativeParticipation + maxPreparation >= obj.cost) {
      levelCostReached = true;
    }

    obj.investment[obj.investment.length] = investment;
  }

  obj.totalPreparations = obj.cost - cumulativeParticipation;
  obj.totalPreparations = obj.totalPreparations < 0 ? 0 : obj.totalPreparations;
  obj.level = currentLevel;

  return obj;
}

/**
 * Check if a numeric parameter are valid. Throw an error if the value are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param value Value of this parameter
 */
function checkValidNumberInputParameter(paramName, funcName, value) {
  if (typeof value !== "number") {
    throw Errors.InvalidTypeError("number", typeof value, `for parameter "${paramName}" of ${funcName}`);
  } else if (value < 0) {
    throw Errors.BoundExceededError(
      Errors.AvailableBoundTypes["<"],
      value,
      0,
      `for parameter "${paramName}" of ${funcName}`
    );
  }
}

/**
 * Check if a numeric array are valid. Throw an error if the array are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param array Array of this parameter that should contains only numeric values >= 0
 */
function checkNumericArray(paramName, funcName, array) {
  if (!(array instanceof Array)) {
    throw Errors.InvalidTypeError("Array", typeof array, `for parameter "${paramName}" of ${funcName}`);
  }

  array.forEach((value, index) => {
    checkValidNumberInputParameter(`${paramName}[${index}]`, funcName, value);
  });
}

/**
 * Check if a gb array are valid. Throw an error if the gb array are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param gb GB array of this parameter
 */
function checkGbData(paramName, funcName, gb) {
  if (!(gb instanceof Array)) {
    throw Errors.InvalidTypeError("Array", typeof gb, `for parameter "${paramName}" of ${funcName}`);
  }

  gb.forEach((value, index) => {
    if (!("cost" in value)) {
      throw Errors.KeyNotFoundError("cost", `${paramName}[${index}]`, `in "checkGbData" called by ${funcName}`);
    }
    if (!("reward" in value)) {
      throw Errors.KeyNotFoundError("reward", `${paramName}[${index}]`, `in "checkGbData" called by ${funcName}`);
    }
    checkValidNumberInputParameter(`${paramName}[${index}].cost`, funcName, value.cost);
    checkNumericArray(`${paramName}[${index}].reward`, funcName, value.reward);
  });
}

export default {
  /**
   * Get all data from GB for a specific level
   *
   * @param currentLevel {number} Current level
   * @param investorPercentage {Array} percentage of investors (Arc)
   * @param gb {object} Pointer of Great Building
   * @param defaultParticipation {Array} Default participation used if reward of the place is equal to 0.
   * If null, all default place participation are set to 0.
   * @return {object}
   */
  Submit(currentLevel, investorPercentage, gb, defaultParticipation) {
    const funcName = "Submit(currentLevel, investorPercentage, gb, defaultParticipation)";

    checkGbData("gb", funcName, gb);
    if (!Utils.inRange(currentLevel, 1, gb.length)) {
      throw Errors.NotInBoundsError(currentLevel, 1, gb.length, `for parameter "currentLevel" of ${funcName}`);
    }
    checkNumericArray("investorPercentage", funcName, investorPercentage);
    checkNumericArray("defaultParticipation", funcName, defaultParticipation);

    return getValues(gb, currentLevel, investorPercentage, defaultParticipation);
  },

  /**
   * Get all data from GB for a range of levels
   *
   * @param from {number} From this level
   * @param to {number} To this level
   * @param investorPercentage {Array} percentage of investors (Arc)
   * @param gb {object} Pointer of Great Building
   * @return {object}
   */
  SubmitRange(from, to, investorPercentage, gb) {
    const funcName = "SubmitRange(from, to, investorPercentage, gb)";
    checkGbData("gb", funcName, gb);
    if (!Utils.inRange(from, 1, gb.length)) {
      throw Errors.NotInBoundsError(from, 1, gb.length, `for parameter "from" of ${funcName}`);
    }
    if (!Utils.inRange(to, 1, gb.length)) {
      throw Errors.NotInBoundsError(to, 1, gb.length, `for parameter "to" of ${funcName}`);
    }
    checkNumericArray("investorPercentage", funcName, investorPercentage);

    let start;
    let end;

    if (from > to) {
      start = to;
      end = from;
    } else {
      start = from;
      end = to;
    }

    let result = {
      global: {
        cost: 0,
        totalPreparations: 0
      },
      levels: []
    };

    for (let i = start; i <= end; i++) {
      result.levels.push(
        this.Submit(i, investorPercentage, gb, Array.apply(null, Array(gb[i - 1].reward.length)).map(() => 0))
      );
      result.global.cost += result.levels[result.levels.length - 1].cost;
      result.global.totalPreparations += result.levels[result.levels.length - 1].totalPreparations;
    }

    return result;
  },

  /**
   * Compute the necessary amount of FP to secure a place.
   * @param levelCost {number}
   * @param currentDeposits {number}
   * @param yourParticipation {number}
   * @param otherParticipation {number}
   * @param yourArcBonus {number}
   * @param fpTargetReward {number}
   * @return {Object} Return an object that contains:
   *  - fp: fp needed to secure the a place
   *  - roi: Return of investment (if yourArcBonus >= 0 && fpTargetReward > 0), otherwise it is set to 0
   */
  ComputeSecurePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, yourArcBonus, fpTargetReward) {
    const funcName =
      "ComputeSecurePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, " +
      "yourArcBonus, fpTargetReward)";
    checkValidNumberInputParameter("levelCost", funcName, levelCost);
    checkValidNumberInputParameter("currentDeposits", funcName, currentDeposits);
    checkValidNumberInputParameter("yourParticipation", funcName, yourParticipation);
    checkValidNumberInputParameter("otherParticipation", funcName, otherParticipation);
    checkValidNumberInputParameter("yourArcBonus", funcName, yourArcBonus);
    checkValidNumberInputParameter("fpTargetReward", funcName, fpTargetReward);

    let result =
      Math.ceil((levelCost - currentDeposits - (otherParticipation - yourParticipation)) / 2) + otherParticipation;

    if (result <= otherParticipation) {
      return {
        fp: -1,
        roi: 0
      };
    } else {
      let roi = 0;
      if (yourArcBonus >= 0 && fpTargetReward > 0) {
        const investment = result > yourParticipation ? result : yourParticipation;
        const factor = (100 + yourArcBonus) / 100;
        roi = Math.round(factor * fpTargetReward - investment);
      }
      return {
        fp: result,
        roi: roi
      };
    }
  }
};
