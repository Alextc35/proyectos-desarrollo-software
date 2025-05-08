const Task = require('../models/Task');

exports.listTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.session.user.id }).sort({ createdAt: -1 });
    res.render('tasks', {
      username: req.session.user.username,
      tasks
    });
  } catch (err) {
    console.error(err);
    req.flash('error', 'Error al cargar las tareas');
    res.redirect('/tasks');
  }
};

exports.addTask = async (req, res) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    req.flash('error', 'El título es obligatorio');
    return res.redirect('/tasks');
  }

  try {
    const task = new Task({
      title: title.trim(),
      userId: req.session.user.id
    });
    await task.save();
    req.flash('success', '✅ Tarea añadida correctamente');
    res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Error al agregar la tarea');
    res.redirect('/tasks');
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id, userId: req.session.user.id });
    req.flash('success', '🗑️ Tarea eliminada');
    res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Error al eliminar la tarea');
    res.redirect('/tasks');
  }
};

exports.completeTask = async (req, res) => {
  try {
    await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.session.user.id },
      { completed: true }
    );
    req.flash('success', '✅ Tarea marcada como completada');
    res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Error al marcar la tarea');
    res.redirect('/tasks');
  }
};
