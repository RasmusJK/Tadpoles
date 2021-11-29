import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import {Button, Drawer} from "@mui/material";
import  {makeStyles} from "@mui/styles";
import {useHistory} from 'react-router-dom';

import {auth} from '../Utils/firebase';
import {signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const useStyles = makeStyles(() => ({

    drawer: {
        height:"100%",
        width: "25vh",
        display:"flex",
        flexDirection:"column"
    }
}));


const TopBar=()=> {
    const history = useHistory();
    const  [open, setOpen]= useState(false);
    const [user, loading, error] = useAuthState(auth);

    const handleDrawer = () =>{
        setOpen(true);
    }
    const classes = useStyles();
    const signIn =() =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res)=>{
                console.log(res);
                localStorage.setItem("user", res.user.displayName)
            })
            .catch((err)=>{
                console.log(err);
            })

    };
    const logOut = () =>{
        signOut(auth).then(() => {
            console.log("signed out");
            localStorage.clear()
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={handleDrawer}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center" onClick={()=>{history.push('/')}}>
                        Beach App
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => {
                    setOpen(false);
                    }}>
                <div className={classes.drawer}>
                    {user ? <Typography align="center">{localStorage.getItem("user")}</Typography>: <Typography> </Typography>}
                    <Button onClick={()=>{history.push('/escaperooms')}} >Escape room</Button>
                    {!user ?<Button onClick={signIn} >Login</Button>:<Button onClick={logOut} >Logout</Button> }


                </div>
            </Drawer>
        </div>

    );
}
export default TopBar;
