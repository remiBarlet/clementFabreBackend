'use strict';


module.exports = {
    async slugsIdsTitlesOrder(ctx) {
        //request to receive all the data for each project
        let entities = await strapi.services.project.find()
        //filtering to get id, slug, project_title and order of each project
        let projectsSlugs = []
        entities.forEach(elt => {
            //filtering the keys in a custom entitie
            let project = {}
            for (const key in elt) {
                if ( key === 'id' 
                || key === 'Slug'
                || key === 'Project_Title'
                || key === 'Order' ) {
                    project[`${key}`]= elt[key]
                }
            }
            //pushing the custom entitie to the array to be returned
            projectsSlugs.push(project) 
        })
        ctx.send(projectsSlugs)
    }
};