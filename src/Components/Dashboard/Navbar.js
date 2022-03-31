import React from "react";

import LogoLight from "../../assets/LogoLight.svg";

import { Box, AppBar, Toolbar, Menu, MenuItem } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

function Navbar(props) {
    const [auth, setAuth] = React.useState(true);
    console.log(auth);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
    console.log(handleChange);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ zIndex: 1301 }} position="fixed">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="toggleSideBar" onClick={(event) => props.onChange()} sx={{ mr: 2 }}>
                        {props.sideBarState ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>

                    <Box noWrap sx={{ flexGrow: 1 }}>
                        <img src={LogoLight} alt="Logo" />
                    </Box>

                    <div>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            style={{ zIndex: 1302 }}
                        >
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
