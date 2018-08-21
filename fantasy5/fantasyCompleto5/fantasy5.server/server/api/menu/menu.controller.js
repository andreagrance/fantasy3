/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/subsidiaries              ->  index
 * POST    /api/subsidiaries              ->  create
 * GET     /api/subsidiaries/:id          ->  show
 * PUT     /api/subsidiaries/:id          ->  upsert
 * PATCH   /api/subsidiaries/:id          ->  patch
 * DELETE  /api/subsidiaries/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import {menu} from '../../sqldb';
import {Business} from '../../sqldb';


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      // eslint-disable-next-line prefer-reflect
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Subsidiarys
export function index(req, res) {
  return menu.findAll({
   // include: [{
     // model: Business
   // }]    
  })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Subsidiary from the DB
export function show(req, res) {
  return menu.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Subsidiary in the DB
export function create(req, res) {
  return menu.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Subsidiary in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }

  return menu.upsert(req.body, {
    where: {
      _id: req.params.id
    }
  })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Subsidiary in the DB
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return menu.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Subsidiary from the DB
export function destroy(req, res) {
  return menu.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
