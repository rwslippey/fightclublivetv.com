'use strict';

/**
 * bout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bout.bout');
