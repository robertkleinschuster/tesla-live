import Vue from 'vue';
import App from '/App.vue';
import store from '/js/store'
import VueUnits from "vue-units";
import numeral from 'numeral';
import "numeral/locales/de";
import numFormat from 'vue-filter-number-format';
import VueFilterDateFormat from 'vue-filter-date-format';

import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret);

Vue.use(VueUnits);
Vue.use(VueFilterDateFormat);

numeral.locale('de');

Vue.filter('numFormat', numFormat(numeral));

Vue.component('font-awesome-icon', FontAwesomeIcon)

/**
 * Vue filter to round the decimal to the given place.
 * http://jsfiddle.net/bryan_k/3ova17y9/
 *
 * @param {String} value    The value string.
 * @param {Number} decimals The number of decimal places.
 */
Vue.filter('round', function(value, decimals) {
  if(!value) {
    value = 0;
  }

  if(!decimals) {
    decimals = 0;
  }

  value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  return value;
});

new Vue({
  store: store,
  render: createElement => createElement(App)
}).$mount('#app');
