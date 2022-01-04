import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { addUser, editUser, getUsers } from '../Service/api'
import { useHistory, useParams } from 'react-router'

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
    username:'',
    email:'',
    phone:''
}

function Edituser() {
    const [user, setUser] = useState(initialvalues);
    const {name,username,email,phone}=user;
    const {id} = useParams();
    const classes=useStyle();
    const history=useHistory();

    useEffect(() => {
        loaduserData();
    },[]);
    const loaduserData=async()=>{
       const res=await getUsers(id);
       setUser(res.data)
    }

    const onValuChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
        // console.log(user); 
    }

    const editUserDetails=async()=>{
        await editUser(id,user);
        history.push("../all");
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValuChange(e) }name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onValuChange(e)}name='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValuChange(e)}name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValuChange(e)}name='phone' value={phone}/>
            </FormControl>
            <Button variant="contained" onClick={()=> editUserDetails()} color="primary">Edit User</Button>
        </FormGroup> 
    )
}

export default Edituser
