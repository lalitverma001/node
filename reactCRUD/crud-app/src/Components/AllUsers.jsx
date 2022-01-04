import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../Service/api';
import {Link} from 'react-router-dom';
const useStyle=makeStyles({
    table:{
        width:'90%',
        margin:'40px 0 0 40px'
    },
    thead:{
        '& > *':{
            background:'#000000',
            color:'#ffffff',
            fontSize:'20px'
        }
    },
    row:{
        '& > *':{
            
            fontSize:'20px'
        }
    }
})


const AllUsers=()=> {

    const [users, setUsers] = useState([]);
    const classes=useStyle();

    useEffect(()=>{
        getAllusers();
    },[])

    const getAllusers=async()=>{
      const res= await getUsers();
      console.log(res.data);
      setUsers(res.data);
    }

    const deletUserData = async(id)=>{
        await deleteUser(id);
        getAllusers();
    }


    return (
        <div>
           <Table className={classes.table}>
               <TableHead>
                   <TableRow className={classes.thead}>
                       <TableCell>Id</TableCell>
                       <TableCell>name</TableCell>
                       <TableCell>username</TableCell>
                       <TableCell>email</TableCell>
                       <TableCell>phone</TableCell>
                       <TableCell></TableCell>
                   </TableRow>
               </TableHead>
               <TableBody>
                       {
                           users.map(user => (
                                <TableRow className={classes.row}>
                                    <TableCell>{user._id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`} >Edit</Button>
                                        <Button variant="contained" color="secondary" onClick={()=>deletUserData(user._id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>

                           ))
                       }                  
               </TableBody>
           </Table>
        </div>
    )
}

export default AllUsers
