import express from "express";
import router from "./routes/index.js";
import "dotenv/config";
import connect from "./db/mongodb.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
connect().catch((e) => console.log(e));
app.use(bodyParser.json()).use(cors()).use(router);
const server = app.listen(3000, () => {
  console.log("listening");
});

// gracefully shutdown if nodemon restarts, nodemon keeps failing to close the server before attempting to restart
process.once("SIGUSR2", function () {
  console.log("received a restart from nodemon, closing express server...");
  server.close(() => {
    console.log("server closed");
  });
});
