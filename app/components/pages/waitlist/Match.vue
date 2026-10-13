<script setup lang="ts">
const lab = ['Strategy', 'Branding', 'Marketing', 'Digital Platforms'];
const taas = ['For Creatives', 'For Businesses', 'Self-learning flywheel'];
</script>

<template>
  <!-- Decorative summary of the two engines. The same content is read in full below. -->
  <div class="match rounded-3xl bg-[#F4F7FB] p-5 sm:p-8" aria-hidden="true">
    <div class="rounded-2xl border border-gray-200 bg-white p-6">
      <p class="font-prata text-xl text-[#020B1E]">Venture's Growth Lab</p>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="item in lab"
          :key="item"
          class="rounded-full border border-[#04308F]/25 px-3 py-1 text-sm text-[#04308F]"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col items-center py-1">
      <span class="match-seg match-seg-a h-10 w-0.5 bg-[#04308F]" />
      <span
        class="match-pill inline-flex items-center gap-2 rounded-full bg-[#020B1E] px-4 py-2 text-sm font-semibold text-white"
      >
        <span class="size-2 rounded-full bg-[#05DED5]" />
        Predictive AI Matching
      </span>
      <span class="match-seg match-seg-b h-10 w-0.5 bg-[#05DED5]" />
    </div>

    <div class="rounded-2xl border border-gray-200 bg-white p-6">
      <p class="font-prata text-xl text-[#020B1E]">Talent-as-a-Service (TaaS)</p>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="item in taas"
          :key="item"
          class="rounded-full border border-[#020B1E]/20 px-3 py-1 text-sm text-[#020B1E]"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* The one animated moment on the page: the line connecting both engines draws once on load. */
.match-seg {
  transform-origin: top;
  animation: match-draw 0.7s cubic-bezier(0.65, 0, 0.35, 1) both;
}
.match-seg-a {
  animation-delay: 0.35s;
}
.match-seg-b {
  animation-delay: 1.35s;
}
.match-pill {
  animation: match-pop 0.45s ease-out 1.05s both;
}

@keyframes match-draw {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
@keyframes match-pop {
  from {
    opacity: 0;
    transform: scale(0.94);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .match-seg,
  .match-pill {
    animation: none;
  }
}
</style>
