const { ObjectId } = require("mongodb");
const client = require("../config/db");

const db = client.db("study-mate");
const partnersCollection = db.collection("partners");

// CREATE
exports.createPartner = async (req, res) => {
  try {
    const result = await partnersCollection.insertOne(req.body);
    //console.log("Inserted Data Successfully");
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// GET ALL
exports.getPartners = async (req, res) => {
  try {
    const query = req.query.email ? { email: req.query.email } : {};
    const result = await partnersCollection.find(query).toArray();
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// GET ONE
exports.getPartnerById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await partnersCollection.findOne({ _id: new ObjectId(id) });
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// UPDATE
exports.updatePartner = async (req, res) => {
  try {
    const id = req.params.id;
    const update = { $set: req.body };
    const result = await partnersCollection.updateOne(
      { _id: new ObjectId(id) },
      update
    );
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// DELETE
exports.deletePartner = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await partnersCollection.deleteOne({
      _id: new ObjectId(id),
    });
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
