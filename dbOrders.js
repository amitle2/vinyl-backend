import mongoose from 'mongoose'


const orderSchema = mongoose.Schema({
    user: {
        name: String,
        adress: String,
        email: String
        },
    orderedItems: [{
        name: String,
        amount: String,
        price: String
        }],
    date: String
});

export default mongoose.model("orders", orderSchema);