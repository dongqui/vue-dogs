import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faSpinner);

Vue.component('fa-icon', FontAwesomeIcon);