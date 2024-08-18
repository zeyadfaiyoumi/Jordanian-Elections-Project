const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userAuthRoutes = require("./routes/userAuthroutes"); // Ensure this file exists and is correctly named
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/userAuth", userAuthRoutes); // Ensure this line is present and correct

const PORT = process.env.PORT || 5000;

const db = require("./config/db");

const localRoutes = require("./routs/localrouts");
app.use("/api/local", localRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
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
// _______________________________________________contact_______________________________________________________
app.use(express.urlencoded({ extended: true }));

// تعريف المسارات
app.post("/api/contact", async (req, res) => {
  try {
    await db("contact_us").insert({
      national_id: req.body.national_id,
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject || "Default Subject",
      message: req.body.message,
    });
    res.status(200).send("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send("Failed to insert data");
  }
});
