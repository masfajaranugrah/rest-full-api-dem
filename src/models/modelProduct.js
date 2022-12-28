const dbPool = require('../config/database')

const getAllProduct = () => {
    SQLQuery = 'SELECT * FROM YOUR_NAME_TABLE';
    dbPool.execute(SQLQuery)
    return dbPool.execute(SQLQuery)
}

const createProduct = (body) => {
    SQLQuery = `INSERT INTOYOUR_NAME_TABLE (xxxxx , xxxxxx) 
                VALUES ('${body.name_product}', '${body.xxx}')`;
    return dbPool.execute(SQLQuery)
}

const updateProduct = (body, id) => {
    SQLQuery = `UPDATE YOUR_NAME_TABLE SET xxx = '${body.xxx}', xxx = '${body.xxx}' WHERE id = '${id}'`;
        return dbPool.execute(SQLQuery)
    
}

const deleteProduct = (id) => {
    SQLQuery = `DELETE FROM YOUR_NAME_TABLE WHERE id = '${id}'`;
    return dbPool.execute(SQLQuery)

}

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct

}