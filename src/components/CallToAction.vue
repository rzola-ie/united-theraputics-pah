<template>
  <section transparent id="cta-bottom">
    <slot>
      <p>
        You can accept feeling okay, or you can ask about feeling better. Learn
        about
        <g-link to="/pah-life-expectancy#risk-prognosis/">risk status</g-link>
        and how improving your risk status may help improve how you feel.
      </p>
    </slot>
  </section>
</template>

<style lang="scss" scoped>
/* CALL TO ACTION: BOTTOM
====================================================== */

#cta-bottom {
  padding: 1rem 2rem;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(16, 1fr);

  @include for-desktop-up {
    padding: 2rem;
  }
}

#cta-bottom p {
  text-align: center;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  @include grid-child(1, 17, 1, 2);

  @include for-tablet-portrait-up {
    @include grid-child(4, 14, 1, 2);
  }

  @include for-desktop-up {
    padding: 0 2rem;
  }
}

#cta-bottom a {
  color: $wine;
}

br {
  display: none;

  @include for-big-desktop-up {
    display: inline;
  }
}
</style>