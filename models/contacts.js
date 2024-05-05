import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

contactSchema.virtual("full_name").get(function () {
  return `${this.first_name} ${this.last_name}`;
});

export default mongoose.model("Contact", contactSchema);
