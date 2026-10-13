<script setup lang="ts">
import { Icon } from '@iconify/vue';

withDefaults(defineProps<{ idPrefix?: string; tone?: 'light' | 'dark' }>(), {
  idPrefix: 'main',
  tone: 'light',
});

const { status, joinedEmail, joinedName, submit } = useWaitlist();

const role = ref<'venture' | 'creative'>('venture');
const fullName = ref('');
const email = ref('');
const phone = ref('');
const companyName = ref('');
const ventureNeed = ref('Growth Strategy & Positioning');
const discipline = ref('UI/UX & Product Design');
const portfolio = ref('');
const honeypot = ref('');

const fieldErrors = ref<Record<string, string>>({});
const submitError = ref('');

const ventureNeedOptions = [
  'Growth Strategy & Positioning',
  'Branding & Visual Identity',
  'Digital Platforms & AI Infrastructure',
  'Deploy On-Demand Creative Squad (TaaS)',
];

const disciplineOptions = [
  'UI/UX & Product Design',
  'Full-Stack / Frontend Engineering',
  'Brand & Motion Design',
  'AI & Creative Technology',
  'Growth Marketing & Strategy',
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(): boolean {
  fieldErrors.value = {};
  submitError.value = '';

  if (!fullName.value.trim()) {
    fieldErrors.value.fullName = 'Please enter your full name.';
  }

  const emailVal = email.value.trim().toLowerCase();
  if (!emailVal) {
    fieldErrors.value.email = 'Please enter your email address.';
  } else if (!emailPattern.test(emailVal)) {
    fieldErrors.value.email = 'Enter a valid email address, like name@company.com.';
  }

  if (role.value === 'venture' && !companyName.value.trim()) {
    fieldErrors.value.companyName = 'Please enter your company or venture name.';
  }

  return Object.keys(fieldErrors.value).length === 0;
}

async function onSubmit() {
  if (status.value === 'submitting') return;

  if (!validate()) return;
  if (honeypot.value) return; // Silent drop for bots

  const result = await submit({
    fullName: fullName.value.trim(),
    email: email.value.trim().toLowerCase(),
    role: role.value,
    companyName: role.value === 'venture' ? companyName.value.trim() : undefined,
    need: role.value === 'venture' ? ventureNeed.value : undefined,
    discipline: role.value === 'creative' ? discipline.value : undefined,
    portfolio: role.value === 'creative' ? portfolio.value.trim() : undefined,
    phone: phone.value.trim() || undefined,
  });

  if (!result.ok) {
    submitError.value = result.message;
  }
}

function clearError(field: string) {
  if (fieldErrors.value[field]) {
    const { [field]: _removed, ...rest } = fieldErrors.value;
    fieldErrors.value = rest;
  }
  if (submitError.value) {
    submitError.value = '';
  }
}
</script>

<template>
  <div>
    <!-- ============================================================== -->
    <!-- SUCCESS CONFIRMATION STATE                                     -->
    <!-- ============================================================== -->
    <div
      v-if="status === 'success'"
      role="status"
      class="flex items-start gap-4 rounded-2xl border border-gray-200 bg-[#F4F7FB] p-6 text-[#020B1E]"
    >
      <span
        class="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#05DED5] text-[#020B1E] shadow-sm"
      >
        <svg
          viewBox="0 0 24 24"
          class="size-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      </span>
      <div class="space-y-1">
        <p class="font-prata text-2xl leading-snug">You're on the waitlist.</p>
        <p class="text-sm leading-relaxed text-gray-600">
          We'll email
          <span class="font-semibold break-all text-[#020B1E]">{{ joinedEmail }}</span> when early
          access opens.
        </p>
        <p v-if="joinedName" class="pt-1 text-xs text-gray-500">
          Thank you, <span class="font-medium text-[#020B1E]">{{ joinedName }}</span
          >. Your priority spot has been reserved.
        </p>
      </div>
    </div>

    <!-- ============================================================== -->
    <!-- THE MAIN WAITLIST FORM                                         -->
    <!-- ============================================================== -->
    <form
      v-else
      novalidate
      class="space-y-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7"
      @submit.prevent="onSubmit"
    >
      <!-- Role Selector -->
      <div>
        <label class="mb-2 block text-xs font-semibold tracking-wider text-gray-700 uppercase">
          I am joining as:
        </label>
        <div class="grid grid-cols-2 gap-3">
          <button
            type="button"
            class="flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition-all duration-200"
            :class="
              role === 'venture'
                ? 'border-[#04308F] bg-[#04308F] text-white shadow-sm'
                : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
            "
            @click="role = 'venture'"
          >
            <Icon icon="solar:buildings-2-bold" class="size-4" />
            Venture / Business
          </button>

          <button
            type="button"
            class="flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition-all duration-200"
            :class="
              role === 'creative'
                ? 'border-[#04308F] bg-[#04308F] text-white shadow-sm'
                : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
            "
            @click="role = 'creative'"
          >
            <Icon icon="solar:palette-bold" class="size-4" />
            Creative Talent
          </button>
        </div>
      </div>

      <!-- Core Inputs: Full Name & Email -->
      <div class="grid gap-4 sm:grid-cols-2">
        <div>
          <label for="wl-fullName" class="mb-1.5 block text-xs font-semibold text-[#020B1E]">
            Full name <span class="text-red-500">*</span>
          </label>
          <input
            id="wl-fullName"
            v-model="fullName"
            type="text"
            autocomplete="name"
            placeholder="e.g. Alex Adeyemi"
            :disabled="status === 'submitting'"
            class="h-12 w-full rounded-xl border px-4 text-sm text-[#020B1E] placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-[#04308F]"
            :class="
              fieldErrors.fullName ? 'border-red-500 bg-red-50/30' : 'border-gray-300 bg-white'
            "
            @input="clearError('fullName')"
          />
          <p v-if="fieldErrors.fullName" class="mt-1 text-xs text-red-600">
            {{ fieldErrors.fullName }}
          </p>
        </div>

        <div>
          <label for="wl-email" class="mb-1.5 block text-xs font-semibold text-[#020B1E]">
            Email address <span class="text-red-500">*</span>
          </label>
          <input
            id="wl-email"
            v-model="email"
            type="email"
            inputmode="email"
            autocomplete="email"
            placeholder="name@company.com"
            :disabled="status === 'submitting'"
            class="h-12 w-full rounded-xl border px-4 text-sm text-[#020B1E] placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-[#04308F]"
            :class="fieldErrors.email ? 'border-red-500 bg-red-50/30' : 'border-gray-300 bg-white'"
            @input="clearError('email')"
          />
          <p v-if="fieldErrors.email" class="mt-1 text-xs text-red-600">
            {{ fieldErrors.email }}
          </p>
        </div>
      </div>

      <!-- Dynamic Role-Specific Inputs -->
      <!-- VENTURE SPECIFIC -->
      <div v-if="role === 'venture'" class="grid gap-4 sm:grid-cols-2">
        <div>
          <label for="wl-companyName" class="mb-1.5 block text-xs font-semibold text-[#020B1E]">
            Company / Venture name <span class="text-red-500">*</span>
          </label>
          <input
            id="wl-companyName"
            v-model="companyName"
            type="text"
            placeholder="e.g. Apex HealthTech"
            :disabled="status === 'submitting'"
            class="h-12 w-full rounded-xl border px-4 text-sm text-[#020B1E] placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-[#04308F]"
            :class="
              fieldErrors.companyName ? 'border-red-500 bg-red-50/30' : 'border-gray-300 bg-white'
            "
            @input="clearError('companyName')"
          />
          <p v-if="fieldErrors.companyName" class="mt-1 text-xs text-red-600">
            {{ fieldErrors.companyName }}
          </p>
        </div>

        <div>
          <label for="wl-ventureNeed" class="mb-1.5 block text-xs font-semibold text-[#020B1E]">
            Primary venture need
          </label>
          <select
            id="wl-ventureNeed"
            v-model="ventureNeed"
            :disabled="status === 'submitting'"
            class="h-12 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm text-[#020B1E] focus-visible:outline-2 focus-visible:outline-[#04308F]"
          >
            <option v-for="opt in ventureNeedOptions" :key="opt" :value="opt">
              {{ opt }}
            </option>
          </select>
        </div>
      </div>

      <!-- CREATIVE SPECIFIC -->
      <div v-else class="grid gap-4 sm:grid-cols-2">
        <div>
          <label for="wl-discipline" class="mb-1.5 block text-xs font-semibold text-[#020B1E]">
            Primary craft / discipline
          </label>
          <select
            id="wl-discipline"
            v-model="discipline"
            :disabled="status === 'submitting'"
            class="h-12 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm text-[#020B1E] focus-visible:outline-2 focus-visible:outline-[#04308F]"
          >
            <option v-for="opt in disciplineOptions" :key="opt" :value="opt">
              {{ opt }}
            </option>
          </select>
        </div>

        <div>
          <label for="wl-portfolio" class="mb-1.5 block text-xs font-semibold text-[#020B1E]">
            Portfolio / LinkedIn URL <span class="text-gray-400">(Optional)</span>
          </label>
          <input
            id="wl-portfolio"
            v-model="portfolio"
            type="url"
            placeholder="https://behance.net/... or linkedin.com/in/..."
            :disabled="status === 'submitting'"
            class="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-[#020B1E] placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-[#04308F]"
          />
        </div>
      </div>

      <!-- Optional Phone -->
      <div>
        <label for="wl-phone" class="mb-1.5 block text-xs font-semibold text-[#020B1E]">
          Phone number <span class="text-gray-400">(Optional)</span>
        </label>
        <input
          id="wl-phone"
          v-model="phone"
          type="tel"
          placeholder="+234 800 000 0000"
          :disabled="status === 'submitting'"
          class="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-[#020B1E] placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-[#04308F]"
        />
      </div>

      <!-- Honeypot anti-spam trap -->
      <div class="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
        </label>
      </div>

      <!-- Submit Error Alert -->
      <p v-if="submitError" role="alert" class="text-xs font-medium text-red-600">
        {{ submitError }}
      </p>

      <!-- Submit Action Button -->
      <div class="pt-2">
        <button
          type="submit"
          :disabled="status === 'submitting'"
          :aria-busy="status === 'submitting'"
          class="inline-flex h-13 w-full items-center justify-center gap-3 rounded-full bg-[#04308F] px-8 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#020B1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04308F] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span
            v-if="status === 'submitting'"
            class="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
          {{ status === 'submitting' ? 'Joining…' : 'Join the waitlist' }}
        </button>

        <p class="mt-3 text-center text-xs text-gray-500">
          We'll use your details only to tell you when early access opens.
        </p>
      </div>
    </form>
  </div>
</template>
