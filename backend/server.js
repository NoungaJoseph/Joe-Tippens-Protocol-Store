require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
// Initialize Stripe with the secret key from .env
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://joe-tippens-protocol-store-5jfm-5d2cq3xxu.vercel.app/"
];

app.use(helmet()); // Basic security headers
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  }
}));
app.use(express.json());

// Rate limiting to prevent brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes"
});

// Apply rate limiter specifically to payment attempts
app.use("/create-payment-intent", limiter);

// 1. Create Payment Intent Route
app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency = "usd", items, email } = req.body;

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amounts in cents
      currency: currency,
      receipt_email: email,
      // Metadata can help you identify orders in the Stripe Dashboard
      metadata: {
        email: email,
        item_count: items ? items.length : 0,
      },
      // automatic_payment_methods is the modern way to support Apple Pay, Google Pay, etc.
      // You can also specify preferred methods if needed.
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
