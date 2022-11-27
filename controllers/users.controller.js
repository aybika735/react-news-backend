const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports.usersController={
   registerUser: async function(req, res) {
   const {login , password} = req.body;
   const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
  const user = await User.create({
   login:login, 
   password:hash
    });
    res.json(user);
    
  },
  
  login: async(req, res) =>{
    const {login, password} = req.body;
    const candidate = await User.findOne({login});
    if(!candidate){
      return res.status(401).json('Неверный логин')
    }
    const valid = await bcrypt.compare(password, candidate.password);
    if(!valid){
      return res.status(401).json("неверный пароль");
    }
    // return res.json('вы авторизированы');
  const payload = {
  id:candidate._id,
  login: candidate.login,
}
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: '24h'
    });
    res.json({
      token:token
    });
  },

  deleteUserById: async function(req,res){
    const user = await User.findByIdAndRemove(req.params.id)
    res.json(`пользователь удален`);
},
 
getUsers: async(req, res)=>{
    const users = await User.find()
    res.json(users);
}
}