const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const cloudinary = require('cloudinary')

const userRoute = require('./Routes/userRoute');
const projectRoute = require('./Routes/projectRoute')

//cloudinary configration 
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key :process.env.CLOUDINARY_API_KEY,
    secret_key : process.env.CLOUDINARY_SECRET_KEY
})



app.use(cors());
app.use(express.json());
app.use('/api/v1/',projectRoute);
app.use('/api/v1/', userRoute);

async function dbcon() {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("database connected");
    }

    catch (error) {
        console.log(error);
    }
}

dbcon();

app.listen(process.env.PORT, () => {
    console.log(`server is runnig on port ${process.env.PORT}`);
})