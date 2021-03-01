import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import App from "../App";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
    return (
    <AppBar position="static" color="secondary">
        <Toolbar>
            <IconButton color="inherit">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">CricSpirit</Typography>
        </Toolbar>
    </AppBar>
    )
};

export default Navbar;