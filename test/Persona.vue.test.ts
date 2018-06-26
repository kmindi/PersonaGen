import VueI18Next from "@panter/vue-i18next";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import i18next from "i18next";
import Vue from "vue";
import { PersonaClass } from "../src/components/personas/Generator";
import { IPersona } from "../src/components/personas/Persona.interface";
import PersonaView from "../src/components/personas/Persona.vue";
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

    const persona = PersonaClass.generate(1)[0];
    const wrapper = shallowMount(PersonaView, {
        localVue,
        i18n,
        propsData: {
            persona
        }
    });

    it("should be a vue instance", () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it("should contain an image", () => {
        expect(wrapper.html()).toContain("<img ");
    });

    it("should display the persona full name", () => {
        expect(wrapper.contains("#persona-fullname")).toBe(true);
        expect(wrapper.find("#persona-fullname").html()).toContain(`${persona.prename} ${persona.name}`);
    });
});
