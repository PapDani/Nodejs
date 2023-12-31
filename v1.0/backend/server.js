const express = require('express');
const app = express();
const port = 3000;

// Serve static files (your frontend)
app.use(express.static('public'));

// Define your API routes and logic here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
