<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Key features
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <teaser-column :rows="3" >
        <template v-slot:overline>&nbsp;</template>
        <template v-slot:headline>Integrations</template>
        <template v-slot:content
        >Keep your team up to date with various integrations out of the box. Slack, Discord, Telegram, PagerDuty and more.</template
        >
      </teaser-column>
      <teaser-column :rows="3">
        <template v-slot:overline>Coming soon</template>
        <template v-slot:headline>Team members</template>
        <template v-slot:content
          >Add your team members to manage monitors, integrations or status pages. They’ll be notified via email to get started.</template
        >
      </teaser-column>
      <teaser-column :rows="3">
        <template v-slot:overline>Coming soon</template>
        <template v-slot:headline>Custom Workers</template>
        <template v-slot:content
          >Deploy your check workers to monitor internal endpoints. Easy as deploying Lambda, Gitlab job or Cloudflare Worker.</template
        >
      </teaser-column>
      <teaser-column :rows="3">
        <template v-slot:overline>Coming soon</template>
        <template v-slot:headline>SSL monitoring</template>
        <template v-slot:content
          >We monitor ssl certificates for you, notify you about expiration and enable you to renew/replace them in time.</template
        >
      </teaser-column>
      <teaser-column :rows="3">
        <template v-slot:overline>&nbsp;</template>
        <template v-slot:headline>REST API</template>
        <template v-slot:content
          >Access or manage your configuration (monitors, integrations, status pages, etc) via API. Integrate Statusflare to your system.</template
        >
      </teaser-column>
      <teaser-column :rows="3">
        <template v-slot:overline>Coming soon</template>
        <template v-slot:headline>Advanced checks</template>
        <template v-slot:content
          >Monitor specific ports or ping your server. Measure and improve the speed metrics of your website to boost SEO scores.</template
        >
      </teaser-column>
    </div>
  </section>
</template>

<script>
import TeaserColumn from '@/components/TeaserColumn'

export default {
  name: 'Teasers',
  components: {
    'teaser-column': TeaserColumn
  }
}
</script>
