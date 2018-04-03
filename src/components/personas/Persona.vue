<template>
    <div>
        Name: {{persona.name}}
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

</style>
