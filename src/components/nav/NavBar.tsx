import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';


 const NavBar = () => {
    return (
        <AppBar position="static">
            <ToolBar>
                <Typography variant="h6" color="secondary">
                    The Shoppies
                </Typography>
            </ToolBar>
        </AppBar>
    )
}



export default NavBar