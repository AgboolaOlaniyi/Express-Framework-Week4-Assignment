const express = require('express');
const middleware = require('./api.middlware')
const controller = require('./api.controller')
const bodyParser = require("body-parser")

const router = express.Router();

router.use(bodyParser.json())



router.post('/', middleware.CheckProgram, controller.Createitems)

router.get('/', controller.Getitems)

router.get('/:id', controller.getOneitem)
 
router.patch('/:id', controller.updateitem)
router.delete('/:id', controller.deleteitem)

module.exports = router
