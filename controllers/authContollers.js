const User = require("../models/UsersSchema")
const generateToken = require("../utils/tokenUtils")

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = await User.create({ username, email, password });
      const token = generateToken(user._id);
      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


exports.signin = async (req, res) =>{
    const {username, email, password} = req.body;
    try {
        const user = await User.findOne({$or:[{email:email}, {username:username}]})
        const isMatch = await user.matchPassword(password);
        if(!user || !isMatch){
            return res.status(401).json({message: "Invalid Credentials"})
        }
        const token = generateToken(user._id)
        res.status(200).json({ token})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}