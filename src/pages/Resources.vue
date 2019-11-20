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
    <section grey id="useful-information">
      <h1 class="section-header">Useful information about PAH</h1>
      <div class="section-body">
        <h3>
          Here you will find useful videos, links and other information to help
          support you on your treatment journey.
        </h3>
      </div>
    </section>
    <!-- useful information -->

    <section purple id="opt-in">
      <h1 class="section-header">
        Opt-In
      </h1>

      <g-image
        class="section-icon"
        src="~/assets/img/icn-email-opt-in.png"
        alt="an icon of a paper airplane"
      />

      <div class="section-body">
        <h3>Sign up for resources and the latest information about PAH.</h3>
        <g-link class="button" to="/newsletter">Take Action</g-link>
      </div>
    </section>
    <!-- opt-in -->

    <section grey id="videos">
      <h1 class="section-header">
        Videos
      </h1>

      <div class="section-body">
        <h3>See how PAH affects blood vessels</h3>

        <div class="video">
          <div class="video-text">
            This video shows you how blood vessels in the lungs function
            normally, compared with those affected by PAH.
          </div>

          <iframe
            class=" embed-responsive-item video-media section-image"
            src="https://player.vimeo.com/video/240001664"
            frameborder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
            data-ready="true"
          ></iframe>
        </div>

        <div class="video">
          <g-image
            class="video-media section-image"
            src="~/assets/img/affects-video.png"
          />
          <div class="video-text">
            Understand why treatment with more than one PAH medicine is
            important.
          </div>
        </div>

        <div class="video">
          <div class="video-text">
            Learn why getting to a low-risk status is an important goal of
            treatment.
          </div>
          <g-image
            class="video-media section-image"
            src="~/assets/img/affects-video.png"
          />
        </div>

        <div class="video">
          <g-image
            class="video-media section-image"
            src="~/assets/img/affects-video.png"
          />
          <div class="video-text">
            Understand why treatment with more than one PAH medicine is
            important.
          </div>
        </div>
      </div>
    </section>
    <!-- videos -->

    <section purple id="learn-more">
      <h1 class="section-header">
        Want to learn more about PAH<br />
        treatments from United Therapeutics?
      </h1>

      <div class="section-body">
        <h3>
          Go directly to our site.
        </h3>

        <button
          class="button"
          @click="
            toggleModal(
              'http://www.fightingpah.com/pah-patient-stories/oral-inhaled-iv-treprostinil.html'
            )
          "
        >
          Visit FightingPAH.com
        </button>
      </div>
    </section>
    <!-- learn more -->

    <section purple id="discussion-guide">
      <h1 class="section-header">PAH Doctor Discussion Guide</h1>

      <g-image
        class="section-icon"
        src="~/assets/img/icn-download.png"
        alt="an icon of a download symbol on a piece of paper"
      />

      <div class="section-body">
        <h3>
          Download this Doctor Discussion Tool &amp; Visit Checklist to guide
          your next appointment and help you ask the right questions.
        </h3>
        <g-link
          class="button"
          to="https://www.unitedpahsupport.com/pdfs/Doctor-Discussion-Guide.pdf"
          >Doctor Discussion Tool</g-link
        >
      </div>
    </section>
    <!-- discussion guide -->

    <section grey id="find-an-expert">
      <g-image
        class="section-icon"
        src="~/assets/img/icn-magnifying-glass-plus-2.png"
      />
      <div class="section-body">
        <button
          class="button"
          @click="
            toggleModal('https://phassociation.org/patients/doctorswhotreatph/')
          "
        >
          Find An Expert Who Treats PAH
        </button>

        <p>
          Because PAH is rare, not all heart and lung specialists have
          experience treating it. For this reason,
          <strong
            >people living with PAH are encouraged to seek out a doctor who
            specializes in treating PAH</strong
          >. These doctors are committed to treating PAH, have had lots of
          training, and have offices that support the special needs of people
          with PAH.
        </p>
      </div>
    </section>
    <!-- find an expert -->

    <section purple id="ph-association">
      <div class="section-body">
        <button
          class="button"
          @click="toggleModal('https://phassociation.org')"
        >
          Pulmonary Hypertension Association
        </button>
        <p>
          The <strong>Pulmonary Hypertension Associaltion</strong> (PHA)
          envisions a world without PH and is dedicated to improving the lives
          of all those affected by this deadly disease. Through support,
          advocacy and awareness, education, quality care and research programs,
          PHA empowers patients, caregivers, families, health care professionals
          and researchers worldwide.
        </p>
      </div>
      <g-image
        class="section-image"
        src="~/assets/img/pulmonary-hypertension-association.jpg"
        alt="an image of the pulmonary hypertension association logo"
      />
    </section>
    <!-- ph association -->

    <section grey id="ph-aware">
      <div class="section-body">
        <button
          class="button"
          @click="toggleModal('https://www.phaware.global')"
        >
          phaware Global Association&reg;
        </button>
        <p>
          <strong>phaware</strong>&reg; creates pulmonary hypertension awareness
          and global engagement on behalf of families, caregivers and medical
          professionals affected by PAH and supports innovative research efforts
          to help find a cure for this deadly disease.
        </p>
      </div>
      <g-image
        class="section-image"
        src="~/assets/img/ph-aware.jpg"
        alt="an image of the PH Aware logo"
      />
    </section>
    <!-- ph aware -->

    <section purple id="scleroderma-foundation">
      <div class="section-body">
        <button
          class="button"
          @click="
            toggleModal(
              'https://www.scleroderma.org/site/SPageServer/#.XPct0y2ZOL8'
            )
          "
        >
          Scleroderma Foundation
        </button>
        <p>
          <strong>Scleroderma</strong> is a chronic connective tissue disease.
          Patients with scleroderma are at high risk of getting PAH. The
          Scleroderma Foundation supports patients and their families through
          support programs, peer counseling, raising public awareness, and
          stimulating research to improve treatment.
        </p>
      </div>
      <g-image
        class="section-image"
        src="~/assets/img/scleroderma-foundation.jpg"
        alt="an image of the scleroderma foundation logo"
      />
    </section>
    <!-- scleroderma foundation -->

    <section grey id="ph-news">
      <div class="section-body">
        <button
          class="button"
          @click="toggleModal('https://pulmonaryhypertensionnews.com')"
        >
          PH News
        </button>
        <p>
          Provides news and articles about developments in PH research and
          therapies.
        </p>
      </div>
      <g-image
        class="section-image"
        src="~/assets/img/ph-news.jpg"
        alt="an image of the scleroderma foundation logo"
      />
    </section>
    <!-- ph news -->
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
    title: "Resources"
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
/* USEFUL INFORMATION
====================================================== */

