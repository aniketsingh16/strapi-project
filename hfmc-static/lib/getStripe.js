import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe('pk_test_51KhYqsSJBHZnH5L9CGSzOrlDmRFhV4pdTRNYvCO1Y3FokEjgbTNKrZqUNG5hQyKLXpFTaC20vvMRcbi0mMnngeRL00xfvzjfYc')
    }
    return stripePromise;
}

export default getStripe;