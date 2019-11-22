<template>
  <SecondaryLayout>
    <Modal v-if="leaving" v-on:closeModal="leaving = false">
      <h2 slot="header">
        You’re leaving this page and heading to a site with information about
        treatment options from United Therapeutics.
      </h2>

      <div slot="footer">
        <div class="two-buttons">
          <a class="modal-default" href="https://www.fightingpah.com">
            Continue
          </a>

          <button class="modal-secondary" @click="toggleModal">
            Go Back
          </button>
        </div>
      </div>
    </Modal>
    <!-- exit modal -->

    <section purple id="do-more">
      <h1 class="section-header">Do more for your PAH Treatment</h1>
      <g-image
        class="section-icon"
        src="~/assets/img/icn-heart-plus.png"
        alt="an icon of a heart with a plus sign in the corner and an ekg line through the middle"
      />
      <div class="section-body">
        <p>
          When you have PAH, being "stable" or "feeling okay" may seem good
          enough. After a while, some people may accept the idea that they'll
          never feel better or get closer to the life they had before PAH. But
          you don't have to accept "good enough."
          <strong>Prostacyclin-class medicines</strong> have been shown to be an
          effective PAH treatment option to reduce symptoms, increase 6-minute
          walk distance, reduce NT-proBNP (an indicator of the strain on your
          heart), slow disease progression and improve your functional class,
          which means you may be able to feel better and do more.
        </p>
      </div>
    </section>
    <!-- do more -->

    <section grey id="what-is-prostacyclin">
      <h1 class="section-header">What is Prostacyclin (PCY)?</h1>
      <div class="section-body">
        <p>
          <strong>Prostacyclin (pros-tuh-sahy-klin)</strong>—or "PCY"—is a
          natural substance in your body that works in different ways within the
          blood vessels. PCY is essential to help your lungs function properly.
          Normal PCY levels help maintain blood vessel health, keeping them open
          and allowing normal blood flow. Prostacyclin also helps prevent
          clotting, and slows down rapid cell growth (called proliferation),
          which prevents blood vessels from becoming too thick.
        </p>
        <p>
          <strong
            >People with PAH may not produce enough natural prostacyclin</strong
          >. When you have too little prostacyclin, the vessels of the lungs
          become narrow and restrict blood flow. That's why your doctor may
          consider prescribing a
          <g-link to="/pah-treatment-medicine#medicines">
            Prostacyclin-class medicine</g-link
          >.
        </p>
      </div>
      <h3>See how PAH affects blood vessels</h3>
      <div class="section-video">
        <iframe
          class=" embed-responsive-item "
          src="https://player.vimeo.com/video/240001664"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
          data-ready="true"
        ></iframe>
      </div>
    </section>
    <!-- what is prostacyclin -->

    <section purple id="medicines">
      <h1 class="section-header">Prostacyclin-<wbr />class medicines</h1>
      <div class="section-body">
        <p>
          Prostacyclin-class medicines target the prostacyclin pathway and mimic
          some of the effects of natural prostacyclin that your body lacks, to
          help the blood vessels in your lungs stay open. They may help prevent
          blood platelets from clumping together (forming clots), which can also
          narrow blood vessels in the lungs.
        </p>

        <p><strong>Prostacyclin-class medicines may work by:</strong></p>
        <ul>
          <li>Widening or opening the blood vessels (known as vasodilation)</li>
          <li>Slowing down the vessel thickening process</li>
          <li>Preventing clotting (clotting can narrow blood vessels)</li>
          <li>
            Smoothing the vessel lining, which can help prevent the vessel from
            becoming too thick.
          </li>
        </ul>
      </div>
      <g-image
        class="section-image"
        src="~/assets/img/blood-vessels.png"
        alt="A healthy blood vessel and a blood vessel affected by PAH"
      />
    </section>
    <!-- medicines -->

    <section grey id="benefits">
      <h1 class="section-header">
        Benefits of Prostacyclin-<wbr />CLASS medicines
      </h1>
      <div class="section-body top">
        <p>
          In clinical studies, Prostacyclin-class medicines have been shown to
        </p>
        <ul>
          <li>Improve 6-minute walk distance</li>
          <li>
            Improve symptoms associated with exercise, like shortness of breath
            and fatigue
          </li>
          <li>Improve functional class</li>
          <li>Slow disease progression (keep PAH from getting worse)</li>
          <li>Reduce blood pressure in the lungs</li>
          <li>Improve NT-proBNP numbers</li>
        </ul>
        <p>
          Because these are key elements in determining your risk score, these
          benefits indicate that Prostacyclin-class medicines may help improve
          your risk status.
        </p>
      </div>

      <div class="section-body bottom">
        <p>
          Prostacyclin-class medicines were the first type of treatment to be
          prescribed for PAH. It’s also the only class of PAH medicine available
          in 3 forms:
        </p>
        <ul>
          <li>Oral (pills)</li>
          <li>Inhaled</li>
          <li>Pump therapy</li>
        </ul>
      </div>
    </section>
    <!-- benefits -->

    <section purple id="side-effects">
      <h1 class="section-header">
        Side effects of Prostacyclin-<wbr />class medicines
      </h1>
      <g-image
        class="section-icon"
        src="~/assets/img/icn-prescription.png"
        alt="an icon of a prescription card with a warning symbol on top of it"
      />
      <div class="section-body">
        <p>
          You may experience side effects with prostacyclins. The most common
          side effects of this class of medicine include headache, diarrhea,
          flu-like symptoms, jaw pain, muscle spasm, flushing, and nausea. There
          may be different side effects depending upon how you take the
          medicine. PAH specialists are familiar with these expected side
          effects and know how to help manage them.
        </p>
        <p>
          Talk to your doctor about the side effects before you start taking
          prostacyclin therapy. You will be prepared and know what to do if they
          do occur. Tell your healthcare team if you have any side effect that
          bothers you or that does not go away.
        </p>
      </div>
    </section>
    <!-- side effects -->

    <section grey id="getting-started">
      <h1 class="section-header">
        Getting started on Prostacyclin-class treatment
      </h1>
      <div class="section-body">
        <p>
          If your doctor prescribes a Prostacyclin-class medicine, it will be
          delivered by a <strong>Specialty Pharmacy</strong>.
        </p>
        <p>
          Specialty Pharmacies are different from your local pharmacy. They
          offer personalized care and teams of trained, experienced nurses and
          pharmacists who provide the customized support you may need,
          including:
        </p>
        <ul>
          <li>24/7 phone support</li>
          <li>In-home nurse visits to explain more about the medicine</li>
          <li>Home delivery of medicines</li>
          <li>
            Scheduled follow-up calls from Specialty Pharmacy nurses and
            pharmacists
          </li>
        </ul>
      </div>
    </section>
    <!-- getting started -->

    <section purple id="make-the-most">
      <g-image
        class="section-icon"
        src="~/assets/img/icn-ask.png"
        alt="an icon of a word bubble with a question mark in it"
      />
      <div class="section-body">
        <h3>
          Make the most of your next visit with your PAH team.<br />
          Ask if now is the right time to consider a Prostacyclin-class medicine
          to help lower your risk status and slow your PAH.
        </h3>
      </div>
    </section>
    <!-- make the most -->

    <section grey id="fighting-pah">
      <g-image
        class="section-icon"
        src="~/assets/img/icn-eye.png"
        alt="an icon of an eye"
      />
      <div class="section-body">
        <h3>
          Visit FightingPAH.com to learn more about PAH treatment options
          brought to you by United Therapeutics
        </h3>
        <button class="button" @click="toggleModal">Go Now</button>
      </div>
    </section>
    <!-- fighting pah -->

    <section purple id="resources">
      <h1 class="section-header">Resources</h1>
      <g-image
        class="section-icon"
        src="~/assets/img/icn-laptop.png"
        alt="an icon of a laptop with a mouse pointer on the screen"
      />
      <div class="section-body">
        <h2>Check out other PAH resources.</h2>
        <g-link class="button" to="/pah-information-support">Discover</g-link>
      </div>
    </section>
    <!-- resources -->

    <CallToAction>
      <p>
        You can accept feeling okay, or you can ask about feeling better. Ask
        your doctor if adding a
        <span class="wine">Prostacyclin-class medicine</span> could help you.
      </p>
    </CallToAction>
  </SecondaryLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Pulmonary Arterial Hypertension (PAH) Treatment",
    meta: [
      {
        name: "description",
        content:
          "Learn more about prostacyclin-class medicines as a treatment option for pulmonary arterial hypertension."
      },
      {
        property: "og:title",
        content: "Pulmonary Arterial Hypertension (PAH) Treatment"
      },
      {
        property: "og:description",
        content:
          "Learn more about prostacyclin-class medicines as a treatment option for pulmonary arterial hypertension."
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.pahinitiative.com/pah-treatment-medicine/"
      }
    ]
  },
  data() {
    return {
      leaving: false
    };
  },
  methods: {
    toggleModal() {
      this.leaving = !this.leaving;
    }
  }
};
</script>

