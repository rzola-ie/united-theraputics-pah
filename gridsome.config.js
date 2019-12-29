// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-TJ74SDK',
        enabled: true,
      }
    }
  ],
  titleTemplate: '%s',
  head: {
    script: [
      { src: 'gsap/TweenMax.js' },
      { src: 'gsap/Draggable.js' },
      { src: './vendor/gsap/umd/ThrowPropsPlugin.js' },
      { src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit', async: true, defer: true },
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/styles/modules/_color-palette.scss";
          @import "@/assets/styles/modules/_breakpoints.scss";
          @import "@/assets/styles/modules/_cross-browser.scss";
          @import "@/assets/styles/modules/_variables.scss";
          @import "@/assets/styles/modules/_buttons.scss";
        `,
      }
    }
  }
}
