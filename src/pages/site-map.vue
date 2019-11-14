<template>
  <ShortLayout>
    <section purple id="site-map">
      <div class="section-body">
        <g-link to="/">Home</g-link>
        <g-link to="/newsletter">E-mail Opt-in</g-link>
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
  </ShortLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Site Map"
  }
};
</script>

<style lang="scss" scoped>
/* SITE MAP
====================================================== */
#site-map {
  width: 100%;
  height: 300px;
  grid-template-rows: 1fr;
  &::before {
    margin-top: 0;

    @include for-desktop-up {
      @include grid-child(4, 14, 1, 2);
    }
  }
}

#site-map .section-body {
  align-self: center;
  margin: 1.5rem 0;
  @include display-grid;
  @include grid-child(3, 16, 1, 2);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 40px);
  grid-column-gap: 1rem;

  @include for-desktop-up {
    grid-gap: 0;
    grid-template-rows: repeat(6, 45px);
    grid-template-columns: 1.65fr 1fr;
    @include grid-child(5, 13, 1, 2);
  }
}

#site-map .section-body a {
  display: block;
  color: black;
  font-family: ProximaNovaBold, "Arial Narrow Bold", sans-serif;
  align-self: center;
}
</style>