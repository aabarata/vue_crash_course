import { extend } from 'vee-validate';

// Add required rule (required)
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

// Add minimal length rule (minlength:x)
extend('minlength', {
  validate(value, args) {
    if(value.length >= args.length) {
      return true;
    }
    return 'You must insert ' + args.length + ' or more chars.'  
  },
  params: ['length']
});