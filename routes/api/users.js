const express = require("express");
const router = express.Router();
const demoUsers = require("../../model/userdb")
const {
    handleGetAllUser,
    handlePostNewUser,
    handleGetAUser,
    handlePatch,
    handlePut
} = require("../../controller/userController")

router.get("/",handleGetAllUser );

router.post("/",handlePostNewUser );

router.put("/:id", handlePut );
router.patch("/:id", handlePatch );

router.get("/:id", handleGetAUser)


module.exports = router