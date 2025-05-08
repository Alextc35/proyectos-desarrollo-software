require('dotenv').config();
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// 📦 Conexión a base de datos
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// 🛠️ Configuración de vistas
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');

// 🏗️ Middlewares generales
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// 🏗️ Configuración de sesión
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

// 🏗️ Flash messages
app.use(flash());

// 🌍 Variables globales para todas las vistas
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.title = 'ToDoList'; // título por defecto opcional
  res.locals.darkMode = false;   // modo oscuro opcional
  next();
});

// 🚦 Rutas
const taskRoutes = require('./src/routes/taskRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);

// 🚀 Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});