import express from 'express';
import mongoose from 'mongoose';
import Products from './dbProducts.js';
import Orders from './dbOrders.js';
import Cors from 'cors';

// App Config
const app = express ();
const port = process.env.PORT || 3001;
const connection_url = "mongodb+srv://admin:aa123456@cluster0.qyrekvg.mongodb.net/VinylDB?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url)


// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello World"));


app.get("/api/products", (req, res) => {
    Products.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.post("/api/products", (req, res) => {
    const dbProducts = req.body;

    Products.create(dbProducts, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
});

app.get("/api/orders", (req, res) => {
    Orders.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.post("/api/orders", (req, res) => {
    const dbOrders = req.body;
    Orders.create(dbOrders, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));