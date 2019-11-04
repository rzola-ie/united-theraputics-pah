<template>
  <SecondaryLayout>
    <section id="site-map">
      <div class="section-body">
        <g-link to="/">Home</g-link>
        <g-link to="/email-opt-in">E-mail Opt-in</g-link>
        <g-link to="/what-is-pah">What is PAH?</g-link>
        <g-link to="/privacy-policy">Privacy Policy</g-link>
        <g-link to="/managing-your-pah">Managing Your PAH</g-link>
        <g-link to="/terms-of-use">Terms of Use</g-link>
        <g-link to="/pah-pathways">PAH Pathways</g-link>
        <g-link to="/contact-us">Contact Us</g-link>
        <g-link to="/prostacyclin-class-therapies">
          Prostacyclin-class Therapies
        </g-link>
        <g-link to="/unsubscribe">Unsubscribe</g-link>
        <g-link to="/resources">Resources</g-link>
        <g-link to="/site-map">Site Map</g-link>
      </div>
    </section>
    <CallToAction />
  </SecondaryLayout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/modules/_cross-browser";
@import "~/assets/styles/modules/_breakpoints";

#site-map {
  &::before {
    margin-top: 0;
    background: var(--purple);

    @include for-desktop-up {
      @include grid-child(4, 14, 1, 3);
    }
  }
}

#site-map .section-body {
  margin: 1.5rem 0;
  @include display-grid;
  @include grid-child(3, 16, 1, 2);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 40px);
  grid-column-gap: 1rem;

  @include for-desktop-up {
    grid-gap: 0;
    grid-template-rows: repeat(6, 50px);
    grid-template-columns: 1.65fr 1fr;
    @include grid-child(5, 13, 1, 2);
  }
}

#site-map .section-body a {
  display: block;
  color: black;
  font-weight: bold;
  align-self: center;
}
</style>