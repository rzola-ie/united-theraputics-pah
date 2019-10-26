<template>
  <Layout>
    <section id="hero">
      <Header />

      <button id="hero-down-button" @click="handleArrowClick">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          id="hero-down-arrow"
          viewBox="0 0 35 25"
          width="35px"
          height="25px"
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

    <section id="feel-better">
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
          PAH is a severe disease that gets worse over time. But today’s
          treatment options can
          <strong
            >slow the disease’s progression and improve how you feel.</strong
          >
          By working closely with your doctor to assess your <u>symptoms</u>,
          <u>risk status</u> and <u>treatment options</u>, you’ll be better able
          to manage the impact of PAH on your life. Together with the support of
          your healthcare team, there may be more you can do to achieve your
          treatment goals.
        </p>
      </div>
    </section>
    <!-- feel better -->

    <section id="risk-status">
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
            okay. But I didn’t tell her that it took me two days to recover. So
            am I really doing okay?”</i
          ></strong
        >
        - <small>PAH Patient</small>
      </p>
      <p>
        Even if your doctor is satisfied that you’re doing “okay” with your PAH,
        is doing “okay” enough for you? There may be ways to reduce your
        <u>symptoms</u> so you can feel better and do more. As ongoing research
        helps us understand more about PAH, experts continue to improve the way
        they treat it.
      </p>
      <div class="section-body">
        <p>
          In order to determine the best treatment approach for you, it is
          important to have your doctor regularly monitor your
          <strong><u>risk status</u></strong> (the risk of your PAH getting
          worse over the next 5 years). Your doctor will conside-bars a number
          of factors to determine whether you are at low-, intermediate- or
          high-risk status.
        </p>
      </div>
    </section>
    <!-- feel better -->

    <div class="side-bars">
      <section id="what-is-pah">
        <g-image
          src="~/assets/img/icn-what-is-pah.png"
          alt="an icon of lungs"
          class="section-icon"
        />

        <h1 class="section-header">What is pah?</h1>

        <div class="section-body">
          <h2>Looking for more information about PAH?</h2>
          <g-link class="button" to="/what-is-pah/">Learn More</g-link>
        </div>
      </section>
      <!-- what is pah -->

      <section id="managing-your-pah">
        <g-image
          src="~/assets/img/icn-managing-your-pah.png"
          alt="an icon of a checklist"
          class="section-icon"
        />

        <h1 class="section-header">Managing Your PAH</h1>

        <div class="section-body">
          <h2>Want to learn about how you can do more about your PAH?</h2>
          <button>Take Action</button>
        </div>
      </section>
      <!-- managing your pah -->

      <section id="pah-pathways">
        <g-image
          src="~/assets/img/icn-pah-pathways.png"
          alt="an icon of molecule chains"
          class="section-icon"
        />

        <h1 class="section-header">PAH Pathways</h1>

        <div class="section-body">
          <h2>Do you know about the 3 imbalances that contribute to PAH?</h2>
          <button>Get Started</button>
        </div>
      </section>
      <!-- pah pathways -->

      <section id="therapies">
        <g-image
          src="~/assets/img/icn-therapies.png"
          alt="an icon of a prescription symbol"
          class="section-icon"
        />

        <h1 class="section-header">Prostacyclin-Class Therapies</h1>

        <div class="section-body">
          <h2>Do you know about Prostacyclin-class treatments?</h2>
          <button>Discover</button>
        </div>
      </section>
      <!-- therapies -->
    </div>

    <CallToAction />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  methods: {
    handleArrowClick() {
      console.log("we scrollin");
      document
        .getElementById("feel-better")
        .scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_color-palette";
@import "~/assets/styles/_breakpoints";

$max_width: 1440px;

/* HERO SECTION
====================================================== */

#hero {
  position: relative;
  padding: 0;
  min-height: 100vh;
  margin: 0;
  background: url("../assets/img/Hero-Visual.png");
  background-size: contain;
  // background-position: 70% 25%;
  background-position-x: 80%;
  background-position-y: 15%;
  background-size: 90%;
  background-repeat: no-repeat;
  display: grid;
  grid-template-rows: 80px 1fr 80px;

  @include for-desktop-up {
  }
}

#hero #hero-down-button {
  grid-row-start: 3;
  height: 25px;
  width: 35px;
  padding: 0;
  background: 0;
  border: none;
  align-self: start;
  justify-self: center;
  cursor: pointer;
}

/* FEEL BETTER
====================================================== */
#feel-better {
  display: grid;
  margin-top: 0;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(16, 1fr);

  @include for-desktop-up {
    grid-template-rows: repeat(4, auto);
  }

  &::before {
    content: "";
    margin-top: 35px;
    background: $purple;
    grid-row: 1 / 3;
    grid-column: 1 / end;
    border-radius: 7px;
    z-index: -1;

    @include for-tablet-portrait-up {
      margin-left: 10px;
    }

    @include for-desktop-up {
      margin-top: 1rem;
      margin-left: 44px;
      grid-row: 1 / end;
      grid-column: 4 / 13;
    }
  }
}

