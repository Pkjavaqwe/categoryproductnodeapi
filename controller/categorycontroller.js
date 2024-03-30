const { error } = require('console')
const models = require('../models')

const getAllCategories = (req,res)=>{
    models.category.findAll().then((result=>{
        res.status(200).json({
            message:"all data is fetched",
            show:result
        })
     })).catch(error=>{
        res.status(401).json({
            message: "Something went wrong!",
            error: error
        })
     })
    
}

const getCategoryByID = (req,res)=>{
 
    const id = req.params.id
    models.category.findByPk(id).then((result)=>{
        res.status(200).json({
            message: `data with id ${id} is fetch successfully`,
            post: result
        })       
    }).catch(error=>{
        res.status().json({
            message:"something went wrong",
            error:error
        })
    })
}

const createCategory = (req,res)=>{

        const requestbody= {
            categoryname: req.body.categoryname,
            categoryid : req.body.categoryid
            
        }
          models.category.create(requestbody).then((result) => {
            res.status(201).json({
                message: "Post created successfully!",
                post: result
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something went wrong!",
                error: error
            })
        })
        

}

const updateCategory = (req,res)=>{

    const id = req.params.id;
    const updatebody= {        
        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid
    }

    
    models.category.update(updatebody, {where: {id:id}}).then(result => {
        res.status(200).json({
            message:"product updated successfully",
            product: updatebody
        })
    }).catch(error=>{
        res.status(400).json({
            message:"product updation failed",
            error:error
        })
        
    })

}

const deleteCategory =(req,res)=>{

    const id = req.params.id
    models.category.destroy({where:{id:id}}).then((result)=>{
        res.status(200).json({
            message:" product deleted successfully",
        })
    }).catch(error=>{
        res.status(400).json({
            message:"product not deleted try again",
            error
        })
    })
}

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryByID,
    updateCategory,
    deleteCategory
}