const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres", // استبدل بـ اسم المستخدم الخاص بك
    password: "admin123", // استبدل بـ كلمة المرور الخاصة بك
    database: "Jordanian-Elections-Project", // استبدل بـ اسم قاعدة البيانات
    port: 5433, // المنفذ المستخدم لـ PostgreSQL
  },
});

// إدراج بيانات جديدة في جدول 'Contact Us'
async function insertData() {
  try {
    await knex("contact_us").insert({
      national_id: "123456789",
      name: "John Doe",
      email: "johndoe@example.com",
      message: "This is a test message.",
    });
    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err);
  }
}

// استعلام بيانات من جدول 'Contact Us'
async function fetchData() {
  try {
    const data = await knex("contact_us").select("*");
    console.log("Fetched data:", data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

// تشغيل الدوال
insertData()
  .then(() => fetchData())
  .finally(() => knex.destroy());
