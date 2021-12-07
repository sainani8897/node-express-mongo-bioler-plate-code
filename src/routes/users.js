const express = require('express')

/**
 * Router 
 */
let router = express.Router()

router.get('/', function (req, res) {
    res.send('All Users');
});

router.get('/:id', function (req, res) {
    res.send('View Blogs' + req.params.id);
});

module.exports = router