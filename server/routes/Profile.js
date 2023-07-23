const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")
const {
  deleteAccount,
  updateProfile,
  
} = require("../controllers/Profile")

// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)
//router.put("/updateProfile", auth, updateProfile)


module.exports = router