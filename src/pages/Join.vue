<template>
  <SecondaryLayout>
    <section id="mailing-list">
      <g-image
        class="section-icon"
        src="~/assets/img/icn-email-opt-in.png"
        alt="an icon of a paper airplane"
      />
      <h1 class="section-header">Join PAH-I Support</h1>
      <h3>
        Subscribe to our newsletter and we'll provide you with helpful
        information and updates about the PAH Initiative, PAH treatment options,
        live events, and more.
      </h3>
      <small>*Note: All fields required.</small>
      <ValidationObserver
        tag="form"
        id="form"
        ref="form"
        v-slot="{ invalid }"
        @submit.prevent="submit"
      >
        <ValidationProvider
          name="first name"
          rules="required"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group full"
        >
          <label for="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
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
          <label for="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
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
          name="mailing address"
          rules="required"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group full"
        >
          <label for="mailing-address-1">Mailing Address</label>
          <input
            type="text"
            id="mailing-address-1"
            autocomplete="address-line1"
            :class="classes"
            v-model="address.mailingAddress1"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- mailing list 1 -->

        <div class="form-group full not-required">
          <label for="mailingAddress2">Mailing Address 2</label>
          <input
            type="text"
            name="mailingAddress2"
            id="mailing-address-2"
            autocomplete="address-line2"
            v-model="address.mailingAddress2"
          />
        </div>

        <ValidationProvider
          name="city"
          rules="required"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group half"
        >
          <label for="city">City</label>
          <input
            type="text"
            id="city"
            autocomplete="address-level2"
            :class="classes"
            v-model="address.city"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- city -->

        <ValidationProvider
          name="state"
          rules="required"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group half"
        >
          <label for="state">State</label>
          <input
            type="text"
            id="state"
            autocomplete="address-level1"
            :class="classes"
            v-model="address.state"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- state -->

        <ValidationProvider
          name="zip"
          rules="required"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group half"
        >
          <label for="zip">ZIP</label>
          <input
            type="text"
            id="zip"
            autocomplete="postal-code"
            :class="classes"
            v-model="address.zip"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- zip -->

        <ValidationProvider
          name="phone number"
          rules="required"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group half"
        >
          <label for="phone">Phone</label>
          <input
            type="text"
            id="phone"
            autocomplete="postal-code"
            :class="classes"
            v-model="address.phone"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- zip -->

        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group full"
        >
          <label for="email">E-mail Address</label>
          <input
            type="text"
            id="email"
            autocomplete="email"
            :class="classes"
            v-model="address.email"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- mailing list 1 -->

        <div class="legal">
          <ValidationProvider
            name="age"
            rules="required"
            v-slot="{ errors }"
            tag="div"
            class="age"
          >
            <h3>I am at least 18 years old.</h3>
            <div class="radio-group yes">
              <input
                type="radio"
                name="yes"
                id="yes"
                value="true"
                v-model="over18"
              />
              <label for="yes">YES</label>
            </div>

            <div class="radio-group no">
              <input
                type="radio"
                name="no"
                id="no"
                value="false"
                v-model="over18"
              />
              <label for="no">NO</label>
            </div>

            <span>
              {{ errors[0] }}
            </span>
          </ValidationProvider>

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
            <g-link to="/privacy-policy">Privacy Policy</g-link>.
          </p>
        </div>
        <!-- legal -->

        <div class="section-submit">
          <button type="submit">SUBMIT</button>
        </div>
      </ValidationObserver>
    </section>

    <CallToAction />
  </SecondaryLayout>
</template>

<script>
import { required, email } from "vee-validate/dist/rules";

export default {
  data() {
    return {
      address: {
        firstName: null,
        familyName: null,
        mailingAddress1: null,
        mailingAddress2: null,
        city: null,
        state: null,
        zip: null,
        phone: null,
        email: null
      },
      over18: null
    };
  },
  methods: {
    async submit() {
      const isValid = await this.$refs.form.validate();

      if (isValid) {
        console.log({ ...this.address, over18: this.over18 });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/modules/_breakpoints";
@import "~/assets/styles/modules/_cross-browser";

#mailing-list {
  grid-template-rows: repeat(6, auto);

  @include for-desktop-up {
    grid-template-rows: 30px repeat(6, auto);
  }

  &::before {
    background: var(--purple);
    @include grid-child(1, 17, 1, 7);

    @include for-desktop-up {
      @include grid-child(3, 15, 2, 7);
    }
  }
}

#mailing-list .section-icon {
  @include for-desktop-up {
    padding: 0 20px;
    @include grid-child(13, 16, 1, 3);
  }
}

#mailing-list .section-header {
  @include for-desktop-up {
    padding-left: 2.5rem;
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
    @include grid-child(2, 16, 1, 2);
  }
}

#mailing-list form .form-group:nth-child(2) {
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    @include grid-child(2, 16, 2, 3);
  }
}

