import express from 'express';
import { createProd, deleteProd, updateProd, getAllProds,findProd} from '../controller/productController.js';

const router = express.Router();

router.post("/", createProd);
router.delete("/:id", deleteProd);
router.put("/:id", updateProd);
router.get("/", getAllProds); // Assuming you also need a route to get all products
router.get("/id/:id",findProd)
export default router; 