const Users = require("../models/userSchemaAndModel");
const bcrypt = require("bcryptjs");

const userCtrl = {
  registerUser: async (req, res) => {
    try {
      // get all the values
      const { name, email, password } = req.body;
      // check if any field is empty
      if (!name || !email || !password)
        return res.status(400).json({ msg: "Fill all the input!" });

      // check if a user exists
      const user = await Users.findOne({ email: email });
      if (user) return res.status(409).json({ msg: "Email already exists! " });

      // generating salt
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(400).json({ msg: err.message });

        // password hash
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) return res.status(400).json({ msg: err.message });

          const newUser = new Users({
            name,
            email,
            password: hash,
          });
          await newUser.save();
        });
      });
      res.json({ msg: "Signup up successful" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  loginUser: (req, res) => {
    try {
      res.json({ msg: "Login a user" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = userCtrl;
