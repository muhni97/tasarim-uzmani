import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore';
import "firebase/auth";


Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      created() {
        AOS.init({
          offset: 400,
          duration: 1000,
          easing: 'ease',
        });
      },
      render: h => h(App)
    }).$mount('#app')

  }
})

import "bootstrap/dist/js/bootstrap.js";