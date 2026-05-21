<script setup lang="ts">
import { site } from '~/data/site'
import { headerNav } from '~/data/nav'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 right-0 left-0 z-50 h-header-mobile bg-white lg:h-header">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-16 focus:py-8 focus:bg-black focus:text-white"
    >
      Skip to content
    </a>

    <div class="container-main flex h-full items-center justify-between">
      <NuxtLink to="/" class="shrink-0" :aria-label="site.name">
        <div class="flex items-center gap-8">
          <UiOsfMark variant="duo" class="h-32 w-32 shrink-0 text-red lg:h-40 lg:w-40" />
          <span class="flex flex-col text-base leading-none font-medium lg:text-1xl">
            <span class="text-black">Open</span>
            <span class="text-cream-dark">Twin</span>
          </span>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-24 lg:flex" aria-label="Primary">
        <a
          v-for="item in headerNav"
          :key="item.href"
          :href="item.href"
          class="text-xl text-black transition-colors hover:text-red"
        >
          {{ item.label }}
        </a>
      </nav>

      <button
        type="button"
        class="text-xl lg:hidden cursor-pointer"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav-menu"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? 'Close' : 'Menu' }}
      </button>
    </div>

    <Transition name="fade">
      <div
        v-if="menuOpen"
        id="mobile-nav-menu"
        class="lg:hidden absolute top-header-mobile right-0 left-0 bg-white border-t border-cream"
      >
        <nav class="container-main flex flex-col gap-20 py-30" aria-label="Mobile">
          <a
            v-for="item in headerNav"
            :key="item.href"
            :href="item.href"
            class="text-2xl text-black transition-colors hover:text-red"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
