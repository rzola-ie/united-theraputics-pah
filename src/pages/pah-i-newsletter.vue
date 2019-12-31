<template>
  <SecondaryLayout>
    <Modal
      v-if="showSuccessModal"
      class="no-close-button"
      v-on:closeModal="dismissModal"
    >
      <h2 slot="header">THANKS FOR SIGNING UP!</h2>

      <h3 slot="body">
        We know how important it is to understand your PAH and take the
        initiative to improve how you feel&#xFE63;so you can do more. You'll
        hear from us shortly!
      </h3>

      <div slot="footer">
        <button class="modal-default" @click="dismissModal">
          Close
        </button>
      </div>
    </Modal>
    <!-- success modal -->

    <Modal v-if="showErrorModal">
      <h2 slot="header">WHOOPS!</h2>

      <h3 slot="body">
        We know how important it is to understand your PAH and take the
        initiative to improve how you feel&#xFE63;so you can do more. Please
        make sure that all the fields are properly filled in.
      </h3>

      <div slot="footer">
        <button class="modal-default" @click="dismissModal">
          Go Back
        </button>
      </div>
    </Modal>
    <!-- error modal -->

    <section purple id="mailing-list">
      <g-image
        class="section-icon"
        src="~/assets/img/icn-email-opt-in.png"
        alt="an icon of a paper airplane"
      />
      <h1 class="section-header">Join PAH-I Support</h1>
      <h3>
        Subscribe to our newsletter and we'll provide you with helpful
        information and updates about the PAH Initiative, PAH treatment options
        from United Therapeutics, live events, and more.
      </h3>
      <small>*Note: Required fields.</small>
      <ValidationObserver
        tag="form"
        ref="form"
        class="form"
        v-slot="{ invalid }"
        id="powf_C5B4B40E909DE911A834000D3A17CE77"
        action="https://pocloudcentral.crm.powerobjects.net/PowerWebForm/PowerWebFormData.aspx?t=Xh89xZ055EiFJ%2bb7Nj6EkXUAbgBpAHQAZQBkAHQAaABlAHIAYQBwAGUAdQB0AGkAYwBzAA%3d%3d&formId=powf_C5B4B40E909DE911A834000D3A17CE77&tver=2013&c=1"
        enctype="multipart/form-data"
        method="post"
        @submit.prevent="submit"
        novalidate="novalidate"
      >
        <ValidationProvider
          name="first name"
          rules="required"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group full"
        >
          <label for="powf_40beb314909de911a834000d3a17ce77"
            >First Name <span class="required-field">*</span></label
          >
          <input
            type="text"
            id="powf_40beb314909de911a834000d3a17ce77"
            name="powf_40beb314909de911a834000d3a17ce77"
            value=""
            blockedemaildomain=""
            maxlength="100"
            autocomplete="given-name"
            :class="classes"
            v-model="address.firstName"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- first-name -->

        <ValidationProvider
          name="last name"
          rules="required"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group full"
        >
          <label for="powf_41beb314909de911a834000d3a17ce77"
            >Last Name <span class="required-field">*</span></label
          >
          <input
            type="text"
            id="powf_41beb314909de911a834000d3a17ce77"
            name="powf_41beb314909de911a834000d3a17ce77"
            value=""
            blockedemaildomain=""
            maxlength="56"
            autocomplete="family-name"
            :class="classes"
            v-model="address.lastName"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- last-name -->

        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group full"
        >
          <label for="powf_42beb314909de911a834000d3a17ce77"
            >E-mail Address <span class="required-field">*</span></label
          >
          <input
            type="text"
            id="powf_42beb314909de911a834000d3a17ce77"
            name="powf_42beb314909de911a834000d3a17ce77"
            value=""
            blockedemaildomain=""
            maxlength="56"
            autocomplete="email"
            :class="classes"
            v-model="address.email"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- e-mail address -->

        <div class="form-group full not-required">
          <label for="powf_43beb314909de911a834000d3a17ce77"
            >Mailing Address</label
          >
          <input
            type="text"
            id="powf_43beb314909de911a834000d3a17ce77"
            name="powf_43beb314909de911a834000d3a17ce77"
            value=""
            blockedemaildomain=""
            maxlength="56"
            autocomplete="address-line1"
            v-model="address.mailingAddress1"
          />
        </div>
        <!-- mailing address 1 -->

        <div class="form-group full not-required">
          <label for="powf_4bbeb314909de911a834000d3a17ce77"
            >Mailing Address 2</label
          >
          <input
            type="text"
            id="powf_4bbeb314909de911a834000d3a17ce77"
            name="powf_4bbeb314909de911a834000d3a17ce77"
            value=""
            blockedemaildomain=""
            maxlength="100"
            autocomplete="address-line2"
            v-model="address.mailingAddress2"
          />
        </div>
        <!-- mailing address 2 -->

        <div class="form-group half not-required">
          <label for="powf_44beb314909de911a834000d3a17ce77">City</label>
          <input
            type="text"
            id="powf_44beb314909de911a834000d3a17ce77"
            name="powf_44beb314909de911a834000d3a17ce77"
            value=""
            blockedemaildomain=""
            maxlength="56"
            autocomplete="address-level2"
            v-model="address.city"
          />
        </div>

        <!-- city -->

        <div class="form-group half not-required">
          <label for="powf_45beb314909de911a834000d3a17ce77">State</label>
          <select
            id="powf_45beb314909de911a834000d3a17ce77"
            name="powf_45beb314909de911a834000d3a17ce77"
            v-model="address.state"
          >
            <option value=""></option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="District of Columbia">District of Columbia</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Guam">Guam</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virgin Islands">Virgin Islands</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>

        <!-- state -->

        <div class="form-group half not-required">
          <label for="powf_46beb314909de911a834000d3a17ce77">ZIP</label>
          <input
            type="text"
            id="powf_46beb314909de911a834000d3a17ce77"
            name="powf_46beb314909de911a834000d3a17ce77"
            value=""
            blockedemaildomain=""
            maxlength="100"
            autocomplete="postal-code"
            v-model="address.zip"
          />
        </div>
        <!-- zip -->

        <div class="form-group half not-required">
          <label for="powf_4cbeb314909de911a834000d3a17ce77">Phone</label>
          <input
            type="text"
            id="powf_4cbeb314909de911a834000d3a17ce77"
            name="powf_4cbeb314909de911a834000d3a17ce77"
            value=""
            blockedemaildomain=""
            maxlength="56"
            autocomplete="tel"
            v-model="address.phone"
          />
        </div>
        <!-- phone -->

        <div class="legal">
          <ValidationProvider
            name="age"
            rules="required"
            v-slot="{ errors, classes }"
            tag="div"
            class="age"
          >
            <label for="powf_4dbeb314909de911a834000d3a17ce77">
              I am at least 18 years old. <span class="required-field">*</span>
            </label>
            <div class="radio-group yes">
              <input
                type="radio"
                id="powf_4dbeb314909de911a834000d3a17ce770"
                name="powf_4dbeb314909de911a834000d3a17ce77"
                value="Yes"
                v-model="over18"
              />
              <label
                for="powf_4dbeb314909de911a834000d3a17ce770"
                :class="classes"
                >YES</label
              >
            </div>

            <div class="radio-group no">
              <input
                type="radio"
                id="powf_4dbeb314909de911a834000d3a17ce771"
                name="powf_4dbeb314909de911a834000d3a17ce77"
                value="No"
                v-model="over18"
              />
              <label
                for="powf_4dbeb314909de911a834000d3a17ce771"
                :class="classes"
                >NO</label
              >
            </div>

            <span>
              {{ errors[0] }}
            </span>
          </ValidationProvider>

          <div class="captcha-wrapper">
            <vue-recaptcha
              class="captcha"
              sitekey="6LdJyckUAAAAAFFVuBkS2uIe0UmhLV-iXS5_y6fJ"
              :loadRecaptchaScript="true"
            ></vue-recaptcha>
          </div>

          <h4>United Therapeutics respects your privacy.</h4>

          <p>
            By clicking SUBMIT, I agree to have my personal information used to
            provide me with information and resources regarding products,
            programs, and services related to my condition, including treatment
            information. Information sent by United Therapeutics does not take
            the place of talking with your healthcare provider about your
            treatment or condition. United Therapeutics, or third parties
            working on its behalf, will not sell your information or use it for
            unrelated purposes. If in the future you no longer want to receive
            these materials or participate in these programs, you can
            unsubscribe at any time by clicking the link at the bottom of the
            page. For more information, please review our
            <g-link to="../assets/pdfs/ut-privacy-policy.pdf" target="_blank">
              Privacy Policy</g-link
            >.
          </p>
        </div>
        <!-- legal -->

        <!-- Global Communications Opt-in -->
        <input
          type="hidden"
          id="powf_49beb314909de911a834000d3a17ce77"
          name="powf_49beb314909de911a834000d3a17ce77"
          value="Yes"
        />
        <!-- United Therapeutics Opt-in -->
        <input
          type="hidden"
          id="powf_4abeb314909de911a834000d3a17ce77"
          name="powf_4abeb314909de911a834000d3a17ce77"
          value="Yes"
        />
        <!-- Enrollment Source -->
        <input
          type="hidden"
          id="powf_48beb314909de911a834000d3a17ce77"
          name="powf_48beb314909de911a834000d3a17ce77"
          value="No Time To Lose Website"
        />
        <!-- Ready for Email Day -->
        <input
          type="hidden"
          id="powf_0c4f34f4919de911a834000d3a17ce77"
          name="powf_0c4f34f4919de911a834000d3a17ce77"
          value="1"
        />
        <input type="hidden" name="ignore_submitmessage" value="" />
        <input type="hidden" name="ignore_linkbuttontext" value="" />
        <input
          type="hidden"
          name="ignore_redirecturl"
          :value="`${currentRoute}?success=true`"
        />
        <input type="hidden" name="ignore_redirectmode" value="Auto" />

        <div class="section-submit">
          <button class="button" type="submit">SUBMIT</button>
        </div>
      </ValidationObserver>
    </section>
    <!-- mailing list -->
  </SecondaryLayout>
