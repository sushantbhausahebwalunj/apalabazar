import Category from "../models/category.model.js";
import Product from "../models/product.model.js";


async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentId: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentId: topLevel._id,
      level: 2,
    });
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentId: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentId: secondLevel._id,
      level: 3,
    });
  }

  const product = new Product({
    title: reqData.title,
    description: reqData.description,
    price: reqData.price,
    discountedPrice: reqData.discountedPrice,
    discountPersent: reqData.discountPersent,
    quantity: reqData.quantity,
    brand: reqData.brand,
    ratings: reqData.ratings,
    reviews: reqData.reviews,
    numRatings: reqData.numRatings,
    category: thirdLevel._id,
    createdAt: reqData.createdAt,
    updatedAt: reqData.updatedAt,
  });

  return await product.save();
}

async function deleteProduct(prodId) {
  const product = await findProductById(prodId);

  await Product.findByIdAndDelete(prodId);
  return "Product Deleted Successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(id) {
  const product = await Product.findById(id).populate("category").exec();

  if (!product) {
    throw new Error("Product not found with id " + id);
  }

  return product;
}

async function getAllProducts(reqQuery) {
  let { category, quantity, price, discount, pageSize } = reqQuery;

  pageSize = pageSize || 10;
  let query = Product.find().populate("category");

  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      query = query.where("category").equals(existCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }

  // Add pagination logic here (e.g., page, limit)

  const products = await query.exec();
  const totalProducts = await Product.countDocuments(query).exec();
  const totalPages = Math.ceil(totalProducts / pageSize);

  return { content: products, currentPage: 1, totalPages };
}

export { createProduct, deleteProduct, updateProduct, findProductById, getAllProducts };
