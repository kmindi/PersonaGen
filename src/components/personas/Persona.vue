<template>
    <div class="py-5">
    <div class="container border p-2">
      <div class="row justify-content-center text-center">
        <div class="col-md-3">
          <h1 class="text-info">{{`${persona.prename} ${persona.name}`}}</h1>
        </div>
        <div class="col-md-3">
          <h3 class="" contenteditable="true"><i class="fas fa-hand-paper"></i> Junior Java Developer</h3>
        </div>
        <div class="col-md-3">
          <h3 class=""><i class="fas fa-globe"></i> Germany</h3>
        </div>
        <div class="col-md-3">
            
          </div>
      </div>
      <div class="row">
        <div class="col-md-4 justify-content-center">
          <div class="card box-shadow">
            <img class="card-img-top" src="assets/application-1934972_640.jpg">
            <div class="card-body">
              <p class="card-text"><i class="fas fa-heartbeat"></i> 32 years, married</p>
              <p class="card-text"><i class="fas fa-map-marker"></i> Main Street 12, 75432 Neustadt</p>
              <p class="card-text"><i class="fas fa-graduation-cap"></i> Education: Diplom Informatiker</p>
              <p class="card-text"><i class="fas fa-quote-right"></i> “Without requirements or design, programming is the art of adding bugs to an empty text file.” - Louis Srygley</p>
              
                
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div> <small class="text-muted">made with personagenerator.net</small> </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="lead my-2">Goals</p>
          <ul class="">
            <li>9-5 job</li>
            <li>Features, Features, Features</li>
          </ul>

          
              
              
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center"> C++<span class="badge badge-primary badge-pill">14</span> </li>
                <li class="list-group-item d-flex justify-content-between align-items-center"> Java<span class="badge badge-primary badge-pill">2</span> </li>
                <li class="list-group-item d-flex justify-content-between align-items-center"> JavaScript<span class="badge badge-primary badge-pill">1</span> </li>
              </ul>
              <p class="lead my-2">Technology Experience</p>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center"><i class="fas fa-microchip"></i> Embedded<span class="badge badge-primary badge-pill">14</span> </li>
                <li class="list-group-item d-flex justify-content-between align-items-center"><i class="fab fa-windows"></i> Windows Server Administration<span class="badge badge-primary badge-pill">5</span> </li>
                <li class="list-group-item d-flex justify-content-between align-items-center"><i class="fas fa-sync"></i> Continuous Integration<span class="badge badge-primary badge-pill">3</span> </li>
              </ul>
            
        </div>
        <div class="col-md-4">
          <div class="col-md-12">
            <p class="lead m-2">Previous Jobs/Companies</p>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center"> Test Engineer @ Microsoft<span class="badge badge-primary badge-pill">14</span> </li>
              <li class="list-group-item d-flex justify-content-between align-items-center"> C++ Developer @ Google<span class="badge badge-primary badge-pill">2</span> </li>
            </ul>
            <p class="lead my-2">Communication Preferences</p>
            <p>Slack, IRC, Twitter</p>
            <p class="lead">Hobbies and Activities</p>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
            <p class="">Outside &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Inside
              <br> </p>
            <p class="lead">Other
              <br>
            </p>
            <p>Favorite Color: Red
              <br>Disabilities: Glasses
              <br>
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
