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
            <b-dropdown class="mb-2" v-bind:text="$t(`COMPONENTS.PERSONAS.EXPORT`)">
                <b-dropdown-item v-on:click="exportAsJson">JSON</b-dropdown-item>
                <b-dropdown-item v-on:click="exportAsPdf">PDF</b-dropdown-item>
            </b-dropdown>
        </form>

        <carousel v-if="personas.length" class="container" :per-page="1" :navigation-enabled="personas.length > 1" :pagination-enabled="false" :loop="true" :speed="175">
            <slide v-for="per in personas" v-bind:key="per.prename+per.name">
                <persona v-bind:persona="per"></persona>
            </slide>
        </carousel>
    </div>
</template>

<script lang="ts">
import FileSaver from "file-saver";
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
  private numberOfPersonas = 1;
  private currentPersona = 0;

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
        message: `${this.$t("messages.personaGenerationMaxReached")} ${this.$t(
          "messages.personaGenerationSuccess",
          { count: this.personas.length }
        )}`
      };
    } else {
      alert = {
        type: "success",
        message: this.$t("messages.personaGenerationSuccess", {
          count: this.personas.length
        })
      };
    }
    this.$parent.$emit("alert-event", alert);
  }

  // Do nothing to prevent form submission from reloading the page
  public noop() {
    Function.prototype();
  }

  public exportAsJson() {
    const blob = new Blob([JSON.stringify(this.personas, null, 4)], {
      type: "text/json;charset=utf-8"
    });
    FileSaver.saveAs(blob, "personas.json");
  }

  public exportAsPdf() {
    this.$parent.$emit("alert-event", {
      type: "warning",
      message: "Not yet implemented..."
    });
  }
}
</script>

<style lang="less">
.VueCarousel-navigation button {
  color: white !important;
  font-size: 35px !important;
  &:hover {
    color: #5bc0de !important;
  }
}
</style>
