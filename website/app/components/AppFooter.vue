<script setup lang="ts">
import { site } from '~/data/site'
import { footerSections, footerLegal } from '~/data/nav'

const socials = [
  { label: 'GitHub',   href: site.repoUrl,            external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/open-science-foundation/', external: true },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-60 lg:mt-120">
    <div class="container-main pt-30 pb-30 lg:pb-40">
      <div class="flex flex-col gap-80 lg:grid lg:grid-cols-12 lg:gap-40">
        <!-- Logo + tagline (desktop only) -->
        <div class="hidden flex-col space-y-80 lg:col-span-6 lg:flex lg:min-h-400 lg:space-y-70">
          <NuxtLink to="/" :aria-label="site.name">
            <div class="flex items-center gap-8">
              <UiOsfMark variant="duo" class="h-40 w-40 shrink-0 text-red" />
              <span class="flex flex-col text-1xl leading-none font-medium">
                <span class="text-black">Open</span>
                <span class="text-cream-dark">Twin</span>
              </span>
            </div>
          </NuxtLink>
          <p class="w-3/5 text-4xl">
            Build and validate human digital twins on
            <span class="text-red">open standards</span>
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-20 sm:grid-cols-3 lg:contents">
          <div class="space-y-40 sm:contents">
            <nav class="space-y-8 lg:col-span-2 lg:col-start-7" aria-label="Sections">
              <p class="text-xl font-bold">Sections</p>
              <ul class="space-y-8 leading-none">
                <li v-for="item in footerSections" :key="item.href">
                  <a :href="item.href" class="text-xl transition-colors hover:text-red">
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </nav>

            <nav class="space-y-8 lg:col-span-2 lg:col-start-9" aria-label="Legal">
              <p class="text-xl font-bold">Legal</p>
              <ul class="space-y-8 leading-none">
                <li v-for="item in footerLegal" :key="item.href">
                  <NuxtLink :to="item.href" class="text-xl transition-colors hover:text-red">
                    {{ item.label }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>

          <div class="space-y-8 lg:col-span-2 lg:col-start-11">
            <p class="text-xl font-bold">Social</p>
            <ul class="space-y-8 leading-none">
              <li v-for="s in socials" :key="s.href">
                <a
                  :href="s.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-mono text-xl font-light transition-colors hover:text-red"
                >
                  ↗ {{ s.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-40">
        <p class="text-sm text-cream-dark">
          © {{ year }} OpenTwin · An initiative supported by the
          <a
            :href="site.foundation.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-red"
          >{{ site.foundation.name }}</a>.
        </p>
      </div>
    </div>
  </footer>
</template>
