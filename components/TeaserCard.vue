<template>
  <div class="teaser-card">
    <div class="teaser-content">
      <a href="#">
        <p class="overline">
          <slot name="overline" />
        </p>
        <div class="headline">
          <slot name="headline" />
        </div>
        <p class="content">
          <slot name="content" />
        </p>
      </a>
    </div>
    <div v-if="!!action" class="teaser-action">
      <div>
        <button class="gradient" @click.prevent="onClick">{{ action }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeaserCard',
  props: {
    action: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick() {
      // NOTE: is fired, but not handled in this template
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
.teaser-card {
  @apply w-full p-6 flex flex-col flex-grow flex-shrink;
}

@screen md {
  .teaser-card {
    @apply flex-1;
    /* todo generic width...?! */
  }
}

.teaser-content {
  @apply flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow;
}

.teaser-content > a {
  @apply flex flex-wrap no-underline;
}

.teaser-content > a:hover {
  @apply no-underline;
}

.overline {
  @apply w-full text-gray-600 text-xs px-6;
}

@screen md {
  .overline {
    @text-sm;
  }
}

.headline {
  @apply w-full font-bold text-xl text-gray-800 px-6;
}

.content {
  @apply text-gray-800 text-base px-6 mb-5;
}

.teaser-action {
  @apply flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6;
}

.teaser-action > div {
  @apply flex items-center justify-end;
}

.teaser-action button {
  @apply mx-auto text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg;
}

.teaser-action button:hover {
  @apply underline;
}

@screen lg {
  .teaser-action button {
    @apply mx-0;
  }
}
</style>
