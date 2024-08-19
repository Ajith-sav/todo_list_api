const mongooes = require("mongoose")
const bcrypt = require("bcrypt")
const saltRound = 10

const userSchema = new mongooes.Schema({
    username:{type:String, required: true, unique:true},
    email:{type:String, required: true, unique:true},
    password:{type:String, required: true},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now}
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.genSalt(saltRound).then(salt=>{
        return bcrypt.hash(this.password, salt)
    })
    next();
})

userSchema.methods.matchPassword = function(entredPassword){
    return bcrypt.compare(entredPassword, this.password)
}

const User = mongooes.model("User", userSchema)
module.exports = User;