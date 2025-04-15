import express from 'express';
import { connectDB } from './config/db.js';
import Productrouter from './routes/productRoute.js';

const app = express();

const PORT = process.env.PORT;

app.use(express.json()); // allows us to accept JSON data in the body

app.use('/api/products', Productrouter)

connectDB();

app.listen(PORT, () => {
    console.log(`Server started at localhost:${PORT}`);
})


