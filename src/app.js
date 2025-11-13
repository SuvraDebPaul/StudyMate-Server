const express = require("express");
const cors = require("cors");
const partnersRoutes = require("./routes/partners.routes");
const requestsRoutes = require("./routes/requests.routes");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://sdp-studymate.web.app"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Running ✅");
});

// Routes
app.use("/partners", partnersRoutes);
app.use("/requests", requestsRoutes);

module.exports = app;
