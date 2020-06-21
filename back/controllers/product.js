const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const { errorHandler } = require('../helper/dbErrorHandler');
const Product = require('../models/product');

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (error, fields, files) => {
        if (error) {
            return res.status(400).json({
                error: "image could not be upload"
            });
        }
        let product = new Product(fields);

        if (files.photo) {
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = files.photo.type
        }

        product.save((error, result) => {
            if (error) {
                return res.status(400).json({
                    error: errorHandler(error)
                })
            }
            req.json(result)
        });
    });
};