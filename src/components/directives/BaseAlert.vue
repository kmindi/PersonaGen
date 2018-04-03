<template>
    <b-alert class="alertPosition" v-bind:show="dismissCountDown" dismissible v-bind:variant="alertType" v-on:dismissed="dismissCountDown=0" v-on:dismiss-count-down="countDownChanged">
        <p>{{alertMessage}}</p>
        <b-progress v-bind:variant="alertType" v-bind:max="dismissDuration" v-bind:value="dismissCountDown" height="4px"></b-progress>
    </b-alert>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class extends Vue {
    private alertMessage: string = "";
    private alertType: string = "success";
    private dismissCountDown: number = 0;
    private dismissDuration: number = 7;

    private showAlert(event: IAlertEvent) {
        this.alertMessage = event.message;
        this.alertType = event.type;
        this.dismissDuration = event.duration || this.dismissDuration;
        this.dismissCountDown = this.dismissDuration;
    }

    private countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
    }

    private mounted() {
        this.$parent.$on("alert-event", (event: IAlertEvent) => {
            this.showAlert(event);
        });
    }
}

export interface IAlertEvent {
    message: string;
    type: string;
    duration?: number;
}
</script>

<style scoped lang="less">
.alertPosition {
  position: fixed;
  bottom: 100px;
  right: 25px;
  z-index: 10000;
  min-height: 130px;
  min-width: 270px;
  max-width: 500px;
}
</style>
