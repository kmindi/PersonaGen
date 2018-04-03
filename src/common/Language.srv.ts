import { IVueI18n } from "vue-i18n";
import { config } from "../conf/config";
import i18nDe from "../i18n/de";
import i18nEn from "../i18n/en";

export default {
    localeKey: `${config.appId}_i18nLocale` as string,
    i18n: undefined,

    init(i18n: IVueI18n) {
        this.i18n = i18n;
        this.i18n.setLocaleMessage("en", i18nEn);
        this.i18n.setLocaleMessage("de", i18nDe);

        const locale = localStorage.getItem(this.localeKey) || "en";
        this.changeLocale(locale);
    },

    changeLocale(locale: string) {
        this.i18n.locale = locale;
        localStorage.setItem(this.localeKey, locale);
    }

};
