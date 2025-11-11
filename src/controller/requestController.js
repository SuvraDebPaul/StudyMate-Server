const { ObjectId } = require("mongodb");
const client = require("../config/db");

const db = client.db("study-mate");
const requestCollection = db.collection("requests");

// CREATE PARTNER REQUEST
exports.createPartnerRequest = async (req, res) => {
  try {
    const result = await requestCollection.insertOne(req.body);
    //console.log("Inserted Data Successfully");
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// GET ALL PARTNER REQUEST
exports.getPartnerRequests = async (req, res) => {
  try {
    const email = req.query.email;
    //console.log(email);
    const result = await requestCollection.find({ email }).toArray();
    //console.log(result);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// UPDATE PARTNER INFORMATION FROM REQUEST
exports.updatePartnerRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const update = { $set: req.body };
    const result = await requestCollection.updateOne({ _id: id }, update);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// DELETE PARTNER REQUEST
exports.deletePartnerRequest = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const result = await requestCollection.deleteOne({
      _id: new ObjectId(id),
    });
    // console.log(result);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
