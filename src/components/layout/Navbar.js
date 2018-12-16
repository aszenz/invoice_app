import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
const Navbar = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button component={NavLink} to='/' color="inherit">
                    Home
                </Button>
                <Button component={NavLink} to='/create' color="inherit">
                    Create Invoice
                </Button>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar