<script setup lang="ts">
import { site } from '~/data/site'

useHead({ title: `Terms of Use — ${site.name}` })

const f = site.foundation
</script>

<template>
  <article class="container-narrow space-y-50 py-100 lg:py-150">
    <header class="space-y-16">
      <UiEyebrow>Terms</UiEyebrow>
      <h1 class="text-3xl text-black lg:text-4xl">Terms of Use</h1>
      <p class="font-mono text-base text-cream-darker">
        Last updated: {{ site.legal.lastUpdated }}
      </p>
    </header>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">1. Scope and acceptance</h2>
      <p class="text-xl text-cream-darker">
        These Terms govern access to {{ site.domain }} and the {{ site.name }} project
        website (the "Website") provided by {{ f.legalName }} ({{ f.name }}),
        {{ f.address.street }}, {{ f.address.city }}, {{ f.address.country }}.
      </p>
      <p class="text-xl text-cream-darker">
        By accessing the Website, you acknowledge agreement to these Terms, the Privacy
        Policy, and the Legal Notice. The Foundation may amend these Terms at any time;
        material changes will be communicated conspicuously on the Website.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">2. Purpose of the website</h2>
      <p class="text-xl text-cream-darker">
        The Website provides information about the {{ site.name }} project — an open
        initiative for standards, protocols, and reference pipelines for digital twins
        in health and research — and about the Foundation's broader Open Science work.
        It does not constitute legal, tax, financial, investment, scientific, or medical
        advice. No information should be relied upon without independent professional
        verification.
      </p>
      <p class="text-xl text-cream-darker">
        The Foundation operates as a Swiss charitable foundation promoting Open Science.
        It does not offer consumer goods or services through this Website and does not
        solicit donations from minors.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">3. Access and availability</h2>
      <p class="text-xl text-cream-darker">
        The Foundation endeavours to keep the Website accessible but does not warrant
        uninterrupted, error-free, or secure access. The Foundation may modify, suspend,
        discontinue, or restrict access at its sole discretion and without notice. No
        availability claims arise against the Foundation to the maximum extent permitted
        by law.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">4. Permitted use</h2>
      <p class="text-xl text-cream-darker">
        You may use the Website only lawfully and in accordance with these Terms. The
        following conduct is prohibited:
      </p>
      <ul class="space-y-8 pl-24 text-xl text-cream-darker list-disc">
        <li>Violating applicable Swiss, EU, or other law</li>
        <li>Interfering with the Website's infrastructure, servers, or networks (malware, denial-of-service attempts, unauthorised access)</li>
        <li>Circumventing security or access-control mechanisms</li>
        <li>Systematically scraping, harvesting, mirroring, or extracting Website data by automated means without prior written consent (except where permitted by an open licence)</li>
        <li>Transmitting unsolicited communications, advertising, or deceptive, defamatory, or harassing material</li>
        <li>Using Foundation or {{ site.name }} names, logos, or marks in a way that suggests endorsement without prior written consent</li>
        <li>Uploading AI-generated content that infringes third-party copyrights or is misleading</li>
      </ul>
    </section>

    <section class="space-y-20">
      <h2 class="text-2xl text-black lg:text-3xl">5. Intellectual property and open licensing</h2>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">5.1 General</h3>
        <p class="text-xl text-cream-darker">
          Unless explicitly stated otherwise, Website content — including texts,
          graphics, illustrations, photographs, logos, layouts, and source code — is
          protected by copyright and intellectual-property rights belonging to the
          Foundation or its licensors.
        </p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">5.2 Open content</h3>
        <p class="text-xl text-cream-darker">
          In line with its purpose, original Foundation materials are typically made
          available under Creative Commons licences (typically CC&nbsp;BY&nbsp;4.0) or
          open-source licences (MIT, Apache&nbsp;2.0, AGPL&nbsp;3.0). Where applicable,
          the open licence governs user rights and prevails over contrary statements in
          these Terms. Attribution requirements and the open licence terms must be
          respected.
        </p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">5.3 Marks</h3>
        <p class="text-xl text-cream-darker">
          The names "Open Science Stiftung," "Open Science Foundation," "Open Science
          Institute," "{{ site.name }}," together with associated logos and word marks,
          are reserved by the Foundation and may enjoy trademark protection. Use
          requires prior written consent, except for nominative fair use in commentary,
          news reporting, or scientific citation.
        </p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">5.4 Third-party content</h3>
        <p class="text-xl text-cream-darker">
          The Website may include third-party content used under licence or applicable
          exceptions. Such content remains the property of the respective rights holders
          and is identified accordingly. Use is subject to the applicable licence terms.
        </p>
      </div>
    </section>

    <section class="space-y-20">
      <h2 class="text-2xl text-black lg:text-3xl">6. Links and tracking technologies</h2>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">6.1 Outbound links</h3>
        <p class="text-xl text-cream-darker">
          The Website may contain links to third-party sites provided for convenience.
          The Foundation has no control over linked-site content and accepts no
          responsibility for accuracy, legality, or availability.
        </p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">6.2 Cookies</h3>
        <p class="text-xl text-cream-darker">
          The Website uses technically necessary cookies (session management).
          Additional cookies (analytics) require prior consent via the cookie banner
          (opt-in). Consent may be withdrawn at any time. For details, see the
          <NuxtLink to="/privacy" class="text-red hover:underline">Privacy Policy</NuxtLink>.
        </p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">6.3 Inbound links</h3>
        <p class="text-xl text-cream-darker">
          Linking to the Website is generally permitted, provided the link does not
          create a misleading impression about the Foundation, its activities, or any
          endorsement. Framing, deep-linking that bypasses navigational context, and
          misappropriation of the Foundation's identity are prohibited.
        </p>
      </div>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">7. User-submitted content</h2>
      <p class="text-xl text-cream-darker">
        If the Website allows you to submit content (for example through a contact form
        or upload), you warrant that:
      </p>
      <ul class="space-y-8 pl-24 text-xl text-cream-darker list-disc">
        <li>You own or otherwise hold all rights necessary to submit it</li>
        <li>The content does not infringe third-party rights (intellectual-property, personality, or data-protection rights)</li>
        <li>The content is not unlawful, defamatory, threatening, obscene, or otherwise objectionable</li>
        <li>The content does not contain malware or harmful elements</li>
      </ul>
      <p class="text-xl text-cream-darker">
        You grant the Foundation a non-exclusive, royalty-free, worldwide, transferable,
        sublicensable right to use, store, reproduce, modify, and display submitted
        content for the operation of the Website and for the Foundation's charitable
        purposes. You may request deletion at any time, provided no legal or legitimate
        Foundation interest (such as archiving obligations) prevents it.
      </p>
    </section>

    <section class="space-y-20">
      <h2 class="text-2xl text-black lg:text-3xl">8. Disclaimer and limitation of liability</h2>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">8.1 No warranty</h3>
        <p class="text-xl text-cream-darker">
          The Foundation provides the Website and content "as is." To the maximum extent
          permitted by law, the Foundation disclaims all warranties, express or implied,
          including accuracy, completeness, timeliness, merchantability, fitness for a
          particular purpose, and non-infringement.
        </p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">8.2 Limitation of liability</h3>
        <p class="text-xl text-cream-darker">
          To the maximum extent permitted by applicable law, the Foundation, its Board,
          employees, contractors, agents, and affiliates are not liable for direct,
          indirect, incidental, consequential, or punitive damages arising from the use
          of, or inability to use, the Website — including data loss, profit loss, or
          business interruption — even if advised of such possibility. These limitations
          do not apply in cases of gross negligence, wilful misconduct, or liability
          that mandatory law cannot exclude.
        </p>
      </div>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">9. Indemnity</h2>
      <p class="text-xl text-cream-darker">
        You agree to indemnify and hold harmless the Foundation, its Board, employees,
        contractors, and agents from third-party claims arising from your breach of
        these Terms, unlawful use of the Website, or content you submit, including
        reasonable legal and defensive costs.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">10. Severability</h2>
      <p class="text-xl text-cream-darker">
        If any provision of these Terms is invalid, illegal, or unenforceable, the
        remaining provisions remain in full force. The invalid provision is replaced by
        a valid one that approaches the original economic intent as closely as legally
        possible.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">11. Governing law and jurisdiction</h2>
      <p class="text-xl text-cream-darker">
        These Terms and any non-contractual obligations are governed exclusively by
        Swiss substantive law, excluding its conflict-of-laws rules and the United
        Nations Convention on Contracts for the International Sale of Goods (CISG). The
        exclusive place of jurisdiction is Bern, Switzerland, subject to mandatory law
        provisions to the contrary.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">12. Contact</h2>
      <address class="not-italic text-xl text-cream-darker">
        {{ f.legalName }}<br>
        {{ f.address.street }}, {{ f.address.city }}, {{ f.address.country }}<br>
        General inquiries and legal:
        <a :href="`mailto:${f.email}`" class="text-red hover:underline">{{ f.email }}</a>
      </address>
    </section>
  </article>
</template>
