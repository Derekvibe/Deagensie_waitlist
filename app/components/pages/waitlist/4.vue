<template>
  <section class="bg-[#04308F] py-20 text-white lg:py-28">
    <div class="mx-auto grid w-5/6 max-w-7xl gap-12 lg:grid-cols-2 lg:items-end lg:gap-20">
      <div>
        <h2 class="font-prata text-3xl leading-tight font-normal sm:text-4xl lg:text-5xl">
          Join the waitlist for Deagensie.
        </h2>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
          Be among the first to use Venture's Growth Lab and Talent-as-a-Service, whether you are
          building a venture or looking for your next opportunity.
        </p>
      </div>

      <div class="max-w-xl">
        <PagesWaitlistForm id-prefix="cta" tone="dark" />
        <p class="mt-8 text-white/85">
          Want to talk first?
          <a
            href="mailto:contact@deagensie.com"
            class="font-semibold text-white underline underline-offset-4 hover:text-[#05DED5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Contact the Deagensie team
          </a>
        </p>
      </div>
    </div>
  </section>
</template>
