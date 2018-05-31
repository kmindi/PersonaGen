<template>
    <div class="everything">
        <header class="header">
            <b-navbar class="bg-primary" toggleable="md" fixed="top" variant="faded" type="dark">
                <b-navbar-toggle target="nav_collapse" position="left"></b-navbar-toggle>
                <b-navbar-brand href="/">
                    <span>
                        <!-- <img src="../imgs/logo.png" alt="Logo"> -->
                        PersonaGen
                    </span>
                </b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto" right>
                        <language-picker></language-picker>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </header>
        <div class="wrapper">
            <section class="content">
                <router-view></router-view>
            </section>
        </div>
        <footer class="footer bg-primary">
            <div class="container-fluid">
                <p>{{$t("COMPONENTS.FOOTER.LAST_UPDATE")}}: {{footer.buildDate}}</p>
                <p>{{$t("COMPONENTS.FOOTER.VERSION")}}: {{footer.version}}</p>
            </div>
        </footer>
        <alert></alert>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import alert from "../components/directives/BaseAlert.vue";
import languagePicker from "../components/directives/BaseLanguagePicker.vue";
import { config } from "../conf/config";

@Component({
  components: {
    "language-picker": languagePicker,
    alert
  }
})
export default class extends Vue {
  private footer = {
    buildDate: config.buildDate,
    version: config.version
  };
}
</script>

<style lang="less">
@-ms-viewport {
  width: auto !important;
}

html,
body,
.everything {
  height: 100%;
  margin: 0;
  padding: 0;
}

.wrapper {
  min-height: 100%;
  .content {
    overflow: auto;
    padding: 90px 20px 135px;
  }
}

.header nav {
  .navbar-brand span {
    display: table-cell;
    img {
      vertical-align: middle;
      margin-bottom: 4px;
      max-height: 20px;
      border: 1px solid transparent;
    }
  }
  .navbar-brand,
  .navbar-nav .nav-link,
  .navbar-toggler {
    color: white;
    border: 1px solid transparent;
    span:hover,
    img:hover {
      border-color: transparent;
      color: white;
    }
    &:hover {
      border-bottom: 1px solid white;
      color: white;
    }
  }
}

.footer {
  clear: both;
  position: relative;
  margin-top: -135px;
  height: 135px;
  margin-bottom: 0;
  padding: 15px;
  font-size: 16px;
  color: white;
}
</style>