</template>

<script>
import { required, email, max } from "vee-validate/dist/rules";
import VueRecaptcha from "vue-recaptcha";

export default {
  metaInfo: {
    title: "PAH I Support Newsletter",
    meta: [
      {
        name: "description",
        content:
          "Subscribe to our newsletter and get helpful information and updates about the PAH Initiative, PAH treatment options, live events, and more."
      },
      {
        property: "og:title",
        content: "PAH I Support Newsletter"
      },
      {
        property: "og:description",
        content:
          "Subscribe to our newsletter and get helpful information and updates about the PAH Initiative, PAH treatment options, live events, and more."
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.pahinitiative.com/pah-i-newsletter/"
      }
    ]
  },
  components: { VueRecaptcha },
  data() {
    return {
      address: {
        firstName: null,
        lastName: null,
        mailingAddress1: null,
        mailingAddress2: null,
        city: null,
        state: null,
        zip: null,
        phone: null,
        email: null
      },
      over18: null,
      currentRoute: null,
      showSuccessModal: false,
      showErrorModal: false
    };
  },
  mounted() {
    this.currentRoute = window.location.href;
    this.recaptcha = process.env.GRIDSOME_RECAPTCHA;

    if (this.$route.query.success === "true") {
      this.showSuccessModal = true;
    }
  },
  methods: {
    async submit(e) {
      const isValid = await this.$refs.form.validate();

      if (!isValid) {
        this.showErrorModal = true;
      } else {
        document.querySelector("form").submit();
      }
    },
    dismissModal() {
      if (this.showErrorModal === true) {
        document.querySelector("#mailing-list").scrollIntoView({
          behavior: "smooth",
          inline: "nearest"
        });
        this.showErrorModal = false;
      } else {
        this.showSuccessModal = false;
        this.$router.replace("/pah-i-newsletter");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#mailing-list {
  grid-template-rows: repeat(6, auto);

  @include for-desktop-up {
    grid-template-rows: 30px repeat(6, auto);
  }

  &::before {
    @include grid-child(1, 17, 1, 7);

    @include for-desktop-up {
      @include grid-child(3, 15, 2, 7);
    }
  }
}

#mailing-list .section-icon {
  @include for-desktop-up {
    justify-self: center;
    padding: 0 20px;
    @include grid-child(13, 16, 1, 4);
  }
}

#mailing-list .section-header {
  @include for-desktop-up {
    padding-left: 2.5rem;
    margin-top: 2.5rem;
    @include grid-child(2, 15, 2, 3);
  }
}

#mailing-list h3 {
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    @include grid-child(4, 12, 3, 4);
  }
}

