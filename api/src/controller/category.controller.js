// category.controller.js
import Category from '../models/category.model.js';

// Create category
export const createCategory = async (req, res) => {
    const { name, parentCategory, level } = req.body;

    if (!name || level === undefined) {
        return res.status(400).send({ message: "Name and level are required", status: false });
    }

    try {
        const category = new Category({ name, parentCategory, level });
        const savedCategory = await category.save();
        return res.status(201).send({ message: "Category created successfully", status: true, data: savedCategory });
    } catch (error) {
        console.error('Error creating category:', error);
        return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
    }
};

// View single category
export const viewCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).send({ message: "Category not found", status: false });
        }

        return res.status(200).send({ message: "Category retrieved successfully", status: true, data: category });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal server error", status: false });
    }
};

// Update category
export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, parentCategory, level } = req.body;

    if (!name || level === undefined) {
        return res.status(400).send({ message: "Name and level are required", status: false });
    }

    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { name, parentCategory, level },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).send({ message: "Category not found", status: false });
        }

        return res.status(200).send({ message: "Category updated successfully", status: true, data: updatedCategory });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
    }
};

// Delete category
export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).send({ message: "Category not found", status: false });
        }

        return res.status(200).send({ message: "Category deleted successfully", status: true, data: deletedCategory });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
    }
};

// View all categories
export const viewCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate('parentCategory');
        return res.status(200).send({ message: "Categories retrieved successfully", status: true, data: categories });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
    }
};
