//جدول كل المواطنين

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("citizens", function (table) {
    table.increments("id").primary();
    table.string("national_id").notNullable().unique(); // Added national_id
    table.string("name").notNullable(); // Name column
    table.string("religion").notNullable(); // Added religion
    table.string("email").notNullable().unique(); // Email column
    table.string("governorate").notNullable(); // Added governorate
    table.string("electoral_district").notNullable(); // Added electoral_district
    table.string("region").notNullable(); // Added region
    table.boolean("is_voted_party").defaultTo(false); // Added is_voted-party
    table.boolean("is_voted_local").defaultTo(false); // Added is_voted_local
    table.string("gender").notNullable(); // Added gender
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("citizens");
};

