<template>
  <footer class="footer">
    <div class="footer-inner">
      <nav class="footer-nav">
        <g-link class="footer-nav-link" to="/pah-i-newsletter/" active-class>
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

        <g-link class="footer-nav-link" to="/contact/" active-class>
          <span>Contact Us</span>
        </g-link>

        <g-link class="footer-nav-link" to="/unsubscribe/" active-class>
          <span>Unsubscribe</span>
        </g-link>

        <g-link class="footer-nav-link" to="/site-map/" active-class>
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
  @include flexbox();
  @include align-items(center);
  @include grid-child(1, 2, 3, 4);
}

.footer-inner {
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @include flexbox;
  @include flex-direction(column);
  @include justify-content(center);
  text-align: center;

  grid-gap: 1rem;

  @include for-desktop-up {
    
  }
}

.footer-nav {
  width: 100%;
  font-size: 0.9rem;
  @include flexbox();
  @include flex-direction(column);
  @include align-items(center);


  @include for-desktop-up {
    @include flex-direction(row);
    @include align-items(center);
  }
}

.footer-nav-link {
  height: 40px;
  max-width: 150px;
  padding: 0 20px;
  font-weight: 700;
  font-style: normal;
  color: black;
  text-decoration: none;
  @include flexbox();
  @include justify-content(center);
  @include align-items(center);
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

.legal {
  margin: 0 auto;
  @include grid-child(1, 2, 2, 3);
}
</style>