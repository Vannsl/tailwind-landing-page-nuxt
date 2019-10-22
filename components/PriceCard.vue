<template>
  <div class="price-card" :class="{ highlighted: highlighted }">
    <div class="price-content">
      <div class="price-name">{{ name }}</div>
      <div class="seperator gradient" v-if="highlighted" />
      <ul>
        <li v-for="(item, index) in features" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="pricing">
      <div class="price">
        {{ price }}
        <span>{{ priceLabel }}</span>
      </div>
      <div class="price-action">
        <button class="gradient" ;>Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceCard',
  props: {
    highlighted: {
      type: Boolean,
      default: false,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    priceLabel: {
      type: String,
      default: '/ per user'
    },
    features: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.price-card {
  @apply flex flex-col w-5/6 mx-auto rounded-none bg-white mt-4;
}

.price-card.highlighted {
  @apply shadow-lg z-10;
}

@screen sm {
  .price-card.highlighted {
    @apply -mt-6;
  }
}

@screen lg {
  .price-card {
    @apply w-1/4 mx-0 rounded-lg;
  }

  .price-card.highlighted {
    @apply w-1/3;
  }
}

.price-card.highlighted .price-content {
  @apply text-gray-800;
}

.price-content {
  @apply flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow;
}

.price-card.highlighted .price-content ul {
  @apply font-bold;
}

.price-content ul {
  @apply w-full text-center text-sm;
}

.price-card.highlighted .price-content ul li {
  @apply text-base;
}

.price-content ul li {
  @apply border-b py-4 text-sm;
}

.seperator {
  @apply h-1 w-full my-0 py-0 rounded-t;
}

.price-card.highlighted .price-name {
  @apply border-b-0;
}

.price-name {
  @apply p-8 text-3xl font-bold text-center border-b-4;
}

.pricing {
  @apply flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6;
}

.price-card.highlighted .price {
  @apply text-4xl text-gray-800;
}

.price {
  @apply w-full pt-6 text-3xl text-gray-600 font-bold text-center;
}

.price span {
  @apply text-base;
}

.price-action {
  @apply flex items-center justify-center;
}

.price-action button {
  @apply mx-auto text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg;
}

.price-action button:hover {
  @apply underline;
}

@screen lg {
  .price-action button {
    @apply mx-0;
  }
}
</style>
