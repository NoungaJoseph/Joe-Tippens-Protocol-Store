const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize Stripe with the secret key from .env
// Note: In Vercel, ensuring process.env is available requires correct setup, but dotenv usually works if .env is present locally, 
// or Vercel Environment Variables are used in production.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

// Middleware
app.use(cors({
    origin: "*", // Allow all origins for simplicity in this setup, or restrict to your frontend domain
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// 1. Create Payment Intent Route
app.post("/api/create-payment-intent", async (req, res) => {
    const { amount, currency = "usd" } = req.body;

    try {
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Stripe expects amounts in cents
            currency: currency,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Stripe Error:", error);
        res.status(500).send({ error: error.message });
    }
});

// Health check route
app.get("/api", (req, res) => {
    res.send("PureProtocol Backend is running on Vercel!");
});

// Fallback for root path of the function if accessed directly (though typically /api routes hit this)
app.get("/", (req, res) => {
    res.send("PureProtocol API");
});

module.exports = app;
