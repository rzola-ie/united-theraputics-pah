<template>
  <div class="layout">
    <SideNav :show="toggle" v-on:close="handleMenuToggle" />
    <HeaderSecondary v-on:toggle="handleMenuToggle" />
    <main>
      <slot />
    </main>
    <Footer />
    <TopButton />
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
    -ms-grid-rows: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
    -ms-grid-columns: 1fr;
  }
  margin: auto;
}

main {
  @include grid-child(1, 2, 2, 3);
}
</style>
