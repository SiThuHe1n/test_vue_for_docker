import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';


import 'sweetalert2/dist/sweetalert2.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Swal from 'sweetalert2';

let Pusher= require('pusher-js');
 window.Pusher = new Pusher('2aae74c63ecea48f5cca', {
    cluster: 'ap4'
  });

window.Swal=Swal;




const vue_3_app=createApp(App).use(VueSweetalert2).use(store).use(router).mount('#app')


window.handleClipboardData = function (data1) {
    const result = 'Hello from Vue 3!';
    document.getElementById('output').innerText = result;
    return result;
  };