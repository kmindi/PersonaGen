import { config } from "../conf/config";
import i18nDe from "../i18n/de";
import i18nEn from "../i18n/en";
import VueI18Next from '@panter/vue-i18next';

export default {
    localeKey: `${config.appId}_i18nLocale` as string,
    i18n: undefined,

    init(i18n: VueI18Next) {
        this.i18n = i18n;
        
        const locale = localStorage.getItem(this.localeKey) || "en";
        
        this.i18n.init({
            lng: locale,
            resources: {
                en: { translation: i18nEn },
                de: { translation: i18nDe },
            }
        });
    },

    changeLocale(locale: string) {
        this.i18n.changeLanguage(locale);
        localStorage.setItem(this.localeKey, locale);
    }

};
