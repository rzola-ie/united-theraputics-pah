<template>
  <header class="header">
    <div class="header-inner">
      <g-image
        class="header-logo"
        src="~/assets/img/PAH-Logo-Header.png"
        alt="the pah initiative logo"
      />

      <nav class="nav">
        <g-link class="nav__link" to="/what-is-pah">
          what is pah?
        </g-link>

        <g-link class="nav__link" to="/managing-your-pah">
          managing<br />your pah
        </g-link>

        <g-link class="nav__link" to="/pah-pathways">
          pah pathways
        </g-link>

        <g-link class="nav__link" to="/prostacyclin-class-therapies"
          >prostacyclin-<br />class therapies
        </g-link>

        <g-link class="nav__link" to="/resources">
          resources
        </g-link>

        <g-link class="nav__link newsletter" to="/newsletter">
          sign up to recieve our newsletter
        </g-link>
      </nav>
      <div class="sponsored">Sponsored by:<br />United Theraputics</div>

      <div class="hamburger" ref="hamburger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- hamburger -->
    </div>
    <!-- header-inner -->

    <div class="drawer-back" ref="drawerBg" @click.self="toggleSide">
      <div class="drawer" ref="drawer">
        <g-image
          class="drawer-header-logo"
          src="~/assets/img/PAH-Logo-Header.png"
          alt="the pah initiative logo"
          tabindex="1"
        />

        <nav class="drawer-nav">
          <g-link class="nav__link" to="/what-is-pah" tabindex="2">
            what is pah?
          </g-link>

          <g-link class="nav__link" to="/managing-your-pah" tabindex="3">
            managing your pah
          </g-link>

          <g-link class="nav__link" to="/pah-pathways" tabindex="4">
            pah pathways
          </g-link>

          <g-link
            class="nav__link"
            to="/prostacyclin-class-therapies"
            tabindex="5"
            >prostacyclin-class therapies
          </g-link>

          <g-link class="nav__link" to="/resources" tabindex="6">
            resources
          </g-link>

          <g-link class="nav__link newsletter" to="/newsletter" tabindex="7">
            sign up to recieve our newsletter
          </g-link>
        </nav>

        <div class="drawer-sponsored">Sponsored by: United Theraputics</div>
      </div>
    </div>
    <!-- drawer-back -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSideOpen: false
    };
  },
  mounted() {
    this.$refs.hamburger.addEventListener("click", this.toggleSide);
  },
  beforeDestroy() {
    this.$refs.hamburger.removeEventListener("click", this.toggleSide);

    if (this.isSideOpen) {
      this.toggleSide();
    }
  },
  methods: {
    toggleSide() {
      this.isSideOpen = !this.isSideOpen;
      this.$refs.hamburger.classList.toggle("open");
      this.$refs.drawerBg.classList.toggle("open");
      this.$refs.drawer.classList.toggle("open");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  padding: 0 1rem;
  grid-row: 1;
  grid-column: 1 / 17;
  z-index: 9998;

  @include for-desktop-up {
    height: 80px;
    padding: 0 1rem;
  }
}

.header-inner {
  max-width: var(--max-width);
  height: 100%;
  margin: auto;
  @include display-grid;
  grid-template-columns: 30px 1fr 30px;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  border-bottom: 2px solid transparent;

  @include for-desktop-up {
    grid-template-columns: 140px auto 110px;
  }
}

.header-logo {
  width: 140px;
  grid-column-start: 2;

  @include for-desktop-up {
    grid-column-start: 1;
  }
}

/* DRAWER
====================================================== */

.drawer-back {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: rgba(black, 0);

  pointer-events: none;
  transition: background-color 200ms cubic-bezier(0.5, 0, 0.5, 1);
  padding: 0.8rem;

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
  height: 100%;
  width: 90%;
  right: -100%;
  top: 0;
  @include display-grid;
  grid-template-rows: 40px 1fr 40px;
  grid-template-columns: 1fr;
  background: #fff url("../assets/img/background.svg");
  background-size: 100px 100px;
  background-repeat: repeat;
  transition: right 200ms cubic-bezier(0.5, 0, 0.5, 1);
  box-shadow: -4px 0 8px 0 rgba(black, 0.2);
  padding: 1rem;
  z-index: 9998;

  & * {
    opacity: 0;
    transition: opacity 200ms cubic-bezier(0.5, 0, 0.5, 1);
  }

  &.open {
    right: 0;
    transition: right 200ms cubic-bezier(0.5, 0, 0.5, 1);

    & * {
      opacity: 1;
    }
  }
  @include for-desktop-up {
    display: none;
  }
}

.drawer-header-logo {
  width: 140px;
  grid-column-start: 1;
  justify-self: center;
  @include grid-child(1, 2, 1, 2);
}

.drawer-nav {
  @include display-grid;
  grid-auto-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
}

.drawer-sponsored {
  align-self: start;
  justify-self: center;
  font-size: 0.7rem;
  text-align: center;
}

/* NAV
====================================================== */

.nav {
  display: none;

  @include for-desktop-up {
    @include display-grid;
    grid-template-columns: repeat(5, minmax(100px, 1fr)) 150px;
    grid-gap: 0.2rem;
    align-items: center;
    font-size: 0.6rem;
  }

  @include for-big-desktop-up {
    grid-template-columns: repeat(5, minmax(110px, 1fr)) 150px;
    font-size: 0.7rem;
    grid-gap: 2rem;
  }
}

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