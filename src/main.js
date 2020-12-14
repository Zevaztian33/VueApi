import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faEdit, faPlus, faTimes, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faFacebookSquare, faTwitterSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHeart, faEdit, faPlus, faGithubSquare, faFacebookSquare, faTwitterSquare, faTumblrSquare, faTimes, faSave, faTrashAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
