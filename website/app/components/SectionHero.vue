<script setup lang="ts">
import { hero } from '~/data/sections'
</script>

<template>
  <section class="container-main flex flex-col space-y-40 overflow-hidden bg-white pt-140 lg:min-h-[65vh] lg:flex-row lg:items-center lg:pt-50">
    <div class="py-50 lg:order-1 lg:w-8/12 lg:py-0">
      <div class="space-y-24">
        <h1 class="text-5xl leading-none text-black sm:text-[4rem] lg:-translate-y-70 lg:text-[5rem]">
          {{ hero.title }}
        </h1>
        <p class="max-w-700 text-3xl text-black lg:-translate-y-50">
          Build and validate human digital twins on
          <span class="text-red">open standards</span> and infrastructure.
        </p>
        <p class="max-w-700 text-xl text-cream-darker lg:-translate-y-30">
          {{ hero.body }}
        </p>

        <div class="flex flex-wrap gap-16 pt-20 lg:-translate-y-20">
          <UiButton
            v-for="cta in hero.ctas"
            :key="cta.label"
            :href="cta.href"
            :variant="cta.variant"
            :external="cta.external"
          >
            {{ cta.label }}
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>
