<template>
  <nav :class="{ sticky: isSticky, open: isOpen }">
    <div class="container">
      <div class="brand">
        <a href="#">
          <logo />&nbsp;LANDING
        </a>
      </div>
      <div class="nav-menu">
        <button @click.prevent.stop="onToggleClick">
          <menu-toggle />
        </button>
      </div>

      <div class="nav-content">
        <ul class="nav-list">
          <li>
            <a class="active" href="#">Active</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
        </ul>
        <button class="action-btn gradient">Action</button>
      </div>
    </div>
    <hr />
  </nav>
</template>

<script>
import Logo from '@/assets/img/logo.svg?inline'
import MenuToggle from '@/assets/img/menu-toggle.svg?inline'

export default {
  name: 'TheHeader',
  components: {
    logo: Logo,
    'menu-toggle': MenuToggle
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false
    }
  },
  computed: {
    isSticky() {
      return this.scrollY > 10
    }
  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
    }
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>

<style scoped>
nav {
  @apply fixed w-full z-30 top-0;
}

nav.sticky {
  @apply bg-white shadow;
}

nav hr {
  @apply border-b border-gray-100 opacity-25 my-0 py-0;
}

nav > .container {
  @apply w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2;
}

nav.sticky .brand a {
  @apply text-gray-800;
}

.brand {
  @apply pl-4 flex items-center;
}

.brand a {
  @apply no-underline font-bold text-2xl text-white;
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

.nav-menu {
  @apply block pr-4;
}

@screen lg {
  .nav-menu {
    @apply hidden;
  }
}

.nav-menu button {
  @apply flex items-center px-3 py-2 border rounded appearance-none;
}

.nav-menu button:hover {
  @apply text-gray-800 border-teal-500;
}

.nav-menu button:focus {
  @apply outline-none;
}

.nav-menu svg {
  @apply fill-current h-3 w-3;
}

nav.sticky .nav-content {
  @apply bg-white;
}

nav:not(.open) .nav-content {
  @apply hidden;
}

@screen lg {
  nav:not(.open) .nav-content {
    @apply flex;
  }
}

.nav-content {
  @apply w-full flex-grow mt-2 bg-white text-black p-4 z-20 bg-gray-100;
}

@screen lg {
  .nav-content {
    @apply flex items-center w-auto mt-0 bg-transparent p-0;
  }
}

.nav-list {
  @apply justify-end flex-1 items-center;
}

@screen lg {
  .nav-list {
    @apply flex;
  }
}

.nav-list li {
  @apply mr-3;
}

.nav-list a {
  @apply inline-block text-black no-underline py-2 px-4;
}

.nav-list a:hover {
  @apply text-gray-800 underline;
}

.nav-list a.active {
  @apply font-bold;
}

nav:not(.sticky) .action-btn,
nav.open .action-btn {
  @apply text-gray-800;
  background: white !important;
}

.action-btn {
  @apply mx-auto font-bold rounded-full mt-4 py-4 px-8 shadow opacity-75 text-white;
}

.action-btn:hover {
  @apply underline;
}

@screen lg {
  .action-btn {
    @apply mx-0 mt-0;
  }
}
</style>
