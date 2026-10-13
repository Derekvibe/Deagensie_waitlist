<script setup lang="ts">
const engines = [
  {
    audience: 'For ventures and businesses',
    title: "Venture's Growth Lab",
    summary:
      'A structured growth engine designed to help startups, high-growth companies, and enterprise initiatives define their direction, refine their identity, launch effective campaigns, and build digital platforms.',
    points: [
      {
        term: 'Strategy layer',
        detail: 'Business, market research, positioning and growth models.',
      },
      { term: 'Branding layer', detail: 'Brand strategy, naming, visual and verbal identity.' },
      {
        term: 'Marketing and platforms',
        detail: 'Go-to-market campaigns, web and AI digital infrastructure.',
      },
    ],
  },
  {
    audience: 'For creative talent',
    title: 'Talent-as-a-Service (TaaS)',
    summary:
      'A two-sided ecosystem connecting world-class creative talent with high-impact global opportunities, powered by predictive AI signaling to match capability with requirements.',
    points: [
      {
        term: 'For creatives',
        detail: 'Profile creation, AI matching, global work and career growth.',
      },
      {
        term: 'For businesses',
        detail: 'Requirements definition, AI matching and embedded teams.',
      },
      { term: 'Self-learning flywheel', detail: 'Matching that keeps improving as it is used.' },
    ],
  },
];
</script>

<template>
  <section class="bg-[#020B1E] py-20 text-white lg:py-28">
    <div class="mx-auto w-5/6 max-w-7xl">
      <div v-reveal="'fade-up'" class="mx-auto max-w-4xl space-y-4 text-center">
        <h2 class="font-prata text-3xl leading-tight font-normal sm:text-4xl lg:text-5xl">
          Two engines. One ecosystem.
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-white/80">
          The future of business growth isn't just about having a great idea or finding great
          talent. It's about connecting both.
        </p>
      </div>

      <div
        class="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-white/15"
      >
        <article
          v-for="(engine, index) in engines"
          :key="engine.title"
          :class="index === 0 ? 'lg:pr-14' : 'lg:pl-14'"
        >
          <p class="text-base font-semibold text-[#05DED5]">{{ engine.audience }}</p>
          <h3 class="font-prata mt-3 text-2xl font-normal sm:text-3xl">{{ engine.title }}</h3>
          <p class="mt-4 max-w-xl leading-relaxed text-white/80">{{ engine.summary }}</p>

          <dl class="mt-8 max-w-xl divide-y divide-white/15 border-y border-white/15">
            <div
              v-for="point in engine.points"
              :key="point.term"
              class="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
            >
              <dt class="font-semibold">{{ point.term }}</dt>
              <dd class="text-white/75">{{ point.detail }}</dd>
            </div>
          </dl>
        </article>
      </div>
    </div>
  </section>
</template>
