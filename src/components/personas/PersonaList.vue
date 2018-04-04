<template>
    <div>
        <button class="btn btn-primary" v-on:click="generate">Generate</button>
        <input type="number" v-model="numberOfPersonas" />

        <persona v-for="per in personas" v-bind:key="per.prename+per.name" v-bind:persona="per"></persona>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { config } from "../../conf/config";

import { Generator } from "../personas/Generator";
import { IPersona } from "../personas/Persona.interface";
import Persona from "./Persona.vue";

@Component({
    components: {
        persona: Persona
    }
})
export default class extends Vue {
    private personas: IPersona[] = [];
    private numberOfPersonas: number = 2;

    public mounted() {
        this.generate();
    }

    public generate() {
        this.personas = Generator.generate(this.numberOfPersonas);
        this.$parent.$emit(
            "alert-event",
            {
                type: "success",
                message: this.$t("MESSAGES.PERSONA_GENERATION_SUCCESS", { amount: this.personas.length })
            }
        );
    }
}
</script>

<style scoped lang="less">

</style>
