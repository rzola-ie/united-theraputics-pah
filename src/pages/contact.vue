<template>
  <ShortLayout>
    <section purple id="contact-us">
      <h1 class="section-header">
        For more information or questions about United Therapeutics, please
        call:
      </h1>
      <div class="section-body">
        <a class="number-1" href="tel:+18778648437">1-877-UNITHER</a>
        <a class="number-2" href="tel:+18778648437">(1-877-864-8437)</a>
      </div>

      <g-image
        class="section-image"
        src="~/assets/img/icn-phone.svg"
        alt="an icon of a phone"
      />
    </section>
  </ShortLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact United Therapeutics",
    meta: [
      {
        name: "description",
        content: "Contact information is provided for United Therapeutics."
      },
      {
        property: "og:title",
        content: "Contact United Therapeutics"
      },
      {
        property: "og:description",
        content: "Contact information is provided for United Therapeutics."
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.pahinitiative.com/contact/"
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
#contact-us {
  &::before {
    @include for-desktop-up {
      @include grid-child(4, 14, 1, 3);
    }
  }
}

#contact-us .section-header {
  padding-left: 2.8rem;
  margin-bottom: 1.2rem;
  @include for-desktop-up {
    margin-top: 2rem;
    @include grid-child(3, 13, 1, 2);
  }
}

#contact-us .section-image {
  height: 2rem;
  width: 2rem;
  margin-top: 1rem;
  justify-self: center;
  @include grid-child(2, 4, 2, 3);

  @include for-desktop-up {
    margin-top: 1.5rem;
    @include grid-child(6, 8, 2, 3);
  }
}

#contact-us .section-body {
  background: white;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include grid-child(3, 15, 2, 3);

  @include for-desktop-up {
    padding: 1.5rem 0rem;
    margin-bottom: 2.5rem;
    @include grid-child(7, 11, 2, 3);
  }
}

#contact-us .section-body a {
  display: block;
  text-align: center;
  font-size: 1.3rem;
  color: black;
  font-family: ProximaNovaBold, "Arial Narrow Bold", sans-serif;

  @include for-desktop-up {
    font-size: 1.5rem;
    pointer-events: none;
    @include grid-child(3, 14, 1, 2);
  }

  & + a {
    margin-top: 1rem;
  }
}
</style>