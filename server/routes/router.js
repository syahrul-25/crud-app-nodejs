const express = require('express');
const router = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller')

/* 
* @descripion Root Route
* @method GET
*/
router.get('/',services.homeRoutes);

/* 
* @descripion Add user
* @method GET
*/
router.get('/user',services.addUser);

/* 
* @descripion Update User
* @method GET
*/
router.get('/update-user',services.updateUser);

// API
router.post('/api/users',controller.create);
router.get('/api/users',controller.find);
router.put('/api/users/:id',controller.update);
router.delete('/api/users/:id',controller.delete);

module.exports = router;