// Get locales (and common)
const common = require("../locales/common.json");
const en = require("../locales/en.json");
const fr = require("../locales/fr.json");
const de = require("../locales/de.json");
const ru = require("../locales/ru.json");
const nl = require("../locales/nl.json");

// Requires al packages
const i18next = require("i18next");
let numeral = require("numeral");
require("numeral/locales/nl-nl");

// Constant used
const defaultLocale = "en";
const supportedLocales = ["en", "fr", "de", "ru", "nl"];
const languageList = ["common"].concat(supportedLocales);
const resources = { common, en, fr, de, ru, nl };

const numeralSpecialLocales = {
  nl: "nl-nl"
};

i18next.init({
  lng: defaultLocale,
  debug: false,
  whitelist: languageList,
  ns: ["common", "translation"],
  fallbackLng: languageList,
  fallbackNS: ["common"],
  resources,
  interpolation: {
    format: function(value, format, lng) {
      if (format === "number") {
        if (numeralSpecialLocales[lng]) {
          numeral.locale(numeralSpecialLocales[lng]);
        } else {
          numeral.locale(lng);
        }
        return numeral(value).format("0,0");
      }
      return value;
    }
  }
});

exports.i18next = i18next;
exports.defaultLocale = defaultLocale;
exports.supportedLocales = supportedLocales;
exports.numeralSpecialLocales = numeralSpecialLocales;
