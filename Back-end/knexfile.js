module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "admin123",
      port: 5433, // المنفذ الجديد

      database: "Jordanian-Elections-Project",
    },
    migrations: {
      directory: "./migrations", // مسار المجلد الذي يحتوي على ملفات المايقريشن
    },
    seeds: {
      directory: "./seeds", // مسار المجلد الذي يحتوي على ملفات السييد
    },
  },
};
