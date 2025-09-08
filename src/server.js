const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/urlRoutes');
const logger = require('./middleware/logger');

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/shorturls', urlRoutes);

// Connect DB and start server
mongoose.connect('mongodb://127.0.0.1:27017/urlshortener')
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
  })
  .catch(err => console.error(err));
