import Vue from 'vue';
import App from '/App.vue';
import store from '/js/store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: createElement => createElement(App),
  store: store
}).$mount('#app');
