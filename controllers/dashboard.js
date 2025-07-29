const Dashboard = require('../models/User')
// const userObj = require('../config/passport')

module.exports = {
  getDashboard: async (req,res)=>{
    console.log(req.user)
    try{
      const userName = await Dashboard.find({userId:req.user.id})
      // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
      // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
      // console.log(userName)
      console.log('funbags' + user.userName)
      res.render('dashboard.ejs', {user: user})
    }catch(err){
      console.log(err)
    }
  }
}