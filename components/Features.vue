<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Website and API monitoring
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <feature-left
        headline="Global checks"
        content="Check websites and APIs from locations around the world, collect uptime, metrics and monitor server response time. It's a great option for website owners, company owners, or even resellers who work with web projects."
      >
        <img src="~assets/img/connected-world.svg?inline" alt slot="svg" />
      </feature-left>
      <feature-right
        headline="Status pages"
        content="Status pages is a great solution for all kinds of companies that want to show their actual page status or incidents to partners or visitors of your website. Just create one add your monitors via our Dashboard or simple APIs."
      >
        <img src="~assets/img/information-tab.svg?inline" alt slot="svg" />
      </feature-right>
    </div>
  </section>
</template>

<script>
import FeatureLeft from '@/components/FeatureLeft'
import FeatureRight from '@/components/FeatureRight'

export default {
  name: 'Features',
  components: {
    'feature-left': FeatureLeft,
    'feature-right': FeatureRight,
  }
}
</script>
