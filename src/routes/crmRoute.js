const {addContact,getAllContacts,getContactById,updateContact,deleteContact} = require('../controlllers/crmController');
const routes = (app) => {
    app.route('/contact')

    .get((req,res,next) =>{
        console.log(`The request URL : ${req.originalUrl}`);
        console.log(`The http method: ${req.method}`);
        next();
    },getAllContacts)

    .post(addContact);

    app.route('/contact/:contactId')
    
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact);
}

module.exports = routes;