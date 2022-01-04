import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { addUser, loginUser } from '../Service/api'
import { useHistory } from 'react-router'

const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25% '
    },
        '& > *':{
            margin:'20px'
        }
})

const initialvalues={
    email:'',
    password:''
}

function Login() {
    const [user, setUser] = useState(initialvalues);
    const {email,password}=user;
    const classes=useStyle();
    const history=useHistory();
    const onValuChange=(e)=>{
       
        setUser({...user,[e.target.name]:e.target.value})
       
    }

    const addUserDetails=async()=>{
   const res = await loginUser(user);
   if (res) {
       history.push("./all");
   }
   else{
       alert("invalid password");
   }
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Login </Typography>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValuChange(e)}name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e)=>onValuChange(e)}name='password' value={password}/>
            </FormControl>
            <Button variant="contained" onClick={()=> addUserDetails()} color="primary">Submit</Button>
            </FormGroup> 
    )
}

export default Login
