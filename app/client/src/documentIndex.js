import Vue from 'vue';
import App from './IndexApp.vue';

import store from './store';
import Vuetify from "vuetify";


import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon); // Register component globally
library.add(fas); // Include needed icons.
library.add(far); // Include needed icons.

//import {library} from '@fortawesome/fontawesome-svg-core';
//import {
//  faBookmark as fasBookmark,
//  faLock,
//  faUnlock,
//  faCheckCircle as fasCheckCricle
//} from '@fortawesome/free-solid-svg-icons';
//import {faBookmark as farBookmark, faCheckCircle as farCheckCricle} from '@fortawesome/free-regular-svg-icons';
//import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

//library.add(fasBookmark, farBookmark, faLock, faUnlock);
//library.add(fasCheckCricle, farCheckCricle);
//Vue.component('font-awesome-icon', FontAwesomeIcon);

import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader

Vue.use(Vuetify, {
  iconfont: 'fas',
  icons: {
    'firststep': 'fas fa-step-backward',
    'laststep': 'fas fa-step-forward',
    'nextstep': 'fas fa-chevron-right',
    'previousstep': 'fas fa-chevron-left',
  }
});

new Vue({
  el: '#app',
  store,
  data: {
  },
  beforeMount: function () {
  },
  render (h) {
    return h(App, {})
  }

});
