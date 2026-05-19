<script setup lang="ts">
import { site } from '~/data/site'

useHead({ title: `Privacy Policy — ${site.name}` })

const f = site.foundation
</script>

<template>
  <article class="container-narrow space-y-50 py-100 lg:py-150">
    <header class="space-y-16">
      <UiEyebrow>Privacy</UiEyebrow>
      <h1 class="text-3xl text-black lg:text-4xl">Privacy Policy</h1>
      <p class="font-mono text-base text-cream-darker">
        Last updated: {{ site.legal.lastUpdated }}
      </p>
    </header>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">1. Controller</h2>
      <address class="not-italic text-xl text-cream-darker">
        {{ f.legalName }} ({{ f.name }})<br>
        {{ f.address.street }}<br>
        {{ f.address.city }}<br>
        {{ f.address.country }}<br>
        Data-protection contact:
        <a :href="`mailto:${f.email}`" class="text-red hover:underline">{{ f.email }}</a>
      </address>
      <p class="text-xl text-cream-darker">
        The Foundation has not appointed a Data Protection Officer, as the statutory
        criteria are not met. No EU representative has been appointed under Article&nbsp;27
        GDPR, as the organisation processes EU personal data only occasionally and not on
        a large scale.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">2. Scope</h2>
      <p class="text-xl text-cream-darker">
        This policy explains how personal data is collected and processed when you visit
        {{ site.domain }} and the {{ site.name }} project website: the categories of data,
        the purposes and legal bases of processing, retention periods, recipients, and
        your rights.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">3. Processing principles</h2>
      <p class="text-xl text-cream-darker">
        Data processing follows the principles of lawfulness, good faith, proportionality,
        purpose limitation, data minimisation, accuracy, integrity, confidentiality, and
        transparency. Personal data is not sold.
      </p>
    </section>

    <section class="space-y-20">
      <h2 class="text-2xl text-black lg:text-3xl">4. Data categories, purposes, and legal bases</h2>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">4.1 Server log files</h3>
        <p class="text-xl text-cream-darker"><span class="font-bold">Data:</span> IP address, request date/time, accessed page, HTTP status code, data volume, referrer URL, browser type and version, operating system.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Purpose:</span> ensure technical operation, security, and stability; detect and prevent abuse; troubleshoot.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Legal basis:</span> FADP Art.&nbsp;6, 31(2)(c); GDPR Art.&nbsp;6(1)(f) — legitimate interest in secure operation.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Retention:</span> maximum 30&nbsp;days, extended only for the investigation of security incidents.</p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">4.2 Contact via email</h3>
        <p class="text-xl text-cream-darker"><span class="font-bold">Data:</span> name, email address, message content voluntarily provided.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Purpose:</span> answer inquiries, conduct correspondence, prepare and perform contracts.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Legal basis:</span> FADP Art.&nbsp;6, 31(2)(a)–(c); GDPR Art.&nbsp;6(1)(b), (a), (f).</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Retention:</span> for as long as necessary to handle the matter, plus statutory obligations (typically ten years under Swiss law).</p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">4.3 Newsletter and mailing lists</h3>
        <p class="text-xl text-cream-darker"><span class="font-bold">Data:</span> email address, optionally name.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Purpose:</span> send newsletters, with voluntary subscription via double opt-in.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Legal basis:</span> FADP Art.&nbsp;6(6)–(7); GDPR Art.&nbsp;6(1)(a) — consent.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Retention:</span> until consent is withdrawn; consent records are retained as compliance evidence.</p>
        <p class="text-xl text-cream-darker">
          <span class="font-bold">Unsubscribe:</span> via the link in each newsletter or by emailing
          <a :href="`mailto:${f.email}`" class="text-red hover:underline">{{ f.email }}</a>.
        </p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">4.4 Analytics</h3>
        <p class="text-xl text-cream-darker"><span class="font-bold">Service:</span> Matomo, self-hosted on Switzerland-based servers (no third-country transfers).</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Data:</span> anonymised IP address (after 24&nbsp;hours), page views, device information, referrer URL.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Purpose:</span> improve user experience and produce statistical analyses.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Legal basis:</span> FADP Art.&nbsp;6(6); GDPR Art.&nbsp;6(1)(f) — legitimate interest.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Retention:</span> 13&nbsp;months.</p>
        <p class="text-xl text-cream-darker"><span class="font-bold">Right to object:</span> an opt-out link is available in the website footer.</p>
      </div>

      <div class="space-y-8">
        <h3 class="text-xl font-bold text-black">4.5 Embedded third-party content</h3>
        <p class="text-xl text-cream-darker">
          This website may embed videos, fonts, or code repositories from third parties.
          When such content loads, providers may receive your IP address and technical
          metadata. Specific embedded services will be listed here once finalised.
        </p>
      </div>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">5. Cookies and similar technologies</h2>
      <p class="text-xl text-cream-darker">
        <span class="font-bold">Strictly necessary cookies</span> are required for basic
        website functioning (session, security, load balancing). They are based on
        GDPR Art.&nbsp;6(1)(f) / FADP Art.&nbsp;31(2)(c) and do not require consent.
      </p>
      <p class="text-xl text-cream-darker">
        <span class="font-bold">Optional cookies</span> (analytics, marketing, embedded
        media) require explicit, revocable consent under GDPR Art.&nbsp;6(1)(a) / FADP
        Art.&nbsp;6(6). You can manage consent through the cookie banner and your
        browser settings.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">6. Recipients and transfers abroad</h2>
      <p class="text-xl text-cream-darker">Data is shared only with necessary recipients:</p>
      <ul class="space-y-8 pl-24 text-xl text-cream-darker list-disc">
        <li>Hosting and content-delivery providers (under a Data Processing Agreement)</li>
        <li>IT service providers for maintenance, email, and security</li>
        <li>Auditor, legal counsel, and tax advisors (statutory compliance)</li>
        <li>Public authorities and courts (where required by law)</li>
      </ul>
      <p class="text-xl text-cream-darker">
        A list of sub-processors is available on request to
        <a :href="`mailto:${f.email}`" class="text-red hover:underline">{{ f.email }}</a>.
      </p>
      <p class="text-xl text-cream-darker">
        Third-country transfers take place only on the basis of adequacy decisions
        (FDPIC list, EU decisions, Swiss–US Data Privacy Framework, EU–US Data Privacy
        Framework), appropriate safeguards (FADP Art.&nbsp;16; GDPR Art.&nbsp;46 et seq.,
        including EU Standard Contractual Clauses with Swiss addendum), or applicable
        derogations (FADP Art.&nbsp;17; GDPR Art.&nbsp;49).
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">7. Data security</h2>
      <p class="text-xl text-cream-darker">
        Appropriate technical and organisational measures protect personal data per
        FADP Art.&nbsp;8 and GDPR Art.&nbsp;32, including encrypted transport
        (TLS/HTTPS), access controls, logging, regular review of safeguards, and
        contractual obligations on processors.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">8. Retention</h2>
      <p class="text-xl text-cream-darker">
        Data is retained only as long as necessary for the purposes for which it was
        collected, or as required by law. Section&nbsp;4 specifies operation-specific
        retention periods. Once they expire, data is deleted or irreversibly anonymised,
        except where overriding legal obligations apply (for example, accounting records
        under Articles&nbsp;957–958f of the Swiss Code of Obligations).
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">9. Your rights</h2>
      <p class="text-xl text-cream-darker">Subject to the conditions and limitations of applicable law, you have the right to:</p>
      <ul class="space-y-8 pl-24 text-xl text-cream-darker list-disc">
        <li>Information and access (FADP Art.&nbsp;25; GDPR Art.&nbsp;15)</li>
        <li>Rectification (FADP Art.&nbsp;32(1); GDPR Art.&nbsp;16)</li>
        <li>Erasure (FADP Art.&nbsp;32(2); GDPR Art.&nbsp;17)</li>
        <li>Restriction of processing (GDPR Art.&nbsp;18)</li>
        <li>Data portability (FADP Art.&nbsp;28; GDPR Art.&nbsp;20)</li>
        <li>Object to processing based on legitimate interest (FADP Art.&nbsp;30; GDPR Art.&nbsp;21)</li>
        <li>Withdraw consent at any time (FADP Art.&nbsp;6(6); GDPR Art.&nbsp;7(3))</li>
        <li>Not be subject to solely automated decisions with legal or similarly significant effects (FADP Art.&nbsp;21; GDPR Art.&nbsp;22) — the Foundation does not currently engage in such decision-making</li>
      </ul>
      <p class="text-xl text-cream-darker">
        To exercise your rights, write to
        <a :href="`mailto:${f.email}`" class="text-red hover:underline">{{ f.email }}</a>.
        Identity verification may be required. Responses are typically issued within
        30&nbsp;days (FADP) or one month (GDPR), extendable when justified.
      </p>
      <p class="text-xl text-cream-darker">
        You may lodge a complaint with a supervisory authority:
      </p>
      <ul class="space-y-8 pl-24 text-xl text-cream-darker list-disc">
        <li>
          <span class="font-bold">Switzerland:</span> Federal Data Protection and
          Information Commissioner (FDPIC/EDÖB), Feldeggweg&nbsp;1, 3003 Bern —
          <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" class="text-red hover:underline">www.edoeb.admin.ch</a>
        </li>
        <li>
          <span class="font-bold">EU/EEA:</span> the supervisory authority of your
          habitual residence, workplace, or the place of the alleged infringement.
        </li>
      </ul>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">10. Children</h2>
      <p class="text-xl text-cream-darker">
        This website is not directed at children. The Foundation does not knowingly
        collect data from persons under 16. If you believe such collection has occurred,
        please contact
        <a :href="`mailto:${f.email}`" class="text-red hover:underline">{{ f.email }}</a>.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">11. Automated decision-making</h2>
      <p class="text-xl text-cream-darker">
        The Foundation does not use automated decision-making or profiling that produces
        legal or similarly significant effects on data subjects.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">12. Changes to this policy</h2>
      <p class="text-xl text-cream-darker">
        This policy may be amended to reflect changes in processing activities or in the
        legal framework. The current version is always available at this URL with the
        effective date.
      </p>
    </section>

    <section class="space-y-12">
      <h2 class="text-2xl text-black lg:text-3xl">13. Contact</h2>
      <address class="not-italic text-xl text-cream-darker">
        {{ f.legalName }} — Data Protection<br>
        {{ f.address.street }}<br>
        {{ f.address.city }}<br>
        {{ f.address.country }}<br>
        Email:
        <a :href="`mailto:${f.email}`" class="text-red hover:underline">{{ f.email }}</a>
      </address>
    </section>
  </article>
</template>