<style lang="scss" scoped>
/* DO MORE
====================================================== */

#do-more {
  @include for-desktop-up {
    grid-template-rows: 50px repeat(2, auto);
  }

  &::before {
    @include for-desktop-up {
      margin-left: 2.7rem;
      @include grid-child(3, 13, 2, 4);
    }
  }
}

#do-more .section-icon {
  @include for-desktop-up {
    padding: 0 2rem 0 0;
    justify-self: end;
    @include grid-child(12, 15, 1, 4);
  }
}

#do-more .section-header {
  @include for-desktop-up {
    margin-top: 2.5rem;
    @include grid-child(3, 12, 2, 3);
  }
}

#do-more .section-body {
  margin-bottom: 1.5rem;

  @include for-desktop-up {
    margin: 0 0 2.5rem 2.7rem;
    padding: 0 6.2vw 0 5.6vw;
    @include grid-child(3, 13, 3, 4);
  }
}

#do-more .section-body p {
  margin-bottom: 0;
}

/* WHAT IS PROSTACYCLIN
====================================================== */

#what-is-prostacyclin {
  @include for-desktop-up {
    grid-template-rows: repeat(4, auto) 40px;
  }

  &::before {
    @include grid-child(1, 17, 1, 5);

    @include for-desktop-up {
      @include grid-child(4, 14, 2, 5);
    }
  }
}

