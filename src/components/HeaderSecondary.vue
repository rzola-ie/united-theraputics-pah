<template>
  <header class="header">
    <div class="header-inner">
      <g-link to="/" class="header-logo">
        <g-image
          class="header-logo-img"
          src="~/assets/img/PAH-Logo-Header.png"
          alt="the pah initiative logo"
        />
      </g-link>

      <nav class="nav">
        <g-link class="nav__link" to="/what-is-pah" active-class>
          what is pah?
        </g-link>

        <g-link class="nav__link" to="/managing-your-pah" active-class>
          managing<br />your pah
        </g-link>

        <g-link class="nav__link" to="/pah-pathways" active-class>
          pah pathways
        </g-link>

        <g-link
          class="nav__link"
          to="/prostacyclin-class-therapies/"
          active-class
        >
          prostacyclin-<br />class therapies
        </g-link>

        <g-link class="nav__link" to="/resources/" active-class>
          resources
        </g-link>

        <g-link class="nav__link newsletter" to="/join" active-class>
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

    <div class="drawer-back" ref="drawerBg">
      <div class="drawer" ref="drawer">hi</div>
    </div>
    <!-- drawer-back -->
  </header>
</template>

<script>
export default {
  mounted() {
    this.$refs.hamburger.addEventListener("click", this.toggleSide);
  },
  beforeDestroy() {
    this.$refs.hamburger.removeEventListener("click", this.toggleSide);
  },
  methods: {
    toggleSide() {
      this.$refs.hamburger.classList.toggle("open");
      this.$refs.drawerBg.classList.toggle("open");
      this.$refs.drawer.classList.toggle("open");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/modules/_breakpoints";
@import "~/assets/styles/modules/_cross-browser";

.header {
  min-height: 60px;
  width: 100%;
  padding: 1rem;
  margin: auto;

  @include for-desktop-up {
    min-height: 80px;
  }
}

.header-inner {
  width: 100%;
  max-width: var(--max-width);
  height: 65px;
  margin: auto;
  @include display-grid;
  grid-template-columns: 30px 1fr 30px;
  align-items: center;
  justify-items: center;
  padding-bottom: 1rem;
  grid-gap: 1rem;
  border-bottom: 2px solid var(--wine);

  @include for-desktop-up {
    grid-template-columns: 140px auto 110px;
  }
}

.header-logo {
  grid-column: 2;

  @include for-desktop-up {
    grid-column-start: 1;
  }
}

.header-logo-img {
  width: 140px;
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
  font-weight: bold;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.active {
    color: var(--wine);
  }

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

.hamburger {
  width: 30px;
  height: 25px;
  position: relative;
  grid-column: 3;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 9999;

  @include for-desktop-up {
    display: none;
  }
}

.hamburger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background: var(--wine);
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2),
.hamburger span:nth-child(3) {
  top: 10px;
}

.hamburger span:nth-child(4) {
  top: 20px;
}

.hamburger.open span:nth-child(1) {
  top: 10px;
  width: 0%;
  left: 50%;
}

.hamburger.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.hamburger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.hamburger.open span:nth-child(4) {
  top: 10px;
  width: 0%;
  left: 50%;
}

.drawer-back {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: rgba(black, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity 500ms cubic-bezier(0.5, 0, 0.5, 1);
  padding: 0.8rem;

  &.open {
    opacity: 1;
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
  background-color: white;
  z-index: 9998;
  transition: right 500ms cubic-bezier(0.5, 0, 0.5, 1);
  box-shadow: -4px 0 8px 0 rgba(black, 0.2);
  padding: 2rem;

  &.open {
    right: 0;
    transition: right 500ms cubic-bezier(0.5, 0, 0.5, 1);
  }
  @include for-desktop-up {
    display: none;
  }
}
</style>