import React from 'react';
import {AppBar,Toolbar,Typography,makeStyles, Tabs} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle=makeStyles({
    header:{
        background:"#111111"
    },
    tabs:{
        color:"#ffffff",
        textDecoration:"none",
        marginRight:20,
        fontSize:20
    }
})

const NavBar=()=> {
    const classes=useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact >Home</NavLink>
                <NavLink className={classes.tabs} to="all" exact >All user</NavLink>
                <NavLink className={classes.tabs} to="add" exact >Add user</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
