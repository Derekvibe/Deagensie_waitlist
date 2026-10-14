<script setup lang="ts">
import { Icon } from '@iconify/vue';

const route = useRoute();
const pageSeo = computed(() => getPageSeo(route));

useHead({
  title: () => pageSeo.value.title,
  meta: [
    { name: 'description', content: () => pageSeo.value.description },
    { property: 'og:title', content: () => pageSeo.value.title },
    { property: 'og:description', content: () => pageSeo.value.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Deagensie' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => pageSeo.value.title },
    { name: 'twitter:description', content: () => pageSeo.value.description },
  ],
});
</script>

<template>
  <TooltipProvider class="overflow-x-hidden">
    <Notivue v-slot="item">
      <NotivueSwipe :item="item">
        <Notification :item="item">
          <NotificationProgress :item="item" />
        </Notification>
      </NotivueSwipe>
    </Notivue>
    <SiteHeader />
    <NuxtPage />
    <footer class="border-t border-white/10 bg-[#020B1E] py-16 text-white lg:pt-24 lg:pb-12">
      <div
        class="mx-auto flex w-5/6 max-w-7xl flex-col gap-12 lg:grid lg:grid-cols-[1.2fr_2fr] lg:gap-16"
      >
        <div class="space-y-6">
          <NuxtLink
            to="https://test-deagensie.vercel.app/"
            aria-label="Deagensie logo"
            class="-my-4 -ml-4 inline-block sm:-my-4.5 sm:-ml-4 lg:-my-5 lg:-ml-4.5 xl:-my-6 xl:-ml-5.5"
          >
            <NuxtImg
              src="/images/logo.png"
              alt="Deagensie logo"
              class="h-28 w-auto object-contain transition-all duration-300 sm:h-30 lg:h-32 xl:h-36"
            />
          </NuxtLink>
          <p class="max-w-md text-sm leading-relaxed text-gray-300 sm:text-base">
            AI-led. Ecosystem-driven. Built for Growth. Where ventures grow and creative talent goes
            global.
          </p>
          <div class="flex items-center gap-4 text-2xl text-gray-300">
            <NuxtLink
              to="https://www.linkedin.com/company/deagensie"
              class="transition-all duration-300 hover:scale-110 hover:text-[#05DED5]"
              aria-label="LinkedIn"
            >
              <Icon icon="ri:linkedin-fill" />
            </NuxtLink>
            <NuxtLink
              to="https://www.instagram.com/deagensie?mdxt=NDR1bmhhaGVic3g1"
              class="transition-all duration-300 hover:scale-110 hover:text-[#05DED5]"
              aria-label="Instagram"
            >
              <Icon icon="ri:instagram-fill" />
            </NuxtLink>

            <NuxtLink
              to="https://www.tiktok.com/@deagensie?_r=1&_t=ZS-9AWQfn1Vio3"
              class="transition-all duration-300 hover:scale-110 hover:text-[#05DED5]"
              aria-label="TikTok"
            >
              <Icon icon="akar-icons:tiktok-fill" />
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 lg:gap-6">
          <div class="flex flex-col gap-3 text-sm">
            <h3 class="mb-2 text-base font-bold tracking-wider text-white uppercase">Growth Lab</h3>
            <NuxtLink
              to="/business"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Overview</NuxtLink
            >
            <NuxtLink class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Strategy</NuxtLink
            >
            <NuxtLink class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Branding</NuxtLink
            >
            <NuxtLink class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Marketing</NuxtLink
            >
            <NuxtLink class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Digital Platforms</NuxtLink
            >
          </div>

          <div class="flex flex-col gap-3 text-sm">
            <h3 class="mb-2 text-base font-bold tracking-wider text-white uppercase">TaaS</h3>
            <NuxtLink
              to="/creatives"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Find Talent</NuxtLink
            >
            <NuxtLink class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Find Opportunities</NuxtLink
            >
            <NuxtLink class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >AI Matching Engine</NuxtLink
            >
            <NuxtLink class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Creative Careers</NuxtLink
            >
          </div>

          <div class="flex flex-col gap-3 text-sm">
            <h3 class="mb-2 text-base font-bold tracking-wider text-white uppercase">Company</h3>
            <NuxtLink
              to="/about"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >About Us</NuxtLink
            >
            <NuxtLink
              to="/why"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Why Deagensie</NuxtLink
            >
            <NuxtLink
              to="/portfolio"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Our Work</NuxtLink
            >
            <NuxtLink
              to="/resource"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Resources</NuxtLink
            >
            <NuxtLink
              to="/contact"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Contact Us</NuxtLink
            >
          </div>

          <div class="flex flex-col gap-3 text-sm">
            <h3 class="mb-2 text-base font-bold tracking-wider text-white uppercase">Legal</h3>
            <NuxtLink
              to="https://test-deagensie.vercel.app/privacy"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Privacy Policy</NuxtLink
            >
            <NuxtLink
              to="https://test-deagensie.vercel.app/terms"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Terms and Conditions</NuxtLink
            >
            <NuxtLink
              to="https://test-deagensie.vercel.app/cookies"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 transition-colors duration-200 hover:text-[#05DED5]"
              >Cookie Policy</NuxtLink
            >
          </div>
        </div>
      </div>

      <div
        class="mx-auto mt-12 flex w-5/6 max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-gray-400 sm:flex-row"
      >
        <p>&copy; 2026 Deagensie. All rights reserved.</p>
        <div class="flex gap-6">
          <NuxtLink
            to="https://test-deagensie.vercel.app/privacy"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors duration-200 hover:text-white"
            >Privacy Policy</NuxtLink
          >
          <NuxtLink
            to="https://test-deagensie.vercel.app/terms"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors duration-200 hover:text-white"
            >Terms and Conditions</NuxtLink
          >
          <NuxtLink
            to="https://test-deagensie.vercel.app/cookies"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors duration-200 hover:text-white"
            >Cookie Policy</NuxtLink
          >
        </div>
      </div>
    </footer>
    <BackToTop />
  </TooltipProvider>
</template>
