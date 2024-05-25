import { Router } from "express";
import * as contactController from "../controllers/contacts.js";

const contactRoutes = Router();

contactRoutes.get("/contacts", (req, res) => {
  /* #swagger.description = 'Get a list of all contacts.'
   #swagger.responses[200] = {
      description: 'Get a list of contacts.',
      schema: { $ref: '#/definitions/Contacts' }
    } */
  contactController.getAllContacts(req, res);
});
contactRoutes.get("/contacts/:id", (req, res) => {
  /* #swagger.description = 'Get a contact by id.'
  #swagger.responses[200] = {
      description: 'Get a single contact.',
      schema: { $ref: '#/definitions/Contact' }
    } 
  #swagger.parameters['id'] = { description: 'ObjectId (_id) of the contact record.' } */
  contactController.getOneContact(req, res);
});
contactRoutes.post("/contacts", (req, res) => {
  /* #swagger.description = 'Create a new contact.'
   #swagger.responses[201] = {
    description: 'Contact created successfully.',
    schema: { $ref: '#/definitions/Contact' }
  }
  #swagger.parameters['body'] = {
    in: 'body',
    description: 'Contact data to be created.',
    required: true,
    schema: { $ref: '#/definitions/Contact' }
  } */
  contactController.createContact(req, res);
});
contactRoutes.put("/contacts/:id", (req, res) => {
  /* #swagger.description = 'Update a contact by id.'
   #swagger.responses[204] = {
    description: "Contact updated successfully.",
    schema: { $ref: "#/definitions/Contact" },
  }
  #swagger.parameters["body"] = {
    in: "body",
    description: "Contact data to be updated.",
    required: true,
    schema: { $ref: "#/definitions/Contact" },
  } 
  #swagger.parameters['id'] = {
    description: 'ObjectId (_id) of the contact record.'
  } */
  contactController.updateContact(req, res);
});
contactRoutes.delete("/contacts/:id", (req, res) => {
  /* 
  #swagger.description = 'Delete a contact by id.'
  #swagger.responses[200] = {
    description: 'Contact deleted successfully.',
    schema: { $ref: '#/definitions/Contact' }
  } 
  #swagger.parameters['id'] = {
    description: 'ObjectId (_id) of the contact record.'
  }
  */
  contactController.deleteContact(req, res);
});

export default contactRoutes;
