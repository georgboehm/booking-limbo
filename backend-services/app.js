const express = require("express");
const app = express();
const port = 8000;
const db = require("./models/database");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());

// Enable CORS for particular routes only
app.use(
  cors({
    origin:
      process.env.ENVIRONMENT === "LOCAL"
        ? "http://localhost:3000"
        : [process.env.API_URL, process.env.API_URL_WWW],
  })
);

// routes
const artistRoutes = require("./routes/artists");
const emailRoutes = require("./routes/email");
app.use("/email", emailRoutes);
app.use("/artists", artistRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
