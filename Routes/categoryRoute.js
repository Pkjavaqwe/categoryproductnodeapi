const express = require('express')
const router = express.Router()

const categorycontrollers = require('../controller/categorycontroller');
router.get('/',categorycontrollers.getAllCategories)

router.get('/:id', categorycontrollers.getCategoryByID )

router.post('/',categorycontrollers.createCategory)

router.patch('/:id',categorycontrollers.updateCategory)

router.delete('/:id',categorycontrollers.deleteCategory)


module.exports = router