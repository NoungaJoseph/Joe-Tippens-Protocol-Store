require("dotenv").config();
const express = require("express");
const cors = require("cors");
// Initialize Stripe with the secret key from .env
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Create Payment Intent Route
// This is called when the user reaches the payment step or clicks "Place Order"
app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency = "usd" } = req.body;

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amounts in cents (e.g. $10.00 = 1000)
      currency: currency,
      // In a real app, you might add metadata here (e.g., order ID)
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Send the clientSecret to the frontend
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).send({ error: error.message });
  }
});

// Health check route
app.get("/", (req, res) => {
  res.send("PureProtocol Backend is running!");
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}!`));
