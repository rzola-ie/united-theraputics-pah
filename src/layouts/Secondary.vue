<template>
  <div class="layout">
    <HeaderSecondary />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
@import "~/assets/styles/_color-palette";
@import "~/assets/styles/_breakpoints";

$max_width: 1440px;

.layout {
  max-width: $max_width;
  margin: auto;
}
</style>
