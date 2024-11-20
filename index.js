const app = require('./server'); // Import the app from server.js

// If you need to run the server here (in index.js)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
