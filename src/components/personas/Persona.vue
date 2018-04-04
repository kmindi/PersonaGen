<template>
    <div>
        Name: {{`${persona.prename} ${persona.name}`}}
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { config } from "../../conf/config";
import { IPersona } from "../personas/Persona.interface";

@Component({})
export default class extends Vue {
    @Prop()
    private persona: IPersona;
}
</script>

<style scoped lang="less">
div {
  border: 1px solid blue;
  margin: 10px 0;
  padding: 5px;
}
</style>
