const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOptions));

// 1) MIDDLEWARES Morgan is used for debugging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
 }
// 2)MIDDLEWARE json is used for injecting the body attribute in the pipeline
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});
// 3) MIDDLE ROUTES loading
const salesRouter = require('./routes/salesRoutes');
const userRouter = require('./routes/userRoutes');
const customersRouter = require('./routes/customersRoutes');
app.use('/api/v1/sales', salesRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/customers', customersRouter);

module.exports = app;