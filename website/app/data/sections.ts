import { site } from './site'

export type CtaVariant = 'primary' | 'secondary' | 'tertiary'

export type Cta = {
  label: string
  href: string
  variant?: CtaVariant
  external?: boolean
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. Hero — page top, no anchor id (sits above #problem)
// ─────────────────────────────────────────────────────────────────────────────
export const hero = {
  title: site.name,
  tagline: site.tagline,
  body: site.description,
  ctas: [] satisfies Cta[],
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Problem
// ─────────────────────────────────────────────────────────────────────────────
export const problem = {
  id: 'problem',
  eyebrow: 'Problem',
  statements: [
    'Healthcare is fragmented.',
    'Data infrastructure lacks interoperability.',
    'Digital twin implementations are built in isolation.',
  ],
  conclusion: 'OpenTwin provides the missing foundation.',
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. Positioning — What OpenTwin is (and is not)
// ─────────────────────────────────────────────────────────────────────────────
export const positioning = {
  id: 'positioning',
  eyebrow: 'Positioning',
  title: 'What OpenTwin is (and is not)',
  rows: [
    { isNot: 'Not a product',                is: 'provides open standards and protocols' },
    { isNot: 'Not a data platform',          is: 'provides validation layer' },
    { isNot: 'Not a healthcare application', is: 'provides reference implementations' },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. How OpenTwin works — three pillars
// ─────────────────────────────────────────────────────────────────────────────
export const howItWorks = {
  id: 'how-it-works',
  eyebrow: 'How it works',
  title: 'How OpenTwin works',
  pillars: [
    {
      title: 'Data Sources',
      body:
        'Data remains where it is generated: in clinical, research, or pilot environments. ' +
        'OpenTwin does not centralize or store raw health data.',
    },
    {
      title: 'Open Building Blocks',
      body:
        'Standards, protocols, and reference pipelines define how digital twins are built, ' +
        'executed, and compared in a transparent and reproducible way.',
    },
    {
      title: 'Validated Outputs',
      body:
        'Digital twins are validated against shared benchmarks, enabling comparability, ' +
        'reproducibility, and real-world deployment.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. Get started — four steps + CTA
// ─────────────────────────────────────────────────────────────────────────────
export const getStarted = {
  id: 'get-started',
  eyebrow: 'Get started',
  intro: 'Explore the OpenTwin ecosystem and bring your first digital twin to life.',
  steps: [
    'Define your data interfaces',
    'Run a reference pipeline',
    'Validate against shared benchmarks',
    'Generate interoperable outputs',
  ],
  cta: { label: 'Start building', href: site.repoUrl, variant: 'primary', external: true } satisfies Cta,
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. Applications — Digital twins in action
// ─────────────────────────────────────────────────────────────────────────────
export type ApplicationStatus = 'active' | 'upcoming' | 'placeholder'

export type Application = {
  title: string
  body: string
  status: ApplicationStatus
  url: string | null
}

export const applications = {
  id: 'implementations',
  eyebrow: 'Implementations',
  title: 'Digital twins in action',
  intro: 'OpenTwin enables validated digital twin implementations across research and clinical environments.',
  items: [
    {
      title: 'VuseXR',
      body: 'Project description coming soon.',
      status: 'active',
      url: 'https://www.vuse-xr.de',
    },
    {
      title: 'OpenTwin Hub @ Etherlaken',
      body: 'Coming soon.',
      status: 'upcoming',
      url: null,
    },
    {
      title: 'More pilots',
      body: 'Real-world examples and pilots to be added.',
      status: 'placeholder',
      url: null,
    },
  ] satisfies Application[],
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. Contribute
// ─────────────────────────────────────────────────────────────────────────────
export const contribute = {
  id: 'contribute',
  eyebrow: 'Contribute',
  title: 'Contribute to OpenTwin',
  intro: 'OpenTwin is developed openly and collaboratively.',
  body: 'Contribute to standards, pipelines, and validation methods.',
  cta: { label: 'View on GitHub', href: site.repoUrl, variant: 'primary', external: true } satisfies Cta,
  // TBD: whether to embed a live GitHub activity module (commits/issues/contributors feed).
  showGithubLiveModule: false,
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. About — foundation + paper reference
// ─────────────────────────────────────────────────────────────────────────────
export const about = {
  id: 'about',
  eyebrow: 'About',
  paragraphs: [
    'OpenTwin is grounded in the concept of an open twin ecosystem, as outlined in Wilkening & Etzrodt 2026, which connects data infrastructures, models, and governance frameworks to enable scalable and trustworthy digital twins in medicine.',
    'The initiative is supported by the Open Science Foundation, advancing open science standards for predictive, preventive, personalized, and participatory healthcare.',
  ],
}
