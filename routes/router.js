const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

//register user
router.post("/register", userCtrl.registerUser);

//login user
router.post("/login", userCtrl.loginUser);

module.exports = router;
