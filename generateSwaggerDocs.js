import swaggerAutogen from "swagger-autogen";
import "dotenv/config";

const doc = {
  info: {
    version: "0.0.1",
    title: "contacts-project-CSE-341 API docs",
    description: "API documentation for the contacts project",
  },
  host: `${process.env.HOST}:${process.env.PORT || 3000}`,
  schemes: [process.env.NODE_ENV === "production" ? "https" : "http"],
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
