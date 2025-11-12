require("dotenv").config();
const app = require("./app");
const client = require("./config/db");

const port = process.env.PORT || 3000;

// connect db, then start server
async function start() {
  try {
    await client.connect();
    //console.log("✅ Connected to MongoDB!");

    app.listen(port, () => {
      //console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (error) {
    //console.error("❌ DB Connection Error:", error);
  }
}

start();
