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
$max_width: 1440px;

.layout {
  max-width: $max_width;
  margin: auto;
}
</style>
