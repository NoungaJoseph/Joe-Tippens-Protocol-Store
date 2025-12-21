import { loadStripe } from '@stripe/stripe-js';

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '';
if (!publishableKey) {
    console.warn('Stripe Publishable Key is missing! Please set VITE_STRIPE_PUBLISHABLE_KEY in your environment variables.');
} else {
    console.log('Stripe initialized with key starting with:', publishableKey.substring(0, 7) + '...');
}

export const stripePromise = loadStripe(publishableKey);
