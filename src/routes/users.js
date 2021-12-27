const express = require('express')
const userController = require('../controllers/user.controller')
/**
 * Router 
 */
let router = express.Router()

router.get('/', userController.index);

router.post('/', userController.create);

router.get('/:slug', userController.show);

module.exports = router