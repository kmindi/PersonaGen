// Internal global dependencies
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";
// bootswatch theme
import "bootswatch/dist/cerulean/bootstrap.min.css";

import "./index.html";

import fontAwesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import regular from "@fortawesome/fontawesome-free-regular";
import solid from "@fortawesome/fontawesome-free-solid";
fontAwesome.library.add(brands, solid, regular);

import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import Vue from "vue";
import I18n from "vue-i18n";
import VueRouter from "vue-router";
import App from "./components/App.vue";
import { config } from "./conf/config";

Vue.use(BootstrapVue);
Vue.use(I18n);
Vue.use(VueRouter);

// Initialize the i18n translation service
import languageSrv from "./common/Language.srv";
const i18n = new I18n({
    locale: "en",
    messages: {}
});
languageSrv.init(i18n);

// Import custom filters that are globally usable in Vue components
import "./common/filters";

// Routes
import routes from "./common/routes";
const router = new VueRouter({
    mode: "history",
    routes
});

// Kick start the main Vue component
window.onload = () => {
    const app = new Vue({
        el: ".app",
        router,
        i18n: languageSrv.i18n,
        render: (h) => h(App)
    });
};
