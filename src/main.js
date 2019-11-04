// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from "vee-validate/dist/rules";
import * as rules from 'vee-validate/dist/rules';

// stylesheets
import 'normalize.css';
import '~/assets/styles/main.scss';
import '~/assets/styles/modules/_breakpoints.scss';

// layouts
import DefaultLayout from '~/layouts/Default.vue'
import SecondaryLayout from '~/layouts/Secondary.vue'

// components
import Header from '~/components/Header.vue';
import HeaderSecondary from '~/components/HeaderSecondary.vue';
import InteractiveTool from '~/components/InteractiveTool.vue';
import CallToAction from '~/components/CallToAction.vue';
import Footer from '~/components/Footer.vue';

export default function (Vue, { router, head, isClient }) {

extend('required', {
  ...rules.required,
  message: (field) => `The ${field} field is required`
})
  extend('email', email);
  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('SecondaryLayout', SecondaryLayout)

  Vue.component('Header', Header);
  Vue.component('HeaderSecondary', HeaderSecondary);
  Vue.component('InteractiveTool', InteractiveTool);
  Vue.component('CallToAction', CallToAction);
  Vue.component('Footer', Footer);

  Vue.config.productionTip = false

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  })
}

