<template>
  <section class="teasers">
    <div class="container">
      <the-title label="Teaser" />
      <div class="teaser-row">
        <teaser-card action="Action">
          <template v-slot:overline>xGETTING STARTED</template>
          <template v-slot:headline>Lorem ipsum dolor sit amet</template>
          <template
            v-slot:content
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</template>
        </teaser-card>
        <teaser-card action="Action">
          <template v-slot:overline>xGETTING STARTED</template>
          <template v-slot:headline>Lorem ipsum dolor sit amet</template>
          <template
            v-slot:content
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</template>
        </teaser-card>
        <teaser-card action="Action">
          <template v-slot:overline>xGETTING STARTED</template>
          <template v-slot:headline>Lorem ipsum dolor sit amet</template>
          <template
            v-slot:content
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</template>
        </teaser-card>
      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from '@/components/TheTitle'
import TeaserCard from '@/components/TeaserCard'

export default {
  name: 'Teasers',
  components: {
    'teaser-card': TeaserCard,
    'the-title': TheTitle
  }
}
</script>

<style scoped>
.teasers {
  @apply bg-white border-b py-8;
}

.teasers > .container {
  @apply mx-auto pt-4 pb-12;
}

.teaser-row {
  @apply flex flex-wrap;
}
</style>
