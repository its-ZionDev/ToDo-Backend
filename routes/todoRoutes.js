import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const todoFilePath = path.join(path.resolve(), 'data', 'todos.json');

//Helper functions
const getTodos = () => {
    const data = fs.readFileSync(todoFilePath, 'utf8');
    return JSON.parse(data);
};

const saveTodos = (todos) => {
    fs.writeFileSync(todoFilePath, JSON.stringify(todos, null, 2));
}

//Fetch Todo Items
router.get('/', (req,res)=> {
    const todos = getTodos();
    const {search, date} = req.query;

    let filteredTodos = todos;

    if(search){
        filteredTodos = filteredTodos.filter(todo => todo.title.includes(search) || todo.description.includes(search));
    }

    if(date){
        filteredTodos = filteredTodos.filter(todo => todo.lastUpdate === date);
    }

    res.json(filteredTodos);
});

//Add Todo Item
router.post('/', (req,res)=> {
    const todos = getTodos();
    const newTodo = { ...req.body, id: Date.now(), completed: false, lastUpdate: new Date().toISOString()};
    todos.push(newTodo);
    saveTodos(todos);
    res.status(201).json(newTodo);
});

//Update Todo Item
router.put('/:id', (req,res)=>{
    const todos = getTodos();
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));

    if (todoIndex === -1){
        return res.status(404).json({message: "Todo item not found."});
    }

    const updatedTodo = { ...todos[todoIndex], ...req.body, lastUpdate: new Date().toISOString()};
    todos[todoIndex] = updatedTodo;
    saveTodos(todos);

    res.json(updatedTodo);
});

//Delete Todo Item 
router.delete('/:id', (req, res) => {
    let todos = getTodos();
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));

    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Todo item not found' });
    }

    todos = todos.filter((todo) => todo.id !== parseInt(req.params.id));

    saveTodos(todos);
    return res.json({message: 'Todo item successfully deleted'});
});

//Mark as Done Todo Item
router.patch('/:id/done', (req,res) => {
    const todos = getTodos();
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));

    if(todoIndex === -1){
        return res.status(404).json({message: "Todo item not found."});
    }

    todos[todoIndex].completed = true;
    todos[todoIndex].lastUpdate = new Date().toISOString();
    saveTodos(todos);

    res.json(todos[todoIndex]);
});

export default router;
