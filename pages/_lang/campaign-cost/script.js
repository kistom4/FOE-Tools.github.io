import campaignCost from "~/components/campaign-cost/CampaignCost";

const i18nPrefix = "routes.campaign_cost.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "campaign_cost");
    this.$store.commit("RESTORE_HERO");

    return {
      i18nPrefix: i18nPrefix
    };
  },
  components: {
    campaignCost
  }
};
