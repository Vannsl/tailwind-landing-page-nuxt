<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="brand">
          <a href="#">
            <logo />&nbsp;LANDING
          </a>
        </div>

        <div class="link-group">
          <p>Links</p>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div class="link-group">
          <p>Legal</p>
          <ul>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div class="link-group">
          <p>Social</p>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div class="link-group">
          <p>Company</p>
          <ul>
            <li>
              <a href="#">Official Blog</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- is this copyright correct? -->
    <a
      href="https://www.freepik.com/free-photos-vectors/background"
    >Background vector created by freepik - www.freepik.com</a>
  </footer>
</template>

<script>
import Logo from '@/assets/img/logo.svg?inline'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo
  }
}
</script>

<style scoped>
footer {
  @apply bg-white;
}

footer > .container {
  @apply mx-auto px-8;
}

footer > .container > .row {
  @apply w-full flex flex-col py-6;
}

@screen md {
  footer > .container > .row {
    @apply flex-row;
  }
}

.brand {
  @apply flex-1 mb-6;
}

.brand a {
  @apply no-underline font-bold text-2xl text-orange-600;
}

.brand:hover a {
  @apply no-underline;
}

@screen lg {
  .brand a {
    @apply text-4xl;
  }
}

.brand svg {
  @apply h-8 fill-current inline;
}

.link-group {
  @apply flex-1;
}

.link-group p {
  @apply uppercase text-gray-500;
}

@screen md {
  .link-group p {
    @apply mb-6;
  }
}

.link-group ul {
  @apply mb-6;
}

.link-group li {
  @apply mt-2 inline-block mr-2;
}

@screen md {
  .link-group li {
    @apply block mr-0;
  }
}

.link-group li a {
  @apply no-underline text-gray-800;
}

.link-group li a:hover {
  @apply underline text-orange-500;
}
</style>
