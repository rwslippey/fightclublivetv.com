'use strict';

/**
 * video controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::video.video', ({strapi}) => ({
    async videoUrl(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        
        const userId = query.userId
        const eventId = query.id
        
        const userAuths = await strapi.entityService.findOne(
            'api::video.video',
            ctx.params.userId,
            {
                filters: {
                    users_permissions_user: userId,
                },
            }
        );


        try {
            ctx.body = 'none';
        } catch(err) {
            ctx.body = err;
        }
    }
}));
