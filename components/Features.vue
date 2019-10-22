<template>
  <section class="features">
    <div class="container">
      <the-title label="Features" />
      <feature
        headline="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
      >
        <img src="~assets/img/travel-booking.svg" alt slot="svg" />
      </feature>
      <feature
        :isLeft="false"
        headline="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
      >
        <img src="~assets/img/connected-world.svg" alt slot="svg" />
      </feature>
    </div>
  </section>
</template>

<script>
import TheTitle from '@/components/TheTitle'
import Feature from '@/components/Feature'

export default {
  name: 'Features',
  components: {
    feature: Feature,
    'the-title': TheTitle
  }
}
</script>

<style scoped>
.features {
  @apply bg-white border-b py-8;
}

.features > .container {
  @apply max-w-5xl mx-auto m-8;
}
</style>