#what-is-prostacyclin .section-video {
  @include grid-child(2, 16, 4, 5);
  margin-bottom: 1.5rem;

  @include for-desktop-up {
    margin-bottom: 0;
    @include grid-child(8, 13, 3, 6);
  }
}

#what-is-prostacyclin .section-video iframe {
  width: 100%;
  height: 165px;

  @include for-desktop-up {
    height: 225px;
  }
}

#what-is-prostacyclin .section-header {
  @include for-desktop-up {
    @include grid-child(6, 14, 1, 2);
  }
}

#what-is-prostacyclin .section-body {
  @include for-desktop-up {
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
    padding: 0 5.6vw;
    @include grid-child(4, 14, 2, 3);
  }
}

#what-is-prostacyclin .section-body p:first-child {
  margin-top: 0;
}

#what-is-prostacyclin h3 {
  @include grid-child(2, 16, 3, 4);

  @include for-desktop-up {
    margin-top: 0;
    padding-left: 5.6vw;
    @include grid-child(4, 8, 3, 4);
  }
}

/* MEDECINES
====================================================== */

#medicines {
  @include for-desktop-up {
    grid-template-rows: repeat(4, auto);
  }

  &::before {
    @include grid-child(1, 17, 1, 4);

    @include for-desktop-up {
      @include grid-child(4, 14, 1, 4);
    }
  }
}

#medicines .section-header {
  @include for-desktop-up {
    margin-top: 2.5rem;
    padding-left: 2.7rem;
    @include grid-child(3, 14, 1, 2);
  }
}

#medicines .section-body {
  @include for-desktop-up {
    padding: 0 5.6vw;
    @include grid-child(4, 14, 2, 3);
  }
}

