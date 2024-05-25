import swaggerAutogen from "swagger-autogen";
import "dotenv/config";

const env = process.env.NODE_ENV || "development";
const host =
  env == "production"
    ? process.env.RENDER_EXTERNAL_HOSTNAME
    : `${process.env.HOST}:${process.env.PORT || 3000}`;

const doc = {
  info: {
    version: "0.0.1",
    title: "contacts-project-CSE-341 API docs",
    description: "API documentation for the contacts project",
  },
  host,
  schemes: [env === "production" ? "https" : "http"],
  definitions: {
    Contact: {
      $first_name: "John",
      $last_name: "Doe",
      $email: "john@doe.test",
    },
    Contacts: [
      {
        $ref: "#/definitions/Contact",
      },
    ],
  },
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
