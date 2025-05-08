const bcrypt = require('bcryptjs');
const User = require('../models/User');

// ✅ Mostrar formulario de login
exports.showLogin = (req, res) => {
  if (req.session.user) {
    return res.redirect('/tasks');
  }
  res.render('login', { title: 'Iniciar sesión' });
};

// ✅ Procesar login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    req.flash('error', 'Todos los campos son obligatorios');
    return res.redirect('/auth/login');
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      req.flash('error', 'Usuario no encontrado');
      return res.redirect('/auth/login');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      req.flash('error', 'Contraseña incorrecta');
      return res.redirect('/auth/login');
    }

    // ✅ Guardar usuario en sesión
    req.session.user = { id: user._id, username: user.username };

    req.flash('success', `Bienvenido, ${user.username}`);
    res.redirect('/tasks');
  } catch (error) {
    console.error(error);
    req.flash('error', 'Error al iniciar sesión');
    res.redirect('/auth/login');
  }
};

// ✅ Mostrar formulario de registro
exports.showRegister = (req, res) => {
  if (req.session.user) {
    return res.redirect('/tasks');
  }
  res.render('register', { title: 'Registro' });
};

// ✅ Procesar registro
exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    req.flash('error', 'Todos los campos son obligatorios');
    return res.redirect('/auth/register');
  }

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      req.flash('error', 'El usuario ya existe');
      return res.redirect('/auth/register');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username: username.trim(), password: hashedPassword });
    await newUser.save();

    req.flash('success', 'Usuario registrado correctamente. Ahora puedes iniciar sesión.');
    res.redirect('/auth/login');
  } catch (error) {
    console.error(error);
    req.flash('error', 'Error al registrar usuario');
    res.redirect('/auth/register');
  }
};

// ✅ Cerrar sesión
exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error(err);
      req.flash('error', 'Error al cerrar sesión');
      return res.redirect('/tasks');
    }
    res.redirect('/auth/login');
  });
};
