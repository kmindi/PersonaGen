<template>
    <div>
        <h1>Personas</h1>
        <button class="btn btn-primary" v-on:click="refresh">Refresh</button>

        <persona v-for="per in personas" v-bind:key="per.name" v-bind:persona="per"></persona>
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

    public mounted() {
        this.refresh();
    }

    public refresh() {
        this.personas = Generator.generate();
    }
}
</script>

<style scoped lang="less">

</style>