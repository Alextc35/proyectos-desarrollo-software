const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

function redirectIfAuthenticated(req, res, next) {
    if (req.session.user) {
        return res.redirect('/tasks');
    }
    next();
}
  
// ✅ Rutas de autenticación
router.get('/login', redirectIfAuthenticated, authController.showLogin);        // Mostrar formulario de login
router.post('/login', authController.login);                                    // Procesar login
router.get('/register', redirectIfAuthenticated, authController.showRegister);  // Mostrar formulario de registro
router.post('/register', authController.register);                              // Procesar registro
router.get('/logout', authController.logout);                                   // Cerrar sesión

module.exports = router;