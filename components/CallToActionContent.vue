<template>
  <section class="container call-to-action-content">
    <the-title :isLight="true" label="Call to Action" />

    <h3>Main Hero Message to sell yourself!</h3>

    <button>Action!</button>
  </section>
</template>

<script>
import TheTitle from '@/components/TheTitle'

export default {
  name: 'CallToActionContent',
  components: {
    'the-title': TheTitle
  }
}
</script>

<style scoped>
.call-to-action-content {
  @apply mx-auto text-center py-6 mb-12;
}

h3 {
  @apply my-4 text-3xl leading-tight;
}

button {
  @apply mx-auto bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg;
}

button:hover {
  @apply underline;
}
</style>
