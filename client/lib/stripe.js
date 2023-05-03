import { loadStripe } from '@stripe/stripe-js';
import { PUBLISHABLE_KEY } from '@/constants';

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(PUBLISHABLE_KEY);
    };
    return stripePromise;
};

export default getStripe;