const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const productRoute = require('./routes/productRoute');
// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
const { dbConnection } = require('./db/dbConnection');
dbConnection();

// Routes
app.use('/product', productRoute);

app.listen(process.env.PORT || 4100);
