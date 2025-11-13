const { ObjectId } = require("mongodb");
const client = require("../config/db");

const db = client.db("study-mate");
const requestCollection = db.collection("requests");

// CREATE PARTNER REQUEST
exports.createPartnerRequest = async (req, res) => {
  try {
    const { userid } = req.body;
    // console.log(userid);
    const existingRequest = await requestCollection.findOne({ userid });
    // console.log(existingRequest);
    if (existingRequest) {
      return res.status(400).send({
        success: false,
        message: "Partner with this name already exists in Your Connections",
      });
    }
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

// GET ONE REQUEST
exports.getPartnerRequestsById = async (req, res) => {
  try {
    const id = req.params.id;
    //console.log("Requested ID:", id);
    const result = await requestCollection.findOne({ _id: new ObjectId(id) });
    //console.log("Result:", result);
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
    const result = await requestCollection.updateOne(
      { _id: new ObjectId(id) },
      update
    );
    res.send(result);
    // console.log(result);
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
