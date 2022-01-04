const User=require("../schema/student");
const Register=require("../schema/register");
const cookieparser=require('cookie-parser');

const getUsers = async (request, response) => {
     try{
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

const addUser = async (request, response) => {
    const user = request.body;
    

    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}



const registerUser = async (request, response) => {
    const user = request.body;
    

    const newUser = new Register(user);
    try{
        console.log(newUser);
        const token=await newUser.generatedAuthToken();
        console.log(token);
        response.cookie("jwt",token,{
            expires:new Date(Date.now() +40000),
            httpOnly:true
        });
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
const loginUser = async (req, res) => {
    const email=req.body.email;
    const pass=req.body.password;
    try {  
    
    const useremail=await Register.findOne({email:email});
    // const isMatch=bcrypt.compare(pass,useremail.password);
    const token=await useremail.generatedAuthToken();
    res.cookie("jwt",token,{
        expires:new Date(Date.now() +400000),
        httpOnly:true
    });

    console.log(token);
        
       if(useremail.password==pass){
           res.send(true);
        }
       else{
           res.send("this is invailid pass");
       }           
       } catch (error) {
        response.status(409).json({ message: error.message});   
       }
   } 



const getUserById = async (request, response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

const editUser = async (request, response) => {
    let user = await User.findById(request.params.id);
    user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

module.exports={deleteUser,getUserById,getUsers,editUser,addUser,registerUser,loginUser};