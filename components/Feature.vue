<template>
  <div class="feature" :class="{ left: isLeft }">
    <div class="feature-image">
      <slot name="svg" />
    </div>
    <div class="feature-content">
      <h3>{{ headline }}</h3>
      <p>
        {{ content }}
        <br />
        <br />Images from:
        <a href="https://undraw.co/">undraw.co</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    headline: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    isLeft: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>

<style scoped>
.feature {
  @apply flex flex-wrap flex-col-reverse;
}

@screen sm {
  .feature {
    @apply flex-row;
  }

  .feature.left {
    @apply flex-row-reverse;
  }
}

.feature-image,
.feature-content {
  @apply w-full p-6 mt-6;
}

@screen sm {
  .feature-image,
  .feature-content {
    @apply w-1/2;
  }
}

.feature-content {
  @apply align-middle;
}

.feature-content h3 {
  @apply text-3xl text-gray-800 font-bold leading-none mb-3;
}

.feature-content p {
  @apply text-gray-600 mb-8;
}

.feature-content a {
  @apply text-orange-500 underline;
}
</style>
