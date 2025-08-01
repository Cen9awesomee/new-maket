import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/fontawesome-pro/css/fontawesome.min.css';
import '@/assets/fontawesome-pro/css/fontawesome.css';
import '@/assets/fontawesome-pro/css/brands.min.css';
import '@/assets/fontawesome-pro/css/brands.css';
import '@/assets/fontawesome-pro/css/solid.min.css';
import '@/assets/fontawesome-pro/css/solid.css';
import '@/assets/fontawesome-pro/css/regular.min.css';
import '@/assets/fontawesome-pro/css/regular.css';


Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi', 
  },
});

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');