<template>
  <section transparent id="cta-bottom">
    <slot>
      <p>
        You can accept feeling okay, or you can ask about feeling better. Learn
        about
        <g-link to="/managing-your-pah#risk-prognosis">risk status</g-link>
        and how improving your risk status may improve how you feel.
      </p>
    </slot>
  </section>
</template>

<style lang="scss" scoped>
/* CALL TO ACTION: BOTTOM
====================================================== */

#cta-bottom {
  padding: 1rem 2rem;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: repeat(16, 1fr);

  @include for-desktop-up {
    padding: 2rem;
  }
}

#cta-bottom p {
  text-align: center;
  font-family: ProximaNovaBoldItalic, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  line-height: 24px;
  @include grid-child(1, 17, 1, 2);

  @include for-tablet-portrait-up {
    @include grid-child(4, 14, 1, 2);
  }

  @include for-desktop-up {
    @include grid-child(5, 13, 1, 2);
  }
}
</style>