#useful-information {
  &::before {
    @include for-tablet-portrait-up {
      background: none;
    }
  }
}

#useful-information .section-header {
  @include grid-child(2, 15, 1, 2);
  @include for-desktop-up {
    text-align: center;
    @include grid-child(5, 13, 1, 2);
  }
}

#useful-information .section-body {
  @include for-desktop-up {
    padding: 0 1.3rem;
    text-align: center;
    @include grid-child(5, 13, 2, 3);
  }
}

/* OPT-IN
====================================================== */

#opt-in {
  @include for-desktop-up {
    grid-template-rows: 30px auto auto;
  }

  &::before {
    @include for-desktop-up {
      margin-left: 2.2rem;
      @include grid-child(5, 12, 2, 4);
    }
  }
}

#opt-in .section-icon {
  @include for-desktop-up {
    justify-self: center;
    padding: 0 45px 0 0;
    @include grid-child(11, 14, 1, 4);
  }
}

#opt-in .section-header {
  @include for-desktop-up {
    @include grid-child(5, 12, 2, 3);
  }
}

#opt-in .section-body {
  margin-bottom: 1.5rem;

  @include for-desktop-up {
    margin-bottom: 2rem;
    @include grid-child(6, 10, 3, 4);
  }
}

/* VIDEOS
====================================================== */

#videos {
  &::before {
    @include for-desktop-up {
      @include grid-child(4, 14, 2, 3);
    }
  }
}

#videos .section-header {
  @include for-desktop-up {
    padding-left: 2.2rem;
    @include grid-child(5, 13, 1, 2);
  }
}

#videos .section-body {
  margin-bottom: 1.5rem;

  @include for-desktop-up {
    @include grid-child(5, 13, 2, 3);
    margin-bottom: 2rem;
  }
}

#videos .section-body .video {
  @include display-grid;
  grid-template-rows: repeat(2, auto);

  @include for-desktop-up {
    grid-template-rows: auto;
    grid-template-columns: repeat(16, 1fr);
  }

  & + .video {
    margin-top: 2rem;

    @include for-desktop-up {
      margin-top: 3rem;
    }
  }
}

