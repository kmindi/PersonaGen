<template>
    <div class="py-5">
        <div class="container border p-2">
            <div class="row justify-content-center text-center">
                <div class="col-md-3">
                    <h1 class="text-info">{{`${persona.prename} ${persona.name}`}}</h1>
                </div>
                <div class="col-md-3">
                    <h3 class="" contenteditable="true">
                        <i class="fas fa-hand-paper"></i> {{persona.currentJob.jobTitle}}</h3>
                </div>
                <div class="col-md-3">
                    <h3 class="">
                        <i class="fas fa-globe"></i> {{persona.country}}</h3>
                </div>
                <div class="col-md-3">

                </div>
            </div>
            <div class="row">
                <div class="col-md-4 justify-content-center">
                    <div class="card box-shadow">
                        <img class="card-img-top" src="assets/application-1934972_640.jpg">
                        <div class="card-body">
                            <p class="card-text">
                                <i class="fas fa-heartbeat"></i> {{persona.age}} years, married</p>
                            <p class="card-text">
                                <i class="fas fa-map-marker"></i> {{persona.street}} {{persona.number}}, {{persona.zipCode}} {{persona.city}}</p>
                            <p class="card-text">
                                <i class="fas fa-graduation-cap"></i> Education: {{persona.education}}</p>
                            <p class="card-text">
                                <i class="fas fa-quote-right"></i> {{persona.quote}}</p>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-muted">made with personagenerator.net</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="lead my-2">Key Attributes and Goals</p>
                    <ul class="">
                        <li v-for="attr in persona.keyAttributes" v-bind:key="attr">{{attr}}</li>
                    </ul>
                    <p class="lead my-2">Programmin Languages</p>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="ex in persona.programmingExperiences" v-bind:key="ex.language"> {{ex.language}}
                            <span class="badge badge-primary badge-pill">{{ex.experienceInYears}}</span>
                        </li>
                    </ul>
                    <p class="lead my-2">Technology Experience</p>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="ex in persona.usedTechnologies" v-bind:key="ex.name">{{ex.name}}
                            <span class="badge badge-primary badge-pill">{{ex.experienceLevel}}</span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <div class="col-md-12">
                        <p class="lead m-2">Previous Jobs/Companies</p>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="job in persona.previousJobs" v-bind:key="job.jobTitle+job.company"> {{job.jobTitle}} @ {{job.company}}
                                <span class="badge badge-primary badge-pill">{{Math.ceil(job.durationInMonths/12)}}</span>
                            </li>
                        </ul>
                        <p class="lead my-2">Communication Preferences</p>
                        <p>{{persona.preferredCommunicationChannels.join(", ")}}</p>
                        <p class="lead">Hobbies and Activities</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                        <p class="">Outside &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Inside</p>
                        <p class="lead">Other
                            <br>
                        </p>
                        <p>Favorite Color: {{persona.favoriteColor}}
                            <br>Favorite OS: {{persona.favoriteOperatingSystem}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
