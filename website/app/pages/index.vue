<script setup lang="ts">
import { site } from '~/data/site'

useHead({
  title: site.name,
  meta: [{ name: 'description', content: site.description }],
})
</script>

<template>
  <article class="space-y-150 lg:space-y-250">
    <SectionHero />
    <SectionProblem />
    <SectionPositioning />
    <SectionHowItWorks />
    <SectionGetStarted />
    <SectionApplications />
    <SectionContribute />
    <SectionAbout />
  </article>
</template>
