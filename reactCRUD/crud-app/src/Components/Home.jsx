import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { addUser, registerUser } from '../Service/api'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

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
    name:'',
    lastname:'',
    email:'',
    password:''
}

function Home() {
    const [user, setUser] = useState(initialvalues);
    const {name,lastname,email,password}=user;
    const classes=useStyle();
    const history=useHistory();
    const onValuChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
        // console.log(user); 
    }

    const RegisterDetails=async()=>{
        await registerUser(user);
        history.push("./all");
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Registration</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValuChange(e) }name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e)=>onValuChange(e)}name='lastname' value={lastname}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValuChange(e)}name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e)=>onValuChange(e)}name='password' value={password}/>
            </FormControl>
            <Button variant="contained" onClick={()=> RegisterDetails()} color="primary">Submit</Button>
            <Button variant="contained" component={Link} to={`/Login`} color="light">Sing Up</Button>
        </FormGroup> 
    )
}

export default Home
