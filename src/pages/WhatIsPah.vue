<template>
  <SecondaryLayout>
    <section id="what-is-pah">
      <g-image
        src="~/assets/img/icn-what-is-pah.png"
        alt="an icon of lungs"
        class="section-icon"
      />

      <h1 class="section-header">What is PAH?</h1>

      <div class="section-body">
        <p>
          PAH is the medical abbreviation for
          <strong>pulmonary arterial hypertension</strong>. PAH causes the
          millions of tiny blood vessels in your lungs to thicken and narrow.
          This makes it difficult for blood to flow from your heart through your
          lungs, creating high blood pressure in the lung vessels. Without
          regular blood flow, your lungs don’t receive enough oxygen. The
          pressure in the lungs causes the right side of the heart to work
          harder than normal.
        </p>
      </div>
    </section>
    <!-- what is pah -->
    <section id="pah-vs-ph">
      <g-image
        src="~/assets/img/icn-pulmonary.png"
        alt="an icon of two arrows"
        class="section-icon"
      />

      <h1 class="section-header">PAH vs PH?</h1>

      <div class="section-body">
        <p>
          <strong>PH</strong>, which stands for <strong>pulmonary hypertension</strong> is a more general term
          used to describe any condition in which the blood pressure of the
          vessels in your lungs is too high, such as chronic lung disease, heart
          disease or chronic blood clots. Pulmonary <strong>arterial</strong> hypertension (PAH)
          is an extremely rare type of PH that causes the pressure in the
          pulmonary arteries to rise.
        </p>

        <p>
          <strong>PAH is a serious disease that gets worse over time</strong>. Whether you’re
          undiagnosed or already on treatment, it’s important to talk with your
          doctor about the symptoms you’re experiencing—and the activities that
          trigger them—so that he/she can assess your condition correctly and
          treat it the best way for you.
        </p>
      </div>
    </section>
    <!-- pah vs ph -->
    <section id="pah-symptoms">
      <g-image
        src="~/assets/img/symptoms-chart.png"
        alt="an image of a pah symptoms chart"
        class="info-graphic"
      />

      <h1 class="section-header">PAH Symptoms</h1>
    </section>
    <!-- pah symptoms -->
  </SecondaryLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "What is PAH?"
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_color-palette";
@import "~/assets/styles/_breakpoints";

section {
  display: grid;
  grid-template-columns: repeat(16, 1fr);

  &::before {
    content: "";
  }
}

.section-icon {
  width: 180px;
}

/* WHAT IS PAH
====================================================== */

#what-is-pah {
  grid-template-rows: repeat(4, auto);


  @include for-desktop-up {
    grid-template-rows: 40px repeat(5, auto);
  }

  &::before {
    margin-top: 15px;
    background: $purple;
    grid-column: 2 / 16;
    grid-row: 1 / end;

    @include for-tablet-portrait-up {
      grid-column: 3 / 13;
    }

    @include for-desktop-up {
      margin-top: 30px;
      grid-column: 4 / 13;
    }
  }
}

#what-is-pah .section-icon {
  @include for-desktop-up {
    grid-column: 12 / span 2;
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
    grid-column: 3 / 10;
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
    grid-column: 5 / 12;
    grid-row: 3 / 4;
  }
}

/* PAH VS PH
====================================================== */

#pah-vs-ph {
  grid-template-rows: repeat(4, auto);


  @include for-desktop-up {
    grid-template-rows: repeat(6, auto);
  }

  &::before {
    margin-left: 1.8rem;
    background: $grey;
    grid-row: 2;
    grid-column: 5 / 14;
  }
}

#pah-vs-ph .section-icon {
  @include for-desktop-up {
    grid-column: 3 / span 2;
    grid-row: 1 / span 3;
    margin-left: 2.5rem;
  }
}

#pah-vs-ph .section-header {

  @include for-desktop-up {
    grid-row: 1;
    grid-column: 7 / 17;
    margin-bottom: 10px;
  }
}
#pah-vs-ph .section-body {


  @include for-desktop-up {
    grid-row: 2;
    grid-column: 6 / 14;
    padding: 1rem 3.5rem 1rem 0 ;
    padding-right: 3.5rem;
  }
}

/* PAH SYMPTOMS
====================================================== */

#pah-symptoms {}

#pah-symptoms .info-graphic {
  width: 280px;
  grid-column: 11 / span 3;
  justify-self: end;
  border: 3px solid $purple;
}

#pah-symptoms .section-header {
  grid-row: 1;
  grid-column: 3 / 8;
}
</style>