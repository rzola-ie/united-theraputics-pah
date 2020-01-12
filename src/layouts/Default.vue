<template>
  <div class="layout">
    <slot />
    <Footer />
    <TopButton />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  position: relative;
  max-width: 1920px;
  margin: auto;
}
</style>
