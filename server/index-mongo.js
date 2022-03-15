import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

import CollectiveClassesDAO from "./api/dao/collectiveClassesDAO.js"

// CONFIG
dotenv.config();
const MongoClient = mongodb.MongoClient;

// DEFINING THE PORT
const port = process.env.PORT || 8000;

// CONNECTING DATABASE
const uri = process.env.APSARAYOGA_DB_URI;

MongoClient.connect(uri, {
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await CollectiveClassesDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
