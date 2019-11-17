<template>
  <Layout>
    <section transparent id="hero">
      <Header />
      <g-image
        class="hero-image"
        src="~/assets/img/hero-image.png"
        alt="an image of a park with trees. The PAH initiative logo is in the center"
      />
      <g-image
        class="hero-image-mobile"
        src="~/assets/img/hero-image-mobile.png"
        alt="an image of a park with trees. The PAH initiative logo is in the center"
      />
      <h2 class="hero-text">
        The PAH Initiative (PAH-I), sponsored by United Therapeutics, aims to
        improve the care of people living with pulmonary arterial hypertension
        (PAH) by providing education that helps patients receive the right
        treatment at the right time. United Therapeutics is proud to sponsor the
        PAH-I and will work to establish the PAH Initiative as a trusted
        resource for the PAH community.
      </h2>
      <button id="hero-down-button" @click="handleArrowClick">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          id="hero-down-arrow"
          viewBox="0 0 35 25"
        >
          <path
            fill-rule="evenodd"
            fill="rgb(141, 0, 52)"
            d="M17,25 L0,0 L35,0 L17,25 Z"
          />
        </svg>
      </button>
    </section>
    <!-- hero -->

    <section purple id="feel-better">
      <h1 class="section-header">
        You can accept feeling "okay." Or you can ask your doctor about feeling
        better
      </h1>
      <g-image
        src="~/assets/img/icn-ask-your-doctor.png"
        alt="ask your doctor icon"
        class="section-icon"
      />
      <div class="section-body">
        <p>
          Many people with PAH deal with symptoms that impact their day-to-day
          lives, such as shortness of breath and fatigue. You may experience
          these symptoms because PAH causes the millions of tiny blood vessels
          in your lungs to thicken and narrow, making it difficult for blood to
          flow from your heart through your lungs. This puts extra strain on
          your heart, which makes it harder to pump blood to your lungs.
        </p>

        <p>
          PAH is a severe disease that gets worse over time. But some of today’s
          medicines have been shown to slow disease progression and improve how
          you feel. By working closely with your doctor to assess your
          <g-link to="/what-is-pah#pah-symptoms">symptoms</g-link>,
          <g-link to="/managing-your-pah#risk-prognosis">risk status</g-link>
          and
          <g-link to="/prostacyclin-class-therapies">treatment options</g-link>,
          you may be better able to manage the impact of PAH on your life.
          Together with the support of your healthcare team, there may be more
          you can do to achieve your treatment goals.
        </p>
      </div>
    </section>
    <!-- feel better -->

    <section grey id="risk-status">
      <h1 class="section-header">
        Why is risk status so important?
      </h1>

      <g-image
        src="~/assets/img/icn-risk-status.png"
        alt="risk status icon"
        class="section-icon"
      />

      <p>
        <strong
          ><i
            >"I aced my last 6-minute walk test and my doctor said I was doing
            okay. But I didn't tell her that it took me two days to recover. So
            am I really doing okay?"</i
          ></strong
        >
        - <small>PAH Patient</small>
      </p>
      <p>
        Even if your doctor is satisfied that you're doing "okay" with your PAH,
        is doing "okay" enough for you? There may be ways to reduce your
        symptoms so you can feel better and do more. As ongoing research helps
        us understand more about PAH, experts continue to improve the way they
        treat it.
      </p>
      <div class="section-body">
        <p>
          In order to determine the best treatment approach for you, it is
          important to have your doctor regularly monitor your
          <g-link to="/managing-your-pah#risk-prognosis">risk status</g-link>
          (the risk of your PAH getting worse over the next 5 years). Your
          doctor will conside-bars a number of factors to determine whether you
          are at low-, intermediate- or high-risk status.
        </p>
      </div>
    </section>
    <!-- feel better -->

    <div class="side-bars">
      <section purple id="what-is-pah">
        <g-image
          src="~/assets/img/icn-what-is-pah.png"
          alt="an icon of lungs"
          class="section-icon"
        />

        <h1 class="section-header">What is pah?</h1>

        <div class="section-body">
          <h2>Looking for more information about PAH?</h2>
          <g-link class="button" to="/what-is-pah">Learn More</g-link>
        </div>
      </section>
      <!-- what is pah -->

      <section grey id="managing-your-pah">
        <g-image
          src="~/assets/img/icn-managing-your-pah.png"
          alt="an icon of a checklist"
          class="section-icon"
        />

        <h1 class="section-header">Managing Your PAH</h1>

        <div class="section-body">
          <h2>Want to learn about how you can do more about your PAH?</h2>
          <g-link class="button" to="/managing-your-pah">Take Action</g-link>
        </div>
      </section>
      <!-- managing your pah -->

      <section purple id="pah-pathways">
        <g-image
          src="~/assets/img/icn-pah-pathways.png"
          alt="an icon of molecule chains"
          class="section-icon"
        />

        <h1 class="section-header">PAH Pathways</h1>

        <div class="section-body">
          <h2>Do you know about the 3 imbalances that contribute to PAH?</h2>
          <g-link class="button" to="/pah-pathways">Get Started</g-link>
        </div>
      </section>
      <!-- pah pathways -->

      <section grey id="therapies">
        <g-image
          src="~/assets/img/icn-therapies.png"
          alt="an icon of a prescription symbol"
          class="section-icon"
        />

        <h1 class="section-header">Treatment Options</h1>

        <div class="section-body">
          <h2>Learn about treatment options from United Therapeutics</h2>
          <a class="button" href="https://www.fightingpah.com">Discover</a>
        </div>
      </section>
      <!-- therapies -->
    </div>
    <!-- side bars -->

    <CallToAction />
  </Layout>
