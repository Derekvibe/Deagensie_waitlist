import { defineEventHandler, readBody, createError } from 'h3';

interface WaitlistEntry {
  email: string;
  fullName?: string;
  role?: string;
  companyName?: string;
  need?: string;
  discipline?: string;
  portfolio?: string;
  phone?: string;
  createdAt: string;
}

const waitlistStore: WaitlistEntry[] = [];

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body || typeof body !== 'object') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid request body',
    });
  }

  // Honeypot spam trap
  if (body.website) {
    return { success: true };
  }

  const email = (body.email || '').toString().trim().toLowerCase();
  const fullName = (body.fullName || '').toString().trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Please enter a valid email address.',
      data: {
        fieldErrors: {
          email: 'Please enter a valid email address, like name@company.com.',
        },
      },
    });
  }

  const existing = waitlistStore.find((entry) => entry.email === email);
  if (existing) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Email already on waitlist',
    });
  }

  const newEntry: WaitlistEntry = {
    email,
    fullName,
    role: body.role || 'venture',
    companyName: body.companyName || '',
    need: body.need || '',
    discipline: body.discipline || '',
    portfolio: body.portfolio || '',
    phone: body.phone || '',
    createdAt: new Date().toISOString(),
  };

  waitlistStore.push(newEntry);

  return {
    success: true,
    email,
    fullName: newEntry.fullName,
    message: "You're on the waitlist.",
  };
});
