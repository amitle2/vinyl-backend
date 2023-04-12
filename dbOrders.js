import mongoose from 'mongoose'


const orderSchema = mongoose.Schema({
    user: {
        name: String,
        address: String,
        email: String
        },
    orderedItems: [{
        name: String,
        amount: String,
        price: String
        }],
    date: String,
    price: String
});

export default mongoose.model("orders", orderSchema);