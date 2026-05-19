<script setup lang="ts">
import { positioning } from '~/data/sections'
</script>

<template>
  <section :id="positioning.id">
    <div class="container-main mb-40">
      <UiEyebrow>{{ positioning.eyebrow }}</UiEyebrow>
    </div>
    <div class="container-wide rounded-xl bg-cream-light p-30 lg:p-40">
      <div class="space-y-30 lg:mx-auto lg:max-w-[1000px] lg:space-y-40">
        <h2 class="text-3xl text-black lg:text-4xl">{{ positioning.title }}</h2>
        <ul class="space-y-20 lg:space-y-30">
          <li
            v-for="row in positioning.rows"
            :key="row.isNot"
            class="grid grid-cols-1 gap-8 border-t border-cream pt-20 lg:grid-cols-[1fr_2fr] lg:gap-40 lg:pt-30"
          >
            <p class="font-mono text-xl font-bold tracking-[2%] uppercase text-cream-darker lg:text-sm">
              {{ row.isNot }}
            </p>
            <p class="text-xl text-black lg:text-2xl">
              <span class="text-cream-dark">→</span> {{ row.is }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
