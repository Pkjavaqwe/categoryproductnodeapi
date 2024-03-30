const { error } = require('console')
const models = require('../models')

const getAllProducts = (req,res)=>{

   /* let page=parseInt(req.query.page)   
    let limit =3;
     models.Product.findAndCountAll({
        limit:3,
        offset:limit*(page-1)*/
    
        let page=parseInt(req.query.page)   
        let limit =3;
            models.Product.findAndCountAll({
            limit:limit,
            offset:limit*(page-1)}).then((result=>{

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

const getProductByID = (req,res)=>{
 
    const id = req.params.id
    models.Product.findByPk(id).then((result)=>{
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

const createProduct = (req,res)=>{

        const requestbody= {
            productid: req.body.productid,
            productname: req.body.productname,
            categoryname: req.body.categoryname,
            categoryid: req.body.categoryid
        }
         models.Product.create(requestbody).then((result) => {
            res.status(200).json({
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

const updateProduct = (req,res)=>{

    const id = req.params.id;
    const updatebody= {
        productid: req.body.categoryid,
        productname: req.body.productname,
        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid
    }

    
    models.Product.update(updatebody, {where: {id:id}}).then(result => {
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

const deleteProduct =(req,res)=>{

    const id = req.params.id
    models.Product.destroy({where:{id:id}}).then((result)=>{
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
    getAllProducts,
    createProduct,
    getProductByID,
    updateProduct,
    deleteProduct
}