const Todo = require("../models/TodoListSchema")

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({userId: req.user._id})
        res.json(todos)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


exports.createTodo = async (req, res) => {
    const {title, detail} = req.body;
    try {
        const todo = await Todo.create({title, detail, userId: req.user._id})
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


exports.updateTodo = async(req, res) =>{
    const {id} = req.params;
    const {title, detail, completed, inProcess, isDeleted} = req.body
    try {
        const todo = await Todo.findByIdAndUpdate(id,{$set:{title, detail, completed, inProcess, isDeleted}}, {new:true})
        if(!todo) return res.status(404).json({message: "Something went wrong"});
        res.status(200).json({todo})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteTodo = async (req, res) => {
    const {id} = req.params;        
    try {
        const todo = await Todo.findByIdAndDelete(id)
        if(!todo) return res.status(404).json({message:"Something went wrong on while deleteing."})
        res.status(200).json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}