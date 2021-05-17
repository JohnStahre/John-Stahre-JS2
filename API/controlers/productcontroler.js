// vet inte varför jag la in denna
// const { Router } = require('express');
const router = require('express').Router();
const productModel = require('../models/products/productModel');

// anger endpoints som matchas med API i postman och kan byggas på i '/' eller att det plockas ur en produkt exempel: '/all/products/id'
// vilken endpoint jag vill gå mot och när det görs hämtar vi filen productModel och kör funktionen .getPRoducts
router.get('/', productModel.getProducts);
router.get('/:id', productModel.getProducts);

router.post('/new', productModel.createProduct);

module.exports = router;