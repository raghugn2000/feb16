const User = require("../models/UserModel");

const bcrypt = require('bcrypt');



// const securePassword = async (password) =>                                                                                                                                                                                                                                                                                                                   {
// try{
// const passhash = await bcrypt.hash(password,10);
// return passhash;
// }
// catch(error){
//     console.log(error.message);
 
// }


// }
const loadRegister = async(req,res)=>{
    try{
         res.render('registration');
    }
    catch(error){
        console.log(error.message);
       
    }
}

const insertUser = async(req,res)=>{
    try{
// const spass= await securePassword(req.body.password);
// const user = new User({
//     name:req.body.name,
//     email:req.body.email,
//     mobile:req.body.mobile,
//     image:req.body.image,
//     // image:req.body.image,
//     password:spass,
//     is_admin:0
// });


// const userData = await user.save();
// if(userData)
// {
    res.render('registration',{message:"register raghu  sucessfully"});
// }
// else
// {
//     res.render('registration',{message:"register failed"});

// }
    }
    catch(error){
        console.log(error.message);
        console.log("raghu")
    }
}

const loginload = async (req,res)=>{
    try{
       
        res.render('login');
    }
    catch(error){
        console.log(error.message);
       
    }
}

const verifylogin = async(req,res)=>{
    try{

        const email =req.body.email;
        const password =req.body.password;

// const userdata = await User.findOne({email:email});
  
// console.log(userdata.email)


   if(email == "raghu1" )
   {
    //    const passcheck = await bcrypt.compare(password, userdata.password)

    //    if(passcheck)
    //    {
//            
           
           res.redirect('home');
       }
       else{
        res.render('login',{message:"raghu is not correct"});
       }
    }
// else
// {
//     res.render('home',{message:"user name not there"})
// }

    // }
    catch(error){
        console.log(error.message);
    
    }
}


const loadhome = async (req,res)=>{
    try{
//         
        res.render('home');
    }
    catch(error){
        console.log(error.message);
       
    }
}

const logout = async (req,res)=>{
    try{
      req.session.destroy();
      res.redirect('/login')
    }
    catch(error){
        console.log(error.message);   

    }
}

module.exports = {
    loadRegister,
    insertUser,
    loginload,
    verifylogin,
    loadhome,
    logout

}
