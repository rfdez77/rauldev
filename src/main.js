import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAs0bAPkhuuCtkrEDYYN-GcA905OiE1aTs",
  authDomain: "raul-developer.firebaseapp.com",
  databaseURL: "https://raul-developer.firebaseio.com",
  projectId: "raul-developer",
  storageBucket: "raul-developer.appspot.com",
  messagingSenderId: "711227998412",
  appId: "1:711227998412:web:be7111a9d3f6249bc28269"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
