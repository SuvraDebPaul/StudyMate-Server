const express = require("express");
const cors = require("cors");
const partnersRoutes = require("./routes/partners.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("Server is Running ✅");
});

// Routes
app.use("/partners", partnersRoutes);

module.exports = app;
