<template>
    <div>
        <h1>Home</h1>
        <div>{{$t("COMPONENTS.HOME.WELCOME")}}</div>
        <input v-model="name" type="text">
        <button class="btn btn-primary" v-on:click="submit">{{$t("COMPONENTS.HOME.SUBMIT")}}</button>
        <p></p>
        <div class="jumbotron" v-show="greetingValue!==''">
            <p class="lead">{{$t("COMPONENTS.HOME.GREETING", { name: greetingValue })}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { config } from "../../conf/config";

@Component({})
export default class extends Vue {
    private name: string = "";
    private greetingValue: string = "";

    private submit() {
        if (this.name.length < 2) {
            this.$parent.$emit("alert-event", { type: "danger", message: this.$t("MESSAGES.NAME_TOO_SHORT") });
            this.greetingValue = "";
        } else {
            this.greetingValue = this.name;
        }
    }
}
</script>

<style scoped lang="less">

</style>
