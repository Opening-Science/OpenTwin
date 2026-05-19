<script setup lang="ts">
import { howItWorks } from '~/data/sections'
</script>

<template>
  <section :id="howItWorks.id" class="container-main">
    <div class="space-y-40 lg:space-y-60">
      <div class="space-y-24 lg:max-w-800">
        <UiEyebrow>{{ howItWorks.eyebrow }}</UiEyebrow>
      </div>

      <ol class="grid grid-cols-1 gap-30 lg:grid-cols-3 lg:gap-40">
        <li
          v-for="(pillar, i) in howItWorks.pillars"
          :key="pillar.title"
          class="flex flex-col gap-20 rounded-2xl border border-cream bg-cream p-30 lg:p-40"
        >
          <p class="font-mono text-sm font-bold tracking-[2%] uppercase text-red">
            {{ String(i + 1).padStart(2, '0') }}
          </p>
          <h3 class="text-2xl text-black lg:text-3xl">{{ pillar.title }}</h3>
          <p class="text-xl text-cream-darker">{{ pillar.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
