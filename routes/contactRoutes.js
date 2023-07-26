const express = require("express");
const router = express.Router();
const {getContact, createContact,updateContact, getContactById, deleteContact} =require("../controllers/contactController")


router.route("/").get(getContact).post(createContact)

router.route("/:id").put(updateContact).delete(deleteContact).get(getContactById);


module.exports = router;