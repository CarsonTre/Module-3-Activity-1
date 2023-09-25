// Import required modules
const express = require('express'); 
const morgan = require('morgan'); 
const cors = require("cors"); 

// Create an Express application
const app = express();

// Configure CORS (Cross-Origin Resource Sharing) for a specific origin
var corsOptions = {
    origin: "http://localhost:8000" 
};

app.use(cors(corsOptions)); // Apply CORS middleware with the specified options

// 1) MIDDLEWARES
// Morgan is used for debugging in development mode
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// 2) MIDDLEWARE
// Parse JSON requests and inject the body attribute into the request pipeline
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Custom middleware that logs a message to the console
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

// 3) MIDDLEWARE ROUTES LOADING
// Import and use route handlers for specific endpoints
const salesRouter = require('./routes/salesRoutes');
const userRouter = require('./routes/userRoutes');
const customersRouter = require('./routes/customersRoutes');

// Define the base URL for each router
app.use('/api/v1/sales', salesRouter); // Routes for sales data
app.use('/api/v1/users', userRouter); // Routes for user data
app.use('/api/v1/customers', customersRouter); // Routes for customer data

// Export the Express application
module.exports = app;
