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
        projectsSlugs.sort(function(a, b){return a['Order']-b['Order']})
        ctx.send(projectsSlugs)
    },

    async findAllCustom(ctx) {
        //request to receive all the data for each project
        let entities = await strapi.services.project.find()
        //filtering
        let projects = []
        entities.forEach(elt => {
            //filtering the keys slug, id, order, Project_Title and Project_Subtitle
            let project = {}
            for (const key in elt) {
                if ( key == 'Slug'
                    || key == 'Project_Title'
                    || key == 'Project_Subtitle'
                    || key == 'Order'
                    || key == 'id'
                    || key == 'Meta_Title'
                    || key == 'Meta_Description'
                    || key == 'Pictures') {
                        project[`${key}`] = elt[key]
                    }
            //filtering the elt['Info'] with only the fields not null
            //in an array 
            let Info = {}

            for (const key in elt['Info']) {
                if (elt['Info'][key]) {
                    Info[`${key}`] = elt['Info'][key]
                }
            }
            //Info array is pushed into project
            project['Info'] = Info
            }
            //project object is pushed in the projects array
            projects.push(project)
            //ordering by project['order']
            projects.sort(function(a, b){return a['Order']-b['Order']})
            ctx.send(projects)
        })
    }
};