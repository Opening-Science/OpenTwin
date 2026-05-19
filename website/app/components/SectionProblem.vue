<script setup lang="ts">
import { problem } from '~/data/sections'
</script>

<template>
  <section :id="problem.id" class="container-main">
    <div class="space-y-40 lg:mx-auto lg:w-10/12">
      <UiEyebrow>{{ problem.eyebrow }}</UiEyebrow>
      <div class="space-y-16">
        <p
          v-for="(statement, i) in problem.statements"
          :key="i"
          class="text-3xl text-cream-dark lg:text-4xl"
        >
          {{ statement }}
        </p>
        <p class="pt-20 text-3xl text-black lg:text-4xl">
          OpenTwin provides the
          <span class="text-red">missing foundation</span>.
        </p>
      </div>
    </div>
  </section>
</template>
