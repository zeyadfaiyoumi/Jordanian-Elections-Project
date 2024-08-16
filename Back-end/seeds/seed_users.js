exports.seed = function (knex) {
  return knex("citizens")
    .del()
    .then(function () {
      return knex("citizens").insert([
        
        {
          national_id: "5749268130",
          name: "عبدالله فؤاد حسين دبش",
          religion: "مسلم",
          email: "abdullah.dabash99@gmail.com",
          governorate: "الزرقاء",
          electoral_district: "دائرة الزرقاء",
          region: "النزهه/قصبة الزرقاء",
          is_voted_party: false,
          is_voted_local: false,
          gender: "ذكر",
          password: ""
        
        },
        {
          national_id: "1111111111",
          name: "عبدالله فؤاد حسين دبش",
          religion: "مسلم",
          email: "abdabdallah59@gmail.com",
          governorate: "الزرقاء",
          electoral_district: "دائرة الزرقاء",
          region: "النزهه/قصبة الزرقاء",
          is_voted_party: false,
          is_voted_local: false,
          gender: "ذكر",
          password: ""
        
        },
        {
          national_id: "2222222222",
          name: "عبدالله فؤاد حسين دبش",
          religion: "مسلم",
          email: "abdullahdabash69@gmail.com",
          governorate: "الزرقاء",
          electoral_district: "دائرة الزرقاء",
          region: "النزهه/قصبة الزرقاء",
          is_voted_party: false,
          is_voted_local: false,
          gender: "ذكر",
          password: ""
        
        },
        
      ]);
    });
};
