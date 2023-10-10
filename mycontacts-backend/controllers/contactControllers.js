//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
};

//@desc Get all contacts
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const createContact = (req,res) => {
    const {name, email, phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({message: "Create contact"});
};


//@desc Get all contacts
//@route GET /api/contacts/:id
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({message: `Update contact for ${req.params.id}`});
};

//@desc Get all contacts
//@route GET /api/contacts/:id
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
}

module.exports = {
    getAllContacts, 
    getContact, 
    createContact, 
    updateContact, 
    deleteContact
};