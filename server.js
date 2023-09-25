// Import the dotenv library to load environment variables from a file
const dotenv = require('dotenv');

// Configure dotenv to use a specific file for environment variables
dotenv.config({ path: './config.env' }); 

// Import the main application module
const app = require('./app');

// Define the port on which the application will listen, using the PORT environment variable or defaulting to 3000
const port = process.env.PORT || 3000;

// Start the application server and listen on the specified port
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
