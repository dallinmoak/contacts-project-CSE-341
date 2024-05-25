import swaggerAutogen from "swagger-autogen";
import "dotenv/config";

// import Contact from "./models/contacts.js";
// import m2s from "mongoose-to-swagger";

// const contactsFormatted = m2s(Contact);
// console.log(contactsFormatted);
// console.log(Contact);

// {
//   title: 'Contact',
//   required: [ 'first_name', 'last_name', 'email' ],
//   properties: {
//     first_name: { type: 'string' },
//     last_name: { type: 'string' },
//     email: { type: 'string' },
//     _id: { type: 'string' }
//   }
// }

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
