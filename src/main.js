// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email, max } from "vee-validate/dist/rules";
import * as rules from 'vee-validate/dist/rules';

// stylesheets
import 'normalize.css';
import '~/assets/styles/main.scss';

// layouts
import DefaultLayout from '~/layouts/Default.vue'
import SecondaryLayout from '~/layouts/Secondary.vue'
import Short from '~/layouts/Short.vue'

// components
import CallToAction from '~/components/CallToAction.vue';
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
import HeaderSecondary from '~/components/HeaderSecondary.vue';
import Modal from '~/components/Modal.vue';
import SideNav from '~/components/SideNav.vue';
import InteractiveTool from '~/components/InteractiveTool.vue';

export default function (Vue, { router, head, isClient }) {

  // vee-validate message overrides
  extend('required', {
    ...rules.required,
    message: (field) => `The ${field} field is required`
  })
  extend('email', {
    ...rules.email,
    message: () => `Please enter a valid e-mail`
  })
  extend('max', {
    ...rules.max
  })

  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('SecondaryLayout', SecondaryLayout)
  Vue.component('ShortLayout', Short)

  Vue.component('Header', Header);
  Vue.component('Modal', Modal);
  Vue.component('SideNav', SideNav);
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
