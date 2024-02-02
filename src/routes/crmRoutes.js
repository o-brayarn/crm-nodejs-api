import { get } from "mongoose";
import {
  addNewContact,
  deleteContact,
  getContacts,
  getContactsWithId,
  updateContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    // Find all contacts
    .get(
      (req, res, next) => {
        // Middleware {the code below is only for context}
        console.log(`Request is from: ${req.originalUrl}`);
        console.log(`Request Type: ${req.method}`);
        next();
      },
      getContacts
      /*(req, res, next) => {
          res.send("GET request successful!");
    } */
    )

    // Post a new contact
    .post(addNewContact);

  // Update && delete
  app
    .route("/contact/:contactId")
    // To find a contact by its ID
    .get(getContactsWithId)

    // Update contact
    .put(updateContact)

    // Delete contact
    .delete(deleteContact);
};
export default routes;
