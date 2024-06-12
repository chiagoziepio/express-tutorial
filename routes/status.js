const express = require("express")
const router = express.Router();
const HandleShowStaus = require("../controller/statusContoller");

router.get("/", HandleShowStaus);

module.exports = router