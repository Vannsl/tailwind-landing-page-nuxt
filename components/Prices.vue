<template>
  <section class="prices">
    <div class="container">
      <the-title label="Pricing" />
      <div class="prices-row">
        <price-card name="Free" price="£0" priceLabel="for one user" :features="listFree" />
        <price-card name="Basic" price="x.99" :features="listBasic" :highlighted="true" />
        <price-card name="Pro" price="£xx.99" :features="listPro" />
      </div>
    </div>
  </section>
</template>

<script>
import PriceCard from '@/components/PriceCard'
import TheTitle from '@/components/TheTitle'

export default {
  name: 'Prices',
  data() {
    return {
      listFree: ['Thing', 'Thing', 'Thing'],
      listBasic: ['Thing', 'Thing', 'Thing', 'Thing'],
      listPro: ['Thing', 'Thing', 'Thing', 'Thing', 'Thing']
    }
  },
  components: {
    'price-card': PriceCard,
    'the-title': TheTitle
  }
}
</script>

<style scoped>
.prices {
  @apply bg-gray-100 py-8;
}

.prices > .container {
  @apply mx-auto px-2 pt-4 pb-12 text-gray-800;
}

.prices-row {
  @apply flex flex-col justify-center pt-12 my-12;
}

@screen sm {
  .prices-row {
    @apply flex-row my-4;
  }
}
</style>
