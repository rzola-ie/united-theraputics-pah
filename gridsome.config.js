// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  plugins: [],
  head: {
    script: [
      { src: 'gsap/TweenMax.js' },
      { src: 'gsap/Draggable.js' },
      { src: './vendor/gsap/umd/ThrowPropsPlugin.js' },
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