#mailing-list small {
  @include grid-child(2, 16, 3, 4);
  margin-bottom: 1rem;

  @include for-desktop-up {
    @include grid-child(4, 15, 4, 5);
  }
}

#mailing-list form {
  @include display-grid;
  @include grid-child(1, 17, 5, 6);
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(16, 1fr);

  @include for-desktop-up {
    @include grid-child(3, 15, 5, 6);
  }
}

#mailing-list form .form-group {
  @include display-grid;
  grid-template-rows: repeat(3, auto);

  @include for-desktop-up {
    grid-template-rows: auto auto;
  }
}

#mailing-list form .form-group.full {
  grid-template-columns: repeat(14, 1fr);

  @include for-desktop-up {
    grid-template-columns: repeat(14, 1fr);
    padding: 0 4.6rem;
  }
}

#mailing-list form .form-group.half {
  grid-template-columns: repeat(7, 1fr);
}

#mailing-list form .form-group.not-required {
  margin-bottom: 2rem;
}

#mailing-list form .form-group:first-child {
  @include grid-child(2, 16, 1, 2);

  @include for-desktop-up {
    @include grid-child(1, 17, 1, 2);
  }
}

#mailing-list form .form-group:nth-child(2) {
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    @include grid-child(1, 17, 2, 3);
  }
}

