const admin = require("firebase-admin");

const serviceAccount = require("../../firebaseServiceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.verifyToken = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(500).send({ error: "Unauthorised Access" });
  }
  const token = authorization.split(" ")[1];
  try {
    await admin.auth().verifyIdToken(token);
    next();
  } catch (err) {
    res.status(500).send({ error: "Unauthorised Access" });
  }
};
