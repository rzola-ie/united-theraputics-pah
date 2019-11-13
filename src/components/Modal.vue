<template type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask" @click.self="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
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
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(black, 0.9);
  padding: 4rem 1rem 1rem;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: top;
}

.modal-container {
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