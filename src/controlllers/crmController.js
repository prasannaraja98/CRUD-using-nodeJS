const mongoose = require('mongoose');
const Schema = require('../models/crmModel');

const contact = mongoose.model('contact',Schema);

module.exports.addContact =  (req,res) =>{
    let newContact = new contact(req.body);
    newContact.save((err,contact) => {
        if(err)
        {
            res.send(err);
        }
        res.json(contact);
    })
}

module.exports.getAllContacts = (req,res)=>{
    contact.find({},(err,contact) => {
        if(err)
        {
            res.send(err);
        }
        res.json(contact);
    })
}

module.exports.getContactById = (req,res)=>{
    contact.findById(req.params.contactId,(err,contact) => {
        if(err)
        {
            res.send(err);
        }
        res.json(contact);
    })
}

module.exports.updateContact=(req,res) => {
    contact.findOneAndUpdate({_id: req.params.contactId} , req.body,{new : true,useFindAndModify : false},(err,contact) => {
        if(err)
        {
            res.send(err);
        }
        res.json(contact);
    })
}

module.exports.deleteContact=(req,res) => {
    contact.remove({_id: req.params.contactId} ,(err,contact) => {
        if(err)
        {
            res.send(err);
        }
        res.json({message : "deleted"});
    })
}