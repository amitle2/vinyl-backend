import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    body: {
        user: {
        name: String,
        adress: String,
        email: String
    },
    orderedItems: {
        amount: String,
        name: String,
        price: String
    },
    date: String,
}   
});

export default mongoose.model("orders", orderSchema);