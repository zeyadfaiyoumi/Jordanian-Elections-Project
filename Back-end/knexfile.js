module.exports = {
  development: {
    client: 'pg', // تحديد محرك قاعدة البيانات
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '0000',
      database: 'jordanian_elections_project'
    },
    migrations: {
      directory: './migrations' // تحديد مجلد المهاجرات
    },
    seeds: {
      directory: './seeds' // تحديد مجلد البذور (seeds) إذا كنت ترغب في استخدامها
    }
  }
};