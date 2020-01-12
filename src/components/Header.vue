<template>
  <header class="header">
    <div class="header-inner">
      <g-image
        class="header-logo"
        src="~/assets/img/pah-initiative.png"
        alt="The PAH Initiative"
      />

      <nav class="nav">
        <g-link class="nav__link" to="/what-is-pah/">
          <span>what is pah?</span>
        </g-link>

        <g-link class="nav__link" to="/pah-life-expectancy/">
          <span>managing<br />your pah</span>
        </g-link>

        <g-link class="nav__link" to="/pah-pathways/">
          <span>pah pathways</span>
        </g-link>

        <g-link class="nav__link" to="/pah-treatment-medicine/">
          <span>prostacyclin-<br />class therapies</span>
        </g-link>

        <g-link class="nav__link" to="/pah-information-support/">
          <span>resources</span>
        </g-link>

        <g-link class="nav__link newsletter" to="/pah-i-newsletter/">
          sign up to receive our newsletter
        </g-link>
      </nav>
      <div class="sponsored">Sponsored by:<br />United Therapeutics</div>

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
  padding: 1rem;
  @include grid-child(1, 17, 1, 2);
  z-index: 9998;

  @supports(grid-gap: 1rem) {
    padding: 0 1rem;
  }

  @include for-desktop-up {
    height: 80px;
  }
}

.header-inner {
  max-width: var(--max-width);
  height: 100%;
  margin: auto;
  @include display-grid;
  -ms-grid-columns: 30px 1fr 30px;
  grid-template-columns: 30px 1fr 30px;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  border-bottom: 2px solid transparent;

  @include for-desktop-up {
    -ms-grid-columns: 140px 1fr 120px;
    grid-template-columns: 140px auto 110px;
  }
}

.header-logo {
  height: 31px;
  width: 140px;
  @include grid-child(2, 3, 1, 2);

  @include for-desktop-up {
    @include grid-child(1, 2, 1, 2);
  }
}
/* NAV
====================================================== */

.nav {
  display: none;

  @include for-desktop-up {
    @include flexbox;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    margin: auto;
    @include grid-child(2, 3, 1, 2);

    @supports(grid-gap: 1rem) {
      margin: 0;
      @include display-grid;

      -ms-grid-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) 150px;
      grid-template-columns: repeat(5, minmax(100px, 1fr)) 150px;
      grid-gap: 1rem;
    }
  }

  @include for-big-desktop-up {
    font-size: 0.7rem;

    @supports(grid-gap: 1rem) {
      -ms-grid-columns: minmax(110px, 1fr) minmax(110px, 1fr) minmax(110px, 1fr) minmax(110px, 1fr) minmax(110px, 1fr) 150px;
      grid-template-columns: repeat(5, minmax(110px, 1fr)) 150px;
      grid-gap: 2rem;
    }
  }
}

.nav__link {
  height: 100%;
  width: 100px;
  padding: 0.5rem 0;
  font-weight: 700;
  font-style: normal;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  @include flexbox;
  @include justify-content(center);
  @include align-items(center);
  text-align: center;
  margin: 0 1rem;

  @supports(grid-gap: 1rem) {
    margin: 0;
  }

  &.newsletter {
    width: 150px;
    padding: 0.5rem;
    background-color: black;
    color: white;
  }

  &:hover > span::before {
    transform: scaleX(1);
    @include transition(transform 300ms cubic-bezier(0.5, 0, 0.5, 1));
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
    @include transition(transform 300ms cubic-bezier(0.5, 0, 0.5, 1))
  }
}

.sponsored {
  display: none;

  @include for-desktop-up {
    @include grid-child(3, 4, 1, 2);
    @include flexbox;
    @include align-items(center);
    grid-column: 3;
    font-size: 0.8rem;
    text-align: center;
    line-height: 1rem;
  }
}

.hamburger {
  @include grid-child(3, 4, 1, 2);
}
</style>