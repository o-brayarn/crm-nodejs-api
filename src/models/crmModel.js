import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter your first name:"
  },
  lastName: {
    type: String,
    required: "Enter your last name:"
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
