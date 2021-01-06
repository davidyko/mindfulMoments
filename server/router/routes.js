const express = require("express");

const router = express.Router();
const controller = require("../controllers/controllers.js");

router.get("/gratitudes", controller.getTopGrats);
router.post("/user", controller.createUser);
router.post("/gratitudes", controller.updateGrats);

module.exports = router;
