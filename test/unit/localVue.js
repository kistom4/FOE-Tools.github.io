import { config } from "@vue/test-utils";
import { createLocalVue } from "@vue/test-utils";

// create an extended `Vue` constructor
export const localVue = createLocalVue();

//////////
// Vuex //
//////////

import Vuex from "vuex";
import * as storeStructure from "~/store/index";
localVue.use(Vuex);

export const store = new Vuex.Store(storeStructure);

///////////////
// Clipboard //
///////////////

import VueClipboards from "vue-clipboards";

localVue.use(VueClipboards);

/////////////
// i18next //
/////////////

import VueI18Next from "@panter/vue-i18next";
import { i18next, defaultLocale, supportedLocales } from "~/scripts/i18n";

localVue.use(VueI18Next);

export const i18n = new VueI18Next(i18next);

localVue.use({
  install(Vue) {
    Vue.prototype.i18n = i18n;
    Vue.prototype.$t = key => i18next.t(key);
    Vue.prototype.defaultLocale = defaultLocale;
    store.state.supportedLocales = supportedLocales;
  }
});

/////////////
// Numeral //
/////////////

import VueNumeral from "~/plugins/numeral";

localVue.use(VueNumeral);

///////////
// Buefy //
///////////

import Buefy from "buefy";

localVue.use(Buefy, { defaultIconPack: "fas", materialDesignIcons: false });

///////////////////
// Global Config //
///////////////////

config.mocks["$cookies"] = {
  get: jest.fn().mockImplementation(key => {
    switch (key) {
      case "locale":
        return i18next.language;
    }
    return null;
  }),
  set: jest.fn()
};
