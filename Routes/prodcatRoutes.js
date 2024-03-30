const express = require('express')
const router = express.Router()

const controllers =require('../controller/productcategorycontroller')


router.get('/',controllers.getAllProducts)

router.get('/:id', controllers.getProductByID )

router.post('/',controllers.createProduct)

router.patch('/:id',controllers.updateProduct)

router.delete('/:id',controllers.deleteProduct)

module.exports = router
