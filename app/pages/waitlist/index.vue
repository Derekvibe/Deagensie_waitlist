<script setup lang="ts">
// Title and description come from app/utils/page-seo.ts so every route is managed in one place.
const origin = useRequestURL().origin;
const shareImage = `${origin}/images/pages/(home)/hero.webp`;

useSeoMeta({
  ogUrl: `${origin}/waitlist`,
  ogImage: shareImage,
  twitterImage: shareImage,
});

useHead({
  link: [{ rel: 'canonical', href: `${origin}/waitlist` }],
});
</script>

<template>
  <main>
    <PagesWaitlist0 />
    <PagesWaitlist1 />
    <PagesWaitlist2 />
  </main>
</template>
