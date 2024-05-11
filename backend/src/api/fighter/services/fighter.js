'use strict';

/**
 * fighter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fighter.fighter');
