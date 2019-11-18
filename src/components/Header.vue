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
          <span>what is pah?</span>
        </g-link>

        <g-link class="nav__link" to="/managing-your-pah">
          <span>managing<br />your pah</span>
        </g-link>

        <g-link class="nav__link" to="/pah-pathways">
          <span>pah pathways</span>
        </g-link>

        <g-link class="nav__link" to="/prostacyclin-class-therapies">
          <span>prostacyclin-<br />class therapies</span>
        </g-link>

        <g-link class="nav__link" to="/resources">
          <span>resources</span>
        </g-link>

        <g-link class="nav__link newsletter" to="/newsletter">
          sign up to recieve our newsletter
        </g-link>
      </nav>
      <div class="sponsored">Sponsored by:<br />United Theraputics</div>

      <div class="hamburger" ref="hamburger" v-on:click="$emit('toggle')">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- hamburger -->
    </div>
    <!-- header-inner -->
  </header>
</template>

<script>
export default {};
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
    padding: 0.5rem;
    background-color: black;
    color: white;
  }

  &:hover > span::before {
    transform: scaleX(1);
    transition: transform 300ms cubic-bezier(0.5, 0, 0.5, 1);
  }
}

.nav__link span {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: center;
    background: $wine;
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