<template>
  <div class="layout">
    <slot />
    <Footer />
    <TopButton />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  max-width: 1920px;
  margin: auto;
}
</style>
