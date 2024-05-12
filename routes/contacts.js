import { Router } from "express";
import * as contactController from "../controllers/contacts.js";

const contactRoutes = Router();

contactRoutes.get("/contacts", contactController.getAllContacts);
contactRoutes.get("/contacts/:id", contactController.getOneContact);
contactRoutes.post("/contacts", contactController.createContact);
contactRoutes.put("/contacts/:id", contactController.updateContact);

export default contactRoutes;
