<template>
  <div class="hero">
    <hero-content />
    <div class="hero-wave">
      <img src="~assets/img/hero-wave.svg" alt />
    </div>
  </div>
</template>

<script>
import HeroContent from '@/components/HeroContent'

export default {
  name: 'Hero',
  components: {
    'hero-content': HeroContent
  }
}
</script>

<style scoped>
.hero-wave {
  @apply relative -mt-12;
}

@screen lg {
  .hero-wave {
    @apply -mt-24;
  }
}
</style>
