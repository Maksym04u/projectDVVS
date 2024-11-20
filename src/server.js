require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const { sequelize } = require('./models');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// Middleware
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));
// Use post routes for CRUD operations
app.use('/', postRoutes);

// Sync database and start server
sequelize.sync()
   .then(() => {
       console.log("Database synced!");
       app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
   })
   .catch((err) => {
       console.error("Error syncing database:", err);
   });
   
module.exports = app;
