import { normalizeApiError } from '~/utils/api-errors';

type WaitlistStatus = 'idle' | 'submitting' | 'success';

export type SubmitResult = { ok: true; message?: string } | { ok: false; message: string };

const WAITLIST_PATH = '/waitlist';

export interface WaitlistFormData {
  fullName?: string;
  email: string;
  role?: 'venture' | 'creative';
  companyName?: string;
  need?: string;
  discipline?: string;
  portfolio?: string;
  phone?: string;
  website?: string;
}

function messageFor(error: unknown): string {
  const failure = normalizeApiError(error);

  if (failure.fieldErrors.email) return failure.fieldErrors.email;
  if (!failure.status) return 'We could not reach the server. Check your connection and try again.';
  if ([404, 405, 501].includes(failure.status)) {
    return 'The waitlist is not accepting signups yet. Please try again later.';
  }
  if (failure.status === 429) return 'Too many attempts. Wait a minute, then try again.';

  const apiMessage = (failure.raw as { error?: unknown } | undefined)?.error;
  return typeof apiMessage === 'string' && apiMessage
    ? apiMessage
    : 'We could not save your submission. Please try again.';
}

export function useWaitlist() {
  const { $api } = useNuxtApp();
  const status = useState<WaitlistStatus>('waitlist:status', () => 'idle');
  const joinedEmail = useState<string>('waitlist:email', () => '');
  const joinedName = useState<string>('waitlist:name', () => '');

  async function submit(data: string | WaitlistFormData): Promise<SubmitResult> {
    const payload: WaitlistFormData = typeof data === 'string' ? { email: data } : data;
    const email = payload.email.trim().toLowerCase();

    if (status.value === 'submitting') {
      return { ok: false, message: 'Your request is still sending.' };
    }
    if (status.value === 'success' && joinedEmail.value === email) return { ok: true };

    status.value = 'submitting';

    try {
      await $api(WAITLIST_PATH, {
        method: 'POST',
        body: { ...payload, email, source: 'waitlist-page' },
      });
      joinedEmail.value = email;
      joinedName.value = payload.fullName || '';
      status.value = 'success';
      return { ok: true };
    } catch (error) {
      const failure = normalizeApiError(error);

      // The address is already saved. Treat it as joined rather than as an error.
      if (failure.status === 409) {
        joinedEmail.value = email;
        joinedName.value = payload.fullName || '';
        status.value = 'success';
        return { ok: true };
      }

      status.value = 'idle';
      return { ok: false, message: messageFor(error) };
    }
  }

  return { status, joinedEmail, joinedName, submit };
}
