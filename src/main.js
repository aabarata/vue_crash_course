import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';

Vue.config.productionTip = false

// Add a rule
extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true,
  message: 'The field is required.' 
});

// Add a rule
extend('minlength', {
  validate(value, args) {
    if(value.length >= args.length) {
      return true;
    }
    return 'You must insert ' + args.length + ' or more chars.'  
  },
  params: ['length']
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  render: h => h(App),
}).$mount('#app')