#mailing-list form .form-group:nth-child(3) {
  @include grid-child(2, 16, 3, 4);

  @include for-desktop-up {
    @include grid-child(1, 17, 3, 4);
  }
}

#mailing-list form .form-group:nth-child(4) {
  @include grid-child(2, 16, 4, 5);

  @include for-desktop-up {
    @include grid-child(1, 17, 4, 5);
  }
}

#mailing-list form .form-group:nth-child(5) {
  @include grid-child(2, 16, 5, 6);

  @include for-desktop-up {
    @include grid-child(1, 17, 5, 6);
  }
}

#mailing-list form .form-group:nth-child(6) {
  @include grid-child(2, 16, 6, 7);

  @include for-desktop-up {
    @include grid-child(1, 9, 6, 7);
    padding-left: 4.6rem;
  }
}

#mailing-list form .form-group:nth-child(7) {
  @include grid-child(2, 16, 7, 8);

  @include for-desktop-up {
    @include grid-child(9, 17, 6, 7);
    padding-right: 4.6rem;

    & label {
      padding-left: 1.8rem;
    }
  }
}

#mailing-list form .form-group:nth-child(8) {
  @include grid-child(2, 16, 8, 9);

  @include for-desktop-up {
    @include grid-child(1, 9, 7, 8);
    padding-left: 4.6rem;
  }
}

#mailing-list form .form-group:nth-child(9) {
  @include grid-child(2, 16, 9, 10);

  @include for-desktop-up {
    @include grid-child(9, 17, 7, 8);
    padding-right: 4.6rem;

    & label {
      padding-left: 1.8rem;
    }
  }
}

#mailing-list form .form-group label {
  font-weight: 700;
  font-style: normal;
  align-self: center;
  @include for-desktop-up {
    font-size: 1.2rem;
  }
}

#mailing-list form .form-group.full label {
  @include grid-child(1, 15, 1, 2);

  @include for-desktop-up {
    @include grid-child(1, 6, 1, 2);
  }
}

#mailing-list form .form-group.half label {
  @include grid-child(1, 15, 1, 2);

  @include for-desktop-up {
    @include grid-child(1, 3, 1, 2);
  }
}

#mailing-list form .form-group.full input {
  @include grid-child(1, 15, 2, 3);

  @include for-desktop-up {
    @include grid-child(5, 16, 1, 2);
  }
}

#mailing-list form .form-group.half input,
#mailing-list form .form-group.half select {
  @include grid-child(1, 15, 2, 3);

  @include for-desktop-up {
    @include grid-child(3, 8, 1, 2);
  }
}

