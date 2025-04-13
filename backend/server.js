import express from 'express';
import { connectDB } from './config/db.js';

const app = express();


app.get('/', (req, res) => {
    res.send('SERVER IS READY')
})

connectDB();

app.listen(5000, () => {
    console.log("Server started at localhost:5000");
})


