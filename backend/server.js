const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 8002;
const { intializeDB } = require("./utils/intializeDb");

require("dotenv").config();

/* Connecting to the database and then starting the server. */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    intializeDB();
    app.listen(PORT, console.log(`Server started on port http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
