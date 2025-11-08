const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());

// Mongodb
const uri =
  "mongodb+srv://SDP_TEST:123321@cluster0.tcwtaaq.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//
app.get("/", (req, res) => {
  res.send("Server is Running");
});

//All Api Declaretion
async function run() {
  try {
    await client.connect();

    const db = client.db("study-mate");
    const partnersCollection = db.collection("partners");

    // Partner Related API
    //Post a New Partner
    app.post("/partners", async (req, res) => {
      const newPartner = req.body;
      const result = await productsCollection.insertOne(newProduct);
      res.send(result);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    });
    //GET ALL PARTNERS
    app.get("/partners", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });
    // GET A SINGLE PARTNER
    app.get("/partners/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: id };
      const result = await productsCollection.findOne(query);
      res.send(result);
    });
    // UPDATE A SINGLE PARTNER WITH ID
    app.patch("/partners/:id", async (req, res) => {
      const id = req.params.id;
      const updatedProduct = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: updatedProduct,
      };
      const result = await productsCollection.updateOne(query, update);
      res.send(result);
    });
    //DELETE A SINGLE PARTNER
    app.delete("/partners/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });
    // POST A PARTNER REQUEST
    app.patch("/partners/:id", async (req, res) => {
      const id = req.params.id;
      const updatedPartner = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          patnerCount: updatedPartner.patnerCount,
        },
      };
      const result = await productsCollection.updateOne(query, update);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!🟢"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Smart Server is Running on ${port} 🚀`);
});