#videos .section-body .video .embed-responsive-item {
  height: 206px;
}

#videos .section-body .video:nth-of-type(odd) .video-text {
  @include for-desktop-up {
    @include grid-child(1, 7, 1, 2);
  }
}

#videos .section-body .video:nth-of-type(odd) .video-media {
  @include for-desktop-up {
    @include grid-child(8, 17, 1, 2);
  }
}

#videos .section-body .video:nth-of-type(even) .video-text {
  @include grid-child(1, 2, 1, 2);

  @include for-desktop-up {
    @include grid-child(11, 16, 1, 2);
  }
}

#videos .section-body .video:nth-of-type(even) .video-media {
  @include for-desktop-up {
    @include grid-child(1, 10, 1, 2);
  }
}

/* LEARN MORE
====================================================== */

#learn-more {
  &::before {
    @include for-desktop-up {
      @include grid-child(4, 14, 1, 3);
    }
  }
}

#learn-more .section-header {
  @include for-desktop-up {
    padding-left: 2.2rem;
    @include grid-child(3, 16, 1, 2);
  }

  br {
    display: none;

    @include for-desktop-up {
      display: block;
    }
  }
}

#learn-more .section-body {
  margin-bottom: 1.5rem;

  @include for-desktop-up {
    margin-bottom: 2rem;
    @include grid-child(5, 16, 2, 3);
  }
}

/* DISCUSSION GUIDE
====================================================== */

#discussion-guide {
  @include for-desktop-up {
    grid-template-rows: 30px auto auto;
  }

  &::before {
    @include for-desktop-up {
      margin-left: 2.6rem;
      @include grid-child(3, 13, 2, 4);
    }
  }
}

#discussion-guide .section-icon {
  @include for-desktop-up {
    justify-self: center;
    padding: 0 50px 0 0;
    @include grid-child(12, 15, 1, 4);
  }
}

#discussion-guide .section-header {
  @include for-desktop-up {
    @include grid-child(3, 16, 2, 3);
  }
}

#discussion-guide .section-body {
  margin-bottom: 1.5rem;

  @include for-desktop-up {
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    @include grid-child(4, 11, 3, 4);
  }
}

#discussion-guide .section-body .button {
  background: transparent url("../assets/img/download-arrow.svg");
  background-repeat: no-repeat;
  background-position: 14px 8px;
  padding-left: 40px;
}

/* FIND AN EXPERT
====================================================== */

#find-an-expert {
  @include for-desktop-up {
    grid-template-rows: repeat(2, 40px) auto;
  }

  &::before {
    margin-top: 0;

    @include for-desktop-up {
      margin-left: 1rem;
      margin-right: 2.5rem;
      @include grid-child(5, 15, 2, 4);
    }
  }
}

#find-an-expert .section-icon {
  @include for-desktop-up {
    justify-self: center;
    padding: 0 25px;
    @include grid-child(3, 6, 1, 4);
  }
}

#find-an-expert .section-body {
  @include display-grid;
  grid-auto-rows: repeat(2, auto);
  margin: 1.5rem 0;

  @include for-desktop-up {
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-right: 1.2rem;
    @include grid-child(6, 14, 2, 4);
  }
}

#find-an-expert .section-body p {
  margin: 0 0 0.8rem 0;
  @include grid-child(1, 17, 1, 2);

  @include for-desktop-up {
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
}

#find-an-expert .section-body button {
  padding: 0 5px;
  font-size: 0.8rem;
  @include grid-child(1, 17, 2, 3);

  @include for-desktop-up {
    font-size: 1rem;
    padding: 0 32px;
  }
}

/* PH ASSOCIATION
====================================================== */

#ph-association {
  @include for-desktop-up {
    grid-template-rows: repeat(2, auto);
  }

  &::before {
    margin-top: 0;
    @include grid-child(1, 17, 1, 3);

    @include for-desktop-up {
      margin-left: 35px;
      @include grid-child(3, 13, 1, 2);
    }
  }
}

#ph-association .section-image {
  border-radius: 7px;
  margin-top: 1.5rem;
  @include grid-child(2, 16, 1, 2);

  @include for-desktop-up {
    border: 2px solid $purple;
    align-self: center;
    margin-top: 0;
    margin-left: 35px;
    @include grid-child(11, 14, 1, 2);
  }
}

