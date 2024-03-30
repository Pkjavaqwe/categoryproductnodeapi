const models = require('../models')

async function association(req,res){
    const category = await models.category.findByPk( 1,{
        include:[models.Product]
    })

    res.status(200).json({
        data: category
    })
}
module.exports ={
    association
}