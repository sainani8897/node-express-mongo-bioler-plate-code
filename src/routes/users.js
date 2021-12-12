const express = require('express')
const userController = require('../controllers/user.controller')
/**
 * Router 
 */
let router = express.Router()

router.get('/', userController.index);

router.get('/:id', userController.show);

module.exports = router