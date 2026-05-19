<script setup lang="ts">
import { getStarted } from '~/data/sections'
</script>

<template>
  <section :id="getStarted.id" class="container-main">
    <div class="grid grid-cols-1 gap-40 lg:grid-cols-12 lg:gap-40">
      <div class="space-y-24 lg:col-span-5">
        <UiEyebrow>{{ getStarted.eyebrow }}</UiEyebrow>
        <h2 class="text-3xl text-black lg:text-4xl">{{ getStarted.title }}</h2>
        <p class="text-xl text-cream-darker">{{ getStarted.intro }}</p>
        <div class="pt-10">
          <UiButton
            :href="getStarted.cta.href"
            :variant="getStarted.cta.variant"
            :external="getStarted.cta.external"
          >
            {{ getStarted.cta.label }}
          </UiButton>
        </div>
      </div>

      <ol class="space-y-16 lg:col-span-6 lg:col-start-7 lg:space-y-20">
        <li
          v-for="(step, i) in getStarted.steps"
          :key="step"
          class="flex items-baseline gap-20 border-t border-cream pt-20 lg:gap-30 lg:pt-24"
        >
          <span class="font-mono text-sm font-bold tracking-[2%] uppercase text-red shrink-0">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <p class="text-2xl text-black lg:text-3xl">{{ step }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
