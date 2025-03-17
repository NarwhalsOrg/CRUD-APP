import Todo from '../models/todo.model.js';

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = new Todo({
      title,
      description,
      user: req.user.userId
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.userId });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user.userId });
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user.userId });
    
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    if (title) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;

    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.userId });
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};