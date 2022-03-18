import Product from '../models/products'
// const products = [
//     {id:1,name:"Product 1"},
//     {id:2,name:"Product 2"}
// ]

export const listProduct = async (request,response)=>{
    try{
        const product = await Product.find().exec()
        response.json(product)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}
export const listProductDetail = (request,response)=>{
    const product = product.find(item => item.id === +request.params.id)
    response.json(product)
}
export const createProduct = async (request,response)=>{
    try{
        const product = await Product(request.body).save()
        response.json(product)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong the tao moi"})
    }
    // products.push(request.body)
    // response.json(products)
}


export const deleteProduct = async (request,response)=>{
    try{
        const product = await Product.findOneAndDelete ({id: request.params.id}).exec()
        response.json(product);
    } catch(error){
        response.status(400).json({message:"Không xóa được"})
    }
    // const product = products.filter(item => item.id != request.params.id)
    // response.json(product);
}
export const updateProduct = async (request,response)=>{
    try{
        const product = await Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(product);
    }catch(error){
        response.status(400).json({message:"Lỗi không gửi đc"})
    }
    // response.json(Product.map(item => item.id === +request.params.id? request.body:item))
}