#medicines .section-body ul li {
  font-family: ProximaNova, sans-serif;
}

#medicines .section-image {
  margin: 1.5rem 0;
  @include grid-child(3, 15, 3, 4);

  @include for-tablet-portrait-up {
    @include grid-child(5, 13, 3, 4);
  }

  @include for-desktop-up {
    margin: 2rem 0 2.5rem 0;
    @include grid-child(7, 11, 3, 4);
  }
}

/* BENEFITS
====================================================== */

#benefits {
  grid-template-rows: repeat(3, auto);

  &::before {
    @include grid-child(1, 17, 1, 4);

    @include for-desktop-up {
      @include grid-child(4, 14, 2, 4);
    }
  }
}

#benefits .section-header {
  @include for-tablet-portrait-up {
    @include grid-child(2, 14, 1, 2);
  }
  @include for-desktop-up {
    padding-left: 2.4rem;
    @include grid-child(5, 12, 1, 2);
  }
}

#benefits .section-body.top {
  margin: 1.5rem 0;
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    margin: 2.5rem 0;
    padding: 0 5.6vw;
    @include grid-child(4, 14, 2, 3);
  }
}

#benefits .section-body.top p:first-child {
  margin-top: 0;
}
#benefits .section-body.top p:last-child {
  margin-bottom: 0;
}

#benefits .section-body.bottom {
  @include display-grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(16, 1fr);
  grid-column: 1 / 17;
  grid-row: 3;
  @include grid-child(1, 17, 3, 4);

  &::before {
    content: "";
    background: $purple;
    border-radius: 7px;
    @include grid-child(1, 17, 1, 4);

    @include for-desktop-up {
      @include grid-child(4, 14, 1, 4);
    }
  }
}

#benefits .section-body.bottom p:first-child {
  @include grid-child(2, 16, 1, 2);
  margin: 1.5rem 0 0;

  @include for-desktop-up {
    margin: 2.5rem 0 0;
    padding: 0 5.6vw;
    @include grid-child(4, 14, 1, 2);
  }
}

#benefits .section-body.bottom ul {
  margin-bottom: 1.5rem;
  @include grid-child(2, 17, 3, 4);

  @include for-desktop-up {
    margin-bottom: 2rem;
    margin-left: 1rem;
    padding: 0 5.6vw;
    @include grid-child(4, 14, 3, 4);
  }
}

/* SIDE EFFECTS
====================================================== */

#side-effects {
  @include for-desktop-up {
    grid-template-rows: 50px repeat(2, auto);
  }

  &::before {
    @include for-desktop-up {
      margin-left: 2.7rem;
      @include grid-child(3, 13, 2, 4);
    }
  }
}

#side-effects .section-icon {
  @include for-desktop-up {
    padding: 0 2rem 0 0;
    justify-self: end;
    @include grid-child(12, 15, 1, 4);
  }
}

#side-effects .section-header {
  @include for-desktop-up {
    margin-top: 2.5rem;
    @include grid-child(3, 10, 2, 3);
  }
}

#side-effects .section-body {
  margin-bottom: 1.5rem;

  @include for-desktop-up {
    margin: 0 0 2.5rem 2.7rem;
    padding: 0 5vw 0 5.6vw;
    @include grid-child(3, 13, 3, 4);
  }
}

#side-effects .section-body p {
  margin-bottom: 0;
}

/* GETTING STARTED
====================================================== */

#getting-started {
  &::before {
    @include for-desktop-up {
      @include grid-child(4, 14, 2, 4);
    }
  }
}

#getting-started .section-header {
  @include for-desktop-up {
    @include grid-child(5, 12, 1, 2);
  }
}

#getting-started .section-body {
  margin: 1.5rem 0;

  @include for-desktop-up {
    margin: 2.5rem 0;
    padding: 0 7.5vw 0 5.6vw;
    @include grid-child(4, 14, 2, 4);
  }
}

#getting-started .section-body p:first-child {
  margin-top: 0;
}

#getting-started .section-body ul {
  padding-left: 1rem;
  font-family: ProximaNovaBold, "Arial Narrow Bold", sans-serif;
}

