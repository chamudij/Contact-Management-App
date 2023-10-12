const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contact.find();

    res.status(200).json(contacts);
});

//@desc Get all contact given the id
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Create new contact
//@route GET /api/contacts
//@access public
const createContact = asyncHandler(async(req,res) => {
    const {name, email, phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    res.status(201).json(contact);
});


//@desc Update a given contact
//@route GET /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );

    res.status(200).json(updatedContact);
});

//@desc Delete a given contact
//@route GET /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req,res)=>{
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    if(!deletedContact){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(deletedContact);

});

module.exports = {
    getAllContacts, 
    getContact, 
    createContact, 
    updateContact, 
    deleteContact
};