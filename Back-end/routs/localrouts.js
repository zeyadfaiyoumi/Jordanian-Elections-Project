// // "http://localhost:5000/api/local/listing"
// const express = require("express");
// const router = express.Router();
// const taskController = require("../controllers/localcontrollers.js");
// const auth = require("../middleware/auth.js");

// router.get("/listing", taskController.getlisting);
// router.get("/districts", taskController.getdistricts);

// module.exports = router;
const express = require("express");
const router = express.Router();
const LocalController = require("../controllers/localcontrollers");

router.get("/districts", LocalController.getdistricts);
router.get("/lists", LocalController.getlistsByDistrict);
router.get("/party", LocalController.getparty);
router.post("/vote", LocalController.vote);

module.exports = router;
