import express from "express";
import { creatCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from "../controllers/category";
const router = express.Router()

router.post('/category',creatCategory)
router.get('/category',listCategory)
router.get('/category/:id',listCategoryDetail)
router.delete('/category/:id',deleteCategory)
router.put('/category/:id',updateCategory)

export default router;