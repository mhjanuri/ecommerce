const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const { errorHandler } = require('../helper/dbErrorHandler');
const Product = require('../models/product');

exports.productById = (req, res, next, id) => {
    Product.findById(id).exec((error, product) => {
        if (error || !product) {
            return res.status(400).json({
                error: "Product not found"
            });
        }
        req.product = product;
        next();
    });
};

exports.read = (req, res) => {
    req.product.photo = undefined;
    return res.json(req.product);
};

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (error, fields, files) => {
        if (error) {
            return res.status(400).json({
                error: "Image could not be upload"
            });
        }

        // check for all required fields
        const {
            name,
            description,
            price,
            category,
            quantity,
            shipping
        } = fields;

        if (
            !name ||
            !description ||
            !price ||
            !category ||
            !quantity ||
            !shipping
        ) {
            return res.status(400).json({
                error: "All fields are required"
            });
        }

        let product = new Product(fields);

        // 1kb = 1000
        // 1mb = 1000000
        if (files.photo) {
            // img validation bigger than 1 mb
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Image should be less than 1mb in size"
                });
            }

            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type
        }

        product.save((error, result) => {
            if (error) {
                return res.status(400).json({
                    error: errorHandler(error)
                })
            }
            res.json(result)
        });
    });
};

exports.remove = (req, res) => {
    let product = req.product
    product.remove((error, deletedProduct) => {
        if (error) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }
        res.json({
            "message": `Product ${deletedProduct.name} deleted successfully`
        })
    })
}