</template>

<script>
export default {
  methods: {
    handleArrowClick() {
      document
        .getElementById("feel-better")
        .scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
/* HERO SECTION
====================================================== */

#hero {
  min-height: 100%;
  padding: 0;
  margin: 0 auto;
  grid-template-rows: 60px repeat(11, 42px);

  @include for-desktop-up {
    grid-template-rows: 80px repeat(11, 80px);
    padding: 0 1rem;
  }

  &::before {
    display: none;
  }
}

#hero .hero-image {
  display: none;

  @include for-desktop-up {
    display: block;
    width: 100%;
    @include grid-child(2, 17, 1, 4);
  }
}

#hero .hero-image-mobile {
  display: block;
  width: 100%;
  @include grid-child(1, 17, 1, 5);

  @include for-desktop-up {
    display: none;
    width: 100%;
  }
}

#hero .hero-text {
  text-align: center;
  font-size: 0.75rem;
  padding-top: 0.4rem;
  @include grid-child(2, 16, 7, 11);

  @include for-desktop-up {
    padding: 0 3rem;
    padding-top: 0.6rem;
    font-size: 1.35rem;
    line-height: 1.92rem;
    @include grid-child(3, 14, 7, 11);
  }
}

#hero #hero-down-button {
  min-width: auto;
  width: 20px;
  padding: 0;
  background: 0;
  border: none;
  justify-self: center;
  align-self: center;
  @include grid-child(8, 10, 10, 11);

  @include for-desktop-up {
    height: 20px;
    width: 30px;
    @include grid-child(8, 10, 10, 11);
    cursor: pointer;
  }
}

/* FEEL BETTER
====================================================== */
#feel-better {
  @include for-desktop-up {
    grid-template-rows: repeat(3, auto);
  }

  &::before {
    @include for-tablet-portrait-up {
      margin-left: 10px;
    }

    @include for-desktop-up {
      margin-top: 1rem;
      margin-left: 44px;
      @include grid-child(4, 13, 1, 4);
    }
  }
}

#feel-better .section-header {
  @include for-desktop-up {
    margin-top: 2rem;
    @include grid-child(4, 11, 1, 3);
  }
}

#feel-better .section-icon {
  @include for-desktop-up {
    padding: 0 20px;
    @include grid-child(12, 15, 1, 3);
  }
}

#feel-better .section-body {
  padding-bottom: 0.8rem;

  @include for-desktop-up {
    padding: 0 0 20px 0px;
    @include grid-child(5, 12, 3, 4);
  }
}

/* RISK STATUS
====================================================== */

#risk-status {
  grid-template-rows: repeat(4, auto);

  @include for-desktop-up {
    grid-template-rows: 60px repeat(4, auto);
  }

  &::before {
    @include grid-child(1, 17, 1, 5);

    @include for-tablet-portrait-up {
      @include grid-child(1, 17, 2, 5);
    }

    @include for-desktop-up {
      @include grid-child(6, 15, 2, 5);
    }
  }
}

#risk-status .section-header {
  @include for-tablet-portrait-up {
    @include grid-child(4, 17, 1, 2);
  }

  @include for-desktop-up {
    margin-bottom: 0;
    @include grid-child(8, 17, 1, 2);
  }
}

#risk-status .section-icon {
  @include for-desktop-up {
    padding: 0 20px;
    @include grid-child(4, 7, 1, 2);
  }
}

#risk-status p:first-of-type {
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    padding-top: 1rem;
    @include grid-child(7, 14, 2, 3);
  }
}

#risk-status p:nth-of-type(2) {
  @include grid-child(2, 16, 3, 4);

  @include for-desktop-up {
    @include grid-child(7, 14, 3, 4);
    margin-bottom: 30px;
  }
}

#risk-status .section-body {
  @include display-grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(16, 1fr);
  @include grid-child(1, 17, 4, 5);

  @include for-desktop-up {
    grid-template-columns: repeat(9, 1fr);
    @include grid-child(6, 15, 4, 5);
  }

  &:before {
    content: "";
    @include grid-child(1, 17, 1, 3);
    background: $purple;
    border-radius: 7px;

    @include for-desktop-up {
      @include grid-child(1, 17, 1, 2);
    }
  }
}

