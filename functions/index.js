// Needed Imports:
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const router = require("./routes/route");
const app = express();

// Cors setup:
app.use(cors({ origin: true }));

// Routes setup:
app.use(router);

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
