<template>
  <section class="bg-white pt-32 pb-20 lg:pt-44 lg:pb-28">
    <div
      class="mx-auto grid w-5/6 max-w-7xl items-start gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20"
    >
      <div>
        <h1
          class="mx-auto w-full max-w-3xl text-center font-serif text-2xl leading-tight font-normal tracking-tight text-gray-900 sm:text-4xl lg:text-5xl 2xl:text-6xl"
        >
          Build What's Next.<br />
          <span class="text-[#04308F]">Find Who's Next.</span>
        </h1>
        <p class="mt-7 max-w-xl text-lg leading-relaxed text-gray-600">
          Deagensie helps ventures build the systems they need to grow, and connects exceptional
          creative talent to the opportunities where they can thrive.
        </p>
        <p class="mt-4 max-w-xl text-lg leading-relaxed font-semibold text-[#020B1E]">
          Join the waitlist to be among the first to use
          <span class="text-[#04308F]">Venture's Growth Lab </span> and
          <span class="text-[#04308F]">Talent-as-a-Service.</span>
        </p>
        <div class="mt-9 max-w-xl">
          <PagesWaitlistForm id-prefix="hero" />
        </div>
      </div>

      <PagesWaitlistMatch class="mx-auto w-full max-w-lg lg:max-w-none" />
    </div>
  </section>
</template>
