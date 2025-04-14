import express from 'express';
import { connectDB } from './config/db.js';
import Productrouter from './routes/productRoute.js';

const app = express();


app.use(express.json()); // allows us to accept JSON data in the body

app.use('/api/products', Productrouter)

connectDB();

app.listen(5000, () => {
    console.log("Server started at localhost:5000");
})


