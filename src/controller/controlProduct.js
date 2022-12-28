const modelProduct = require('../models/modelProduct');

const getAllProduct = async (req, res) => {
    const [body] = await modelProduct.getAllProduct();
    try {
        res.status(200).json({
            status:'success',
            data: body,
        });
        
    } catch (err) {
        res.status(500).json({
            status:'server fatal',
            data: err,
        })
    }
}


const createProduct = async (req, res) => {
    const {body} = req;
   try {
    await modelProduct.createProduct(body);
    res.status(200).json({
        status:'success',
        data: body,
    })
   } catch (err) {
    res.status(500).json({
        status:'server fatal',
        data: err,
    })
   }
}

const updateProduct = async (req, res) => {
   const {id} = req.params
   const {body} = req;
   try {
    await modelProduct.updateProduct(body, id);
    res.json({
        status : "update success",
        data : id, ...body,
    })
   } catch (err) {
    res.status(500).json({
        status:'server fatal',
        data: err,
    })
   }
}

const deleteProduct = async (req, res) => {
    const {id} = req.params;
   try {
    await modelProduct.deleteProduct(id);
        res.json({
            status : "delete success",
            data : id,
        })
   } catch (err) {
    res.status(500).json({
        status:'server fatal',
        data: err,
    })
   }
}
module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct
}