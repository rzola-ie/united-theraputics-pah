<template>
  <SecondaryLayout>
    <Modal v-if="leaving">
      <h2 slot="header">
        YOU ARE NOW LEAVING A SITE MANAGED BY UNITED THERAPEUTICS. CLICK
        CONTINUE TO PROCEED.
      </h2>

      <div slot="footer">
        <div class="two-buttons">
          <a class="modal-default" :href="exitLink">
            Continue
          </a>

          <button class="modal-secondary" @click="toggleModal">
            Go Back
          </button>
        </div>
      </div>
    </Modal>
    <section grey id="pah-pathways">
      <h1 class="section-header">PAH Pathways</h1>
      <g-image
        class="section-icon"
        src="~/assets/img/icn-pah-pathways-2.png"
        alt="an icon of a chemical structure"
      />
      <div class="section-body">
        <p>
          PAH is associated with an imbalance of 3 natural substances in your
          body. When balanced, each of these substances works in its own way to
          help blood flow freely through your blood vessels.
          <strong
            >Currently, there is no test to determine which substance is out of
            balance.</strong
          >
        </p>

        <div class="causes">
          <div class="cause">
            <h3 class="cause-header">Too little Prostacyclin</h3>
            <p class="cause-body">
              Prostacyclin works in different ways within healthy blood vessels.
              It helps to open arteries (dilation), helps prevent blood clots
              from forming in blood vessels and works to slow down rapid cell
              growth (smooth muscle proliferation).
            </p>
          </div>
          <div class="cause">
            <h3 class="cause-header">Too little Nitric oxide</h3>
            <p class="cause-body">
              Nitric oxide does many different things in the body, including
              helping control blood pressure by opening arteries (dilation) when
              needed.
            </p>
          </div>
          <div class="cause">
            <h3 class="cause-header">Too much Endothelin</h3>
            <p class="cause-body">
              Endothelin does almost the opposite of nitric oxide. It increases
              blood pressure and makes the blood vessels firm. Excess endothelin
              can also increase smooth muscle proliferation.
            </p>
          </div>
        </div>

        <p>
          Medicines are available to treat each of the three imbalances, or
          pathways.
          <strong>Each medicine works on only one pathway.</strong> Most
          patients start on one PAH medication, which means they are correcting
          only one of the imbalances, however, studies have shown that treating
          more than one pathway may be a more effective treatment approach.
          That's why your doctor may prescribe more than one medication to
          improve your symptoms and delay your disease progression.
        </p>

        <p>
          It's important that you and your doctor regularly monitor your
          condition and check that you're making progress against your treatment
          goals. The medication(s) that you start on at first may not be enough
          over the course of your disease. If you feel that you aren't meeting
          your treatment goals and that your medicine is no longer helping in
          the way they once did,
          <strong
            >it may be necessary to adjust or add to your treatment
            plan.</strong
          >
        </p>
      </div>
    </section>
    <!-- pah pathways -->

    <section purple id="therapies">
      <h1 class="section-header">Prostacyclin-Class Therapies</h1>
      <g-image
        class="section-icon"
        src="~/assets/img/icn-dna-chain.png"
        alt="an icon of a dna chain"
      />
      <div class="section-body">
        <h3>
          Remember, PAH is a progressive disease, which means your body may have
          different treatment needs over time. One such treatment your doctor
          may recommend is a Prostacyclin-class medicine.
        </h3>
        <g-link class="button" to="/pah-treatment-medicine/"
          >Learn about Prostacyclin-class medicines</g-link
        >
      </div>
    </section>
    <!-- therapies -->

    <section grey id="fighting-pah">
      <g-image
        class="section-icon"
        src="~/assets/img/icn-eye.png"
        alt="an icon of an eye"
      />
      <div class="section-body">
        <h2>
          Visit FightingPAH.com to learn more about PAH treatment options from
          United Therapeutics
        </h2>
        <button
          class="button"
          @click="toggleModal('https://www.fightingpah.com/')"
        >
          Go Now
        </button>
      </div>
    </section>
    <!-- fighting pah -->

    <CallToAction>
      <p>
        You can accept feeling okay, or you can ask about feeling better. Ask
        your doctor about adjusting your
        <g-link to="/pah-treatment-medicine/">treatment plan</g-link> to help you
        <span class="wine">feel better</span> and
        <span class="wine">do more</span>.
      </p>
    </CallToAction>
  </SecondaryLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "PAH Pathways| Prostacyclin, Endothelin and Nitric Oxide",
    meta: [
      {
        name: "description",
        content:
          "PAH is associated with an imbalance of 3 natural substances in your body. Learn more about these imbalances, or pathways."
      },
      {
        property: "og:title",
        content: "PAH Pathways| Prostacyclin, Endothelin and Nitric Oxide"
      },
      {
        property: "og:description",
        content:
          "PAH is associated with an imbalance of 3 natural substances in your body. Learn more about these imbalances, or pathways."
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.pahinitiative.com/pah-pathways/"
      }
    ]
  },
  data() {
    return {
      exitLink: "",
      leaving: false
    };
  },
  methods: {
    toggleModal(url) {
      this.leaving = !this.leaving;

      this.exitLink = this.leaving ? url : "";
    }
  }
};
</script>

