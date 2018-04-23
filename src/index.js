
import Vue from "vue";
import app from "./components/app.vue";

let myVue = new Vue({
    el: "#myVue",
    template: "<app></app>",
    components: {
        app
    }
});