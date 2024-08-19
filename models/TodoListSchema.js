const mongooes = require("mongoose")
const User = require("./UsersSchema")

const TodoList = new mongooes.Schema({
    userId:{type:mongooes.Schema.Types.ObjectId, ref:'User', required:true},
    title:{type:String, required:true},
    detail:{type:String, required:true},
    completed:{type:Boolean, default:false},
    inProcess:{type:Boolean, default:false},
    isDeleted:{type:Boolean, default:false},
},{timestamps:true});

const Todo = mongooes.model("Todo", TodoList)
module.exports = Todo;