<style lang="scss" scoped>
/* PAH PATHWAYS
====================================================== */

#pah-pathways {
  &::before {
    @include for-desktop-up {
      margin-right: 2rem;
      @include grid-child(5, 15, 2, 3);
    }
  }
}

#pah-pathways .section-icon {
  @include for-desktop-up {
    padding: 30px 2rem 0 0;
    @include grid-child(3, 6, 1, 3);
  }
}

#pah-pathways .section-header {
  @include for-desktop-up {
    padding-left: 2.4rem;
    @include grid-child(6, 14, 1, 2);
  }
}

#pah-pathways .section-body {
  margin: 1.5rem 0;

  @include for-desktop-up {
    margin: 2.5rem 2rem 2.5rem 0;
    padding: 0 5.6vw;
    @include grid-child(5, 15, 2, 3);
  }
}

#pah-pathways .section-body p {
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}

#pah-pathways .section-body .causes .cause {
  border-bottom: 1px solid $wine;
}

#pah-pathways .section-body .causes .cause h3 {
  margin-bottom: 0.8rem;
}

#pah-pathways .section-body .causes .cause p {
  margin-top: 0;
  margin-bottom: 1.2rem;
}

/* THERAPIES
====================================================== */

#therapies {
  @include for-tablet-portrait-up {
    grid-template-rows: 50px auto;
  }

  @include for-desktop-up {
    grid-template-rows: 50px repeat(2, auto);
  }

  &::before {
    @include grid-child(1, 17, 1, 4);

    @include for-desktop-up {
      margin-left: 2.7rem;
      @include grid-child(3, 13, 2, 4);
    }
  }
}

#therapies .section-icon {
  @include for-desktop-up {
    justify-self: end;
    padding: 0 2rem 0 0;
    @include grid-child(12, 15, 1, 4);
  }
}

#therapies .section-header {
  @include for-desktop-up {
    margin-top: 2.5rem;
    @include grid-child(3, 16, 2, 3);
  }
}

#therapies .section-body {
  margin-bottom: 1.5rem;
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    margin-left: 2.7rem;
    margin-bottom: 2.5rem;
    padding: 0 5vw 0 5.6vw;
    @include grid-child(3, 12, 3, 4);
  }
}

#therapies .section-body .button {
  width: 100%;
  padding: 0 10px;
  font-size: 0.7rem;

  @include for-desktop-up {
    width: initial;
    padding: 0 2.4rem;
    font-size: 1.2rem;
  }
}

/* FIGHTING PAH
====================================================== */

#fighting-pah {
  @include for-desktop-up {
    grid-template-rows: 30px auto;
  }

  &::before {
    margin-top: 0;
    @include for-desktop-up {
      margin-right: 2rem;
      @include grid-child(5, 15, 2, 3);
    }
  }
}

#fighting-pah .section-icon {
  @include for-desktop-up {
    padding: 0 2rem 0 0;
    @include grid-child(3, 6, 1, 3);
  }
}

#fighting-pah .section-body {
  margin: 1.5rem 0;
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    margin: 2.5rem 0;
    padding: 0 5.6vw;
    @include grid-child(5, 14, 2, 3);
  }
}

#fighting-pah .section-body h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

/* MODAL
====================================================== */
.two-buttons {
  margin: auto;
  display: flex;
  justify-content: center;

  & a {
    margin-right: 0.5rem;
    @include for-desktop-up {
      margin-right: 1rem;
    }
  }

  & button {
    margin-right: 0.5rem;
    @include for-desktop-up {
      margin-right: 1rem;
    }
  }
}
</style>