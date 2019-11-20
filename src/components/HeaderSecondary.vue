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
          <span>what is pah?</span>
        </g-link>

        <g-link class="nav__link" to="/managing-your-pah" active-class>
          <span>managing<br />your pah</span>
        </g-link>

        <g-link class="nav__link" to="/pah-pathways" active-class>
          <span>pah<br />pathways</span>
        </g-link>

        <g-link
          class="nav__link"
          to="/prostacyclin-class-therapies"
          active-class
        >
          <span>prostacyclin-<br />class therapies</span>
        </g-link>

        <g-link class="nav__link" to="/resources" active-class>
          <span>resources</span>
        </g-link>

        <g-link class="nav__link newsletter" to="/newsletter" active-class>
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
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  min-height: 60px;
  width: 100%;
  margin: auto;

  @include for-desktop-up {
    padding: 0 1rem;
    min-height: 80px;
  }
}

.header-inner {
  height: 100%;
  width: 100%;
  max-width: $max-width;
  margin: auto;
  @include display-grid;
  padding: 0 1rem;
  grid-template-columns: 30px 1fr 30px;
  grid-template-rows: 60px;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;

  @include for-desktop-up {
    border-bottom: 2px solid $wine;
    align-items: center;
    grid-template-columns: 140px auto 110px;
    grid-template-rows: 80px;
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
  font-family: ProximaNovaBold, "Arial Narrow Bold", sans-serif;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.active {
    color: $wine;

    span {
      &::before {
        transform: scaleX(1);
      }
    }
  }

  &.newsletter {
    padding: 0.5rem 0.5rem;
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
    justify-content: center;
    font-size: 0.7rem;
    text-align: center;
  }
}
</style>