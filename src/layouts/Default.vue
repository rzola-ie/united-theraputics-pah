<template>
  <div class="layout">
    <slot />
    <Footer />

    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-TJ74SDK"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->
  </div>
</template>

<style lang="scss" scoped>
.layout {
  max-width: 1920px;
  margin: auto;
}
</style>
