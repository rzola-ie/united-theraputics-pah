<template>
  <footer class="footer">
    <div class="footer-inner">
      <nav class="footer-nav">
        <g-link class="footer-nav-link" to="/newsletter" active-class>
          <span>Email Opt-In</span>
        </g-link>

        <g-link
          class="footer-nav-link"
          to="../assets/pdfs/ut-privacy-policy.pdf"
          target="_blank"
        >
          <span>Privacy Policy</span>
        </g-link>

        <g-link
          class="footer-nav-link"
          to="../assets/pdfs/ut-terms-of-use.pdf"
          target="_blank"
        >
          <span>Terms of Use</span>
        </g-link>

        <g-link class="footer-nav-link" to="/contact-us" active-class>
          <span>Contact Us</span>
        </g-link>

        <g-link class="footer-nav-link" to="/unsubscribe" active-class>
          <span>Unsubscribe</span>
        </g-link>

        <g-link class="footer-nav-link" to="/site-map" active-class>
          <span>Site Map</span>
        </g-link>
      </nav>
      <div class="legal">
        <small>
          &copy; Copyright 2019 United Therapeutics Corporation. All rights
          reserved. US/DS/0303
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  min-height: 120px;
  background-color: $purple;
  padding: 1rem;
  display: flex;
  align-items: center;
}

.footer-inner {
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @include display-grid;
  grid-template-rows: auto auto;
  grid-gap: 1rem;
  text-align: center;

  @include for-desktop-up {
    grid-template-rows: 40px auto;
  }
}

.footer-nav {
  font-size: 0.9rem;
  @include display-grid;
  grid-template-rows: repeat(6, auto);
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 0.8rem;

  @include for-desktop-up {
    grid-template-rows: auto;
    grid-template-columns: repeat(6, auto);
    grid-gap: 0.2rem;
    align-items: center;
  }

  @include for-big-desktop-up {
    grid-template-columns: repeat(6, auto);
    grid-gap: 2rem;
  }
}

.footer-nav-link {
  height: 40px;
  max-width: 150px;
  padding: 0 20px;
  font-family: ProximaNovaBold, "Arial Narrow Bold", sans-serif;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @include for-desktop-up {
    height: 100%;
  }

  &.active {
    color: $wine;

    span {
      &::before {
        transform: scaleX(1);
      }
    }
  }
}

.footer-nav-link span {
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

  &:hover {
    &:before {
      transform: scaleX(1);
      transition: transform 300ms cubic-bezier(0.5, 0, 0.5, 1);
    }
  }
}
</style>