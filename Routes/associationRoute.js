const express = require('express')
const router =  express.Router

const associationController = require('../controller/associationcontroller')

router.get('/',associationController.association)

module.exports=router