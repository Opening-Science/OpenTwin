<script setup lang="ts">
import { site } from '~/data/site'

useHead({ title: `Legal Notice — ${site.name}` })

const f = site.foundation
</script>

<template>
  <article class="container-narrow space-y-50 py-100 lg:py-150">
    <header class="space-y-16">
      <UiEyebrow>Legal Notice</UiEyebrow>
      <h1 class="text-3xl text-black lg:text-4xl">Legal Notice</h1>
      <p class="font-mono text-base text-cream-darker">
        Last updated: {{ site.legal.lastUpdated }}
      </p>
    </header>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">Organisation</h2>
      <p class="text-xl text-cream-darker">
        {{ f.legalName }} ({{ f.name }}) operates {{ site.domain }} and the
        {{ site.name }} project website.
      </p>
      <address class="not-italic text-xl text-cream-darker">
        {{ f.legalName }}<br>
        {{ f.address.street }}<br>
        {{ f.address.city }}<br>
        {{ f.address.country }}<br>
        Email:
        <a :href="`mailto:${f.email}`" class="text-red hover:underline">{{ f.email }}</a>
      </address>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">Legal status</h2>
      <p class="text-xl text-cream-darker">
        Established as a charitable foundation under Swiss Civil Code Articles 80 et seq.
        Registered 28 April 2026. UID: {{ f.uid }}. Subject to supervision by the
        {{ f.supervisor }}.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">Governance</h2>
      <p class="text-xl text-cream-darker">
        Foundation Board (collective signature by two members required):
      </p>
      <ul class="space-y-8 pl-24 text-xl text-cream-darker list-disc">
        <li v-for="m in f.board" :key="m">{{ m }}</li>
      </ul>
      <p class="text-xl text-cream-darker">Auditor: {{ f.auditor }}.</p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">Tax status</h2>
      <p class="text-xl text-cream-darker">
        Recognised as exclusively charitable under Article 56 lit. g of the Swiss Federal
        Direct Tax Act. The Foundation is not VAT-registered as the turnover thresholds
        are not exceeded.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">Responsible for content</h2>
      <p class="text-xl text-cream-darker">
        The Foundation Board, at the address above, is responsible for the editorial
        content of this website pursuant to applicable Swiss media-law provisions and the
        analogous provisions of § 18(2) of the German Interstate Media Treaty.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">Disclaimer</h2>
      <p class="text-xl text-cream-darker">
        The Foundation provides this website with reasonable care but gives no warranty
        as to the accuracy, completeness, timeliness, or fitness for any purpose of the
        information published. Liability is excluded to the maximum extent permitted by
        law, except in cases of gross negligence or wilful misconduct.
      </p>
      <p class="text-xl text-cream-darker">
        The Foundation has no influence over the content of external websites linked
        from this site and accepts no liability for them. The respective providers of
        linked pages are solely responsible for their content.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">Intellectual property</h2>
      <p class="text-xl text-cream-darker">
        Content authored by the Foundation is protected under Swiss and international
        copyright law. Original works marked with a Creative Commons licence (e.g.
        CC&nbsp;BY&nbsp;4.0) and software released under an open-source licence (e.g.
        MIT, Apache&nbsp;2.0, AGPL&nbsp;3.0) are governed by the terms of the respective
        licence, which prevail over any contrary statement in this notice.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">Applicable law and jurisdiction</h2>
      <p class="text-xl text-cream-darker">
        Swiss substantive law applies. The exclusive place of jurisdiction is Bern,
        Switzerland, subject to mandatory law provisions to the contrary.
      </p>
    </section>
  </article>
</template>
