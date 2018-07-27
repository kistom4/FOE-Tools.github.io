import allContributorsrc from "~/all-contributorsrc.json";
import Utils from "~/scripts/utils";

const i18nPrefix = "routes.contributors.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return {
      title: this.$t(i18nPrefix + "title")
    };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "contributors");

    return {
      i18nPrefix,
      allContributorsrc,
      contributors: Utils.splitArray(allContributorsrc.contributors, 2, true)
    };
  }
};
