const Dashboard = require('../models/User')

module.exports = {
  getDashboard: async (req,res)=>{
    console.log(req.user)
    try{
      const userName = await Dashboard.find({userId:req.user.id})
      // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
      // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
      // console.log(userName)
      res.render('dashboard.ejs')
    }catch(err){
      console.log(err)
    }
  }
}