#feel-better .section-header {
  margin-top: 0;
  grid-column: 1 / end;
  grid-row: 1;

  @include for-desktop-up {
    margin-top: 2rem;
    grid-row: 1 / span 2;
    grid-column: 4 / 11;
  }
}

#feel-better .section-icon {
  @include for-desktop-up {
    grid-row: 1 / span 2;
    grid-column: 12 / span 3;
  }
}

#feel-better .section-body {
  padding: 0 0 10px 0;
  grid-column: 2 / 16;
  grid-row: 2;

  @include for-desktop-up {
    padding: 0 0 20px 0px;
    grid-row-start: 3;
    grid-column: 5 / 12;
  }
}

/* RISK STATUS
====================================================== */

#risk-status {
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(16, 1fr);

  @include for-desktop-up {
    grid-template-rows: 60px repeat(5, auto);
  }

  &::before {
    content: "";
    background: $grey;
    grid-column: 1 / end;
    grid-row: 1 / end;

    @include for-tablet-portrait-up {
      grid-column: 1 / end;
      margin-top: 40px;
    }

    @include for-desktop-up {
      margin-top: 0;
      grid-column: 6 / 15;
      grid-row: 2 / 5;
    }
  }
}

#risk-status .section-header {
  grid-row: 1 / span 1;
  grid-column: 2 / end;

  @include for-tablet-portrait-up {
    grid-column: 4 / end;
  }

  @include for-desktop-up {
    margin-bottom: 0;
    grid-column: 8 / end;
  }
}

#risk-status .section-icon {
  @include for-desktop-up {
    grid-column: 4 / 7;
    grid-row: 1 / 2;
  }
}

#risk-status p:first-of-type {
  grid-row: 2 / span 1;
  grid-column: 2 / 16;

  @include for-desktop-up {
    grid-row: 2 / span 1;
    grid-column: 7 / span 7;
    font-size: 20px;
    line-height: 24px;
    padding-top: 1rem;
  }
}

#risk-status p:nth-of-type(2) {
  grid-row: 3 / span 1;
  grid-column: 2 / 16;

  @include for-desktop-up {
    grid-row: 3 / span 1;
    grid-column: 7 / 14;
    margin-bottom: 30px;
  }
}

#risk-status .section-body {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(16, 1fr);
  grid-row: 4 / span 1;
  grid-column: 1 / end;

  @include for-desktop-up {
    grid-template-columns: repeat(9, 1fr);
    grid-row: 4 / span 1;
    grid-column: 6 / 15;

    &:before {
      grid-column: 1 / end;
      grid-row: 1 / 2;
    }
  }

  &:before {
    content: "";
    grid-column: 1 / end;
    grid-row: 1 / end;
    background: $purple;
    border-radius: 7px;
  }
}

#risk-status .section-body p {
  padding: 10px 0;
  @include for-desktop-up {
    margin: 30px 0 30px 0;
    padding: 0;
    grid-column: 2 / 9;
    grid-row: 1 / 2;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.23px;
    line-height: 18px;
  }
}

/* SIDE-BARS SECTION
====================================================== */

.side-bars {
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 100%;
    top: 0;
    background-color: $purple;
  }

  &:before {
    left: 0;
    border-radius: 0 0.5rem 0.5rem 0;
  }

  &:after {
    right: 0;
    border-radius: 0.5rem 0 0 0.5rem;
  }
}

.side-bars section {
  padding: 1rem 1.3rem;
}

.side-bars .section-icon {
  width: 180px;
}

/* WHAT IS PAH
====================================================== */

#what-is-pah {
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(16, 1fr);

  @include for-desktop-up {
    grid-template-rows: 40px repeat(5, auto);
    grid-template-columns: repeat(16, 1fr);
  }

  &::before {
    content: "";
    margin-top: 15px;
    background: $purple;

    grid-column: 2 / 16;
    grid-row: 1 / end;

    @include for-tablet-portrait-up {
      grid-column: 3 / 13;
    }

    @include for-desktop-up {
      margin-top: 30px;
      grid-column: 6 / 12;
    }
  }
}

#what-is-pah .section-icon {
  @include for-desktop-up {
    grid-column: 11 / span 2;
    grid-row: 1 / span 3;
  }
}

#what-is-pah .section-header {
  grid-row: 1;
  grid-column: 2 / end;
  margin-top: 0;

  @include for-tablet-portrait-up {
    grid-column: 3 / end;
  }

  @include for-desktop-up {
    padding-left: 2.5rem;
    grid-column: 5 / 10;
    grid-row: 2;
    margin: 0.67em 0;
    margin-bottom: 0;
  }
}

