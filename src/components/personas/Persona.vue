<template>
    <div>
        <div class="container persona border p-2">
            <div class="row">
                <div class="col-md-4">
                    <h2 class="text-info">{{`${persona.prename} ${persona.name}`}}</h2>
                </div>
                <div class="col-md-4">
                    <h3 class="text-info">{{persona.currentJob.jobTitle}} @ {{persona.currentJob.company}}</h3>
                </div>
                <div class="col-md-4">
                    <h3 class="text-info">
                        <i class="fas fa-globe" /> {{persona.country}}
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 justify-content-center">
                    <div class="card box-shadow">
                        <img class="card-img-top" v-bind:src="'imgs/' + persona.image" />
                        <div class="card-body">
                            <p class="card-text">
                                <i class="fas fa-heartbeat" /> {{persona.age}} years, {{persona.maritalStatus}}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-map-marker" /> {{persona.street}} {{persona.streetNumber}}, {{persona.zipCode}} {{persona.city}}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-graduation-cap" /> Education: {{persona.education}}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-language" /> Languages: {{persona.languages.join(", ")}}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-quote-right" /> {{persona.quote}}
                            </p>

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
                    <p class="lead my-2">Programming Languages</p>
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
                        <p class="lead my-2">Previous Jobs/Companies</p>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="job in persona.previousJobs" v-bind:key="job.jobTitle+job.company"> {{job.jobTitle}} @ {{job.company}}
                                <span class="badge badge-primary badge-pill">{{Math.ceil(job.durationInMonths/12)}}</span>
                            </li>
                        </ul>
                        <p class="lead my-2">Communication Preferences</p>
                        <p>{{persona.preferredCommunicationChannels.join(", ")}}</p>
                        <p class="lead my-2">Personal Drive</p>
                        <p>{{persona.personalDrive.join(", ")}}</p>
                        <p class="lead my-2">Hobbies and Activities</p>
                        <p>{{persona.hobbies.join(", ")}}</p>
                        <p class="lead my-2">Other</p>
                        <p>
                            Favorite Color: {{persona.favoriteColor}}<br> Favorite OS: {{persona.favoriteOperatingSystem}}
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
  @Prop() private persona: IPersona;
}
</script>

<style scoped lang="less">
.persona {
    margin:1em auto;
    background-color:#F2F2F2;
    -webkit-box-shadow: 0 10px 6px -6px #777;
	-moz-box-shadow: 0 10px 6px -6px #777;
	box-shadow: 0 10px 6px -6px #777;
}
</style>
