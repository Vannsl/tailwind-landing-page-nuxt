<template>
  <div class="hero-content">
    <div class="container">
      <div class="hero-content-content">
        <p class="leading">What business are you?</p>
        <h1>Main Hero Message to sell yourself!</h1>
        <p class="sub-leading">Sub-hero message, not too long and not too short. Make it just right!</p>

        <button>Subscribe</button>
      </div>
      <div class="hero-content-image">
        <img src="~/assets/img/hero.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent'
}
</script>

<style scoped>
.hero-content {
  @apply pt-24;
}

.hero-content > .container {
  @apply px-3 mx-auto flex flex-wrap flex-col items-center;
}

@screen md {
  .hero-content > .container {
    @apply flex-row;
  }
}

.hero-content-content {
  @apply flex flex-col w-full justify-center items-start text-center;
}

@screen md {
  .hero-content-content {
    @apply w-2/5 text-left;
  }
}

.hero-content-content .leading {
  @apply uppercase leading-loose w-full;
}

.hero-content-content .sub-leading {
  @apply leading-normal text-2xl mb-8;
}

.hero-content-content h1 {
  @apply my-4 text-5xl font-bold leading-tight;
}

.hero-content-content button {
  @apply mx-auto bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg;
}

.hero-content-content button:hover {
  @apply underline;
}

@screen lg {
  .hero-content-content button {
    @apply mx-0;
  }
}

.hero-content-image {
  @apply w-full py-6 text-center;
}

@screen md {
  .hero-content-image {
    @apply w-3/5;
  }
}

.hero-content-image img {
  @apply w-full z-50;
}

@screen md {
  .hero-content-image img {
    @apply w-4/5;
  }
}
</style>
