import VueI18Next from "@panter/vue-i18next";
import { createLocalVue, mount, shallow } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import i18next from "i18next";
import Vue from "vue";
import { Generator } from "../src/components/personas/Generator";
import { IPersona } from "../src/components/personas/Persona.interface";
import Persona from "../src/components/personas/Persona.vue";
import i18nDe from "../src/i18n/de";
import i18nEn from "../src/i18n/en";

describe("Persona.vue Component", () => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(VueI18Next);
    i18next.init({
        lng: "en",
        resources: {
            en: { translation: i18nEn },
            de: { translation: i18nDe }
        }
    });
    const i18n = new VueI18Next(i18next);

    it("is vue instance", () => {
        const persona = Generator.generate(1)[0];
        const wrapper = shallow(Persona, {
            localVue,
            i18n,
            propsData: {
                persona
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

});