#mailing-list form .form-group:nth-child(3) {
  @include grid-child(2, 16, 3, 4);

  @include for-desktop-up {
    @include grid-child(2, 16, 3, 4);
  }
}

#mailing-list form .form-group:nth-child(4) {
  @include grid-child(2, 16, 4, 5);

  @include for-desktop-up {
    @include grid-child(2, 16, 4, 5);
  }
}

#mailing-list form .form-group:nth-child(5) {
  @include grid-child(2, 16, 5, 6);

  @include for-desktop-up {
    @include grid-child(2, 9, 5, 6);
  }
}

#mailing-list form .form-group:nth-child(6) {
  @include grid-child(2, 16, 6, 7);

  @include for-desktop-up {
    @include grid-child(9, 16, 5, 6);

    & label {
      padding-left: 1.8rem;
    }
  }
}

#mailing-list form .form-group:nth-child(7) {
  @include grid-child(2, 16, 7, 8);

  @include for-desktop-up {
    @include grid-child(2, 9, 6, 7);
  }
}

#mailing-list form .form-group:nth-child(8) {
  @include grid-child(2, 16, 8, 9);

  @include for-desktop-up {
    @include grid-child(9, 16, 6, 7);

    & label {
      padding-left: 1.8rem;
    }
  }
}

#mailing-list form .form-group:nth-child(9) {
  @include grid-child(2, 16, 9, 10);

  @include for-desktop-up {
    @include grid-child(2, 16, 7, 8);
  }
}

#mailing-list form .form-group label {
  font-weight: bold;
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

#mailing-list form .form-group input {
  height: 40px;
  padding-left: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
}

#mailing-list form .form-group input.invalid {
  border: 1px solid red;
}

#mailing-list form .form-group.full input {
  @include grid-child(1, 15, 2, 3);

  @include for-desktop-up {
    @include grid-child(5, 16, 1, 2);
  }
}

#mailing-list form .form-group.half input {
  @include grid-child(1, 15, 2, 3);

  @include for-desktop-up {
    @include grid-child(3, 8, 1, 2);
  }
}

#mailing-list form .form-group span {
  min-height: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: red;
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
  background: var(--grey);
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
  grid-template-columns: repeat(14, 1fr);
  @include grid-child(2, 16, 1, 2);
}

#mailing-list form .legal .age h3 {
  @include grid-child(1, 11, 1, 2);
}

#mailing-list form .legal .age span {
  margin-top: 1rem;
  color: red;
  text-align: center;
  @include grid-child(1, 12, 3, 4);

  @include for-desktop-up {
    @include grid-child(4, 9, 3, 4);
  }
}

#mailing-list form .legal h4 {
  margin-bottom: 0;
  @include grid-child(2, 16, 2, 3);
}

#mailing-list form .legal p {
  @include grid-child(2, 16, 3, 4);
}

#mailing-list form .legal .age .radio-group {
  height: 50px;
  border-radius: 4px;
  background: var(--purple);
}

#mailing-list form .legal .age .radio-group input:checked + label {
  border-radius: 4px;
  border: 2px solid var(--wine);
}

#mailing-list form .legal .age .radio-group.yes {
  @include grid-child(1, 6, 2, 3);

  @include for-desktop-up {
    @include grid-child(2, 7, 2, 3);
  }
}

#mailing-list form .legal .age .radio-group.no {
  @include grid-child(7, 12, 2, 3);

  @include for-desktop-up {
    @include grid-child(9, 14, 2, 3);
  }
}

#mailing-list form .legal .age .radio-group input {
  position: absolute;
  top: -10px;
  left: -10px;
  visibility: hidden;
  height: 0px;
  width: 0px;
}

#mailing-list form .legal .age .radio-group label {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--purple);
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;
}

#mailing-list form .section-submit {
  margin: 2rem 0;
  @include grid-child(2, 16, 12, 13);

  @include for-desktop-up {
    margin: 5rem 0;
    @include grid-child(3, 15, 9, 10);
  }
}

#mailing-list form .section-submit button {
  height: 50px;
  width: 100%;
  border-color: black;
  background: black;
  border-radius: 4px;
  color: white;
  font-size: 1.2rem;
}
</style>