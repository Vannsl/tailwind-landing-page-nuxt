<template>
  <div class="the-title" :class="{ light: isLight }">
    <h1>{{ label }}</h1>
    <div class="line-wrapper">
      <div class="line gradient"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-title',
  props: {
    label: String,
    isLight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
h1 {
  @apply w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800;
}

.line-wrapper {
  @apply w-full mb-4;
}

.line {
  @apply h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t;
}

.light h1 {
  @apply text-white;
}

.light .line {
  background: white !important;
}
</style>
