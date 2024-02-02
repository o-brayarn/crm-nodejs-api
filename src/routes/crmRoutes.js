import { addNewContact, getContacts } from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
        // Middleware {the code below is only for context}
        console.log(`Request is from: ${req.originalUrl}`)
        console.log(`Request Type: ${req.method}`)
        next();
    }, getContacts
    /*(req, res, next) => {
          res.send("GET request successful!");
    } */
    )
    .post(addNewContact);
  // Update && delete
  app
    .route("/contact/:contactId")
    .put((req, res) => res.send("PUT request successful!"))
    .delete((req, res) => res.send("DELETE request successful!"));
};
export default routes;
