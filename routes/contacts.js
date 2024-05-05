import { Router } from "express";
import { getAllContacts, getOneContact } from "../controllers/contacts.js";

const contactRoutes = Router();

contactRoutes.get("/contacts", getAllContacts);
contactRoutes.get("/contacts/:id", getOneContact);

export default contactRoutes;
