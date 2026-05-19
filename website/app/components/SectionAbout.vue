<script setup lang="ts">
import { about } from '~/data/sections'
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
    </div>
  </section>
</template>
