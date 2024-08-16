const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const db = require("./config/db");
require("dotenv").config();

const localRoutes = require("./routs/localrouts");

app.use(cors());
app.use(express.json());

app.use("/api/local", localRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// ----------------------------------------------------------------------------------------------------------------
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    await db("payments").insert({
      stripe_payment_id: paymentIntent.id,
      amount,
      currency,
      status: paymentIntent.status,
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    res.status(500).json({ error: error.message });
  }
});
