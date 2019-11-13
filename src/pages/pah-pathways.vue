<template>
  <SecondaryLayout>
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
        <g-link class="button" to="/prostacyclin-class-therapies"
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
        <h3>
          Visit FightingPAH.com to learn more about PAH treatment options from
          United Therapeutics
        </h3>
        <g-link class="button" to="https://www.fightingpah.com/">Go Now</g-link>
      </div>
    </section>
    <!-- fighting pah -->

    <CallToAction>
      <p>
        You can accept feeling okay, or you can ask about feeling better. Ask
        your doctor about adjusting your
        <g-link to="/prostacyclin-class-therapies">treatment plan</g-link> to
        help you feel better and do more.
      </p>
    </CallToAction>
  </SecondaryLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "PAH Pathways"
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
      @include grid-child(6, 15, 2, 3);
    }
  }
}

#pah-pathways .section-icon {
  @include for-desktop-up {
    justify-self: center;
    padding: 0 25px;
    @include grid-child(4, 7, 1, 3);
  }
}

#pah-pathways .section-header {
  @include for-desktop-up {
    margin-bottom: 5px;
    @include grid-child(8, 14, 1, 2);
  }
}

#pah-pathways .section-body {
  padding-bottom: 1.5rem;

  @include for-desktop-up {
    padding: 1rem 5.4rem 2rem 0;
    @include grid-child(7, 15, 2, 3);
  }
}

#pah-pathways .section-body p {
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
  grid-template-rows: 50px repeat(2, auto);

  &::before {
    @include for-desktop-up {
      margin-left: 40px;
      @include grid-child(4, 13, 2, 4);
    }
  }
}

#therapies .section-icon {
  @include for-desktop-up {
    justify-self: center;
    padding: 0 50px 0 0;
    @include grid-child(12, 15, 1, 4);
  }
}

#therapies .section-header {
  @include for-desktop-up {
    @include grid-child(4, 14, 2, 3);
  }
}

#therapies .section-body {
  padding-bottom: 1.5rem;

  @include for-desktop-up {
    padding-bottom: 2rem;
    padding-left: 40px;
    @include grid-child(5, 12, 3, 4);
  }
}

#therapies .section-body .button {
  padding: 0 10px;
  font-size: 0.7rem;

  @include for-desktop-up {
    padding: 0 2rem;
    font-size: 1rem;
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

    @include for-desktop-up {
      margin-right: 30px;
      @include grid-child(6, 15, 2, 3);
    }
  }
}

#fighting-pah .section-icon {
  @include for-desktop-up {
    justify-self: center;
    padding: 0 30px;
    @include grid-child(4, 7, 1, 3);
  }
}

#fighting-pah .section-body {
  padding: 1.5rem 0;

  @include for-desktop-up {
    padding: 2rem 0;
    @include grid-child(7, 13, 2, 3);
  }
}

#fighting-pah .section-body h3 {
  margin-top: 0;
}
</style>