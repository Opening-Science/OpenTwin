<script setup lang="ts">
import { contribute } from '~/data/sections'
</script>

<template>
  <section :id="contribute.id" class="container-main">
    <div class="grid grid-cols-1 gap-40 lg:grid-cols-12 lg:gap-40">
      <div class="space-y-24 lg:col-span-7">
        <UiEyebrow>{{ contribute.eyebrow }}</UiEyebrow>
        <h2 class="text-3xl text-black lg:text-4xl">{{ contribute.title }}</h2>
        <p class="text-2xl text-black lg:text-3xl">{{ contribute.intro }}</p>
        <p class="text-xl text-cream-darker">{{ contribute.body }}</p>
        <div class="flex flex-wrap items-center gap-20 pt-10">
          <UiButton
            :href="contribute.cta.href"
            :variant="contribute.cta.variant"
            :external="contribute.cta.external"
          >
            {{ contribute.cta.label }}
          </UiButton>
        </div>
      </div>

      <div class="lg:col-span-4 lg:col-start-9">
        <div class="rounded-2xl bg-cream-light p-30 lg:p-40 space-y-20">
          <p class="font-mono text-sm font-bold tracking-[2%] uppercase text-red">
            Open Source
          </p>
          <p class="text-xl text-black">
            MIT-licensed. Maintained under the
            <a
              href="https://github.com/Opening-Science"
              target="_blank"
              rel="noopener noreferrer"
              class="text-red hover:underline"
            >Open Science Foundation</a> on GitHub.
          </p>
          <p class="font-mono text-sm text-cream-darker">
            Standards · Protocols · Reference pipelines · Validation
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
