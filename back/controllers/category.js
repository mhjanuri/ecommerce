const Category = require('../models/category');
const { errorHandler } = require('../helper/dbErrorHandler');

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((error, category) => {
        if (error || !category) {
            return res.status(400).json({
                error: 'Category does not exist'
            });
        }
        req.category = category;
        next();
    });
};

exports.create = (req, res) => {
    const category = new Category(req.body);
    category.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.category);
};