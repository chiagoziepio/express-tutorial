const express = require("express")
const router = express.Router()
const handleAuth = require("../controller/authContolller")

router.post("/", handleAuth )

module.exports = router