<script setup lang="ts">
import { problem } from '~/data/sections'
import { onMounted, onBeforeUnmount, ref } from 'vue'

// As the user scrolls, the paragraph whose centre is closest to the viewport
// centre is rendered in black; the others stay cream-dark.
const itemRefs = ref<(HTMLElement | null)[]>([])
const activeIdx = ref(-1)

function setItem(el: Element | ComponentPublicInstance | null, i: number) {
  itemRefs.value[i] = el as HTMLElement | null
}

let rafId: number | null = null

function updateActive() {
  rafId = null
  const vh = window.innerHeight
  const center = vh / 2
  let nearest = -1
  let minDist = Infinity
  for (let i = 0; i < itemRefs.value.length; i++) {
    const el = itemRefs.value[i]
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.bottom < 0 || rect.top > vh) continue
    const dist = Math.abs(rect.top + rect.height / 2 - center)
    if (dist < minDist) {
      minDist = dist
      nearest = i
    }
  }
  activeIdx.value = nearest
}

function schedule() {
  if (rafId !== null) return
  rafId = requestAnimationFrame(updateActive)
}

onMounted(() => {
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  updateActive()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  if (rafId !== null) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section :id="problem.id" class="container-main">
    <div class="space-y-40 lg:mx-auto lg:w-10/12">
      <UiEyebrow>{{ problem.eyebrow }}</UiEyebrow>
      <div class="space-y-16">
        <p
          v-for="(statement, i) in problem.statements"
          :key="i"
          :ref="(el) => setItem(el, i)"
          class="text-3xl motion-safe:transition-colors motion-safe:duration-500 lg:text-4xl"
          :class="activeIdx === i ? 'text-black' : 'text-cream-dark'"
        >
          {{ statement }}
        </p>
        <p
          :ref="(el) => setItem(el, problem.statements.length)"
          class="pt-20 text-3xl motion-safe:transition-colors motion-safe:duration-500 lg:text-4xl"
          :class="activeIdx === problem.statements.length ? 'text-black' : 'text-cream-dark'"
        >
          OpenTwin provides the
          <span class="text-red">missing foundation</span>.
        </p>
      </div>
    </div>
  </section>
</template>
