<template>
    <div class="everything">
        <header class="header">
            <b-navbar toggleable="md" fixed="top" variant="faded" type="dark">
                <b-navbar-toggle target="nav_collapse" position="left"></b-navbar-toggle>
                <b-navbar-brand href="/">
                    <span>
                        <!-- <img src="../imgs/logo.png" alt="Logo"> -->
                        PersonaGen
                    </span>
                </b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">
                    <!-- <b-navbar-nav> -->
                    <!-- <b-nav-item href="/features">{{$t("COMPONENTS.FEATURES.LIST.TITLE")}}</b-nav-item> -->
                    <!-- <b-nav-item-dropdown text="Dropdown" left>
                            <b-dropdown-item href="#">1</b-dropdown-item>
                            <b-dropdown-item href="#">2</b-dropdown-item>
                            <b-dropdown-item href="#">3</b-dropdown-item>
                            <b-dropdown-item href="#">4</b-dropdown-item>
                        </b-nav-item-dropdown> -->
                    <!-- </b-navbar-nav> -->

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
        <footer class="footer">
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
        "alert": alert
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
@import "../css/main.less";

.wrapper {
  min-height: 100%;
}

.content {
  overflow: auto;
  padding: 90px 20px 135px;
}

.header nav {
  background-color: black;
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
    color: lightgray;
    border: 1px solid transparent;
    span:hover,
    img:hover {
      border-color: transparent;
      color: white;
    }
    &:hover {
      border-bottom: 1px solid black;
      color: white;
    }
  }
}

.footer {
  clear: both;
  position: relative;
  margin-top: -135px;
  height: 135px;
  font-size: 16px;
  margin-bottom: 0;
  background-color: black;
  color: white;
  padding: 15px;
}
</style>
