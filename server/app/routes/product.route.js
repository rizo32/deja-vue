module.exports = app => {
  const product = require('../controllers/product.controller.js')
  const router = require('express').Router()

  router.get('/', product.myFindAll)

  router.post('/', product.myCreate)

  router.get('/:id', product.myFindOne)

  router.delete('/:id', product.myDestroy)

  router.put('/product-edit/:id', product.myUpdate)

  app.use('/api/products', router)
}