const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.use(helmet());

const rateLimit = require('express-rate-limit')

const userRoutes = require('./routes/user');
const saucesRoutes = require('./routes/sauces');

const path = require('path');

mongoose.connect('mongodb+srv://LaetiWanKenobi:LaetiWan@cluster0.hqoaziv.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
});

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 100, 
	standardHeaders: true, 
	legacyHeaders: false, 
})

app.use('/api/auth', userRoutes);
app.use('/api/sauces', saucesRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(limiter);

module.exports = app;