
import Category from '../models/category';
import Product from '../models/products';


export const creatCategory = async (request,response) => {
    try {
        const category = await Category(request.body).save()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Không thể tạo mới"})
    }
}

export const listCategory = async (request,response)=>{
    try {
        const category = await Category.find().exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Không thể hiển thị"})
    }
}

export const listCategoryDetail = async (request,response)=>{
    try {
        const category = await Category.findOne({_id:request.params.id}).exec()
        const product = await Product.find({category}).exec()
        // const product = await Product.find({category}).populate("category").exec()
        // const product = await Product.find({category}).select("-category").exec()
        response.json({category,product})
    } catch (error) {
        response.status(400).json({message:"Không thể hiển thị"})
    }
}

export const deleteCategory = async (request,response)=>{
    try {
        const category = await Category.findOneAndDelete({id:request.params.id}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Không thể xóa"})
    }
}

export const updateCategory = async (request,response)=>{
    try {
        const category = await Category.findOneAndUpdate({id:request.params.id}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Không thể thêm"})
    }
}
