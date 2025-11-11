const { ObjectId } = require("mongodb");
const client = require("../config/db");

const db = client.db("study-mate");
const partnersCollection = db.collection("partners");

// CREATE PARTNER
exports.createPartner = async (req, res) => {
  try {
    const { email } = req.body;
    const existingPartner = await partnersCollection.findOne({ email });
    if (existingPartner) {
      return res.status(400).send({
        success: false,
        message: "Partner with this email already exists",
      });
    }
    const result = await partnersCollection.insertOne(req.body);
    console.log("Inserted Data Successfully");
    res.send(result);
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

// GET ALL PARTNER
exports.getPartners = async (req, res) => {
  try {
    const query = req.query.email ? { email: req.query.email } : {};
    const result = await partnersCollection.find(query).toArray();
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// GET ONE PARTNER
exports.getPartnerById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Requested ID:", id);
    const result = await partnersCollection.findOne({ _id: id });
    console.log("Result:", result);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// UPDATE PARTNER
exports.updatePartner = async (req, res) => {
  try {
    const id = req.params.id;
    const update = { $set: req.body };
    console.log(update);
    const result = await partnersCollection.updateOne({ _id: id }, update);
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// DELETE PARTNER
exports.deletePartner = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await partnersCollection.deleteOne({
      _id: id,
    });
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
