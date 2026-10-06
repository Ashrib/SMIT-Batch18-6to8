import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: [{ type: String, required: true }],
},
{
    timestamps: true
}


)

const Product = mongoose.model('Product', ProductSchema);

export default Product;