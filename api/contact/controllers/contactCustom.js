'use strict';


module.exports = {
    async findSocialNetworks(ctx) {
        //request to receive all the data from the contact page
        let entity = await strapi.services.contact.find()
        //filtering to get mail adress and LinkedIn and Instagram Links
        let socialNetworks = {}
        //filtering the keys in a custom entitie
        for (const key in entity) {
            if ( key === 'Email' 
            || key === 'LinkedIn'
            || key === 'Instagram' ) {
                socialNetworks[`${key}`]= entity[key]
            }
        }

        ctx.send(socialNetworks)
    }
};