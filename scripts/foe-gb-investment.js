/**
 * Error throw when the value of the participation for the current place is greater than the previous place.
 * @param index Index of the place
 */
function InvalidParticipationException(index) {
  this.message = `The value at index ${index} should not be greater than the previous place participation`;
  this.index = index;
}

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
  if (!defaultParticipation) {
    defaultParticipation = Array.apply(null, Array(gb[currentLevel - 1].reward.length)).map(() => 0);
  }

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
        throw new InvalidParticipationException(i);
      }
      investment.participation = defaultParticipation[i];
    }

    // Compute the cost to secure the place
    investment.preparation = obj.cost - (cumulativeParticipation + investment.participation * 2);
    investment.preparation = investment.preparation < 0 ? 0 : investment.preparation;

    cumulativeParticipation += investment.participation;
    maxPreparation = Math.max(maxPreparation, investment.preparation);
    investment.cumulativeInvestment = cumulativeParticipation + maxPreparation;
    if (!levelCostReached && cumulativeParticipation + maxPreparation >= obj.cost) {
      levelCostReached = true;
    }

    obj.investment[obj.investment.length] = investment;
  }

  obj.totalPreparations =
    obj.investment[obj.investment.length - 1].preparation === 0
      ? 0
      : obj.investment[obj.investment.length - 1].preparation + obj.investment[obj.investment.length - 1].participation;
  obj.level = currentLevel;

  return obj;
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
    if (currentLevel < 1 || currentLevel > gb.length) {
      // Triggering an error
      return;
    }

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
    if (from < 1 || from > gb.length || to < 1 || to > gb.length || from > to) {
      // Triggering an error
      return;
    }

    let result = {
      global: {
        cost: 0,
        totalPreparations: 0
      },
      levels: []
    };

    for (let i = from; i <= to; i++) {
      result.levels.push(this.Submit(i, investorPercentage, gb, null));
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
        roi = Math.round((1 + yourArcBonus / 100) * fpTargetReward - result);
      }
      return {
        fp: result,
        roi: roi
      };
    }
  }
};
