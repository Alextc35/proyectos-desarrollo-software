exports.isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    // ✅ Usuario autenticado → pasa al siguiente middleware/controlador
    return next();
  }
  // ❌ Usuario no autenticado → redirige al login
  res.redirect('/auth/login');
};