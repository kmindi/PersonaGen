import { createLocalVue, mount, shallow } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import Vue from "vue";
import { Generator } from "../src/components/personas/Generator";
import Persona from "../src/components/personas/Persona.vue";

describe("Persona.vue Component", () => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);


    it("is vue instance", () => {
        const persona = Generator.generate(1);
        const wrapper = shallow(Persona, {
            localVue,
            propsData: {
                persona
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

});
