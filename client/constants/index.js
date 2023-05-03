export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const PUBLISHABLE_KEY = String(process.env.NEXT_STRIPE_PUBLISHABLE_KEY);

export const SECRET_KEY = process.env.NEXT_STRIPE_SECRET_KEY;