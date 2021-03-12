<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <logo class="h-10 w-auto block"  />
        </div>

        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Links</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://docs.statusflare.com"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Documentation</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://dash.statusflare.com"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Dashboard</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Legal</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.iubenda.com/terms-and-conditions/29520195"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Terms and Conditions</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.iubenda.com/privacy-policy/29520195"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Privacy Policy</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/statusflare_com"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Twitter</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://discord.com/invite/CyKwy4GG9Y"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Discord</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Company</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="mailto:adam@statusflare.com"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo
  }
}
</script>
