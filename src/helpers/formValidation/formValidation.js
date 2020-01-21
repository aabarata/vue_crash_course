import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import './rules';

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);