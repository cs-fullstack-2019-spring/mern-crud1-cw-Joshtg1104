var express = require('express');
var router = express.Router();
var Product = require('../models/ProductSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productlist', function(req, res, next) {
  Product.find({ }, (error, results) => {
    if(error)
      res.send(error);
    else
      res.send(results);
  });
});

router.post('/addproduct', (req, res) => {
  Product.create(req.body, (error, results) => {
    if(error)
      res.send(error);
    else
      res.send(results);
  });
});

router.delete('/deleteproduct', (req, res) => {
  Product.deleteOne({productID: req.body.productID}, (error, results) => {
    if(error)
      res.send(error);
    else
      res.send(results)
  })
});

module.exports = router;
