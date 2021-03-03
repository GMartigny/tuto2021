import Vue from "vue";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";

import Home from "./views/Home.vue";

// Vue.use(Vuetify);
// const vuetify = new Vuetify();

new Vue({
    // vuetify,
    el: "#app",
    components: {
        Home,
    },
    template: "<Home/>"
});
