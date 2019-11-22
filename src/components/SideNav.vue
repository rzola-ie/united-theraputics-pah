<template>
  <div
    :class="['drawer-back', { open: show }]"
    ref="drawerBg"
    v-on:click.self="$emit('close')"
  >
    <div :class="['drawer', { open: show }]" ref="drawer">
      <div class="drawer-header">
        <g-image
          class="drawer-header-logo"
          src="~/assets/img/pah-initiative.png"
          alt="The PAH Initiative"
        />
        <!-- logo -->

        <div class="hamburger open" ref="hamburger" v-on:click="$emit('close')">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- hamburger -->
      </div>

      <nav class="drawer-nav">
        <g-link class="nav__link" to="/what-is-pah" active-class>
          what is pah?
        </g-link>

        <g-link class="nav__link" to="/pah-life-expectancy" active-class>
          managing your pah
        </g-link>

        <g-link class="nav__link" to="/pah-pathways" active-class>
          pah pathways
        </g-link>

        <g-link class="nav__link" to="/pah-treatment-medicine" active-class
          >prostacyclin-class therapies
        </g-link>

        <g-link class="nav__link" to="/pah-information-support" active-class>
          resources
        </g-link>

        <g-link
          class="nav__link newsletter"
          to="/pah-i-newsletter"
          active-class
        >
          sign up to recieve our newsletter
        </g-link>
        <div class="drawer-sponsored">Sponsored by: United Theraputics</div>
      </nav>
    </div>
  </div>
  <!-- drawer-back -->
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
/* DRAWER
====================================================== */

.drawer-back {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: rgba(black, 0);

  pointer-events: none;
  transition: background-color 200ms cubic-bezier(0.5, 0, 0.5, 1);

  &.open {
    background-color: rgba(black, 0.9);
    pointer-events: all;
  }

  @include for-desktop-up {
    display: none;
  }
}

.drawer {
  position: absolute;
  top: 0;
  right: -100%;
  height: 100vh;
  width: 90%;
  padding: 0 1rem;
  background: url("../assets/img/background.png");
  background-size: 200%;
  background-repeat: repeat;
  @include display-grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 1fr;
  transition: right 250ms cubic-bezier(0.5, 0, 0.5, 1);
  box-shadow: -4px 0 8px 0 rgba(black, 0.2);
  z-index: 9998;

  & * {
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.5, 0, 0.5, 1);
  }

  &.open {
    right: 0;
    transition: right 250ms cubic-bezier(0.5, 0, 0.5, 1);

    & * {
      opacity: 1;
    }
  }
  @include for-desktop-up {
    display: none;
  }
}

.drawer-header {
  height: 60px;
  align-items: center;
  @include display-grid;
  grid-template-columns: 30px 1fr 30px;
  grid-template-rows: 60px;
  @include grid-child(1, 2, 1, 2);
}

.drawer-header-logo {
  width: 140px;
  grid-column-start: 1;
  justify-self: center;
  @include grid-child(2, 3, 1, 2);
}

.drawer-header .hamburger {
  @include grid-child(3, 4, 1, 2);
}

.drawer-nav {
  @include display-grid;
  grid-gap: 0.8rem;
  grid-template-rows: repeat(7, 60px);
}

.drawer-sponsored {
  place-self: center;
  font-size: 0.8rem;
  text-align: center;
}

/* NAV
====================================================== */

.nav__link {
  height: 100%;
  padding: 0.5rem 0;
  font-family: ProximaNovaBold, "Arial Narrow Bold", sans-serif;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.newsletter {
    padding: 0.5rem 0rem;
    background-color: black;
    color: white;
  }

  &.active {
    color: $wine;
  }

  &:hover > span::before {
    transform: scaleX(1);
    transition: transform 300ms cubic-bezier(0.5, 0, 0.5, 1);
  }
}

.sponsored {
  display: none;

  @include for-desktop-up {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    text-align: center;
  }
}
</style>