#mailing-list form .form-group.full span {
  @include grid-child(1, 15, 3, 4);
  @include for-desktop-up {
    @include grid-child(5, 16, 2, 3);
  }
}

#mailing-list form .form-group.half span {
  @include grid-child(1, 15, 3, 4);

  @include for-desktop-up {
    @include grid-child(3, 8, 2, 3);
  }
}

#mailing-list form .legal {
  padding: 3rem 0;
  margin-top: 1rem;
  background: $grey;
  border-radius: 7px;
  @include display-grid;
  grid-template-columns: repeat(16, 1fr);

  @include grid-child(1, 17, 11, 12);

  @include for-desktop-up {
    margin-top: 2rem;
    @include grid-child(1, 17, 8, 9);
  }
}

#mailing-list form .legal .age {
  @include display-grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: repeat(16, 1fr);
  @include grid-child(2, 16, 1, 2);
  grid-column-gap: 0.8rem;

  @include for-desktop-up {
    grid-column-gap: 0;
    @include grid-child(1, 17, 1, 2);
    grid-template-columns: repeat(14, 1fr);
    padding: 0 4.6rem;
  }
}

#mailing-list form .legal .age label {
  font-size: 1.1rem;
  font-weight: 700;
  font-style: normal;
  margin-bottom: 1.3rem;
  @include grid-child(1, 15, 1, 2);

  &.invalid {
    border: 1px solid red;
  }

  @include for-tablet-portrait-up {
    font-size: 1.3rem;
  }
}

#mailing-list form .legal .age span {
  margin-top: 0.5rem;
  color: red;
  text-align: center;
  @include grid-child(1, 12, 3, 4);

  @include for-tablet-portrait-up {
    @include grid-child(1, 17, 3, 4);
  }

  @include for-desktop-up {
    margin-top: 1rem;
  }
}

#mailing-list form .legal h4 {
  margin-bottom: 0;
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    @include grid-child(1, 17, 2, 3);
    padding: 0 4.6rem;
  }
}

#mailing-list form .legal p {
  @include grid-child(2, 16, 3, 4);
  margin-bottom: 3rem;

  @include for-desktop-up {
    @include grid-child(1, 17, 3, 4);
    padding: 0 4.6rem;
  }
}

#mailing-list form .legal .age .radio-group {
  position: relative;
  height: 50px;
  border-radius: 4px;
  background: $purple;
}

#mailing-list form .legal .age .radio-group input:checked + label {
  border-radius: 4px;
  border: 3px solid $wine;
}

#mailing-list form .legal .age .radio-group.yes {
  @include grid-child(1, 9, 2, 3);

  @include for-desktop-up {
    @include grid-child(2, 7, 2, 3);
  }
}

#mailing-list form .legal .age .radio-group.no {
  @include grid-child(9, 17, 2, 3);

  @include for-desktop-up {
    @include grid-child(9, 14, 2, 3);
  }
}

#mailing-list form .legal .age .radio-group input {
  position: absolute;
  top: -10px;
  left: -10px;
  opacity: 0;
  height: 0px;
  width: 0px;
}

#mailing-list form .legal .age .radio-group input:focus + label {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba($wine, 0.5);
  transition: box-shadow 200ms;
}

#mailing-list form .legal .age .radio-group label {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $purple;
  border-radius: 4px;
  font-weight: 700;
  font-style: normal;
  font-size: 1.3rem;
  cursor: pointer;
}

#mailing-list form .legal .captcha-wrapper {
  @include grid-child(2, 16, 4, 5);
  margin: auto;
}

#mailing-list form .section-submit {
  margin: 2rem 0;
  @include display-grid;
  grid-template-columns: repeat(14, 1fr);
  @include grid-child(2, 16, 12, 13);

  @include for-desktop-up {
    grid-template-columns: repeat(16, 1fr);
    margin: 5rem 0;
    @include grid-child(1, 17, 9, 10);
  }
}

#mailing-list form .section-submit button {
  @include grid-child(1, 15, 9, 10);

  @include for-desktop-up {
    @include grid-child(4, 14, 1, 2);
  }
}

.required-field {
  color: red;
  font-size: 1rem;
}
</style>