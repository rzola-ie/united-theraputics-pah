<template>
  <ShortLayout>
    <Modal v-if="showModal" class="unsubscribe" v-on:closeModal="dismissModal">
      <h1 slot="body" class="wine">
        Thank You!
      </h1>

      <div slot="footer">
        <button class="modal-default" @click="dismissModal">
          Close
        </button>
      </div>
    </Modal>
    <!-- success modal -->

    <section purple id="unsubscribe">
      <h1 class="section-header">Unsubscribe</h1>
      <h3>
        We’re sorry that you wish to unsubscribe from receiving communications
        from United Therapeutics. Enter your e-mail address below and click
        Submit.
      </h3>
      <ValidationObserver
        tag="form"
        ref="form"
        class="form"
        v-slot="{ invalid }"
        id="powf_BF3BA305949DE911A834000D3A17CE77"
        action="https://pocloudcentral.crm.powerobjects.net/PowerWebForm/PowerWebFormData.aspx?t=Xh89xZ055EiFJ%2bb7Nj6EkXUAbgBpAHQAZQBkAHQAaABlAHIAYQBwAGUAdQB0AGkAYwBzAA%3d%3d&formId=powf_BF3BA305949DE911A834000D3A17CE77&tver=2013&c=1"
        enctype="multipart/form-data"
        method="post"
        @submit.prevent="submit"
        novalidate="novalidate"
      >
        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors, classes }"
          tag="div"
          class="form-group"
        >
          <label for="powf_da3ba305949de911a834000d3a17ce77">
            E-mail Address <span class="required-field">*</span>
          </label>
          <input
            type="text"
            id="powf_da3ba305949de911a834000d3a17ce77"
            name="powf_da3ba305949de911a834000d3a17ce77"
            value=""
            blockedemaildomain=""
            maxlength="100"
            autocomplete="email"
            :class="classes"
            v-model="email"
          />
          <span>
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <!-- e-mail address -->

        <!-- No Time To Lose Opt-Out -->
        <input
          type="hidden"
          id="powf_3b343d6a949de911a834000d3a17ce77"
          name="powf_3b343d6a949de911a834000d3a17ce77"
          value="Yes"
        />
        <input type="hidden" name="ignore_submitmessage" value="" />
        <input type="hidden" name="ignore_linkbuttontext" value="" />
        <input
          type="hidden"
          name="ignore_redirecturl"
          :value="`${currentRoute}?success=true`"
        />
        <input type="hidden" name="ignore_redirectmode" value="Auto" />

        <button class="button" type="submit">SUBMIT</button>
      </ValidationObserver>
    </section>
  </ShortLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Unsubscribe from PAH I Support",
    meta: [
      {
        name: "description",
        content:
          "Enter your e-mail address to unsubscribe from receiving communications from United Therapeutics."
      },
      {
        property: "og:title",
        content: "Unsubscribe from PAH I Support"
      },
      {
        property: "og:description",
        content:
          "Enter your e-mail address to unsubscribe from receiving communications from United Therapeutics."
      }
    ]
  },
  data() {
    return {
      email: null,
      currentRoute: null,
      showModal: false
    };
  },
  mounted() {
    this.currentRoute = window.location.href;

    if (this.$route.query.success === "true") {
      this.showModal = true;
    }
  },
  methods: {
    async submit() {
      const isValid = await this.$refs.form.validate();

      if (isValid) {
        console.log(this.email);
        document.querySelector("form").submit();
      }
    },
    dismissModal() {
      this.showModal = false;
      this.$router.replace("/unsubscribe");
    }
  }
};
</script>

<style lang="scss" scoped>
/* UNSUBSCRIBE
====================================================== */

#unsubscribe {
  height: 350px;

  @include for-desktop-up {
    height: auto;
  }
  &::before {
    @include grid-child(1, 17, 1, 4);

    @include for-desktop-up {
      margin-left: 2rem;
      margin-right: 2rem;
      margin-bottom: 2rem;
      @include grid-child(3, 15, 1, 4);
    }
  }
}

#unsubscribe .section-header {
  @include for-desktop-up {
    @include grid-child(3, 15, 1, 2);
  }
}

#unsubscribe h3 {
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 0 3rem;
    @include grid-child(3, 14, 2, 3);
  }
}

#unsubscribe form {
  margin-bottom: 1.5rem;
  @include display-grid;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(16, 1fr);
  @include grid-child(1, 17, 3, 4);
  @include for-desktop-up {
    margin-bottom: 0;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 0 3rem;
    @include grid-child(3, 15, 3, 4);
  }
}

#unsubscribe form .form-group {
  max-height: 300px;
  @include display-grid;
  -ms-grid-rows: auto auto auto;
  grid-template-rows: repeat(3, auto);
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(16, 1fr);
  @include grid-child(1, 17, 1, 2);
}

#unsubscribe form .form-group label {
  font-weight: 700;
  font-style: normal;
  align-self: center;
  @include grid-child(2, 16, 1, 2);

  @include for-desktop-up {
    font-size: 1.2rem;
    @include grid-child(1, 4, 1, 2);
  }
}

#unsubscribe form .form-group input {
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    @include grid-child(5, 17, 1, 2);
  }
}

#unsubscribe form .form-group span {
  @include grid-child(2, 16, 3, 4);

  @include for-desktop-up {
    @include grid-child(5, 16, 2, 3);
  }
}

#unsubscribe form button {
  @include grid-child(2, 16, 2, 3);

  @include for-desktop-up {
    @include grid-child(6, 12, 2, 3);
  }
}

.required-field {
  color: red;
  font-size: 1rem;
}
</style>