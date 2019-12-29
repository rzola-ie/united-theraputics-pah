<template>
  <div class="layout">
    <SideNav :show="toggle" v-on:close="handleMenuToggle" />
    <HeaderSecondary v-on:toggle="handleMenuToggle" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    handleMenuToggle() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  @include for-desktop-up {
    min-height: 100vh;
    @include display-grid;
    grid-template-rows: [header-start] auto [content-start] 1fr [footer-start] auto;
  }
  margin: auto;
}
</style>
