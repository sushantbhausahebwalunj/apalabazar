import express from 'express';
import { 
    createProd,
    deleteProd,
    updateProd,
    getAllProds,
    findProd 

} from '../controller/productController.js';

const productRouter = express.Router();

productRouter.post("/", createProd);
productRouter.delete("/:id", deleteProd);
productRouter.put("/:id", updateProd);
productRouter.get("/", getAllProds); // Assuming you also need a route to get all products
productRouter.get("/id/:id",findProd)

export default productRouter; 