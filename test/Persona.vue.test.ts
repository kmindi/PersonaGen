import { createLocalVue, mount, shallow } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import Vue from "vue";
import I18n from "vue-i18n";
import { Generator } from "../src/components/personas/Generator";
import Persona from "../src/components/personas/Persona.vue";
import i18nDe from "../src/i18n/de";
import i18nEn from "../src/i18n/en";

describe("Persona.vue Component", () => {

    const localVue = createLocalVue();

    localVue.use(BootstrapVue);
    localVue.use(I18n);
    const i18n = new I18n({
        locale: "en",
        messages: {
            en: i18nEn,
            de: i18nDe
        }
    });

    it("is vue instance", () => {



        const persona = Generator.generate(1);
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
