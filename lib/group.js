/**!
 * gitlab - lib/group.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var util = require('util');
var restful = require('restful-client');

function Group(client) {
  this.constructor.super_.call(this, client, '/groups', 'id');
}
util.inherits(Group, restful.RESTFulResource);

module.exports = Group;

/**
 * Transfer a project to the Group namespace. Available only for admin
 *
 * POST  /groups/:id/projects/:project_id
 *
 * @param {Object} params
 *  - {String} id group id
 *  - {String} project_id project id
 * @param {Function(err, project)} callback
 */
Group.prototype.transferProject = function (params, callback) {
  this.client.request('post', '/groups/:id/projects/:project_id', params, callback);
  return this;
};