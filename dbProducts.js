import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    image: String
});

export default mongoose.model("products", productSchema);