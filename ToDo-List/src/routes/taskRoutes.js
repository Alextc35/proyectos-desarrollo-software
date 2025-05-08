const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// ✅ Middleware: proteger todas las rutas de tareas
router.use(isAuthenticated);

// ✅ Rutas CRUD
router.get('/', taskController.listTasks);
router.post('/add', taskController.addTask);
router.post('/delete/:id', taskController.deleteTask);
router.post('/complete/:id', taskController.completeTask);

module.exports = router;