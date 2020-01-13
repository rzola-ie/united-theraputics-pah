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
import InteractiveTool from '~/components/InteractiveTool.vue';
import Modal from '~/components/Modal.vue';
import SideNav from '~/components/SideNav.vue';
import TopButton from '~/components/TopButton.vue';

export default function (Vue, { router, head, isClient }) {

  if (isClient) {
    let sc = document.createElement("html");
    sc.setAttribute("itemscope", "");
    sc.setAttribute("itemtype", "https://schema.org/FAQPage");
    document.head.appendChild(sc)
  }

  Vue.config.productionTip = false

  head.script.push({
    src: 'https://polyfill.io/v3/polyfill.min.js?features=fetch%2CArray.from',
    body: true
  })

  head.script.push({
    src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
    body: true,
    async: true,
    defer: true
  })

  head.meta.push({
    name: 'robots',
    content: 'index,follow'
  })

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  })

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

  // vee-validate Components
  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);

  //Layouts
  Vue.component('Layout', DefaultLayout)
  Vue.component('SecondaryLayout', SecondaryLayout)
  Vue.component('ShortLayout', Short)

  // Components
  Vue.component('Footer', Footer);
  Vue.component('Header', Header);
  Vue.component('HeaderSecondary', HeaderSecondary);
  Vue.component('InteractiveTool', InteractiveTool);
  Vue.component('Modal', Modal);
  Vue.component('SideNav', SideNav);
  Vue.component('CallToAction', CallToAction);
  Vue.component('TopButton', TopButton);
}
