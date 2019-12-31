<template>
  <ShortLayout>
    <section purple id="site-map">
      <div class="section-body">
        <g-link to="/">Home</g-link>
        <g-link to="/pah-i-newsletter/">E-mail Opt-in</g-link>
        <g-link to="/what-is-pah/">What is PAH?</g-link>
        <g-link to="/privacy-policy/">Privacy Policy</g-link>
        <g-link to="/pah-life-expectancy/">Managing Your PAH</g-link>
        <g-link to="/terms-of-use/">Terms of Use</g-link>
        <g-link to="/pah-pathways/">PAH Pathways</g-link>
        <g-link to="/contact/">Contact Us</g-link>
        <g-link to="/pah-treatment-medicine/">
          Prostacyclin-class Therapies
        </g-link>
        <g-link to="/unsubscribe/">Unsubscribe</g-link>
        <g-link to="/pah-information-support/">Resources</g-link>
        <g-link to="/site-map/">Site Map</g-link>
      </div>
    </section>
  </ShortLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "PAH Initiative Site Map",
    meta: [
      {
        name: "description",
        content: "View a site map of the PAH-I website."
      },
      {
        property: "og:title",
        content: "PAH Initiative Site Map"
      },
      {
        property: "og:description",
        content: "View a site map of the PAH-I website."
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.pahinitiative.com/site-map/"
      }
    ]
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

  @include for-desktop-up {
    height: auto;
  }
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
  @include grid-child(2, 16, 1, 2);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 40px);
  grid-column-gap: 1rem;

  @include for-desktop-up {
    margin: 2.5rem 0;
    grid-gap: 0;
    grid-template-rows: repeat(6, 45px);
    grid-template-columns: 1.65fr 1fr;
    @include grid-child(4, 14, 1, 2);
    padding: 0 4.6rem;
  }
}

#site-map .section-body a {
  display: block;
  color: black;
  font-weight: 700;
  font-style: normal;
  align-self: center;
}
</style>