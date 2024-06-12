const {handlePostCart, handleGetCart }= require("../../controller/cartController")
const express = require("express");
const router = express.Router();

router.post("/",handlePostCart);
router.get("/", handleGetCart)

module.exports = router