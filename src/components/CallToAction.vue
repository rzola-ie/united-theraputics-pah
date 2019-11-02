<template>
  <section id="cta-bottom">
    <p>
      You can accept feeling okay, or you can ask about feeling better.<br />
      Ask your doctor if adding a
      <span class="wine">Prostacyclin-class medicine</span><br />
      could help you
      <span class="wine">feel better</span> and
      <span class="wine">do more</span>.
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/modules/_color-palette";
@import "~/assets/styles/modules/_breakpoints";

#cta-bottom {
  padding: 2rem;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: repeat(16, 1fr);

  &::before {
    display: none;
  }
}

#cta-bottom p {
  text-align: center;
  font-weight: bold;
  font-style: italic;
  grid-column: 2 / 16;
  font-size: 20px;
  line-height: 24px;

  @include for-tablet-portrait-up {
    grid-column: 4 / 14;
  }

  @include for-desktop-up {
    grid-column: 1 / 17;
  }

  br {
    display: none;

    @include for-desktop-up {
      display: block;
    }
  }
}
</style>