#ph-association .section-body {
  @include display-grid;
  grid-template-rows: auto auto auto;
  @include grid-child(2, 16, 2, 3);
  margin: 1.2rem 0;

  @include for-desktop-up {
    display: block;
    margin: 2rem 0;
    @include grid-child(4, 11, 1, 2);
  }
}

#ph-association .section-body p {
  margin-top: 0;
  @include grid-child(1, 17, 2, 3);

  @include for-desktop-up {
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
}

#ph-association .section-body .button {
  font-size: 0.8rem;
  padding: 0 5px;
  @include grid-child(1, 17, 3, 4);

  @include for-desktop-up {
    font-size: 1rem;
    padding: 0 32px;
  }
}

/* PH AWARE
====================================================== */

#ph-aware {
  &::before {
    margin-top: 0;

    @include for-desktop-up {
      margin: 0 35px;
      @include grid-child(5, 15, 1, 2);
    }
  }
}

#ph-aware .section-image {
  border-radius: 7px;
  margin-top: 1.5rem;
  @include grid-child(2, 16, 1, 2);

  @include for-desktop-up {
    width: 80%;
    margin-top: 0;
    margin-left: 35px;
    border: 2px solid $purple;
    border-radius: 7px;
    align-self: center;
    @include grid-child(3, 6, 1, 2);
  }
}

#ph-aware .section-body {
  @include display-grid;
  @include grid-child(2, 16, 2, 3);
  margin-bottom: 1.2rem;

  @include for-desktop-up {
    display: block;
    margin: 2rem 0;
    padding-left: 2rem;
    @include grid-child(6, 14, 1, 2);
  }
}

#ph-aware .section-body p {
  @include grid-child(1, 17, 1, 2);
}

#ph-aware .section-body .button {
  font-size: 0.8rem;
  @include grid-child(1, 17, 2, 3);

  @include for-desktop-up {
    font-size: 1rem;
    padding: 0 32px;
  }
}

/* SCLERODERMA FOUNDATION
====================================================== */

#scleroderma-foundation {
  @include for-desktop-up {
    grid-template-rows: repeat(2, auto);
  }

  &::before {
    margin-top: 0;
    @include grid-child(1, 17, 1, 3);

    @include for-desktop-up {
      margin-left: 30px;
      @include grid-child(3, 13, 1, 3);
    }
  }
}

#scleroderma-foundation .section-image {
  border-radius: 7px;
  margin-top: 1.5rem;
  @include grid-child(2, 16, 1, 2);

  @include for-desktop-up {
    width: 80%;
    margin-top: 0;
    margin-right: 30px;
    border: 2px solid $purple;
    align-self: center;
    justify-self: end;

    @include grid-child(12, 15, 1, 2);
  }
}

#scleroderma-foundation .section-body {
  margin-bottom: 1.2rem;
  @include display-grid;
  grid-template-rows: auto auto auto;
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    display: block;
    margin: 2rem 0;
    padding-right: 1rem;
    @include grid-child(4, 12, 1, 2);
  }
}

#scleroderma-foundation .section-body p {
  @include grid-child(1, 17, 1, 2);
}

#scleroderma-foundation .section-body .button {
  font-size: 0.8rem;
  @include grid-child(1, 17, 2, 3);

  @include for-desktop-up {
    font-size: 1rem;
    padding: 0 32px;
  }
}

/* PH NEWS
====================================================== */

#ph-news {
  &::before {
    margin-top: 0;

    @include for-desktop-up {
      margin-right: 35px;
      @include grid-child(5, 15, 1, 3);
    }
  }
}

#ph-news .section-image {
  border-radius: 7px;
  margin-top: 1.5rem;
  @include grid-child(2, 16, 1, 2);

  @include for-desktop-up {
    width: 80%;
    margin-top: 0;
    margin-left: 35px;
    border: 2px solid $purple;
    border-radius: 7px;
    align-self: center;
    @include grid-child(3, 6, 1, 2);
  }
}

#ph-news .section-body {
  margin-bottom: 1.2rem;
  @include display-grid;
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    display: block;
    margin: 2rem 0;
    padding-left: 1.2rem;
    @include grid-child(6, 14, 1, 2);
  }
}

#ph-news .section-body p {
  @include grid-child(2, 16, 1, 2);
}

#ph-news .section-body .button {
  @include grid-child(2, 16, 2, 3);
  @include for-desktop-up {
    @include grid-child(2, 16, 2, 3);
  }
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