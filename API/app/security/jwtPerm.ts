var jwtPerm = require('express-jwt-permissions')();

export var admin = jwtPerm.check('admin')
export var user = jwtPerm.check('user')
export var canRead = jwtPerm.check('read:hero')
export var canCreate = jwtPerm.check('create:hero')
export var canUpdate = jwtPerm.check('update:hero')
export const canDelete = jwtPerm.check('delete:hero')