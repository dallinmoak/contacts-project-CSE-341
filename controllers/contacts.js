import Contact from "../models/contacts.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().exec();
    res.status(200).json(contacts);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

export const getOneContact = async (req, res) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findById(id).exec();
    res.status(200).json(contact);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

export const createContact = async (req, res) => {
  const contact = req.body;
  const createContact = new Contact(contact);
  try {
    const newContact = await createContact.save();
    console.log(newContact);
    res.status(201).json(newContact);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

export const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).exec();
    res.status(204).json(updatedContact);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};
