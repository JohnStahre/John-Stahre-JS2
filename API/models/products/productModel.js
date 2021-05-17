// skapa alla funktioner som körs från bland annat från product controler : router.get('/', productModel.getProducts);
//tre olika sätt att göra det på, står med i koden mest för min inlärning

const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
    Product.find({}, (err, data) => {
        if(err) {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message || 'Something went wrong when trying to fetch the products'     
            })
        }

        res.status(200).json(data);
    })
    exports.getProducts = (req, res) => {

        Product.exists({_id: req.params.hej }, (err, res) => {
            if(err) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'You made a bad request'
                })
            }
            if(result) {
                Product.findById(req.params.hej)
                .then(product => res.status(200).json(product))
                .catch(err => res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: err.message
                }))
            } else{
                res.status(404).json({
                    statusCode:404,
                    status: false,
                    message:err.message || 'hoppsan, product dont exist'
                })
            }
        })
    }
}

// ett annat sätt att göra det på

// exports.getProducts = async (req, res) => {
//     const data =await Product.find()
    
//     res.status(200).json(data);
// } catch(err) {

//     res.status(500).json({
//         status: false,
//         message: err.message || 'Something went wrong when fetching the products'

//     })
//     {
            
// }

// tredje sättet att göra det på
// exports.getProducts = (req, res) => {
//     Product.find()
//     .then(data => res.status(200).json(data))
//     .catch(err => res.status(500).json)({
//         statusCode:500,
//         status:false,
//         message: err.message || 'Something went wrong when fetching the products'

//     })
