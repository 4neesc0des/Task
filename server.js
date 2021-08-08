require("dotenv").config();
require("./db/conn");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/router");

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRouter);

// listen server
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}`);
});
