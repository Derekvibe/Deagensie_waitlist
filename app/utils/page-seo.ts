import type { RouteLocationNormalizedLoaded } from 'vue-router';

interface PageSeo {
  title: string;
  description: string;
}

const siteName = 'Deagensie';

const staticPageSeo: Record<string, PageSeo> = {
  '/': {
    title: 'Join the Waitlist | Deagensie Early Access',
    description:
      "Join the Deagensie waitlist to be among the first to use Venture's Growth Lab and Talent-as-a-Service, the predictive AI talent matching engine.",
  },
  '/waitlist': {
    title: 'Join the Waitlist | Deagensie Early Access',
    description:
      "Join the Deagensie waitlist to be among the first to use Venture's Growth Lab and Talent-as-a-Service, the predictive AI talent matching engine.",
  },
};

function titleCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function paramLabel(param: RouteLocationNormalizedLoaded['params'][string] | undefined) {
  return titleCase(String(Array.isArray(param) ? param[0] || '' : param || ''));
}

export function getPageSeo(route: RouteLocationNormalizedLoaded): PageSeo {
  const path = route.path.replace(/\/$/, '') || '/';
  const staticSeo = staticPageSeo[path];

  if (staticSeo) return staticSeo;

  if (path.startsWith('/register/')) {
    const type = paramLabel(route.params.type);
    const step = paramLabel(route.params.step);

    if (path.endsWith('/success')) {
      return {
        title: `${type} Registration Received | ${siteName}`,
        description:
          'Your Deagensie registration has been received. Our team will review your details and follow up with next steps.',
      };
    }

    return {
      title: step
        ? `${type} Registration: ${step} | ${siteName}`
        : `${type} Registration | ${siteName}`,
      description:
        'Complete your Deagensie registration so our team can understand your goals and guide the next step.',
    };
  }

  if (path.startsWith('/subscription/')) {
    const plan = paramLabel(route.params.plan);
    const code = paramLabel(route.params.code);

    if (path.includes('/checkout')) {
      return {
        title: `${plan || code} Checkout | ${siteName}`,
        description:
          'Complete your Deagensie subscription checkout and confirm your selected growth support plan.',
      };
    }

    if (path.includes('/request/received')) {
      return {
        title: 'Request Received | Deagensie',
        description:
          'Your tailored solution request has been received. Deagensie will review it and follow up with a proposal.',
      };
    }

    if (path.includes('/request')) {
      return {
        title: `${plan || code} Request | ${siteName}`,
        description:
          'Share your business needs with Deagensie so we can prepare a tailored solution for your team.',
      };
    }

    return {
      title: plan ? `${plan} | ${siteName}` : `${code || 'Subscription'} | ${siteName}`,
      description:
        'Review Deagensie subscription details, benefits, and plan options for your business needs.',
    };
  }

  return {
    title: siteName,
    description:
      'Deagensie empowers businesses and creatives with strategic growth, technology, and talent solutions.',
  };
}
