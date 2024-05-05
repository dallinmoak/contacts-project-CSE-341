import express from "express";
import router from "./routes/index.js";
import "dotenv/config";
import connect from "./db/mongodb.js";

const app = express();
connect().catch((e) => console.log(e));
app.use(router);
app.listen(3000, () => {
  console.log("listening");
});
