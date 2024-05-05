import Contact from "../models/contacts.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().exec();
    res.status(200).json(contacts);
  } catch (e) {
    console.log(e);
  }
};

export const getOneContact = async (req, res) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findById(id).exec();
    res.status(200).json(contact);
  } catch (e) {
    console.log(e);
  }
};
