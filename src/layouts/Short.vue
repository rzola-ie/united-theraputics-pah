<template>
  <div class="layout">
    <HeaderSecondary />
    <main>
      <slot />
    </main>
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
    grid-template-rows: auto 1fr auto;
  }
  margin: auto;
}

.layout main {
  height: calc(100vh - 60px);
  @include display-grid;
  grid-template-rows: 1fr auto;
  align-items: center;

  @include for-desktop-up {
    height: auto;
  }
}
</style>