const controlUser = require('../controller/controlProduct')
const express = require('express')
const routes = express.Router()

routes.get('/', controlUser.getAllProduct )
routes.post('/', controlUser.createProduct )
routes.put('/:id', controlUser.updateProduct )
routes.delete('/:id', controlUser.deleteProduct )

module.exports = routes