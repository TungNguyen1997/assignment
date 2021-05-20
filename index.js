import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './router/post.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv' ;

dotenv.config();
const app = express();
const PORT = process.env.port || 5000;
const URI = process.env.DB_URL;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("OK");
    app.listen(PORT, () => {
        console.log("App is running");
    })

}).catch(err => { })


app.use('/post', posts)
