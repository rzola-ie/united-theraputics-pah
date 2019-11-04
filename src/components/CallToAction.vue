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
@import "~/assets/styles/modules/_cross-browser";
@import "~/assets/styles/modules/_breakpoints";

#cta-bottom {
  padding: 1rem 2rem;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: repeat(16, 1fr);

  @include for-desktop-up {
    padding: 2rem;
  }

  &::before {
    display: none;
  }
}

#cta-bottom p {
  text-align: center;
  font-weight: bold;
  font-style: italic;
  font-size: 20px;
  line-height: 24px;
  @include grid-child(1, 17, 1, 2);

  @include for-tablet-portrait-up {
    @include grid-child(4, 14, 1, 2);
  }

  @include for-desktop-up {
    @include grid-child(1, 17, 1, 2);
  }

  br {
    display: none;

    @include for-desktop-up {
      display: block;
    }
  }
}
</style>