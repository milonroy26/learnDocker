import Stripe from "stripe";
import { envVars } from "./env";
import status from "http-status";
import AppError from "../errorHelpers/AppError";

const stripe = envVars.ENABLE_STRIPE ? new Stripe(envVars.STRIPE.STRIPE_SECRET_KEY) : null;

export const getStripe = () => {
    if (!stripe) {
        throw new AppError(status.SERVICE_UNAVAILABLE, "Payments are disabled in this environment.");
    }
    return stripe;
};