#risk-status .section-body p {
  padding: 10px 0;
  @include for-desktop-up {
    margin: 30px 0 30px 0;
    padding: 0;
    font-family: ProximaNova, sans-serif;
    font-size: 14px;
    @include grid-child(2, 9, 1, 2);
  }
}

/* WHAT IS PAH
====================================================== */

#what-is-pah {
  @include for-desktop-up {
    grid-template-rows: 40px repeat(2, auto);
  }

  &::before {
    @include grid-child(2, 16, 1, 3);

    @include for-tablet-portrait-up {
      @include grid-child(3, 13, 2, 4);
    }

    @include for-desktop-up {
      @include grid-child(6, 12, 2, 4);
    }
  }
}

#what-is-pah .section-icon {
  @include for-desktop-up {
    padding: 0 20px;
    @include grid-child(11, 14, 1, 4);
  }
}

#what-is-pah .section-header {
  @include grid-child(3, 17, 1, 2);

  @include for-desktop-up {
    padding-left: 2.5rem;
    margin: 0.67em 0;
    margin-bottom: 0;
    @include grid-child(5, 10, 2, 3);
  }
}

#what-is-pah .section-body {
  padding-bottom: 1.5rem;
  @include grid-child(3, 15, 2, 3);

  @include for-tablet-portrait-up {
    @include grid-child(4, 12, 2, 3);
  }

  @include for-desktop-up {
    padding-left: 2.5rem;
    @include grid-child(6, 11, 3, 4);
  }
}

/* MANAGING YOUR PAH
====================================================== */

#managing-your-pah {
  &::before {
    @include grid-child(2, 16, 1, 3);

    @include for-tablet-portrait-up {
      @include grid-child(5, 15, 2, 3);
    }

    @include for-desktop-up {
      @include grid-child(7, 13, 2, 3);
    }
  }
}

#managing-your-pah .section-icon {
  @include for-desktop-up {
    padding: 0 30px;
    @include grid-child(5, 8, 1, 3);
  }
}

#managing-your-pah .section-header {
  @include grid-child(3, 17, 1, 2);

  @include for-tablet-portrait-up {
    @include grid-child(8, 17, 1, 2);
  }

  @include for-desktop-up {
    padding-left: 1.5rem;
    margin-bottom: 10px;
    @include grid-child(8, 13, 1, 2);
  }
}

#managing-your-pah .section-body {
  @include grid-child(3, 14, 2, 3);
  padding-bottom: 2rem;

  @include for-tablet-portrait-up {
    @include grid-child(6, 14, 2, 3);
  }

  @include for-desktop-up {
    @include grid-child(8, 12, 2, 3);
  }
}

/* PAH PATHWAYS
====================================================== */

#pah-pathways {
  @include for-desktop-up {
    grid-template-rows: 40px repeat(2, auto);
  }

  &::before {
    @include grid-child(2, 16, 1, 3);

    @include for-tablet-portrait-up {
      @include grid-child(3, 13, 2, 3);
    }

    @include for-desktop-up {
      @include grid-child(6, 12, 2, 4);
    }
  }
}

#pah-pathways .section-icon {
  @include for-desktop-up {
    padding: 0 20px;
    @include grid-child(11, 14, 1, 4);
  }
}

#pah-pathways .section-header {
  @include grid-child(3, 17, 1, 2);

  @include for-desktop-up {
    padding-left: 2.5rem;
    margin-bottom: 0;
    @include grid-child(5, 9, 2, 3);
  }
}

#pah-pathways .section-body {
  padding-bottom: 2rem;
  @include grid-child(3, 14, 2, 3);

  @include for-tablet-portrait-up {
    @include grid-child(4, 11, 2, 3);
  }

  @include for-desktop-up {
    padding-left: 2.5rem;
    padding-right: 3rem;
    @include grid-child(6, 11, 3, 4);
  }
}

/* THERAPIES
====================================================== */

#therapies {
  &::before {
    @include grid-child(2, 16, 1, 3);

    @include for-tablet-portrait-up {
      @include grid-child(5, 15, 1, 3);
    }

    @include for-desktop-up {
      @include grid-child(7, 13, 2, 3);
    }
  }
}

#therapies .section-icon {
  @include for-desktop-up {
    padding: 0 25px;
    margin-top: 30px;
    @include grid-child(5, 8, 1, 3);
  }
}

#therapies .section-header {
  @include grid-child(3, 17, 1, 2);

  @include for-tablet-portrait-up {
    @include grid-child(8, 17, 1, 2);
  }

  @include for-desktop-up {
    padding-left: 1.5rem;
    margin-bottom: 5px;
    @include grid-child(8, 14, 1, 2);
  }
}

#therapies .section-body {
  padding-bottom: 2rem;
  @include grid-child(3, 16, 2, 3);

  @include for-tablet-portrait-up {
    @include grid-child(6, 14, 2, 3);
  }

  @include for-desktop-up {
    padding-left: 0;
    @include grid-child(8, 12, 2, 3);
  }
}
</style>
