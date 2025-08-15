const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  // Send a response indicating the API is running
  res.send('API est en cours d\'exécution');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});