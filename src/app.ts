// Internal global dependencies
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// bootswatch theme
import "bootswatch/dist/slate/bootstrap.min.css";

import "./index.html";

// IE polyfills
import "core-js/es6/array";
import "core-js/es6/string";
import "core-js/es7/array";

import fontAwesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import regular from "@fortawesome/fontawesome-free-regular";
import solid from "@fortawesome/fontawesome-free-solid";
fontAwesome.library.add(brands, solid, regular);

import VueI18Next from "@panter/vue-i18next";
import BootstrapVue from "bootstrap-vue";
import i18next from "i18next";
import Vue from "vue";
import VueCarousel from "vue-carousel";
import VueRouter from "vue-router";
import App from "./components/App.vue";

Vue.use(BootstrapVue);
Vue.use(VueCarousel);
Vue.use(VueI18Next);
Vue.use(VueRouter);

// Initialize the i18n translation service
import languageSrv from "./common/Language.srv";

languageSrv.init(i18next);

const i18n = new VueI18Next(i18next);

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
        i18n,
        render: (h) => h(App)
    });
};
