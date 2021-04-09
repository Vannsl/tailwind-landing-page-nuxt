<template>
  <div>
    <hero />
    <features />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features
  }
}
</script>
