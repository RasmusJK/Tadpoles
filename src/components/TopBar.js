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

const useStyles = makeStyles(() => ({

    drawer: {
        height:"100%",
        width: "25vh",
        display:"flex",
        flexDirection:"column"
    }
}));

const TopBar=()=> {
    const  [open, setOpen]= useState(false);
    const handleDrawer = () =>{
        setOpen(true);
    }
    const classes = useStyles();
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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


                    <Button >Login</Button>



                </div>
            </Drawer>
        </div>

    );
}
export default TopBar;
