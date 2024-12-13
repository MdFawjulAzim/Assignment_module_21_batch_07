const express = require("express");
const router = express.Router();
const {
  RegisterUser,
  LoginUser,
  GetUserProfile,
  GetAllProfiles,
  UpdateProfile,
  DeleteProfile,
} = require("../controllers/UserController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/profile/:id", AuthMiddleware, GetUserProfile); 
router.get("/profiles", AuthMiddleware, GetAllProfiles);   
router.put("/profile/:id", AuthMiddleware, UpdateProfile);  
router.delete("/profile/:id", AuthMiddleware, DeleteProfile);

module.exports = router;
