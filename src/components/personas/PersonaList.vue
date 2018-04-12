<template>
    <div>
        <form class="form-inline" v-on:submit.prevent="noop">
            <button class="btn btn-primary mb-2 mr-sm-2" v-on:click="generate">{{$t("COMPONENTS.PERSONAS.GENERATE")}}</button>
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">{{$t("COMPONENTS.PERSONAS.AMOUNT")}}</div>
                </div>
                <input class="form-control" type="number" v-model="numberOfPersonas" min="1" max="100" v-on:keypress.enter="generate" />
            </div>
        </form>

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
    private numberOfPersonas: number = 1;

    public mounted() {
        this.generate();
    }

    public generate() {
        this.personas = Generator.generate(this.numberOfPersonas);
        let alert;

        if (this.numberOfPersonas > this.personas.length) {
            this.numberOfPersonas = this.personas.length;
            alert = {
                type: "warning",
                message: `${this.$t("messages.personaGenerationMaxReached")} ${this.$t("messages.personaGenerationSuccess", { count: this.personas.length })}`
            };
        } else {
            alert = {
                type: "success",
                message: this.$t("messages.personaGenerationSuccess", { count: this.personas.length })
            };
        }
        this.$parent.$emit("alert-event", alert);
    }

    // Do nothing to prevent form submission from reloading the page
    public noop() {
        Function.prototype();
    }
}
</script>

<style scoped lang="less">

</style>
