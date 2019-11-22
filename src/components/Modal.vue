<template type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask" @click.self="$emit('closeModal')">
      <div class="modal-wrapper" @click.self="$emit('closeModal')">
        <div class="modal-container">
          <button class="modal-close-button" @click.self="$emit('closeModal')">
            &times;
          </button>
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('closeModal')">
                Default Button
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(black, 0.9);
  padding: 4rem 1rem 1rem;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-mask.no-close-button .modal-container .modal-close-button {
  display: none;
}

.modal-mask.unsubscribe .modal-container {
  background-image: url("../assets/img/modal-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  @include for-desktop-up {
    padding: 3rem;
  }

  .modal-close-button,
  /deep/ .modal-header {
    display: none;
  }

  /deep/ .modal-body {
    margin-top: 0;
    margin-bottom: 3rem;
  }

  /deep/ h1 {
    margin: 0;
    @include for-desktop-up {
      font-size: 3rem;
    }
  }
}

.modal-wrapper {
  display: table-cell;
  vertical-align: top;

  @include for-desktop-up {
    vertical-align: middle;
  }
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 650px;
  padding: 1.5rem;
  background: $purple;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;

  @include for-desktop-up {
    padding: 2rem 3rem;
    margin: 0px auto;
    width: 50%;
  }
}

.modal-close-button {
  display: none;
  position: absolute;
  height: 40px;
  width: 40px;
  top: -20px;
  right: -20px;
  border-radius: 50%;
  box-shadow: -2px 2px 5px 0 rgba(0, 0, 0, 0.33);
  border: 1px solid white;
  background: white;
  font-size: 2.2rem;

  @include for-tablet-portrait-up {
    display: block;
  }
}

/* MODAL HEADERS
====================================================== */

/deep/ .modal-header h2 {
  margin-top: 0;
  color: $wine;
  text-transform: uppercase;
}

/deep/ .modal-header h3 {
  margin-top: 0;
}

/* MODAL BODY
====================================================== */

.modal-body {
  margin: 20px 0;
}

/* MODAL TRANSITIONS
====================================================== */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>