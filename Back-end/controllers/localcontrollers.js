// // "http://localhost:5000/api/local/listing"
// const db = require("../config/db");

// exports.getlisting = async (req, res) => {
//   async function getalldata() {
//     try {
//       const data = await db("lists").select("*");
//       // .where("logo", "=", "العدالة هي الأساس");
//       res.json(data);
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   getalldata();
// };

// exports.getdistricts = async (req, res) => {
//   async function test() {
//     try {
//       const data12 = await db("districts").select("*");
//       res.json(data12);
//       console.log(data12);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   test();
// };
const db = require("../config/db");

exports.getdistricts = async (req, res) => {
  try {
    const data = await db("districts").select("*");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.getlistsByDistrict = async (req, res) => {
  const { district_id } = req.query;
  try {
    if (!district_id) {
      return res.status(400).json({ error: "district_id is required" });
    }
    const data = await db("lists").where("district_id", district_id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.getparty = async (req, res) => {
  try {
    const data = await db("party_lists").select("*");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.vote = async (req, res) => {
  console.log("Vote request received:", req.body);
  const { party_list_id } = req.body;
  try {
    const updatedParty = await db("party_lists")
      .where({ party_list_id })
      .increment("vote_count", 1)
      .returning("*");
    
    res.json({
      updatedParty,
    });
  } catch (err) {
    console.error("Error in vote controller:", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
};
