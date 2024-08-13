exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Districts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Districts").insert([
        {
          district_id: 1,
          district_name: "عمان الاولى",
          governorate: "عمان",
          "number of seats": 6,
        },
        {
          district_id: 2,
          district_name: "عمان الثانية",
          governorate: "عمان",
          "number of seats": 8,
        },
        {
          district_id: 3,
          district_name: "عمان الثالثة",
          governorate: "عمان",
          "number of seats": 6,
        },
        {
          district_id: 4,
          district_name: "الزرقاء",
          governorate: "الزرقاء",
          "number of seats": 10,
        },
        {
          district_id: 5,
          district_name: "البلقاء",
          governorate: "البلقاء",
          "number of seats": 8,
        },
        {
          district_id: 6,
          district_name: "اربد",
          governorate: "اربد",
          "number of seats": 8,
        },
        {
          district_id: 7,
          district_name: "اربد",
          governorate: "اربد",
          "number of seats": 8,
        }
      ]);
    });
};
