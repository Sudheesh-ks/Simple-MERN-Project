import Product from './models/productModel.js';
import mongoose from 'mongoose';


const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products});
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}


const createProduct = async (req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message: "Please provide all fields" })
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(200).json({ success: true, data: newProduct});
    } catch (error) {
        console.log("Error in create product:",error.message);
        res.status(500).json({ success:false, message: "Server Error" });
    }
}


const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    }catch(error){
        res.status(404).json({ success: false, message: "Product not found" });
    }
}


const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid()){
        return res.status(404).json({ success: false, message: "Product not found"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
}



export default {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
}