#getting-started .section-body ul li {
  & + li {
    margin-top: 0.4rem;
  }
}

/* MAKE THE MOST
====================================================== */

#make-the-most {
  @include for-desktop-up {
    grid-template-rows: 50px repeat(2, auto);
  }

  &::before {
    margin-top: 0;

    @include for-tablet-portrait-up {
      @include grid-child(3, 13, 2, 3);
    }

    @include for-desktop-up {
      margin-left: 2rem;
      @include grid-child(3, 13, 2, 3);
    }
  }
}

#make-the-most .section-icon {
  @include for-desktop-up {
    justify-self: center;
    padding: 0 50px 0 0;
    @include grid-child(12, 15, 1, 3);
  }
}

#make-the-most .section-body {
  margin: 1.5rem 0;

  @include for-tablet-portrait-up {
    @include grid-child(4, 12, 2, 3);
  }

  @include for-desktop-up {
    margin: 2.5rem 0 2.5rem 2rem;
    padding: 0 5.6vw;
    @include grid-child(3, 13, 2, 3);
  }
}

#make-the-most .section-body h3 {
  margin: 0;

  br {
    display: none;

    @include for-desktop-up {
      display: block;
    }
  }
}

/* FIGHTING PAH
====================================================== */

#fighting-pah {
  grid-template-rows: auto;
  @include for-desktop-up {
    grid-template-rows: 50px auto;
  }

  &::before {
    margin-top: 0;

    @include for-tablet-portrait-up {
      @include grid-child(5, 15, 1, 2);
    }

    @include for-desktop-up {
      margin-right: 2rem;
      @include grid-child(5, 15, 2, 3);
    }
  }
}

#fighting-pah .section-icon {
  @include for-desktop-up {
    padding: 0 0 0 2rem;
    @include grid-child(3, 6, 1, 3);
  }
}

#fighting-pah .section-body {
  margin: 1.5rem 0;

  @include grid-child(2, 16, 1, 2);

  @include for-desktop-up {
    margin: 2.5rem 0;
    margin-right: 2rem;
    padding: 0 5.6vw;
    @include grid-child(5, 15, 2, 3);
  }
}

#fighting-pah .section-body h3 {
  font-size: 1.5rem;
  margin-top: 0;
}

#fighting-pah .section-body .button {
  @include for-desktop-up {
    margin-left: 2.4rem;
  }
}

/* RESOURCES
====================================================== */

#resources {
  @include for-tablet-portrait-up {
    grid-template-rows: auto auto;
  }

  @include for-desktop-up {
    grid-template-rows: 40px auto auto;
  }

  &::before {
    @include for-tablet-portrait-up {
      @include grid-child(2, 12, 1, 3);
    }

    @include for-desktop-up {
      margin-top: 0;
      @include grid-child(5, 12, 2, 4);
    }
  }
}

#resources .section-icon {
  @include for-desktop-up {
    justify-self: end;
    padding: 0 2rem 0 0;
    @include grid-child(11, 14, 1, 4);
  }
}

#resources .section-header {
  @include for-tablet-portrait-up {
    @include grid-child(3, 12, 1, 2);
  }

  @include for-desktop-up {
    margin-top: 2.5rem;
    padding-left: 2.7rem;
    @include grid-child(4, 14, 2, 3);
  }
}

#resources .section-body {
  margin: 1.5rem 0;

  @include for-tablet-portrait-up {
    @include grid-child(3, 12, 2, 3);
  }

  @include for-desktop-up {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    padding: 0 4vw;
    @include grid-child(5, 12, 3, 4);
  }
}

#resources .section-body h2 {
  font-size: 1.5rem;
  margin-top: 0;
}

/* MODAL
====================================================== */
.two-buttons {
  margin: auto;
  display: flex;
  justify-content: center;

  & a,
  & button {
    margin-right: 0.5rem;
    padding: 0 10px;
    @include for-desktop-up {
      margin-right: 1rem;
      padding: 0 2rem;
    }
  }
}
</style>