#what-is-pah .section-body {
  grid-row: 2;
  grid-column: 3 / 14;
  padding-bottom: 2rem;

  @include for-tablet-portrait-up {
    grid-column: 4 / 12;
  }

  @include for-desktop-up {
    padding-left: 2.5rem;
    grid-column: 6 / 11;
    grid-row: 3 / 4;
  }
}

/* MANAGING YOUR PAH
====================================================== */

#managing-your-pah {
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(16, 1fr);

  @include for-tablet-portrait-up {
    grid-template-rows: repeat(6, auto);
  }

  &::before {
    content: "";
    margin-top: 15px;
    background: $grey;
    grid-row: 1 / 4;
    grid-column: 2 / 16;

    @include for-tablet-portrait-up {
      grid-column: 5 / 15;
    }

    @include for-desktop-up {
      margin: 0;
      grid-row: 2 / end;
      grid-column: 7 / 13;
    }
  }
}

#managing-your-pah .section-icon {
  @include for-desktop-up {
    grid-row: 1 / 3;
    grid-column: 5 / 8;
  }

  @include for-big-desktop-up {
    margin-left: 2.5rem;
  }
}

#managing-your-pah .section-header {
  margin-top: 0;
  grid-row: 1;
  grid-column: 4 / end;

  @include for-tablet-portrait-up {
    grid-column: 8 / end;
  }

  @include for-desktop-up {
    grid-column: 8 / 15;
    padding-left: 1.5rem;
    margin-bottom: 10px;
  }
}

#managing-your-pah .section-body {
  grid-row: 2;
  grid-column: 3 / 14;
  padding-bottom: 2rem;

  @include for-tablet-portrait-up {
    grid-column: 6 / 14;
  }

  @include for-desktop-up {
    grid-row: 2;
    grid-column: 8 / 12;
  }
}

/* PAH PATHWAYS
====================================================== */

#pah-pathways {
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(16, 1fr);

  @include for-desktop-up {
    grid-template-rows: 40px repeat(5, auto);
  }

  &::before {
    content: "";
    margin-top: 15px;
    background: $purple;
    grid-row: 1 / end;
    grid-column: 2 / 16;

    @include for-tablet-portrait-up {
      grid-column: 3 / 13;
    }

    @include for-desktop-up {
      grid-row: 1 / 4;
      grid-column: 6 / 12;
    }
  }
}

#pah-pathways .section-icon {
  @include for-desktop-up {
    grid-column: 11 / span 2;
    grid-row: 1 / span 3;
  }
}

#pah-pathways .section-header {
  margin-top: 0;
  grid-row: 1;
  grid-column: 2 / end;

  @include for-tablet-portrait-up {
    grid-column: 3 / end;
  }

  @include for-desktop-up {
    padding-left: 2.5rem;
    grid-column: 5 / 9;
    grid-row: 2;
    margin-bottom: 0;
  }
}

#pah-pathways .section-body {
  grid-row: 2;
  grid-column: 3 / 14;
  padding-bottom: 2rem;

  @include for-tablet-portrait-up {
    grid-column: 4 / 11;
  }

  @include for-desktop-up {
    padding-left: 2.5rem;
    padding-right: 3rem;
    grid-column: 6 / 11;
    grid-row: 3 / 4;
  }
}

/* THERAPIES
====================================================== */

#therapies {
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(16, 1fr);

  @include for-tablet-portrait-up {
    grid-template-rows: repeat(6, auto);
  }

  &::before {
    content: "";
    margin-top: 15px;
    background: $grey;
    grid-row: 1 / 4;
    grid-column: 2 / 16;

    @include for-tablet-portrait-up {
      grid-column: 5 / 15;
    }

    @include for-desktop-up {
      margin: 0;
      grid-row: 2 / end;
      grid-column: 7 / 13;
    }
  }
}

#therapies .section-icon {
  @include for-desktop-up {
    grid-row: 1 / 3;
    grid-column: 5 / 8;
  }

  @include for-big-desktop-up {
    margin-left: 2.5rem;
  }
}

#therapies .section-header {
  margin-top: 0;
  grid-row: 1;
  grid-column: 3 / end;

  @include for-tablet-portrait-up {
    grid-column: 8 / end;
  }

  @include for-desktop-up {
    grid-column: 8 / 12;
    padding-left: 1.5rem;
    margin-bottom: 5px;
    margin-top: 0;
  }
}

#therapies .section-body {
  grid-row: 2;
  grid-column: 3 / 16;
  padding-bottom: 2rem;

  @include for-tablet-portrait-up {
    grid-column: 6 / 14;
  }

  @include for-desktop-up {
    grid-row: 2;
    grid-column: 8 / 12;
    padding-left: 0;
  }
}
</style>
