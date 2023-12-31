const express = require('express')

const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
  const products = adminData.products
  res.render('shop', { prods: products, pageTitle: 'My Shop', path: '/' })
})

module.exports = router
