<template>
  <footer class="footer">
    <div class="footer-inner">
      <nav class="footer-nav">
        <g-link class="footer-nav-link" to="/what-is-pah">
          <span>Email Opt-In</span>
        </g-link>

        <g-link class="footer-nav-link" to="/managing-your-pah">
          <span>Privacy Policy</span>
        </g-link>

        <g-link class="footer-nav-link" to="/about/">
          <span>Terms of Use</span>
        </g-link>

        <g-link class="footer-nav-link" to="/about/">
          <span>Contact Us</span>
        </g-link>

        <g-link class="footer-nav-link" to="/about/">
          <span>Unsubscribe</span>
        </g-link>

        <g-link class="footer-nav-link" to="/about/">
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
@import "~/assets/styles/modules/_breakpoints";
@import "~/assets/styles/modules/_cross-browser";

.footer {
  min-height: 120px;
  background-color: var(--purple);
  padding: 1rem;
  display: flex;
  align-items: center;
}

.footer-inner {
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @include display-grid;
  grid-template-rows: 1fr auto;
  grid-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.footer-nav {
  display: none;
  font-size: 0.9rem;

  @include for-desktop-up {
    @include display-grid;
    grid-template-columns: repeat(6, minmax(100px, 1fr));
    grid-gap: 0.2rem;
    align-items: center;
  }

  @include for-big-desktop-up {
    grid-template-columns: repeat(6, minmax(110px, 1fr));

    grid-gap: 2rem;
  }
}

.footer-nav-link {
  text-decoration: none;
  color: black;
  font-weight: bold;
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
    transform: scale(0);
    opacity: 0;
    transform-origin: center;
    background: black;
    transition: all 400ms cubic-bezier(0.5, 0, 0.5, 1);
  }

  &:hover {
    &:before {
      transform: scale(1);
      opacity: 1;
      transition: all 400ms cubic-bezier(0.5, 0, 0.5, 1);
    }
  }
}
</style>