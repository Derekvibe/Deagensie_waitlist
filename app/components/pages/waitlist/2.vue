<script setup lang="ts">
const phases = [
  { name: 'Discover and Strategize', detail: 'Research and position the venture.' },
  { name: 'Brand and Market', detail: 'Build the identity and run the campaigns.' },
  { name: 'Build and Grow', detail: 'Launch digital platforms and scale with talent.' },
];
</script>

<template>
  <section class="bg-[#F4F7FB] py-20 lg:py-28">
    <div class="mx-auto w-5/6 max-w-7xl">
      <div v-reveal="'fade-up'" class="mx-auto max-w-4xl space-y-4 text-center">
        <h2
          class="mx-auto w-full max-w-3xl text-center font-serif text-2xl leading-tight font-normal tracking-tight text-gray-900 sm:text-4xl lg:text-5xl 2xl:text-6xl"
        >
          From vision to <br />
          <span class="text-[#04308F]">market leadership</span>
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-gray-600">
          Whether you are at ideation, early stage, growth stage or enterprise transformation,
          Deagensie guides ventures through a six-step roadmap: discover, strategize, brand, market,
          build and grow.
        </p>
      </div>

      <ol class="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        <li
          v-for="(phase, index) in phases"
          :key="phase.name"
          class="border-t-2 pt-6"
          :class="
            index === 1 ? 'border-[#04308F]' : index === 2 ? 'border-[#05DED5]' : 'border-[#020B1E]'
          "
        >
          <p class="text-sm font-semibold text-gray-600">Phase {{ index + 1 }}</p>
          <h3 class="font-prata mt-2 text-2xl font-normal text-[#020B1E]">{{ phase.name }}</h3>
          <p class="mt-3 leading-relaxed text-gray-600">{{ phase.detail }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
