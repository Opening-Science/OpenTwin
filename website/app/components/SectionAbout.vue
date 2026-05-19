<script setup lang="ts">
import { about } from '~/data/sections'
import { site } from '~/data/site'
</script>

<template>
  <section :id="about.id" class="container-narrow">
    <div class="space-y-30">
      <UiEyebrow>{{ about.eyebrow }}</UiEyebrow>
      <p
        v-for="(paragraph, i) in about.paragraphs"
        :key="i"
        class="text-2xl text-black"
      >
        {{ paragraph }}
      </p>
      <p class="pt-20 font-mono text-base text-cream-darker">
        Supported by the
        <a
          :href="site.foundation.url"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-black"
        >{{ site.foundation.name }}</a>.
      </p>
    </div>
  </section>
</template>
