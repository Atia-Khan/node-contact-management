const asyncHandler = require("express-async-handler");



//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Get all contacts"})
});

//@desc Create all contacts
//@route create /api/contacts
//@access public

const createContact = asyncHandler(async(req, res) => {
    console.log("The Request body is",req.body);
  const {name, email, phone} =  req.body;
  if(!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }
    res.status(201).json({message: "Get all contacts"})
})

//@desc update all contacts
//@route update /api/contacts/id
//@access public

const updateContact = asyncHandler(async(req, res) => {
    res.status(201).json({message: `update contact of ${req.params.id}`})
})

//@desc delete all contacts
//@route delete /api/contacts/id
//@access public

const deleteContact =asyncHandler( async(req, res) =>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
})

//@desc Create all contacts
//@route create /api/contacts
//@access public

const getContactById = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Get the contact of ${req.params.id}`});
})

module.exports = {getContact,createContact,updateContact,getContactById,deleteContact}