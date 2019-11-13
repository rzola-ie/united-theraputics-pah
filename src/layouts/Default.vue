<template>
  <div class="layout">
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
.layout {
  max-width: 1920px;
  margin: auto;
}
</style>
