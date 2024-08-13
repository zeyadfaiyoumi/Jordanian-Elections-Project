exports.up = function (knex) {
  return knex.schema.createTable("Districts", function (table) {
    table.integer("district_id").primary();
    table.string("district_name");
    table.string("governorate");
    table.integer("number of seats");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("Districts");
};
