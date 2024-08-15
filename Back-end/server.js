// const express = require("express");
// require('dotenv').config()
// const app = express();
// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// ///////////
// const express = require("express");
// const knex = require("./config/db"); // استيراد إعدادات Knex

// const app = express();
// app.use(express.json());

// app.post("/api/contact", async (req, res) => {
//   try {
//     await knex("contact_us").insert({
//       national_id: req.body.national_id,
//       name: req.body.name,
//       email: req.body.email,
//       subject: req.body.subject || "Default Subject",
//       message: req.body.message,
//     });
//     res.status(200).send("Data inserted successfully");
//   } catch (err) {
//     console.error("Error inserting data:", err);
//     res.status(500).send("Failed to insert data");
//   }
// });

// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });
/////////////////
const express = require("express");
const cors = require("cors");
const knex = require("./config/db"); // استيراد إعدادات Knex

const app = express();

// تفعيل CORS لجميع الطلبات
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// تعريف المسارات
app.post("/api/contact", async (req, res) => {
  try {
    await knex("contact_us").insert({
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
