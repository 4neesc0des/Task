const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");

//register user
router.post("/register", userCtrl.registerUser);

//login user
router.post("/login", userCtrl.loginUser);

// verify token
router.get("/verify", userCtrl.verifyToken);

// get userData
router.get("/getData", auth, (req, res) => {
  res.json(req.user);
  //   console.log(req.user);
});

module.exports = router;
