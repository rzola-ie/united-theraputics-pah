<template>
    <a href="#" id="top-button">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 60 60"
        width="60"
        height="60">
        <circle id="button" cx="30" cy="30" r="27" />
        <path id="arrow" d="M20 35 L30 20 m 0 0 L40 35" stroke-width="4" stroke-linecap="round" stroke="white" fill="none">

        </path>
      </svg>
      Go to top
    </a>
</template>

<script>
export default {
  mounted() {
    const topButton = document.querySelector('#top-button');
    this.arrow = document.querySelector("#arrow");
    
    
    topButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      topButton.blur();
    })

    window.addEventListener('scroll', e => {
      if(window.scrollY > 500) {
        topButton.classList.add('show')
      } else {
        topButton.classList.remove('show');
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#top-button {
  position: fixed;
  right: 2rem;
  bottom: -1rem;
  color: $wine;
  @include opacity(0);
  pointer-events: none;
  @include transition(all 300ms ease-in-out);
  text-decoration: none;

  &:hover {
    text-decoration: underline;

    #button {
      fill: darken($wine, 10);
    }
  }

  @include for-desktop-up {
    &.show {
      bottom: 1rem;
      @include opacity(1);
      pointer-events: all;
    }
  }

  svg {
    display: block;
    margin: auto;
  }

  #button {
    fill: $wine;
    @include transition(fill 150ms ease-in-out);
  }

  #arrow {
    @include animation('arrow 1000ms ease-in-out infinite alternate')
  }

  @include keyframes(arrow) {
    from {
      transform: translate(0, -2px);
    }
    to {
      transform: translate(0, 2px);
    }
  }
}
</style>