<template>
    <div>
        <div class="container persona border p-2">
            <div class="row">
                <div class="col-md-6">
                    <h2 id="persona-fullname" class="text-info">{{`${persona.prename} ${persona.name}`}}</h2>
                </div>
                <div class="col-md-6">
                   <h3 class="text-info float-right">
                        <i class="fas fa-globe" /> {{persona.city}}, {{persona.country}} 
                   </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h3 class="text-info"><small>{{persona.currentJob.jobTitle}} @ {{persona.currentJob.company}}</small></h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 justify-content-center">
                    <div class="card box-shadow">
                        <img class="card-img-top" v-bind:src="'imgs/' + persona.image" />
                        <div class="card-body">
                            <p class="card-text">
                                <i class="fas fa-heartbeat" /> {{persona.age}} {{$t("COMPONENTS.PERSONAS.YEARS")}}, {{$t(`COMPONENTS.PERSONAS.${persona.maritalStatus.toUpperCase()}`)}}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-map-marker" /> {{persona.city}}, {{persona.country}}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-graduation-cap" /> {{$t("COMPONENTS.PERSONAS.EDUCATION")}}: {{persona.education}}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-language" /> {{$t("COMPONENTS.PERSONAS.LANGUAGES")}}: {{persona.languages.join(", ")}}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-quote-right" /> {{persona.quote.quote}} – {{persona.quote.author}}
                            </p>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">{{$t("COMPONENTS.PERSONAS.BUTTON_VIEW")}}</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">{{$t("COMPONENTS.PERSONAS.BUTTON_EDIT")}}</button>
                                </div>
                                <small class="text-muted">{{$t("COMPONENTS.PERSONAS.WATERMARK_TEXT")}}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="lead my-2"><i class="fas fa-certificate"></i> {{$t("COMPONENTS.PERSONAS.KEY_ATTRIBUTES_AND_GOALS")}}</p>
                    <ul class="">
                        <li v-for="attr in persona.keyAttributes" v-bind:key="attr">{{attr}}</li>
                    </ul>
                    <p class="lead my-2"><i class="fas fa-code"></i> {{$t("COMPONENTS.PERSONAS.PROGRAMMING_LANGUAGES")}}</p>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="ex in persona.programmingExperiences" v-bind:key="ex.language"> {{ex.language}}
                            <span class="badge badge-primary badge-pill">{{ex.experienceInYears}}</span>
                        </li>
                    </ul>
                    <p class="lead my-2"><i class="fas fa-asterisk"></i> {{$t("COMPONENTS.PERSONAS.TECHNOLOGY_EXPERIENCE")}}</p>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="ex in persona.usedTechnologies" v-bind:key="ex.name">{{ex.name}}
                            <span class="badge badge-primary badge-pill">{{ex.experienceLevel}}</span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <div class="col-md-12">
                        <p class="lead my-2"><i class="fas fa-list"></i> {{$t("COMPONENTS.PERSONAS.PREVIOUS_JOBS")}}</p>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="job in persona.previousJobs" v-bind:key="job.jobTitle+job.company"> {{job.jobTitle}} @ {{job.company}}
                                <span class="badge badge-primary badge-pill">{{Math.ceil(job.durationInMonths/12)}}</span>
                            </li>
                        </ul>
                        <p class="lead my-2"><i class="fas fa-comment"></i> {{$t("COMPONENTS.PERSONAS.COMMUNICATION_PREFERENCES")}}</p>
                        <p>{{persona.preferredCommunicationChannels.join(", ")}}</p>
                        <p class="lead my-2"><i class="fas fa-crosshairs"></i> {{$t("COMPONENTS.PERSONAS.PERSONAL_DRIVE")}}</p>
                        <p>{{persona.personalDrive.join(", ")}}</p>
                        <p class="lead my-2"><i class="fas fa-hand-paper"></i> {{$t("COMPONENTS.PERSONAS.HOBBIES")}}</p>
                        <p>{{persona.hobbies.join(", ")}}</p>
                        <p class="lead my-2"><i class="fas fa-heart"></i> {{$t("COMPONENTS.PERSONAS.FAVORITES")}}</p>
                        <p>
                            {{$t("COMPONENTS.PERSONAS.OPERATING_SYSTEM")}}: {{persona.favoriteOperatingSystem}}<br />
                            {{$t("COMPONENTS.PERSONAS.TEXT_EDITOR")}}: {{persona.favoriteTextEditor}}<br />
                            {{$t("COMPONENTS.PERSONAS.COLOR")}}: {{persona.favoriteColor}} 
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
  margin: 1em auto;
  background-color: #f2f2f2;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}

.text-muted {
  margin-left: 10px;
}
</style>
